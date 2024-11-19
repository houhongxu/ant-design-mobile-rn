(self.webpackChunk_ant_design_react_native=self.webpackChunk_ant_design_react_native||[]).push([[712],{5121:n=>{n.exports={content:["article",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile-rn/blob/master/components/locale-provider/demo/basic.tsx"},"Demo Source Code"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> View <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>\n  DatePicker<span class="token punctuation">,</span>\n  List<span class="token punctuation">,</span>\n  Pagination<span class="token punctuation">,</span>\n  Picker<span class="token punctuation">,</span>\n  SearchBar<span class="token punctuation">,</span>\n  WhiteSpace<span class="token punctuation">,</span>\n  WingBlank<span class="token punctuation">,</span>\n  Provider<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> enUS <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native/es/locale-provider/en_US\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> esES <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native/es/locale-provider/es_ES\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ruRU <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native/es/locale-provider/ru_RU\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> zhCN <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native/es/locale-provider/zh_CN\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ptBR <span class="token keyword">from</span> <span class="token string">\'@ant-design/react-native/es/locale-provider/pt_BR\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> maxDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2018</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> minDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token number">2015</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> seasons <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2013\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'2014\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'春\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'春\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      label<span class="token punctuation">:</span> <span class="token string">\'夏\'</span><span class="token punctuation">,</span>\n      value<span class="token punctuation">:</span> <span class="token string">\'夏\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Page <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>View</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Pagination</span> <span class="token attr-name">total</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span></span> <span class="token attr-name">current</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> backgroundColor<span class="token punctuation">:</span> <span class="token string">\'white\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DatePicker</span>\n        <span class="token attr-name">mode</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>date<span class="token punctuation">"</span></span>\n        <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Select</span> <span class="token attr-name">date"</span>\n        <span class="token attr-name">minDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>minDate<span class="token punctuation">}</span></span>\n        <span class="token attr-name">maxDate</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>maxDate<span class="token punctuation">}</span></span>\n      <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>DatePicker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>DatePicker</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Picker</span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>seasons<span class="token punctuation">}</span></span> <span class="token attr-name">cascade</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token boolean">false</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Picker<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Picker</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SearchBar</span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Search<span class="token punctuation">"</span></span> <span class="token attr-name">showCancelButton</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>View</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">LocaleProviderExample</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>onChange <span class="token operator">=</span> value <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        locale<span class="token punctuation">:</span> value<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      locale<span class="token punctuation">:</span> <span class="token string">\'English\'</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> locale <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">const</span> languages <span class="token operator">=</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'中国\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'中国\'</span><span class="token punctuation">,</span>\n        language<span class="token punctuation">:</span> zhCN<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'English\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'English\'</span><span class="token punctuation">,</span>\n        language<span class="token punctuation">:</span> enUS<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'Русский\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Русский\'</span><span class="token punctuation">,</span>\n        language<span class="token punctuation">:</span> ruRU<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'Español\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Español\'</span><span class="token punctuation">,</span>\n        language<span class="token punctuation">:</span> esES<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        value<span class="token punctuation">:</span> <span class="token string">\'Português - BR\'</span><span class="token punctuation">,</span>\n        label<span class="token punctuation">:</span> <span class="token string">\'Português - BR\'</span><span class="token punctuation">,</span>\n        language<span class="token punctuation">:</span> ptBR<span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> currentLocale <span class="token operator">=</span> languages<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span>item <span class="token operator">=</span><span class="token operator">></span> item<span class="token punctuation">.</span>value <span class="token operator">===</span> locale<span class="token punctuation">)</span>\n      <span class="token punctuation">.</span>language<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Picker</span>\n          <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>languages<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">cols</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">value</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">[</span>locale<span class="token punctuation">]</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>List.Item</span> <span class="token attr-name">arrow</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>horizontal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Choose language<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>List.Item</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Picker</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Provider</span> <span class="token attr-name">locale</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>currentLocale<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Page</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Provider</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","import React from 'react';\nimport { View } from 'react-native';\nimport {\n  DatePicker,\n  List,\n  Pagination,\n  Picker,\n  SearchBar,\n  WhiteSpace,\n  WingBlank,\n  Provider,\n} from '@ant-design/react-native';\nimport enUS from '@ant-design/react-native/es/locale-provider/en_US';\nimport esES from '@ant-design/react-native/es/locale-provider/es_ES';\nimport ruRU from '@ant-design/react-native/es/locale-provider/ru_RU';\nimport zhCN from '@ant-design/react-native/es/locale-provider/zh_CN';\nimport ptBR from '@ant-design/react-native/es/locale-provider/pt_BR';\n\nconst maxDate = new Date(2018, 11, 3, 22, 0);\nconst minDate = new Date(2015, 7, 6, 8, 30);\nconst seasons = [\n  [\n    {\n      label: '2013',\n      value: '2013',\n    },\n    {\n      label: '2014',\n      value: '2014',\n    },\n  ],\n  [\n    {\n      label: '春',\n      value: '春',\n    },\n    {\n      label: '夏',\n      value: '夏',\n    },\n  ],\n];\nconst Page = () => (\n  <View>\n    <Pagination total={5} current={1} />\n    <WhiteSpace />\n    <List style={{ backgroundColor: 'white' }}>\n      <DatePicker\n        mode=\"date\"\n        title=\"Select date\"\n        minDate={minDate}\n        maxDate={maxDate}\n      >\n        <List.Item arrow=\"horizontal\">DatePicker</List.Item>\n      </DatePicker>\n      <Picker data={seasons} cascade={false}>\n        <List.Item arrow=\"horizontal\">Picker</List.Item>\n      </Picker>\n      <WhiteSpace />\n      <SearchBar placeholder=\"Search\" showCancelButton />\n    </List>\n  </View>\n);\nexport default class LocaleProviderExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onChange = value => {\n      this.setState({\n        locale: value[0],\n      });\n    };\n    this.state = {\n      locale: 'English',\n    };\n  }\n  render() {\n    const { locale } = this.state;\n    const languages = [\n      {\n        value: '中国',\n        label: '中国',\n        language: zhCN,\n      },\n      {\n        value: 'English',\n        label: 'English',\n        language: enUS,\n      },\n      {\n        value: 'Русский',\n        label: 'Русский',\n        language: ruRU,\n      },\n      {\n        value: 'Español',\n        label: 'Español',\n        language: esES,\n      },\n      {\n        value: 'Português - BR',\n        label: 'Português - BR',\n        language: ptBR,\n      },\n    ];\n    const currentLocale = languages.find(item => item.value === locale)\n      .language;\n    return (\n      <WingBlank>\n        <Picker\n          data={languages}\n          onChange={this.onChange}\n          cols={1}\n          value={[locale]}\n        >\n          <List.Item arrow=\"horizontal\">Choose language</List.Item>\n        </Picker>\n        <WhiteSpace />\n        <Provider locale={currentLocale}>\n          <Page />\n        </Provider>\n      </WingBlank>\n    );\n  }\n}"]]],meta:{order:0,title:{"zh-CN":"基本","en-US":"Basic"},filename:"components/provider/demo/basic.md"}}},81489:(n,a,s)=>{n.exports={basic:s(5121)}}}]);