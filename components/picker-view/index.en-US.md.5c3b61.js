(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[9586],{39025:e=>{e.exports={content:["article",["p","PickerView's functions like Picker, but it is rendered directly in the area instead of the pop-up window."],["h2","API"],["h3","Props"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","data"],["td","data source"],["td",["code","PickerColumn"]," / ",["code","PickerColumn[]"]],["td","-"]],["tr",["td","value"],["td","Selected options"],["td",["code","PickerValue[]"]],["td","-"]],["tr",["td","defaultValue"],["td","Default selected options"],["td",["code","PickerValue[]"]],["td","-"]],["tr",["td","cascade"],["td","whether cascade ",["br"],"child cascade get from ",["code","data[].children"]],["td","Boolean"],["td",["code","true"]]],["tr",["td","cols"],["td","col numbers"],["td","Number"],["td",["code","3"]]],["tr",["td","onChange"],["td","selected callback function, can use ",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form"]],["td",["code","(value: PickerValue[], extend: PickerValueExtend) => void"]],["td","-"]],["tr",["td","renderLabel"],["td","The function to custom rendering the label shown on a column"],["td",["code","(item: PickerColumnItem, index: number) => ReactNode"]],["td",["code","(item) => item.label"]]],["tr",["td","loading"],["td","Should the Picker displays as loading state"],["td","Boolean"],["td","-"]],["tr",["td","loadingContent"],["td","The loading content displayed in loading state"],["td","ReactNode"],["td",["code","<ActivityIndicator/>"]]],["tr",["td","indicatorStyle"],["td","style of default Indicator"],["td","Object"],["td","-"]]]],["p","For the type definition of  ",["code","PickerColumnItem"]," ",["code","PickerColumn"]," ",["code","PickerValue"]," ",["code","PickerValueExtend"],", please refer to the document of ",["a",{title:null,href:"/components/picker/"},"Picker"],"."],["h3","Custom Style"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","style"],["td","style"],["td",["code","StyleProp<ViewStyle>"]],["td","-"]],["tr",["td","styles"],["td","Semantic DOM style"],["td",["a",{title:null,href:"#pickerviewstyle-interface"},"PickerViewStyle"]],["td","-"]],["tr",["td","itemStyle"],["td","style to apply to each of the item labels"],["td",["code","StyleProp<TextStyle>"]],["td","-"]],["tr",["td","itemHeight"],["td","Height of option item, calculated by ",["code","numberOfLines"]," when without value; ",["code","itemStyle"]," was not allowed to set ",["code","{height}"]],["td","Number"],["td","-"]],["tr",["td","numberOfLines"],["td","Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number"],["td","Number"],["td",["code","1"]]]]],["h4","PickerViewStyle interface"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">interface</span> <span class="token class-name">PickerViewStyle</span> <span class="token punctuation">{</span>\n  wrappper<span class="token punctuation">:</span> ViewStyle\n  wheelWrapper<span class="token punctuation">:</span> ViewStyle\n  mask<span class="token punctuation">:</span> ViewStyle\n  maskTop<span class="token punctuation">:</span> ViewStyle\n  maskMiddle<span class="token punctuation">:</span> ViewStyle\n  maskBottom<span class="token punctuation">:</span> ViewStyle\n<span class="token punctuation">}</span>'},["code","interface PickerViewStyle {\n  wrappper: ViewStyle\n  wheelWrapper: ViewStyle\n  mask: ViewStyle\n  maskTop: ViewStyle\n  maskMiddle: ViewStyle\n  maskBottom: ViewStyle\n}"]],["h4","Mask View"],["p","Support custom mask style, such as using the gradient component ",["code","<LinearGradient />"],". Default is white translucency."],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","renderMaskTop"],["td","The function to custom rendering the mask top half view"],["td",["code","()=> ReactNode"]],["td",["code","<View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />"]]],["tr",["td","renderMaskBottom"],["td","The function to custom rendering the mask bottom half view"],["td",["code","()=> ReactNode"]],["td",["code","<View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />"]]]]],["h2","FAQ"],["h3","On the Android platform, when using ",["code","PickerView"]," nested in ",["code","ScrollView"],", the Picker Item cannot slide. What should I do?"],["p","Support in ",["code","5.1.3"],". Set the ",["code","nestedScrollEnabled"]," property of ",["code","ScrollView"]," to ",["code","true"],"."],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span> <span class="token attr-name">nestedScrollEnabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token operator">...</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span>'},["code","<ScrollView nestedScrollEnabled={true}>\n  ...\n  <PickerView />\n</ScrollView>"]]],meta:{category:"Components",type:"Data Entry",title:"PickerView",filename:"components/picker-view/index.en-US.md"}}}}]);