(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[7592],{95378:t=>{t.exports={content:["article",["p","PickerView 的功能类似于 Picker ，但它是直接渲染在区域中，而不是弹出窗口。"],["h2","API"],["h3","属性"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","data"],["td","数据源"],["td",["code","PickerColumn"]," / ",["code","PickerColumn[]"]],["td","-"],["td"]],["tr",["td","value"],["td","选中项"],["td",["code","PickerValue[]"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","默认选中项"],["td",["code","PickerValue[]"]],["td","-"],["td"]],["tr",["td","cascade"],["td","是否级联。",["br"],"子级来自",["code","data"],"参数内的",["code","children"],"属性"],["td","Boolean"],["td",["code","true"]],["td"]],["tr",["td","cols"],["td","列数"],["td","Number"],["td",["code","3"]],["td"]],["tr",["td","onChange"],["td","选中后的回调，可配合使用",["a",{title:null,href:"/components/form"},"Form"]],["td",["code","(value: PickerValue[], extend: PickerValueExtend) => void"]],["td","-"],["td"]],["tr",["td","renderLabel"],["td","自定义渲染每列展示的内容"],["td",["code","(item: PickerColumnItem, itemIndex: number, colIndex: number) => ReactNode"]],["td",["code","(item) => item.label"]],["td",["code","5.2.2"]]],["tr",["td","loading"],["td","是否处于加载状态"],["td","Boolean"],["td","-"],["td",["code","5.1.0"]]],["tr",["td","loadingContent"],["td","加载状态下展示的内容"],["td","ReactNode"],["td",["code","<ActivityIndicator/>"]],["td",["code","5.1.0"]]],["tr",["td","indicatorStyle"],["td","默认Indicator的样式"],["td","Object"],["td","-"],["td"]]]],["p","关于 ",["code","PickerColumnItem"]," ",["code","PickerColumn"]," ",["code","PickerValue"]," ",["code","PickerValueExtend"]," 的类型定义，请参考 ",["a",{title:null,href:"/components/picker-cn/"},"Picker"]," 的文档。"],["h3","自定义样式"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","style"],["td","外部样式"],["td",["code","StyleProp<ViewStyle>"]],["td","-"],["td"]],["tr",["td","styles"],["td","语义化结构 style"],["td",["a",{title:null,href:"#pickerviewstyle-语义化样式"},"PickerViewStyle"]],["td","-"],["td",["code","5.1.0"],"重构了样式"]],["tr",["td","itemStyle"],["td","每列样式"],["td",["code","StyleProp<TextStyle>"]],["td","-"],["td"]],["tr",["td","itemHeight"],["td","每列固定高度，未设值时会根据",["code","numberOfLines"],"动态计算；",["code","itemStyle"],"属性设置",["code","{height}"],"值是无效的"],["td","Number"],["td","-"],["td"]],["tr",["td","numberOfLines"],["td","允许每列显示行数"],["td","Number"],["td",["code","1"]],["td"]]]],["h4","PickerViewStyle 语义化样式"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">interface</span> <span class="token class-name">PickerViewStyle</span> <span class="token punctuation">{</span>\n  wrappper<span class="token punctuation">:</span> ViewStyle\n  wheelWrapper<span class="token punctuation">:</span> ViewStyle\n\n  <span class="token comment" spellcheck="true">// item style</span>\n  itemWrap<span class="token punctuation">:</span> ViewStyle\n  itemStyle<span class="token punctuation">:</span> TextStyle\n  itemActiveStyle<span class="token punctuation">:</span> TextStyle <span class="token comment" spellcheck="true">// `5.2.2`新增</span>\n\n  <span class="token comment" spellcheck="true">// 遮罩层</span>\n  mask<span class="token punctuation">:</span> ViewStyle\n  maskTop<span class="token punctuation">:</span> ViewStyle\n  maskMiddle<span class="token punctuation">:</span> ViewStyle\n  maskBottom<span class="token punctuation">:</span> ViewStyle\n<span class="token punctuation">}</span>'},["code","interface PickerViewStyle {\n  wrappper: ViewStyle\n  wheelWrapper: ViewStyle\n\n  // item style\n  itemWrap: ViewStyle\n  itemStyle: TextStyle\n  itemActiveStyle: TextStyle // `5.2.2`新增\n\n  // 遮罩层\n  mask: ViewStyle\n  maskTop: ViewStyle\n  maskMiddle: ViewStyle\n  maskBottom: ViewStyle\n}"]],["h4","遮罩层"],["p",["code","5.1.0"],"新增。还支持自定义遮罩样式，如使用渐变组件",["code","<LinearGradient />"],"。当前默认为白色半透明。"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","renderMaskTop"],["td","自定义渲染上半部分遮罩层"],["td",["code","(theme)=> ReactNode"]],["td",["code","<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />"]]],["tr",["td","renderMaskBottom"],["td","自定义渲染下半部分遮罩层"],["td",["code","(theme)=> ReactNode"]],["td",["code","<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />"]]]]],["ul",["li",["p","其中主题色 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx#L24"},"theme.fill_base"]," = ",["code","#ffffff"]],["h2","FAQ"]]],["h3","在Android平台，ScrollView中嵌套使用PickerView，会发生Picker Item不能滑动的情况，怎么办？"],["p",["code","5.1.3"],"新增支持。 设置",["code","ScrollView"],"的",["code","nestedScrollEnabled"],"属性为",["code","true"],"即可。"],["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ScrollView</span> <span class="token attr-name">nestedScrollEnabled</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n  <span class="token operator">...</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerView</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ScrollView</span><span class="token punctuation">></span></span>'},["code","<ScrollView nestedScrollEnabled={true}>\n  ...\n  <PickerView />\n</ScrollView>"]]],meta:{category:"Components",type:"Data Entry",title:"PickerView",subtitle:"选择器",filename:"components/picker-view/index.zh-CN.md"}}}}]);