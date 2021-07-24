(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4607],{5711:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return a},BrowserOnlyButton:function(){return c},toc:function(){return g},default:function(){return A}});var o=e(2122),l=e(9756),r=(e(7294),e(3905)),u=e(1262),s=e(6086),i=["components"],p={},d="AlgoButton",a={unversionedId:"Algo Components/AlgoButton",id:"Algo Components/AlgoButton",isDocsHomePage:!1,title:"AlgoButton",description:"A button to connect to MyAlgo.",source:"@site/docs/Algo Components/AlgoButton.mdx",sourceDirName:"Algo Components",slug:"/Algo Components/AlgoButton",permalink:"/docs/Algo Components/AlgoButton",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Algo Components/AlgoButton.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AlgoAddress",permalink:"/docs/Algo Components/AlgoAddress"},next:{title:"AlgoFetch",permalink:"/docs/Algo Components/AlgoFetch"}};function c(){return(0,r.kt)(u.Z,{fallback:(0,r.kt)("p",null,"Some Fallback Content"),mdxType:"BrowserOnly"},(function(){var t=e(140).vg,n=e(140).B_;return(0,r.kt)(t,{wallet:n.init(),mdxType:"AlgoButton"})}))}var m,g=[{value:"Use Example",id:"use-example",children:[{value:"Props",id:"props",children:[]}]}],k=(m="AlgoButton",{BrowserOnlyButton:c,toc:g});function A(t){var n=t.components,e=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,o.Z)({},k,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"algobutton"},"AlgoButton"),(0,r.kt)("p",null,"A button to connect to MyAlgo. "),(0,r.kt)("p",null,"Generates a popup window to connect to MyAlgo. Uppon success, returns first wallet address to the context and returnTo specified."),(0,r.kt)(c,{mdxType:"BrowserOnlyButton"}),(0,r.kt)("h2",{id:"use-example"},"Use Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { AlgoButton, Pipeline} from 'pipeline-ui';\n\n\nclass TestButton extends Component {\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      Algaddress: \"\"\n    }\n  }\n  \n  myAlgoWallet = Pipeline.init();\n\n  render() {\n    return <div>\n      <AlgoButton \n            wallet={this.myAlgoWallet} \n            context={this} \n            returnTo={\"Algaddress\"} \n            />\n      <h1>{this.state.Algaddress}</h1>\n    </div>\n  }\n}\n\nexport default TestButton;\n")),(0,r.kt)("h3",{id:"props"},"Props"),(0,r.kt)(s.Z,{mdxType:"Table"},(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Prop"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Default"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"wallet"),(0,r.kt)("td",null,"reference"),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"context"),(0,r.kt)("td",null,"reference"),(0,r.kt)("td",null),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null,"returnTo"),(0,r.kt)("td",null,"string"),(0,r.kt)("td",null,"empty string"),(0,r.kt)("td",null,"key in state to return fetched address")))))}A.isMDXComponent=!0}}]);