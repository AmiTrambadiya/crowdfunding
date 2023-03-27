import{_ as k,a as L,d as _,r as c,o as s,c as n,t as h,b as o,e as v,f as I,n as b,m,F as g,g as V,B as w,D,h as A,i as B,j as C,k as p,w as f,l as N,p as S}from"./index.df552b0b.js";const F={name:"Input",inheritAttrs:!1,expose:["getInputValue"],components:{FeatherIcon:L},props:{label:{type:String},type:{type:String,default:"text",validator(t){let l=["text","number","checkbox","textarea","select","email","password","date"].includes(t);return l||console.warn(`Invalid value "${t}" for "type" prop for Input`),l}},modelValue:{type:[String,Number,Boolean,Object,Array]},inputClass:{type:[String,Array,Object]},debounce:{type:Number},options:{type:Array},disabled:{type:Boolean},rows:{type:Number},placeholder:{type:String},iconLeft:{type:String}},emits:["input","change","update:modelValue"],methods:{focus(){this.$refs.input.focus()},blur(){this.$refs.input.blur()},getInputValue(t){let l=t?t.target:this.$refs.input,e=l.value;return this.type=="checkbox"&&(e=l.checked),e}},computed:{passedInputValue(){return"value"in this.$attrs?this.$attrs.value:this.modelValue||null},inputAttributes(){let t={},l=e=>{this.$emit("input",this.getInputValue(e))};return this.debounce&&(l=_(l,this.debounce)),this.type=="checkbox"&&(t.checked=this.passedInputValue),Object.assign(t,this.$attrs,{onInput:l,onChange:e=>{this.$emit("change",this.getInputValue(e)),this.$emit("update:modelValue",this.getInputValue(e))}})},selectOptions(){return this.options.map(t=>typeof t=="string"?{label:t,value:t}:t).filter(Boolean)},isNormalInput(){return["text","number","checkbox","email","password","date"].includes(this.type)}}},O={key:0,class:"mb-2 block text-sm leading-4 text-gray-700"},R=["type","disabled","placeholder","value"],j=["placeholder","value","disabled","rows"],U=["disabled"],z=["value","disabled","selected"],P={key:1,class:"ml-2 inline-block text-base leading-4"};function K(t,l,e,y,r,a){const d=c("FeatherIcon");return s(),n("label",{class:b([e.type=="checkbox"?"flex":"block",t.$attrs.class])},[e.label&&e.type!="checkbox"?(s(),n("span",O,h(e.label),1)):o("",!0),v("div",{class:b(["relative flex",{"items-center":a.isNormalInput||e.type=="select"}])},[e.iconLeft&&e.type!="checkbox"?(s(),I(d,{key:0,name:e.iconLeft,class:b(["absolute mx-2 h-4 w-4 text-gray-600",{"mt-2":e.type=="textarea"}])},null,8,["name","class"])):o("",!0),a.isNormalInput?(s(),n("input",m({key:1},a.inputAttributes,{class:["border-gray-400 placeholder-gray-500",[{"form-input block w-full":e.type!="checkbox","form-checkbox":e.type=="checkbox","pl-8":e.iconLeft&&e.type!="checkbox"},e.inputClass]],ref:"input",type:e.type||"text",disabled:e.disabled,placeholder:e.placeholder,value:a.passedInputValue}),null,16,R)):o("",!0),e.type==="textarea"?(s(),n("textarea",m({key:2},a.inputAttributes,{placeholder:e.placeholder,class:["placeholder-gray-500",["form-textarea block w-full resize-none",e.inputClass,{"pl-8":e.iconLeft}]],ref:"input",value:a.passedInputValue,disabled:e.disabled,rows:e.rows||3}),null,16,j)):o("",!0),e.type==="select"?(s(),n("select",m({key:3},a.inputAttributes,{class:["form-select block w-full",{"pl-8":e.iconLeft}],ref:"input",disabled:e.disabled}),[(s(!0),n(g,null,V(a.selectOptions,i=>(s(),n("option",{key:i.value,value:i.value,disabled:i.disabled||!1,selected:a.passedInputValue===i.value},h(i.label),9,z))),128))],16,U)):o("",!0)],2),e.label&&e.type=="checkbox"?(s(),n("span",P,h(e.label),1)):o("",!0)],2)}var M=k(F,[["render",K]]);const E={name:"InsertLink",props:["editor"],components:{Button:w,Input:M,Dialog:D},data(){return{setLinkDialog:{url:"",show:!1}}},methods:{openDialog(){let t=this.editor.getAttributes("link").href;t&&(this.setLinkDialog.url=t),this.setLinkDialog.show=!0},setLink(t){t===""?this.editor.chain().focus().extendMarkRange("link").unsetLink().run():this.editor.chain().focus().extendMarkRange("link").setLink({href:t}).run(),this.setLinkDialog.show=!1,this.setLinkDialog.url=""},reset(){this.setLinkDialog=this.$options.data().setLinkDialog}}};function T(t,l,e,y,r,a){const d=c("Input"),i=c("Button"),x=c("Dialog");return s(),n(g,null,[A(t.$slots,"default",B(C({onClick:a.openDialog}))),p(x,{options:{title:"Set Link"},modelValue:r.setLinkDialog.show,"onUpdate:modelValue":l[3]||(l[3]=u=>r.setLinkDialog.show=u),onAfterLeave:a.reset},{"body-content":f(()=>[p(d,{type:"text",label:"URL",modelValue:r.setLinkDialog.url,"onUpdate:modelValue":l[0]||(l[0]=u=>r.setLinkDialog.url=u),onKeydown:l[1]||(l[1]=N(u=>a.setLink(u.target.value),["enter"]))},null,8,["modelValue"])]),actions:f(()=>[p(i,{appearance:"primary",onClick:l[2]||(l[2]=u=>a.setLink(r.setLinkDialog.url))},{default:f(()=>[S(" Save ")]),_:1})]),_:1},8,["modelValue","onAfterLeave"])],64)}var G=k(E,[["render",T]]);export{G as default};
