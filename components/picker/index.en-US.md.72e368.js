(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[3675],{5967:t=>{t.exports={content:["article",["p","Choose from a set of data, e.g. Country choice."],["h3","Rules"],["ul",["li",["p","Try to use Picker to help users complete the input, to avoid the user through the keyboard directly input."]],["li",["p","DatePicker is Picker's specific pattern."]]],["h2","API"],["h3","Props"],["pre",{lang:"ts",highlighted:'type PickerColumnItem <span class="token operator">=</span> <span class="token punctuation">{</span>\n  label<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> ReactNode\n  value<span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">number</span>\n  key<span class="token operator">?</span><span class="token punctuation">:</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">number</span>\n  children<span class="token operator">?</span><span class="token punctuation">:</span> PickerColumnItem<span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n\ntype PickerColumn <span class="token operator">=</span> PickerColumnItem<span class="token punctuation">[</span><span class="token punctuation">]</span>\n\ntype PickerValue <span class="token operator">=</span> <span class="token keyword">string</span> <span class="token operator">|</span> <span class="token keyword">number</span>\n\ntype PickerValueExtend <span class="token operator">=</span> <span class="token punctuation">{</span>\n  columns<span class="token punctuation">:</span> PickerColumn<span class="token punctuation">[</span><span class="token punctuation">]</span>\n  items<span class="token punctuation">:</span> <span class="token punctuation">(</span>PickerColumnItem <span class="token operator">|</span> undefined<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code","type PickerColumnItem = {\n  label: string | ReactNode\n  value: string | number\n  key?: string | number\n  children?: PickerColumnItem[]\n}\n\ntype PickerColumn = PickerColumnItem[]\n\ntype PickerValue = string | number\n\ntype PickerValueExtend = {\n  columns: PickerColumn[]\n  items: (PickerColumnItem | undefined)[]\n}"]],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","data"],["td","data source"],["td",["code","PickerColumn"]," / ",["code","PickerColumn[]"]],["td","-"],["td"]],["tr",["td","value"],["td","Selected options"],["td",["code","PickerValue[]"]],["td","-"],["td"]],["tr",["td","defaultValue"],["td","Default selected options"],["td",["code","PickerValue[]"]],["td","-"],["td"]],["tr",["td","cascade"],["td","whether cascade ",["br"],"child cascade get from ",["code","data[].children"]],["td","Boolean"],["td",["code","true"]],["td"]],["tr",["td","cols"],["td","col numbers"],["td","Number"],["td",["code","3"]],["td"]],["tr",["td","onChange"],["td","selected callback function, can use ",["a",{title:null,href:"/components/form"},"Form"]],["td",["code","(value: PickerValue[], extend: PickerValueExtend) => void"]],["td","-"],["td"]],["tr",["td","onPickerChange"],["td","trigger on each column of selected data is changed"],["td",["code","(value: PickerValue[], index: number) => void"]],["td","-"],["td"]],["tr",["td","onVisibleChange"],["td","visible state change callback"],["td",["code","(visible: bool): void"]],["td","-"],["td"]],["tr",["td","renderLabel"],["td","The function to custom rendering the label shown on a column"],["td",["code","(item: PickerColumnItem, itemIndex: number, colIndex: number) => ReactNode"]],["td",["code","(item) => item.label"]],["td",["code","5.2.2"]]],["tr",["td","locale"],["td","international, can override the configuration of the global ",["a",{title:null,href:"/components/provider"},"Provider"],"'s ",["code","locale"]],["td","Object: Object: {okText, dismissText, extra}"],["td","-"],["td"]],["tr",["td","title"],["td","title"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","okText"],["td","ok text"],["td","String"],["td",["code","确定"]],["td"]],["tr",["td","dismissText"],["td","dismiss text"],["td","String"],["td",["code","取消"]],["td"]],["tr",["td","onOk"],["td","handler called when click ok"],["td",["code","(value: PickerValue[], extend: PickerValueExtend) => void"]],["td","-"],["td"]],["tr",["td","onDismiss"],["td","handler called when click cancel"],["td","(): void"],["td","-"],["td"]],["tr",["td","okButtonProps"],["td","The ok button props"],["td",["a",{title:null,href:"https://reactnative.dev/docs/touchablehighlight"},"TouchableHighlightProps"]],["td",["code","{ activeOpacity:1, underlayColor:'#ddd' }"]],["td",["code","5.1.3"]]],["tr",["td","dismissButtonProps"],["td","The dismiss button props"],["td",["a",{title:null,href:"https://reactnative.dev/docs/touchablehighlight"},"TouchableHighlightProps"]],["td",["code","{ activeOpacity:1, underlayColor:'#ddd' }"]],["td",["code","5.1.3"]]],["tr",["td","visible"],["td","Whether to show or hide the Picker"],["td","Boolean"],["td","-"],["td"]],["tr",["td","loading"],["td","Should the Picker displays as loading state"],["td","Boolean"],["td","-"],["td",["code","5.1.0"]]],["tr",["td","loadingContent"],["td","The loading content displayed in loading state"],["td","ReactNode"],["td","-"],["td",["code","5.1.0"]]],["tr",["td","indicatorStyle"],["td","style of default Indicator"],["td","Object"],["td","-"],["td"]]]],["h3","Custom Style"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","style"],["td","style"],["td",["code","StyleProp<ViewStyle>"]],["td","-"],["td"]],["tr",["td","styles"],["td","inner component styles"],["td",["a",{title:null,href:"#pickerstyle-interface"},"PickerStyle"]," & ",["a",{title:null,href:"/components/picker-view/#pickerviewstyle-interface"},"PickerViewStyle"]],["td","-"],["td",["code","5.1.0"],"refactored"]],["tr",["td","itemStyle"],["td","style to apply to each of the item labels"],["td",["code","StyleProp<TextStyle>"]],["td","-"],["td"]],["tr",["td","itemHeight"],["td","Height of option item, calculated by ",["code","numberOfLines"]," when without value; ",["code","itemStyle"]," was not allowed to set ",["code","{height}"]],["td","Number"],["td","-"],["td"]],["tr",["td","numberOfLines"],["td","Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number"],["td","Number"],["td",["code","1"]],["td"]]]],["h3","PickerStyle interface"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">interface</span> <span class="token class-name">PickerStyle</span> <span class="token keyword">extends</span> <span class="token class-name">Partial</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>PickerViewStyle</span><span class="token punctuation">></span></span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// modal style</span>\n  modal<span class="token punctuation">:</span> ViewStyle\n  container<span class="token punctuation">:</span> ViewStyle\n  header<span class="token punctuation">:</span> ViewStyle\n  headerItem<span class="token punctuation">:</span> ViewStyle\n  actionText<span class="token punctuation">:</span> TextStyle\n  title<span class="token punctuation">:</span> TextStyle\n  okText<span class="token punctuation">:</span> TextStyle\n  dismissText<span class="token punctuation">:</span> TextStyle\n<span class="token punctuation">}</span>'},["code","interface PickerStyle extends Partial<PickerViewStyle> {\n  // modal style\n  modal: ViewStyle\n  container: ViewStyle\n  header: ViewStyle\n  headerItem: ViewStyle\n  actionText: TextStyle\n  title: TextStyle\n  okText: TextStyle\n  dismissText: TextStyle\n}"]],["h4","Mask View"],["p","New in ",["code","5.1.0"],". Support custom mask style, such as using the gradient component ",["code","<LinearGradient />"],". Default is white translucency."],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"]]],["tbody",["tr",["td","renderMaskTop"],["td","The function to custom rendering the mask top half view"],["td",["code","()=> ReactNode"]],["td",["code","<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />"]]],["tr",["td","renderMaskBottom"],["td","The function to custom rendering the mask bottom half view"],["td",["code","()=> ReactNode"]],["td",["code","<View style={{ flex: 1, opacity:0.8, backgroundColor: theme.fill_base }} />"]]]]],["ul",["li",["p","Theme color ",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/style/themes/default.tsx#L24"},"theme.fill_base"]," = ",["code","#ffffff"]]]],["h3","Custom Children"],["p","Picker's children is best to ",["a",{title:null,href:"/components/list/#List.Item"},"List.Item"],", if not, need to be a custom component (the ",["code","onPress"],"/",["code","extra"]," props need to be handled in the component):"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","children"],["td","usually ",["code","List.Item"]],["td",["code","ReactNode"],"/",["code","({disabled, extra, value, toggle})=>ReactNode"]],["td","-"],["td",["code","5.2.1"]," add function as Children"]],["tr",["td","extra"],["td","Picker's children ",["code","extra"]," prop, display when no ",["code","value"]],["td","String"],["td",["code","please select"]],["td"]],["tr",["td","format"],["td","a function that formats the selected value"],["td","(labels: string[]): any"],["td",["code","(labels) => { return labels.join(','); }"]],["td"]],["tr",["td","triggerType"],["td","Press event name"],["td","String"],["td",["code","onPress"]],["td"]],["tr",["td","disabled"],["td","set disabled"],["td","Boolean"],["td",["code","false"]],["td"]]]],["h3","PickerActions"],["table",["thead",["tr",["th","Properties"],["th","Descrition"],["th","Type"]]],["tbody",["tr",["td","close"],["td","Close Picker"],["td",["code","() => void"]]],["tr",["td","open"],["td","Open Picker"],["td",["code","() => void"]]],["tr",["td","toggle"],["td","Toggle the visible state of Picker"],["td",["code","() => void"]]]]],["h3","Ref"],["p","Same as PickerActions"]],meta:{category:"Components",type:"Data Entry",title:"Picker",filename:"components/picker/index.en-US.md"}}}}]);