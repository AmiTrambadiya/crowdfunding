from frappe.auth import LoginManager
from sadbhavna_donatekart.api.autologin import login_via_oauth2, login_via_oauth2_id_token
import frappe
from frappe.utils import today
import math
import random

import base64
import json
from typing import TYPE_CHECKING, Callable

import jwt
import frappe.utils
from frappe import _
from frappe.utils.password import get_decrypted_password
# from frappe.utils.oauth import login_via_oauth2, login_via_oauth2_id_token


if TYPE_CHECKING:
    from frappe.core.doctype.user.user import User


class SignupDisabledError(frappe.PermissionError):
    ...


@frappe.whitelist(allow_guest=True)
def get_recent_donation(name):
    return frappe.db.get_list("Donation", filters={"campaign": name}, fields=["name", "donor_name", "amount", "creation", "date", "anonymous", "donor_image"], order_by='date desc')
    # return frappe.db.sql(f"select donor.image, donor.donor_name, donation.name, donation.amount, donation.creation, donation.anonymous from `tabDonation` as donation inner join `tabDonor` as donor on donation.donor = donor.name where donation.name='{name}'")

@frappe.whitelist(allow_guest=True)
def get_generous_donation(name):
    return frappe.db.get_list("Donation", filters={"campaign": name}, fields=["name", "donor_name", "amount", "creation", "date", "anonymous", "donor_image"], order_by='amount desc')
    # return frappe.db.sql(f"select donor.image, donor.donor_name, donation.name, donation.amount, donation.creation, donation.anonymous from `tabDonation` as donation inner join `tabDonor` as donor on donation.donor = donor.name where donation.name='{name}'")


@frappe.whitelist(allow_guest=True)
def register(first_name, last_name, email, password, phone_number, pan_number):
    # doc = frappe.new_doc('User')
    # doc.email = email,
    # doc.first_name = first_name,
    # doc.last_name = last_name,
    # doc.new_password = password,
    # doc.phone = phone_number
    # doc.insert(ignore_permissions=True)
 
    user = frappe.get_doc({"doctype": "User", "email": f"{email}", "first_name": f"{first_name}",
                          "last_name": f"{last_name}", "phone": f"{phone_number}", "new_password": f"{password}", "role_profile_name": "Donor"})
    user.insert(ignore_permissions=True)
    frappe.db.commit()
    donor = frappe.get_doc({"doctype": "Donor", "email": f"{email}", "donor_name": f"{first_name} {last_name}",
                           "mobile": f"{phone_number}", "donor_type": "Defult", "pan_number": f"{pan_number}"})
    donor.insert(ignore_permissions=True)
    frappe.db.commit()

# @frappe.whitelist(allow_guest=True)
# def set_details_in_doctype_after_donation(user_id, campaign, item, price):
#     donor = frappe.db.get_value("Donor", filters={"email": f"{user_id}"}, fieldname=["name"], pluck="name")
#     donation = frappe.get_doc({"doctype": "Donation", "donor": donor, "campaign": f"{campaign}", "date": today(), "amount": price, "donation_item": [{"item": item, "qty": 1, "rate": price, "amount": price}]})
#     donation.insert(ignore_permissions=True)
#     frappe.db.commit()

#     # raised_amount = frappe.db.get_value("Donation Campaign", filters={"name": campaign}, fieldname=["raised_amount"], pluck="name")
#     raised_amount, donation_amount = frappe.db.get_value("Donation Campaign", filters={"name": campaign}, fieldname=["raised_amount", "donation_amount"])
#     total = int(price) + int(raised_amount)
#     if total >= int(donation_amount):
#         frappe.db.set_value("Donation Campaign", campaign, "raised_amount", total)
#         frappe.db.set_value("Donation Campaign", campaign, "published", 0)
#     else:
#         frappe.db.set_value("Donation Campaign", campaign, "raised_amount", total)


