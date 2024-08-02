(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[9290],{65345:e=>{e.exports={content:["article",["p","Used to select a date or time."],["h3","Rules"],["ul",["li",["p","At most accurate to seconds."]]],["h2","API"],["pre",{lang:"ts",highlighted:'type Precision <span class="token operator">=</span>\n  <span class="token operator">|</span> <span class="token string">\'week\'</span>\n  <span class="token operator">|</span> <span class="token string">\'week-day\'</span>\n  <span class="token operator">|</span> <span class="token string">\'year\'</span>\n  <span class="token operator">|</span> <span class="token string">\'month\'</span>\n  <span class="token operator">|</span> <span class="token string">\'day\'</span>\n  <span class="token operator">|</span> <span class="token string">\'hour\'</span>\n  <span class="token operator">|</span> <span class="token string">\'minute\'</span>\n  <span class="token operator">|</span> <span class="token string">\'second\'</span>\n\ntype DatePickerFilter <span class="token operator">=</span> Partial<span class="token operator">&lt;</span>\n  Record<span class="token operator">&lt;</span>\n    Precision<span class="token punctuation">,</span>\n    <span class="token punctuation">(</span>\n      val<span class="token punctuation">:</span> <span class="token keyword">number</span><span class="token punctuation">,</span>\n      extend<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        date<span class="token punctuation">:</span> Date\n      <span class="token punctuation">}</span>\n    <span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">boolean</span>\n  <span class="token operator">></span>\n<span class="token operator">></span>'},["code","type Precision =\n  | 'week'\n  | 'week-day'\n  | 'year'\n  | 'month'\n  | 'day'\n  | 'hour'\n  | 'minute'\n  | 'second'\n\ntype DatePickerFilter = Partial<\n  Record<\n    Precision,\n    (\n      val: number,\n      extend: {\n        date: Date\n      }\n    ) => boolean\n  >\n>"]],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","precision"],["td","Precision"],["td",["code","Precision"]],["td",["code","day"]],["td",["code","5.1.0"]]],["tr",["td","value"],["td","the currently selected value"],["td","Date"],["td","-"],["td"]],["tr",["td","defaultValue"],["td","the default selected value"],["td","Date"],["td","-"],["td"]],["tr",["td","minDate"],["td","minimum date"],["td","Date"],["td","2000-1-1"],["td"]],["tr",["td","maxDate"],["td","maximum date"],["td","Date"],["td","2030-1-1"],["td"]],["tr",["td","onChange"],["td","change handler"],["td",["code","(value: Date) => void"]],["td","-"],["td"]],["tr",["td","onValueChange"],["td","fire when picker col change"],["td",["code","(value: Date, index: number) => void"]],["td","-"],["td"]],["tr",["td","renderLabel"],["td","The function to custom rendering the label shown on a column. ",["code","type"]," means any value in ",["code","precision"],", ",["code","data"]," means the default number"],["td",["code","(type:Precision / 'now', data: number) => ReactNode"]],["td","-"],["td"]],["tr",["td","locale"],["td","international, can override the configuration of the global ",["a",{title:null,href:"/components/locale-provider"},"LocaleProvider"]],["td","Object: Object: {okText, dismissText, extra, ",["code","DatePickerLocale:{ year,month,day,hour,minute,am,pm }"],"}"],["td","-"]],["tr",["td","filter"],["td","Filter available time"],["td",["code","DatePickerFilter"]],["td","-"],["td",["code","5.1.0"]]]]],["p","In addition, the following properties of ",["a",{title:null,href:"/components/picker"},"Picker"]," are supported: ",["code","onPickerChange"]," ",["code","onVisibleChange"]," ",["code","style"]," ",["code","styles"]," ",["code","itemStyle"]," ",["code","itemHeight"]," ",["code","numberOfLines"]," ",["code","title"]," ",["code","okText"]," ",["code","dismissText"]," ",["code","okButtonProps"]," ",["code","dismissButtonProps"]," ",["code","visible"]," ",["code","children"]," ",["code","renderMaskTop"]," ",["code","renderMaskBottom"]],["h3","Children"],["p","Same as ",["a",{title:null,href:"/components/picker#children"},"Picker"],", except type ",["code","format"]," is different："],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","format"],["td","format the selected value"],["td",["code","(value: Date) => date string"]],["td","import ",["a",{title:null,href:"https://day.js.org/docs/en/parse/string-format"},"Day.js Format"],", precision:",["code","YYYY-MM-DD"],",",["code","YYYY-MM-DD HH:mm:ss"]]]]],["h3","Ref"],["p","Same as ",["a",{title:null,href:"/components/picker#ref"},"Picker"]]],meta:{category:"Components",type:"Data Entry",title:"DatePicker",filename:"components/date-picker/index.en-US.md"}}}}]);