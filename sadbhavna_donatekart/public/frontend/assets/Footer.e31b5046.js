import{_ as b,D as x,o as a,c as i,e as t,n as f,k as r,w as d,p as c,b as v,C as _,r as p,A as w}from"./index.d7557b21.js";var k="/assets/sadbhavna_donatekart/frontend/assets/logo.2bd6bc2a.png";const y={name:"Navbar",setup(){return{user:_("user")}},components:{Dialog:x},data(){return{showMenu:!1,showDialog:!1}},mounted(){console.log("navbar load")},resources:{logout(){return{method:"logout",onSuccess:o=>{this.$toast({title:"Success",text:"You successfully logout",customIcon:"check"}),this.$router.go()},onError(){console.log("Error"),this.$toast({title:"Error",text:"Somthing want wrong during Logout!",customIcon:"circle-fail",appearance:"denger"})}}}},methods:{show_logout_dialog(){this.showDialog=!0},logout(){this.$resources.logout.submit()},profile(){const o=Object.fromEntries(document.cookie.split("; ").map(e=>e.split("=")).map(e=>[e[0],decodeURIComponent(e[1])]));this.$router.push(`/sadbhavna/profile/${o.user_id}`)}},mounted(){this.user.isLoggedIn()}},C={class:"pt-2 pl-2 md:pl-4 lg:pl-[46px] xl:pl-24 pr-2 md:pr-4 lg:pr-[46px] xl:pr-24"},$={class:"rounded-xl bg-[#40b751]"},L={class:"px-6 md:px-6 lg:px-6 sm:py-2 md:py-8 lg:py-8 mx-auto md:flex md:justify-between md:items-center"},D={class:"flex justify-between"},H=t("div",{class:"flex items-center flex-shrink-0"},[t("a",{href:"/sadbhavna"},[t("img",{src:k,class:"mb-2 lg:mb-0 sm:mt-2 lg:mt-0 sm:mr-0 md:mr-32 lg:mr-32 w-40 lg:w-48 h-16 lg:h-44 ml-0 lg:ml-6"})])],-1),N=t("button",{type:"button",class:"text-white hover:text-white focus:outline-none focus:text-white"},[t("svg",{viewBox:"0 0 24 24",class:"w-6 h-6 fill-current"},[t("path",{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z "})])],-1),V=[N],A=t("li",null,[t("a",{href:"#",class:"transition font-bold text-white hover:text-black"},"About")],-1),F=t("li",null,[t("span",{class:"group relative inline-block"},[t("a",{href:"/sadbhavna/blog",class:"transition font-bold text-white hover:text-black"},"Blog")])],-1);function I(o,e,u,g,l,n){const m=p("router-link"),h=p("Dialog");return a(),i("div",C,[t("div",$,[t("nav",L,[t("div",D,[H,t("div",{onClick:e[0]||(e[0]=s=>l.showMenu=!l.showMenu),class:"flex md:hidden"},V)]),t("ul",{class:f([l.showMenu?"flex":"hidden","flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-4 lg:space-x-6 md:mt-0"])},[t("li",null,[r(m,{to:"/sadbhavna",class:"transition font-bold text-white hover:text-black"},{default:d(()=>[c("Home")]),_:1})]),A,t("li",null,[r(m,{to:"/sadbhavna/request-campaign",class:"transition font-bold text-white hover:text-black"},{default:d(()=>[c("Request a Campaign")]),_:1})]),t("li",null,[r(m,{to:"/sadbhavna/contact-us",class:"transition font-bold text-white hover:text-black"},{default:d(()=>[c("Contact")]),_:1})]),F,this.user.isLoggedIn()?(a(),i("li",{key:0,onClick:e[1]||(e[1]=s=>n.profile()),class:"font-bold text-white hover:text-black cursor-pointer"}," profile ")):v("",!0),t("li",null,[this.user.isLoggedIn()?(a(),i("button",{key:0,onClick:e[2]||(e[2]=s=>n.show_logout_dialog()),class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1"},"Logout")):(a(),i("button",{key:1,onClick:e[3]||(e[3]=s=>this.$router.push("/sadbhavna/auto-login")),class:"transition bg-white text-black font-medium text-base mt-2 mb-2 lg:mb-0 mr-4 pt-2 pb-2 pl-8 pr-8 transition duration-300 rounded hover:bg-[#40b751] hover:text-white hover:outline hover:outline-1 hover:outline-offset-1"},"Login"))])],2)]),r(h,{options:{title:"Logout",message:"Are you sure want to logout?",size:"sm",actions:[{label:"Confirm",appearance:"success",handler:({close:s})=>{this.logout(),s()}},{label:"Cancel"}]},modelValue:l.showDialog,"onUpdate:modelValue":e[4]||(e[4]=s=>l.showDialog=s)},null,8,["options","modelValue"])])])}var P=b(y,[["render",I]]),M="/assets/sadbhavna_donatekart/frontend/assets/facebook.9ac7fe2c.svg",W="/assets/sadbhavna_donatekart/frontend/assets/twitter.bf573150.svg",z="/assets/sadbhavna_donatekart/frontend/assets/insta.cc93ce04.svg",B="/assets/sadbhavna_donatekart/frontend/assets/linkedin.08a20e56.svg";const E={name:"Footer",theme:{screens:{medium:"758px"}},mounted(){}},S={class:"px-10 md:px-50 lg:px-30 xl:px-0 bg-[#40b751]"},j=w('<footer class="container w-full pt-10 md:pt-10 lg:pt-20 sm:pb-0 ml-auto mr-auto text-neutral-50"><div class="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 sm:gap-auto md-gap:4 lg:gap-auto pb-5 md:pb-10 lg:pb-2 px-0 py-0"><div class="sm:col-span-2 md:col-span-2 lg:col-auto"><h2 class="font-medium md:font-semibold lg:font-normal text-white mb-6 text-[20px] md:text-2xl lg:text-xl mb-4"> About</h2><p class="text-whitetext-gray-500 -pr-[200px] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi cumque tenetur inventore veniam, hic vel ipsa necessitatibus ducimus architecto fugiat!</p><div class="my-5 pr-4"><div class="flex mt-4 space-x-6 mt-12"><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+M+'"><span class="sr-only">Facebook page</span></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+W+'"><span class="sr-only">Twitter page</span></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+z+'"><span class="sr-only">Instagram page</span></a><a href="#" class="text-gray-400 text-white"><img class="w-4 h-4" src="'+B+'"><span class="sr-only">Linkedin account</span></a></div></div></div><div class="sm:pl-[0px] md:pl-[0px] lg:pl-[60px] md:pb-10 sm:pb-10"><h2 class="font-medium md:font-semibold lg:font-normal text-white mb-6 text-[20px] md:text-2xl lg:text-xl mb-4 pt-10 md:pt-5 lg:pt-0"> Quick Links</h2><ul class="lg:font-semibold text-whitetext-gray-500 dark:text-gray-400"><li class="sm:mb-2 md:mb-2 lg:mb-4"><a href="#">Symptoms</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">Prevention</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">FAQs</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">About Coronavirus</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">Contact Us</a></li></ul></div><div class="sm:pl-[0px] md:pl-[0px] lg:pl-[50px] sm:pr-28 md:pr-32 lg:pr-0"><h2 class="font-medium md:font-bold lg:font-normal text-white mb-6 text-[20px] md:text-2xl lg:text-xl mb-4 pt-10 md:pt-5 lg:pt-0"> Helpful Link</h2><ul class="lg:font-semibold text-whitetext-gray-500 dark:text-gray-400"><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">Helathcare Professional</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">LGU Facilities</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">Protect Your Family</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">World Health</a></li></ul></div><div class="sm:pl-[0px] md:pl-[0px] lg:pl-[60px]"><h2 class="sm:font-semibold md:font-semibold lg:font-normal text-white mb-6 text-[20px] md:text-2xl lg:text-xl mb-4 pt-10 md:pt-5 lg:pt-0"> Resources</h2><ul class="lg:font-semibold text-whitetext-gray-500 dark:text-gray-400"><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">WHO Website</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">CDC Website</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">Gov Website</a></li><li class="sm:mb-1 md:mb-2 lg:mb-4 xl:mb-4"><a href="#">DOH Website</a></li></ul></div></div><div class="text-center px-4 pb-8 pt-12 border-t border-white border-opacity-10 border-neutral-100"><span class="text-sm font-normal mb-4 mt-0font-semiboldtext-whitetext-gray-500 dark:text-gray-400">Copyright \xA9 2023 All rights reserved </span></div></footer>',1),U=[j];function q(o,e,u,g,l,n){return a(),i("div",S,U)}var R=b(E,[["render",q]]);export{R as F,P as N};
