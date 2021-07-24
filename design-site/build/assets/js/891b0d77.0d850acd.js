(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2828],{947:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return u},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=t(2122),l=t(9756),o=(t(7294),t(3905)),i=t(6086),d=["components"],u={},r="Form",s={unversionedId:"Components/Form",id:"Components/Form",isDocsHomePage:!1,title:"Form",description:"The Form component provides a wrapped version of the HTML form element.",source:"@site/docs/Components/Form.mdx",sourceDirName:"Components",slug:"/Components/Form",permalink:"/docs/Components/Form",editUrl:"https://github.com/headline-design/pipeline-ui/blob/main/design-site/docs/Components/Form.mdx",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Flex",permalink:"/docs/Components/Flex"},next:{title:"Heading",permalink:"/docs/Components/Heading"}},p=[{value:"Usage Example",id:"usage-example",children:[{value:"Props",id:"props",children:[]}]}],m={toc:p};function c(e){var n=e.components,t=(0,l.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"form"},"Form"),(0,o.kt)("p",null,"The Form component provides a wrapped version of the HTML form element.\nNative HTML5 form validation"),(0,o.kt)("p",null,"For native HTML form validation\u2013available in all our supported browsers, the :valid and :invalid pseudo selectors are used to apply validation styles as well as display feedback messages."),(0,o.kt)("p",null,"pipeline scopes the :valid and :invalid styles to parent .was-validated class, usually applied to the Form (you can use the validated prop as a shortcut). Otherwise, any required field without a value shows up as invalid on page load. This way, you may choose when to activate them (typically after form submission is attempted)."),(0,o.kt)("h2",{id:"usage-example"},"Usage Example"),(0,o.kt)("p",null,"(to view component preview, scroll to bottom of page)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import {\n  Box,\n  Form,\n  Input,\n  Select,\n  Field,\n  Button,\n  Text,\n  Checkbox,\n  Radio\n} from "pipeline-ui";\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},'\nfunction CustomForm() {\n  const [formValidated, setFormValidated] = useState(false);\n  const [validated, setValidated] = useState(false);\n  const [inputValue, setInputValue] = useState("");\n  const [formInputValue, setFormInputValue] = useState("");\n  const [selectValue, setSelectValue] = useState("");\n  const [checkboxValue, setCheckboxValue] = useState(false);\n  const [radioValue, setRadioValue] = useState("");\n\n  const handleInput = e => {\n    setInputValue(e.target.value);\n    validateInput(e);\n  };\n\n  const handleFormInput = e => {\n    setFormInputValue(e.target.value);\n    validateInput(e);\n  };\n\n  const handleSelect = e => {\n    setSelectValue(e.target.value);\n    validateInput(e);\n  };\n\n  const handleCheckbox = e => {\n    setCheckboxValue(!checkboxValue);\n    validateInput(e);\n  };\n\n  const handleRadio = e => {\n    setRadioValue(e.target.value);\n    validateInput(e);\n  };\n\n  const validateInput = e => {\n    e.target.parentNode.classList.add("was-validated");\n  };\n\n  const validateForm = () => {\n    // Perform advanced validation here\n    if (\n      inputValue.length > 0 &&\n      selectValue.length > 0 &&\n      checkboxValue === true &&\n      radioValue.length > 0\n    ) {\n      setValidated(true);\n    } else {\n      setValidated(false);\n    }\n  };\n\n  useEffect(() => {\n    validateForm();\n  });\n\n  const handleSubmit = e => {\n    e.preventDefault();\n    console.log("Submitted valid form");\n  };\n\n  return (\n    <Box p={4}>\n      <Box>\n        <Form onSubmit={handleSubmit} validated={formValidated}>\n          <Flex mx={-3} flexWrap={"wrap"}>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Plain Input" validated={validated} width={1}>\n                <Input\n                  type="text"\n                  required // set required attribute to use brower\'s HTML5 input validation\n                  onChange={handleInput}\n                  value={inputValue}\n                  width={1}\n                />\n              </Field>\n            </Box>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Form Email Input" validated={validated} width={1}>\n                <Form.Input\n                  type="email"\n                  required // set required attribute to use brower\'s HTML5 input validation\n                  onChange={handleFormInput}\n                  value={formInputValue}\n                  width={1}\n                />\n              </Field>\n            </Box>\n          </Flex>\n          <Flex mx={-3} flexWrap={"wrap"}>\n            <Box width={[1, 1, 1/2]} px={3}>\n              <Field label="Select Input" validated={validated} width={1}>\n                <Select\n                  options={[\n                    { value: "", label: ""},\n                    { value: "eth", label: "Ethereum" },\n                    { value: "btc", label: "Bitcoin" },\n                    { value: "gno", label: "Gnosis" },\n                    { value: "gnt", label: "Golem" },\n                    { value: "rep", label: "Augur" }\n                  ]}\n                  value={selectValue}\n                  onChange={handleSelect}\n                  required // set required attribute to use brower\'s HTML5 input validation\n                  width={1}\n                />\n              </Field>\n            </Box>\n          </Flex>\n          \n          \n          <Box>\n            <Field label="Checkbox Input" validated={validated}>\n              <Form.Check\n                value={checkboxValue}\n                onChange={handleCheckbox}\n                required // set required attribute to use brower\'s HTML5 input validation\n              />\n            </Field>\n          </Box>\n          <Box>\n            <Field label="Radio Input" validated={validated}>\n              <Radio\n                label="Radio 1"\n                my={2}\n                value={"radio1"}\n                checked={radioValue === "radio1"}\n                onChange={handleRadio}\n                required\n              />\n              <Radio\n                label="Radio 2"\n                my={2}\n                value={"radio2"}\n                checked={radioValue === "radio2"}\n                onChange={handleRadio}\n              />\n              <Radio\n                label="Radio 3"\n                my={2}\n                value={"radio3"}\n                checked={radioValue === "radio3"}\n                onChange={handleRadio}\n              />\n            </Field>\n          </Box>\n          <Box>\n            {/* Use the validated state to update UI */}\n            <Button type="submit" disabled={!validated}>\n              Submit Form\n            </Button>\n          </Box>\n        </Form>\n      </Box>\n      <Card my={4}>\n        <Heading as={"h4"}>Form values</Heading>\n        <Text>Valid form: {validated.toString()}</Text>\n        <Text>Email value: {inputValue}</Text>\n        <Text>Select value: {selectValue}</Text>\n        <Text>Checkbox value: {checkboxValue.toString()}</Text>\n        <Text>Radio value: {radioValue}</Text>\n        <Checkbox\n          label="Toggle Form Validation"\n          value={formValidated}\n          onChange={e => setFormValidated(!formValidated)}\n        />\n        <Text>Form validated: {formValidated.toString()}</Text>\n      </Card>\n    </Box>\n  );\n}\n')),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(i.Z,{mdxType:"Table"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Prop"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Default"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"validated"),(0,o.kt)("td",null,"bool (optional)"),(0,o.kt)("td",null,"false"),(0,o.kt)("td",null,"Shows the input validation styles when true by adding the `.was-validated` class to the form element.")))),(0,o.kt)("br",null),"Form uses COMMON, LAYOUT, POSITION, FLEXBOX, BORDERS groups of Styled System props.")}c.isMDXComponent=!0}}]);