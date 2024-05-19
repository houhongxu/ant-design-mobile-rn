(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[2583],{68215:t=>{t.exports={content:["article",["p","在一组预设数据中进行选择，e.g. 省市区选择。"],["h3","规则"],["ul",["li",["p","尽量使用 Picker 来帮助用户完成输入，避免用户通过键盘直接输入。"]],["li",["p","DatePicker 是 Picker 的特定模式。"]]],["h2","API"],["h3","属性"],["pre",{lang:"ts",highlighted:'type PickerColumnItem <span class="token operator">=</span> <span class="token punctuation">{</span>\n  label<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> ReactNode\n  value<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">number</span>\n  key<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">number</span>\n  children<span class="token operator">?</span><span class="token punctuation">:</span> PickerColumnItem<span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\ntype PickerColumn <span class="token operator">=</span> PickerColumnItem<span class="token punctuation">[</span><span class="token punctuation">]</span>\n\ntype PickerValue <span class="token operator">=</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">number</span>\n\ntype PickerValueExtend <span class="token operator">=</span> <span class="token punctuation">{</span>\n  columns<span class="token punctuation">:</span> PickerColumn<span class="token punctuation">[</span><span class="token punctuation">]</span>\n  items<span class="token punctuation">:</span> <span class="token punctuation">(</span>PickerColumnItem <span class="token operator">|</span> undefined<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code","type PickerColumnItem = {\n  label: string | ReactNode\n  value: string | number\n  key?: string | number\n  children?: PickerColumnItem[]\n}\n\ntype PickerColumn = PickerColumnItem[]\n\ntype PickerValue = string | number\n\ntype PickerValueExtend = {\n  columns: PickerColumn[]\n  items: (PickerColumnItem | undefined)[]\n}"]],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","data"],["td","数据源"],["td",["code","PickerColumn"]," / ",["code","PickerColumn[]"]],["td","-"],["td"]],["tr",["td","value"],["td","选中项"],["td",["code","PickerValue[]"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","默认选中项"],["td",["code","PickerValue[]"]],["td","-"],["td"]],["tr",["td","cascade"],["td","是否级联。",["br"],"子级来自",["code","data"],"参数内的",["code","children"]],["td","Boolean"],["td",["code","true"]],["td"]],["tr",["td","cols"],["td","列数"],["td","Number"],["td",["code","3"]],["td"]],["tr",["td","onChange"],["td","选中后的回调，可使用",["a",{title:null,href:"https://github.com/react-component/form"},"rc-form"]],["td",["code","(value: PickerValue[], extend: PickerValueExtend) => void"]],["td","-"],["td"]],["tr",["td","onPickerChange"],["td","每列数据选择变化后的回调函数"],["td",["code","(value: PickerValue[], index: number) => void"]],["td","-"],["td"]],["tr",["td","onVisibleChange"],["td","当显隐状态变化时回调函数"],["td",["code","(visible: bool): void"]],["td","-"],["td"]],["tr",["td","renderLabel"],["td","自定义渲染每列展示的内容"],["td",["code","(item: PickerColumnItem, index: number) => ReactNode"]],["td",["code","(item) => item.label"]],["td"]],["tr",["td","locale"],["td","国际化，可覆盖全局",["a",{title:null,href:"/components/locale-provider-cn"},"LocaleProvider"],"的配置"],["td","Object: {okText, dismissText, extra}"],["td","-"],["td"]],["tr",["td","title"],["td","大标题"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","okText"],["td","选中的文案"],["td","String"],["td",["code","确定"]],["td"]],["tr",["td","dismissText"],["td","取消选中的文案"],["td","String"],["td",["code","取消"]],["td"]],["tr",["td","onOk"],["td","点击选中时执行的回调"],["td",["code","(value: PickerValue[], extend: PickerValueExtend) => void"]],["td","-"],["td"]],["tr",["td","onDismiss"],["td","点击取消时执行的回调"],["td","(): void"],["td","-"],["td"]],["tr",["td","okButtonProps"],["td","ok 按钮 props"],["td",["a",{title:null,href:"https://reactnative.dev/docs/touchablehighlight"},"TouchableHighlightProps"]],["td",["code","{ activeOpacity:1, underlayColor:'#ddd' }"]],["td",["code","5.1.3"]]],["tr",["td","dismissButtonProps"],["td","dismiss 按钮 props"],["td",["a",{title:null,href:"https://reactnative.dev/docs/touchablehighlight"},"TouchableHighlightProps"]],["td",["code","{ activeOpacity:1, underlayColor:'#ddd' }"]],["td",["code","5.1.3"]]],["tr",["td","visible"],["td","是否显示选择器"],["td","Boolean"],["td","-"],["td"]],["tr",["td","loading"],["td","是否处于加载状态"],["td","Boolean"],["td","-"],["td"]],["tr",["td","loadingContent"],["td","加载状态下展示的内容"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","indicatorStyle"],["td","默认Indicator的样式"],["td","Object"],["td","-"],["td"]]]],["h3","自定义样式"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","style"],["td","外部样式"],["td",["code","StyleProp<ViewStyle>"]],["td","-"]],["tr",["td","styles"],["td","内部组件样式集"],["td","同 ",["a",{title:null,href:"/components//picker-view-cn/#pickerviewstyle-语义化样式"},"PickerViewStyle"]],["td","-"]],["tr",["td","itemStyle"],["td","每列样式"],["td",["code","StyleProp<TextStyle>"]],["td","-"]],["tr",["td","itemHeight"],["td","每列固定高度，未设值时会根据",["code","numberOfLines"],"动态计算；",["code","itemStyle"],"属性设置",["code","{height}"],"值是无效的"],["td","Number"],["td","-"]],["tr",["td","numberOfLines"],["td","允许每列显示行数"],["td","Number"],["td",["code","1"]]]]],["h4","遮罩层"],["p","还支持自定义遮罩样式，如使用渐变组件",["code","<LinearGradient />"],"。当前默认为白色半透明。"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"]]],["tbody",["tr",["td","renderMaskTop"],["td","自定义渲染上半部分遮罩层"],["td",["code","()=> ReactNode"]],["td",["code","<View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />"]]],["tr",["td","renderMaskBottom"],["td","自定义渲染下半部分遮罩层"],["td",["code","()=> ReactNode"]],["td",["code","<View style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }} />"]]]]],["h3","自定义Children"],["p","通常是 ",["a",{title:null,href:"/components/list-cn/#List.Item"},"List.Item"]," ，以下属性也是围绕着",["code","List.Item"],"展开："],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","children"],["td","Picker占位组件，通常是",["code","List.Item"]],["td",["code","ReactNode"]," / ",["code","({extra, value, toggle})=>ReactNode"]],["td","-"],["td",["code","5.2.0"],"新增函数作为Children"]],["tr",["td","extra"],["td","Picker children的",["code","extra"],"属性，无选中项时展示"],["td","String"],["td",["code","请选择"]],["td"]],["tr",["td","format"],["td","格式化选中值的函数，用于回显在",["code","extra"],"属性上"],["td","(labels: string[]): any"],["td",["code","(labels) => { return labels.join(','); }"]],["td"]],["tr",["td","triggerType"],["td","按钮事件名称"],["td","String"],["td",["code","onPress"]],["td"]],["tr",["td","disabled"],["td","是否不可用"],["td","Boolean"],["td",["code","false"]],["td"]]]],["h3","PickerActions"],["table",["thead",["tr",["th","属性"],["th","说明"],["th","类型"]]],["tbody",["tr",["td","close"],["td","关闭 Picker"],["td",["code","() => void"]]],["tr",["td","open"],["td","显示 Picker"],["td",["code","() => void"]]],["tr",["td","toggle"],["td","切换 Picker 的显示和隐藏状态"],["td",["code","() => void"]]]]],["h3","Ref"],["p","同 PickerActions"]],meta:{category:"Components",type:"Data Entry",title:"Picker",subtitle:"选择器",filename:"components/picker/index.zh-CN.md"}}}}]);