@frappe.whitelist(allow_guest=True)
def set_details_in_doctype_after_donation(user_id, campaign, item, amount, payment_id, anonymous):
    donor = frappe.db.get_value(
        "Donor", filters={"email": f"{user_id}"}, fieldname=["name"], pluck="name")
    donation = frappe.get_doc({"doctype": "Donation", "donor": donor, "campaign": f"{campaign}",
                              "date": today(), "amount": amount, "donation_item": item, "payment_id": payment_id, "anonymous": anonymous, "paid": 1})
    donation.insert(ignore_permissions=True)
    frappe.db.commit()

    # raised_amount = frappe.db.get_value("Donation Campaign", filters={"name": campaign}, fieldname=["raised_amount"], pluck="name")
    raised_amount, donation_amount = frappe.db.get_value("Donation Campaign", filters={
                                                         "name": campaign}, fieldname=["raised_amount", "donation_amount"])
    total = int(amount) + int(raised_amount)
    if total >= int(donation_amount):
        # frappe.db.set_value("Donation Campaign", campaign,
        #                     "raised_amount", total)
        frappe.db.set_value("Donation Campaign", campaign, {
                            "raised_amount": total, "published": 0, "status": "Closed"})
    else:
        frappe.db.set_value("Donation Campaign", campaign,
                            "raised_amount", total)
    # donation = frappe.db.get_value("Donation", filters={'donor': user_id, 'campaign': campaign, 'donation_item': item, "payment_id": payment_id, 'date': today()}, fieldname=['name'])
    # print("\n\n donation", donation, "\n\n")
    donation = frappe.get_last_doc('Donation', filters={"payment_id": payment_id})

    return amount, donation.name


# login with google
@frappe.whitelist(allow_guest=True)
def login_with_google(email, last_name='', first_name='', image_url=''):
    user_exists = frappe.db.get_value("User", filters={'email': email})

    if not user_exists:
        user = frappe.get_doc({"doctype": "User", "email": email, "last_name": last_name,
                              "first_name": first_name, "user_image": image_url, "role_profile_name": "Donor"})
        user.insert(ignore_permissions=True)
        frappe.db.commit()
        donor = frappe.get_doc({"doctype": "Donor", "email": f"{email}", "donor_name": f"{first_name} {last_name}",
                                "donor_type": "Defult", "image": f"{image_url}"})
        donor.insert(ignore_permissions=True)
        frappe.db.commit()
    else:
        doc = frappe.get_doc("User", email)
        doc.update(
            {
                "enabled": 1,
                "email": email,
                "last_name": last_name,
                "first_name": first_name,
                "user_image": image_url,
            }
        )
        doc.save(ignore_permissions=True)
        donor = frappe.db.get_value(
            "Donor", filters={"email": f"{email}"}, fieldname=["name"], pluck="name")
        doc = frappe.get_doc("Donor", donor)
        doc.update(
            {
                "email": f"{email}",
                "donor_name": f"{first_name} {last_name}",
                "donor_type": "Defult",
                "image": f"{image_url}"
            }
        )
        doc.save(ignore_permissions=True)

    return login_user(email)


def login_user(user):
    frappe.local.login_manager.user = user
    frappe.local.login_manager.post_login()
    frappe.db.commit()

    login_token = frappe.generate_hash(length=32)
    frappe.cache().set_value(
        f"login_token:{login_token}", frappe.local.session.sid, expires_in_sec=120
    )
    # print("\n\n login token", login_token, "\n\n")
    # return login_token
    return login_via_token(login_token)

# @frappe.whitelist(allow_guest=True)
# def login_user():
#     # frappe.local.login_manager.user = user
#     frappe.local.login_manager.post_login()
#     frappe.db.commit()

#     login_token = frappe.generate_hash(length=32)
#     frappe.cache().set_value(
#         f"login_token:{login_token}", frappe.local.session.sid, expires_in_sec=120
#     )
#     print("\n\n login token", login_token, "\n\n")
#     # return login_token
#     return login_via_token(login_token)


@frappe.whitelist(allow_guest=True)
def login_via_token(login_token: str):
    sid = frappe.cache().get_value(f"login_token:{login_token}", expires=True)
    if not sid:
        frappe.respond_as_web_page(_("Invalid Request"), _(
            "Invalid Login Token"), http_status_code=417)
        return

    frappe.local.form_dict.sid = sid
    frappe.local.login_manager = LoginManager()
    return True


