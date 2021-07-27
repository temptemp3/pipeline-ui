(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7150],{7806:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return p},BrowserOnlyButton:function(){return k},toc:function(){return m},default:function(){return h}});var l,o=e(2122),i=e(9756),r=(e(7294),e(3905)),u=e(1262),s=e(6086),d=["components"],a={},c="AlgoSendButton",p={unversionedId:"Algo Components/AlgoSendButton",id:"Algo Components/AlgoSendButton",isDocsHomePage:!1,title:"AlgoSendButton",description:"Clicking the AlgoSend button will open a new MyAlgo window prompting the user to confirm the transaction. Upon confirmation, it returns the transaction id to the context and key specified. This component has the largest number of mandatory props. Failing to set them, or setting them incorrectly will result in a transaction not executing.",source:"@site/docs/Algo Components/AlgoSendButton.mdx",sourceDirName:"Algo Components",slug:"/Algo Components/AlgoSendButton",permalink:"/docs/Algo Components/AlgoSendButton",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Algo Components/AlgoSendButton.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoFetch",permalink:"/docs/Algo Components/AlgoFetch"},next:{title:"AsaList",permalink:"/docs/Algo Components/AsaList"}},k=function(t){return(0,r.kt)(u.Z,{mdxType:"BrowserOnly"},(function(){var t=e(856).xh;return(0,r.kt)(t,{mdxType:"AlgoSendButton"})}))},m=[{value:"Use Example",id:"use-example",children:[{value:"Props",id:"props",children:[]}]}],g=(l="AlgoSendButton",{BrowserOnlyButton:k,toc:m});function h(t){var n=t.components,e=(0,i.Z)(t,d);return(0,r.kt)("wrapper",(0,o.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"algosendbutton"},"AlgoSendButton"),(0,r.kt)("p",null,"Clicking the AlgoSend button will open a new MyAlgo window prompting the user to confirm the transaction. Upon confirmation, it returns the transaction id to the context and key specified. This component has the largest number of mandatory props. Failing to set them, or setting them incorrectly will result in a transaction not executing."),(0,r.kt)(k,{mdxType:"BrowserOnlyButton"}),(0,r.kt)("h2",{id:"use-example"},"Use Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import {AlgoButton, AlgoSendButton, Pipeline} from 'pipeline-ui'\n\nconst myAlgoWallet = Pipeline.init();\n\n<AlgoSendButton\n      index={this.state.index}\n      recipient={this.state.recipient}\n      amount={this.state.amount}\n      note={this.state.note}\n      myAddress={this.state.Algaddress}\n      wallet={myAlgoWallet} \n      context={this}\n      returnTo={\"txID\"}\n      />\n")),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(s.Z,{mdxType:"Table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Prop"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"index"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"0"),(0,r.kt)("td",null,"If Algorand, must be 0. If ASA, must be numeric index value")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"recipient"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Address of recipient")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"amount"),(0,r.kt)("td",null,"integer"),(0,r.kt)("td",null,"1"),(0,r.kt)("td",null,"amount to send in micro Algos")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"note"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,'"note"'),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"myAddress"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Address of sender")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"wallet"),(0,r.kt)("td",null,"reference"),(0,r.kt)("td",null),(0,r.kt)("td",null,"reference to an instance of Pipeline.init(); that is called ONCE when the app is initialized")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"context"),(0,r.kt)("td",null,"reference"),(0,r.kt)("td",null),(0,r.kt)("td",null,"Recommended value: this")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"returnTo"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null),(0,r.kt)("td",null,"string value of state key to return the transaction id")))))}h.isMDXComponent=!0}}]);