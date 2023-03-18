import e,{createContext as t,useState as a,useEffect as o,useContext as r}from"react";const l=({close:t})=>e.createElement("div",{className:"remover",onClick:t},e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-label":"Close",className:"icon icon-tabler icon-tabler-x",width:20,height:20,viewBox:"0 0 24 24",strokeWidth:"2.5",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("path",{stroke:"none",d:"M0 0h24v24H0z"}),e.createElement("line",{x1:18,y1:6,x2:6,y2:18}),e.createElement("line",{x1:6,y1:6,x2:18,y2:18})));!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===a&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(":root{--black:#000;--white:#fff}.dialog--container{bottom:0;font-family:Arial,sans-serif;left:0;overflow-y:auto;position:fixed;right:0;top:0;z-index:50}.dialog--layout{align-items:center;display:flex;justify-content:center;min-height:100vh;padding-left:1rem;padding-right:1rem}.dialog--overlay{background-color:var(--black);bottom:0;left:0;opacity:.3;position:fixed;right:0;top:0}.dialog--panel{animation:blowUpContentTwo .5s cubic-bezier(.165,.84,.44,1) forwards;background-color:var(--white);border-radius:.375rem;box-shadow:0 25px 50px -12px var(--black);max-width:28rem;overflow:hidden;width:100%}.dialog--card{background-color:#fff;border:1px solid #9ca3af;border-radius:.375rem;padding:2rem;position:relative}.remover{cursor:pointer;padding-right:1.25rem;padding-top:1rem;position:absolute;right:0;top:0}.dialog--card--icon{display:flex;justify-content:center;margin-bottom:1rem;width:100%}.dialog--card--title{color:var(--black);font-size:1.5rem;font-weight:700;line-height:2rem;margin-bottom:1rem;text-align:center}.dialog--card--description{color:var(--black);font-size:.875rem;font-weight:400;line-height:1.25rem;margin-bottom:1.25rem;text-align:center}.dialog--card--button-container{align-items:center;display:flex;justify-content:space-evenly;width:100%}.dialog--button{border:none;border-radius:.375rem;color:#fff;cursor:pointer;padding:.5rem 1rem;transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.dialog--button-confirm{background-color:#4f46e5}.dialog--button-cancel{background-color:#f3f4f6;color:#4b5563;margin-left:.75rem}.dialog--button:focus{outline:none}.dialog--button-confirm:hover{background-color:#3730a3}.dialog--out>.dialog--layout>.dialog--panel{animation:blowUpContent .5s cubic-bezier(.165,.84,.44,1) forwards}@keyframes blowUpContent{0%{opacity:1;transform:scale(1)}99.9%{opacity:0;transform:scale(2)}to{transform:scale(0)}}@keyframes blowUpContentTwo{0%{opacity:0;transform:scale(2)}to{opacity:1;transform:scale(1)}}@keyframes blowUpModal{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes blowUpModalTwo{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}");const n=t({});function i({children:t}){const[r,l]=a(!1),[i,c]=a(null);o((()=>{if(i)return l(!0)}),[i]),o((()=>{if(!1===r)return c(null)}),[!r]);const s={isModalOpen:r,openModal:e=>{c(e)},closeModal:()=>{l(!1)},modalContent:i};return e.createElement(n.Provider,{value:s},t,i)}function c(){return r(n)}const s=({children:t,icon:r,title:n,titleStyle:i,description:s,descriptionStyle:d,confirm:m,confirmStyle:f,onConfirm:g,hasCancel:h,cancel:p,onCancel:u})=>{const{isModalOpen:b,closeModal:w}=c(),[v,y]=a(!1),E=()=>{y(!0)};return v&&setTimeout((()=>{w()}),500),o((()=>{const e=e=>{"Escape"===e.key&&E()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[]),e.createElement(e.Fragment,null,b&&e.createElement("div",{className:"dialog--container "+(v?" dialog--out ":"")},e.createElement("div",{className:"dialog--layout"},e.createElement("div",{className:"dialog--overlay",onClick:E}),e.createElement("span",{"aria-hidden":"true"},"​"),e.createElement("div",{className:"dialog--panel"},e.createElement("div",{className:"dialog--card"},t||e.createElement(e.Fragment,null,e.createElement("div",{className:"dialog--card--icon"},(t=>{switch(t){case"success":return e.createElement("svg",{viewBox:"0 0 512 512",width:56,height:56,xmlns:"http://www.w3.org/2000/svg"},e.createElement("path",{d:"M256 6.998c-137.533 0-249 111.467-249 249 0 137.534 111.467 249 249 249s249-111.467 249-249c0-137.534-111.467-249-249-249zm0 478.08c-126.309 0-229.08-102.771-229.08-229.081 0-126.31 102.771-229.08 229.08-229.08 126.31 0 229.08 102.771 229.08 229.08 0 126.31-102.77 229.081-229.08 229.081z",fill:"#22c55e",className:"fill-425661"}),e.createElement("path",{fill:"#22c55e",d:"M384.235 158.192 216.919 325.518l-89.057-89.037-14.142 14.143 103.199 103.179L398.28 172.334z",className:"fill-425661"}));case"warning":return e.createElement("svg",{viewBox:"0 0 64 64",xmlns:"http://www.w3.org/2000/svg",width:56,height:56,enableBackground:"new 0 0 64 64"},e.createElement("path",{d:"M-196-222.1c-13.2 0-23.9-10.7-23.9-23.9s10.7-23.9 23.9-23.9 23.9 10.7 23.9 23.9-10.7 23.9-23.9 23.9zm0-45.2c-11.7 0-21.3 9.6-21.3 21.3s9.6 21.3 21.3 21.3 21.3-9.6 21.3-21.3-9.6-21.3-21.3-21.3z",transform:"translate(228 278)",fill:"#eab308",className:"fill-134563"}),e.createElement("path",{d:"M-197.4-236.1h2.8v2.8h-2.8zM-195.2-238.9h-1.6l-.6-11.3v-8.5h2.8v8.5l-.6 11.3",transform:"translate(228 278)",fill:"#eab308",className:"fill-134563"}));case"error":return e.createElement("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg",width:56,height:56},e.createElement("g",{"data-name":"1"},e.createElement("path",{d:"M257 461.46c-114 0-206.73-92.74-206.73-206.73S143 48 257 48s206.73 92.74 206.73 206.73S371 461.46 257 461.46ZM257 78c-97.45 0-176.73 79.28-176.73 176.73S159.55 431.46 257 431.46s176.73-79.28 176.73-176.73S354.45 78 257 78Z",fill:"#ef4444",className:"fill-000000"}),e.createElement("path",{d:"M342.92 358a15 15 0 0 1-10.61-4.39L160.47 181.76a15 15 0 1 1 21.21-21.21L353.53 332.4a15 15 0 0 1-10.61 25.6Z",fill:"#ef4444",className:"fill-000000"}),e.createElement("path",{d:"M171.07 358a15 15 0 0 1-10.6-25.6l171.84-171.85a15 15 0 0 1 21.22 21.21L181.68 353.61a15 15 0 0 1-10.61 4.39Z",fill:"#ef4444",className:"fill-000000"})));case"info":return e.createElement("svg",{viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg",width:56,height:56},e.createElement("circle",{cx:"25",cy:"25",fill:"none",r:"24",stroke:"#0ea5df",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",className:"stroke-000000"}),e.createElement("path",{fill:"none",d:"M0 0h50v50H0z"}),e.createElement("path",{d:"M23.779 16.241c-.216 0-.357-.144-.357-.359v-2.618c0-.215.142-.359.357-.359h2.439c.215 0 .359.144.359.359v2.618c0 .215-.145.359-.359.359h-2.439zm.073 21.052c-.215 0-.358-.143-.358-.358V20.473c0-.215.144-.359.358-.359h2.295c.216 0 .359.144.359.359v16.462c0 .216-.144.358-.359.358h-2.295z",fill:"#0ea5df",className:"fill-000000"}))}})(r)),e.createElement("div",{className:"dialog--card--title",style:i},n),e.createElement("div",{className:"dialog--card--description",style:d},s),e.createElement("div",{className:"dialog--card--button-container",style:f},e.createElement("button",{className:"dialog--button dialog--button-confirm",onClick:g||E},m||"OK"),h&&e.createElement("button",{className:"dialog--button dialog--button-cancel",onClick:u||E},p||"Cancel")),e.createElement(l,{close:E})))))))};export{s as DialogModal,i as DialogProvider,n as ModalContext,c as useModal};