# login with whatsapp if whatsapp integration is enable
@frappe.whitelist(allow_guest=True)
def login_with_whatsapp(phone):
    # if whatsapp integration
    otp = generateOTP(4)
    # doc = frappe.get_doc({"doctype": "Whatsapp OTP", "number": f'{phone}', "otp": otp, "status": "Pending"})
    doc = frappe.get_doc({"doctype": "Whatsapp OTP",
                         "number": f'{phone}', "otp": otp, "status": "Sent"})
    doc.insert(ignore_permissions=True)
    frappe.db.commit()

    message = send_whatsapp_otp(phone)
    result = {"message": message, "number": phone}
    # return result
    return message, phone


# generate OTP
def generateOTP(digit):
    digits = "0123456789"
    OTP = ""
    for i in range(digit):
        OTP += digits[math.floor(random.random() * 10)]

    return OTP

def send_whatsapp_otp(phone):

    # add code here for send whatsapp message if sucess return message and mobile

    return f'OTP sent to your whatsapp number: {phone}'


# verify OTP and login
@frappe.whitelist(allow_guest=True)
def verify_otp(number, otp):
    data = frappe.db.get_value("Whatsapp OTP", filters={
                               "number": number, "otp": otp, "status": "Sent"}, fieldname=['name'])
    if data:
        frappe.db.set_value("Whatsapp OTP", data, {"status": "Verified"})
        user = frappe.db.get_value(
            "User", filters={"phone": number}, fieldname=['name'])
        if user:
            login_user(user)
        else:
            email = str(number) + '@gmail.com'
            first_name = number
            user = frappe.get_doc({"doctype": "User", "email": f'{email}', "first_name": first_name, "phone": number, "role_profile_name": "Donor"})
            user.insert(ignore_permissions=True)
            frappe.db.commit()
            donor = frappe.get_doc({"doctype": "Donor", "email": f"{email}", "donor_name": f"{first_name}", "donor_type": "Defult", "mobile": number})
            donor.insert(ignore_permissions=True)
            frappe.db.commit()
            user = frappe.db.get_value(
            "User", filters={"phone": number}, fieldname=['name'])
            if user:
                login_user(user)
    else:
        # OTP not match write your logic here
        return f'Your OTP is not match with your number: {number}'


#create razorpay payment link 
@frappe.whitelist(allow_guest=True)
def create_payment_link(amount, name, email):
    amount = str(amount)
    amount1 = amount + '00'
    from sadbhavna_donatekart import razorpay
    client = razorpay.Client(auth=("rzp_test_Adc0DsR6E8VV3t", "qxawCeu9WJSdW4XjEK8vqzWO"))
    return client.payment_link.create({
    "amount": int(amount1),
    "currency": "INR",
    "description": "Donation",
    "customer": {
        "name": name,
        "email": email,
    },
    "notify": {
        "sms": True,
        "email": True
    },
    "reminder_enable": True,
    # "notes": {
    #     "policy_name": "Jeevan Bima"
    # },
    # "callback_url": f"http://crowdfunding.com:8001/api/method/sadbhavna_donatekart.api.api.verify_signature?amount={amount}",
    "callback_url": f"https://crowdfunding.frappe.cloud/sadbhavna?amount={amount}",
    "callback_method": "get"
    })

# verify_signature after payment done
@frappe.whitelist(allow_guest=True)
def verify_signature(amount, razorpay_payment_id, razorpay_payment_link_id, razorpay_payment_link_reference_id, razorpay_payment_link_status, razorpay_signature):
    from sadbhavna_donatekart import razorpay
    client = razorpay.Client(auth=("rzp_test_Adc0DsR6E8VV3t", "qxawCeu9WJSdW4XjEK8vqzWO"))
    response = client.utility.verify_payment_link_signature({
    'payment_link_id': razorpay_payment_link_id,
    'payment_link_reference_id': razorpay_payment_link_reference_id,
    'payment_link_status': razorpay_payment_link_status,
    'razorpay_payment_id': razorpay_payment_id,
    'razorpay_signature': razorpay_signature
    })
    return response, amount
    redirect_url = f"http://crowdfunding.com:8001/sadbhavna/donation-success-page/{amount}"
    return response, redirect_url
