import{r as i,R as s}from"../../vendor.fffd322d.js";import{j as e,F as c,a as t}from"../../jsx-runtime.703c0803.js";function a(){const[n,r]=i.exports.useState(0);return e("button",{type:"button",onClick:()=>r(o=>o+1),children:["Counter ",n]})}function d(){return e(c,{children:[t("h1",{children:"Demo: SPA"}),e("ul",{children:[e("li",{children:["Is the page's text renderered to HTML? ",t("b",{children:"No"}),', see "View page source".']}),e("li",{children:["Is the page interactive? ",t("b",{children:"Yes"}),", counter is working: ",t(a,{}),"."]})]})]})}u();async function u(){s.render(t(d,{}),document.getElementById("page-view"))}
