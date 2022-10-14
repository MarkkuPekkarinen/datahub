"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5257],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>p});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?s(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},s=Object.keys(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(r=0;r<s.length;r++)a=s[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},l=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,s=t.originalType,d=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),f=m(a),p=n,u=f["".concat(d,".").concat(p)]||f[p]||c[p]||s;return a?r.createElement(u,o(o({ref:e},l),{},{components:a})):r.createElement(u,o({ref:e},l))}));function p(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=a.length,o=new Array(s);o[0]=f;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var m=2;m<s;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},15138:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const s={title:"Introduction",sidebar_label:"Introduction",slug:"/metadata-ingestion/docs/transformer/intro",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md"},o="Transformers",i={unversionedId:"metadata-ingestion/docs/transformer/intro",id:"metadata-ingestion/docs/transformer/intro",title:"Introduction",description:"What\u2019s a transformer?",source:"@site/genDocs/metadata-ingestion/docs/transformer/intro.md",sourceDirName:"metadata-ingestion/docs/transformer",slug:"/metadata-ingestion/docs/transformer/intro",permalink:"/docs/metadata-ingestion/docs/transformer/intro",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md",tags:[],version:"current",frontMatter:{title:"Introduction",sidebar_label:"Introduction",slug:"/metadata-ingestion/docs/transformer/intro",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/transformer/intro.md"},sidebar:"overviewSidebar",previous:{title:"File",permalink:"/docs/metadata-ingestion/sink_docs/file"},next:{title:"Dataset",permalink:"/docs/metadata-ingestion/docs/transformer/dataset_transformer"}},d={},m=[{value:"What\u2019s a transformer?",id:"whats-a-transformer",level:2},{value:"Provided transformers",id:"provided-transformers",level:2}],l={toc:m};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"transformers"},"Transformers"),(0,n.kt)("h2",{id:"whats-a-transformer"},"What\u2019s a transformer?"),(0,n.kt)("p",null,"Oftentimes we want to modify metadata before it reaches the ingestion sink \u2013 for instance, we might want to add custom tags, ownership, properties, or patch some fields. A transformer allows us to do exactly these things."),(0,n.kt)("p",null,"Moreover, a transformer allows one to have fine-grained control over the metadata that\u2019s ingested without having to modify the ingestion framework's code yourself. Instead, you can write your own module that can transform metadata events however you like. To include a transformer into a recipe, all that's needed is the name of the transformer as well as any configuration that the transformer needs."),(0,n.kt)("h2",{id:"provided-transformers"},"Provided transformers"),(0,n.kt)("p",null,"Aside from the option of writing your own transformer (see below), we provide some simple transformers for the use cases of adding: tags, glossary terms, properties and ownership information."),(0,n.kt)("p",null,"DataHub provided transformers for dataset are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-ownership"},"Simple Add Dataset ownership")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-ownership"},"Pattern Add Dataset ownership")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-remove-dataset-ownership"},"Simple Remove Dataset ownership")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#mark-dataset-status"},"Mark Dataset Status")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-globaltags"},"Simple Add Dataset globalTags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-globaltags"},"Pattern Add Dataset globalTags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#add-dataset-globaltags"},"Add Dataset globalTags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#set-dataset-browsepath"},"Set Dataset browsePath")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-glossaryterms"},"Simple Add Dataset glossaryTerms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-glossaryterms"},"Pattern Add Dataset glossaryTerms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-schema-field-glossaryterms"},"Pattern Add Dataset Schema Field glossaryTerms")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-schema-field-globaltags"},"Pattern Add Dataset Schema Field globalTags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-datasetproperties"},"Simple Add Dataset datasetProperties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#add-dataset-datasetproperties"},"Add Dataset datasetProperties")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#simple-add-dataset-domains"},"Simple Add Dataset domains")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/dataset_transformer#pattern-add-dataset-domains"},"Pattern Add Dataset domains"))))}c.isMDXComponent=!0}}]);