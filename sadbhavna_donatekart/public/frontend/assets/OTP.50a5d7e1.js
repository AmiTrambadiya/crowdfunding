import{N as p,F as d}from"./Footer.e5030789.js";import{_ as m,o as u,c as _,k as a,e,t as b,y as g,G as h,F as v,I as x,r as n}from"./index.61b3d6a6.js";const y={name:"OTP",components:{Navbar:p,Footer:d},data(){return{message:"",number:"",otp:""}},mounted(){const s=x();this.message=s.params.message,this.number=s.params.number,console.log("message",this.message)},resources:{verify_otp(){return{method:"sadbhavna_donatekart.api.api.verify_otp",onSuccess:s=>{var t=this.$cookies.get("route");console.log("route",t),t!=null?this.$router.go(-2):this.$router.push("/sadbhavna")},onError:s=>{console.log("error",s)}}}},methods:{verify_otp(){this.$resources.verify_otp.submit({number:this.number,otp:this.otp})}}},f={class:"container mx-auto h-full"},k={class:"w-full sm:pt-0 md:pt-5 lg:pt-12 bg-grey-lightest"},w={class:"container mx-auto py-0"},F={class:"w-4/6 lg:w:4/6 mx-auto bg-white"},N=e("div",{class:"py-8 px-10 text-gray-600 text-black text-center text-4xl"},"Verify your contact detail ",-1),T={class:"py-4 px-8"},V={class:"mb-7"},$={class:"block text-gray-600 text-base mb-2",for:"email"},O={class:"mb-4"},P=e("label",{class:"block text-gray-600 text-base mb-2",for:"email"},"Enter OTP",-1),B={class:"mb-4"};function E(s,t,C,D,o,i){const c=n("Navbar"),l=n("Footer");return u(),_(v,null,[a(c),e("div",f,[e("div",k,[e("div",w,[e("div",F,[N,e("div",T,[e("div",V,[e("span",$,b(o.message),1)]),e("div",O,[P,g(e("input",{class:"appearance-none border-gray-300 rounded w-full py-2 px-3 text-grey-darker","onUpdate:modelValue":t[0]||(t[0]=r=>o.otp=r),type:"number"},null,512),[[h,o.otp]])]),e("div",B,[e("button",{class:"appearance-none border-gray-600 rounded w-auto text-grey-darker bg-green-500 hover:bg-transparent text-white hover:text-green-500 px-7 py-2 tracking-wide border border-green-500 hover:border-green-500 text-xs uppercase rounded",onClick:t[1]||(t[1]=r=>i.verify_otp())},"Verify OTP")])])])])])]),a(l)],64)}var I=m(y,[["render",E]]);export{I as default};
