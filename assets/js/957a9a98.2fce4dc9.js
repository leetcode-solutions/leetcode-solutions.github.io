(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[634],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),h=r,k=u["".concat(o,".").concat(h)]||u[h]||c[h]||s;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var m=2;m<s;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),r=a(944),s=a(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var o=37,m=39;var p=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,c=e.values,u=e.groupId,h=e.className,k=(0,r.Z)(),d=k.tabGroupChoices,N=k.setTabGroupChoices,f=(0,n.useState)(p),g=f[0],b=f[1],v=n.Children.toArray(e.children),y=[];if(null!=u){var w=d[u];null!=w&&w!==g&&c.some((function(e){return e.value===w}))&&b(w)}var x=function(e){var t=e.currentTarget,a=y.indexOf(t),n=c[a].value;b(n),null!=u&&(N(u,n),setTimeout((function(){var e,a,n,r,s,i,o,m;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,s=e.right,i=window,o=i.innerHeight,m=i.innerWidth,a>=0&&s<=m&&r<=o&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},q=function(e){var t,a;switch(e.keyCode){case m:var n=y.indexOf(e.target)+1;a=y[n]||y[0];break;case o:var r=y.indexOf(e.target)-1;a=y[r]||y[y.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},h)},c.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:q,onFocus:x,onClick:x},a)}))),t?(0,n.cloneElement)(v.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e}},360:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return m},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return b}});var n=a(2122),r=a(9756),s=(a(7294),a(3905)),i=a(1395),l=a(8215),o=["components"],m={slug:".",tags:["medium","topological sort"]},p="Course Schedule",c={unversionedId:"course-schedule/course-schedule",id:"course-schedule/course-schedule",isDocsHomePage:!1,title:"Course Schedule",description:"https://leetcode.com/problems/course-schedule/",source:"@site/z_lc/207-course-schedule/course-schedule.md",sourceDirName:"207-course-schedule",slug:"/course-schedule/",permalink:"/course-schedule/",editUrl:"https://github.com/leetcode-solutions/leetcode-solutions.github.io/edit/main/z_lc/207-course-schedule/course-schedule.md",version:"current",lastUpdatedBy:"william duan",lastUpdatedAt:1624399720,formattedLastUpdatedAt:"6/22/2021",frontMatter:{slug:".",tags:["medium","topological sort"]},sidebar:"tutorialSidebar",previous:{title:"Container With Most Water",permalink:"/container-with-most-water/"}},u=[{value:"Problem",id:"problem",children:[{value:"Examples",id:"examples",children:[]},{value:"Constraints",id:"constraints",children:[]},{value:"Hints",id:"hints",children:[]}]},{value:"Solution",id:"solution",children:[]},{value:"Similar Questions",id:"similar-questions",children:[]}],h=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",t)}},k=h("Difficulty"),d=h("Example"),N=h("Hint"),f=h("Similar"),g={toc:u};function b(e){var t=e.components,a=(0,r.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"course-schedule"},"Course Schedule"),(0,s.kt)(k,{m:!0,mdxType:"Difficulty"}),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/course-schedule/"},"https://leetcode.com/problems/course-schedule/")),(0,s.kt)("h2",{id:"problem"},"Problem"),(0,s.kt)("p",null,"There are a total of ",(0,s.kt)("inlineCode",{parentName:"p"},"numCourses")," courses you have to take, labeled from ",(0,s.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,s.kt)("inlineCode",{parentName:"p"},"numCourses - 1"),". You are given an array ",(0,s.kt)("inlineCode",{parentName:"p"},"prerequisites")," where ",(0,s.kt)("code",null," prerequisites[i] = [a",(0,s.kt)("sub",null,"i"),", b",(0,s.kt)("sub",null,"i"),"] ")," indicates that you must take course ",(0,s.kt)("code",null," b",(0,s.kt)("sub",null,"i")," ")," first if you want to take course ",(0,s.kt)("code",null," a",(0,s.kt)("sub",null,"i")," "),"."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"For example, the pair ",(0,s.kt)("inlineCode",{parentName:"li"},"[0, 1]"),", indicates that to take course ",(0,s.kt)("inlineCode",{parentName:"li"},"0")," you have to first take course ",(0,s.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,s.kt)("p",null,"Return ",(0,s.kt)("inlineCode",{parentName:"p"},"true")," if you can finish all courses. Otherwise, return ",(0,s.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)(d,{mdxType:"Example"},(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"}),(0,s.kt)("th",{parentName:"tr",align:"left"}))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Input")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"numCourses = 2, prerequisites = [[1,0]]"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Output")),(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"true"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"td"},"Explanation")),(0,s.kt)("td",{parentName:"tr",align:"left"},"There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible."))))),(0,s.kt)("h3",{id:"constraints"},"Constraints"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("code",null," 1 <= numCourses <= 10",(0,s.kt)("sup",null,"5")," ")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0 <= prerequisites.length <= 5000")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"prerequisites[i].length == 2")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("code",null," 0 <= a",(0,s.kt)("sub",null,"i"),", b",(0,s.kt)("sub",null,"i")," < numCourses ")),(0,s.kt)("li",{parentName:"ul"},"All pairs ",(0,s.kt)("inlineCode",{parentName:"li"},"prerequisites[i]")," are ",(0,s.kt)("strong",{parentName:"li"},"unique"),".")),(0,s.kt)("h3",{id:"hints"},"Hints"),(0,s.kt)(N,{mdxType:"Hint"},(0,s.kt)("p",null,"This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.")),(0,s.kt)(N,{mdxType:"Hint"},(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://class.coursera.org/algo-003/lecture/52"},"Topological Sort via DFS")," - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.")),(0,s.kt)(N,{mdxType:"Hint"},(0,s.kt)("p",null,"Topological sort could also be done via ",(0,s.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Topological_sorting#Algorithms"},"BFS"),".")),(0,s.kt)("h2",{id:"solution"},"Solution"),(0,s.kt)("p",null,"This is the classic topological sort problem - finding if there is an ordering of vertices in a graph such that for all directed edges from ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"u")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u")))))," to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"v")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"))))),", ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"u")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"u")))))," appears before ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"v")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v")))))," in the ordering."),(0,s.kt)("p",null,"We can represent our list of prerequisites as a directed unweighted graph, where if course ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," is a prerequisite of course ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),", then there is a directed edge from ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"a")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," to ",(0,s.kt)("span",{parentName:"p",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mi",{parentName:"mrow"},"b")),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,s.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),". Our goal is to see if we can create a topological ordering of this resultant graph; that is, we can visit all prerequisites before any given course, and thus being able to eventually finish all courses."),(0,s.kt)("p",null,"To see if an ordering's possible, we can maintain an array ",(0,s.kt)("inlineCode",{parentName:"p"},"can_take"),' to indicate which courses we can take (that is, all prerequisites have been fulfilled). To know which courses can be taken, we can maintain a count of the "remaining indegree" of each vertex, or the number of prerequisites for the class that haven\'t been "taken" yet.'),(0,s.kt)("p",null,'Whenever we "take" a class, we thus decrement the remaining degree of all outgoing edges (each of those classes have "one less prerequisite remaining"). If the indegree of any of these becomes zero, we know all prerequisites for that class have thus been fulfilled, and as a result can add it to ',(0,s.kt)("inlineCode",{parentName:"p"},"can_take"),"."),(0,s.kt)("p",null,"Thus, to check if an ordering exists, we simply need to check if all courses have been in ",(0,s.kt)("inlineCode",{parentName:"p"},"can_take"),"."),(0,s.kt)(i.Z,{defaultValue:"Python3",groupId:"codetabs-Python3-C++17-Rust",values:[{label:"Python3",value:"Python3"},{label:"C++17",value:"C++17"},{label:"Rust",value:"Rust"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"Python3",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python",metastring:'file="207-course-schedule/course-schedule.py"',file:'"207-course-schedule/course-schedule.py"'},"class Solution:\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\n        n = numCourses\n        G = [set() for _ in range(n)]\n        num_prereqs = [0] * n\n        for course,prereq in prerequisites:\n            G[prereq].add(course)\n            num_prereqs[course] += 1\n            \n        can_take = [i for i in range(n) if num_prereqs[i] == 0]\n        i = 0\n        while i < len(can_take):\n            taken = can_take[i]\n            for postreq in G[taken]:\n                num_prereqs[postreq] -= 1\n                if num_prereqs[postreq] == 0:\n                    can_take.append(postreq)\n            i += 1\n        return len(can_take) == n\n"))),(0,s.kt)(l.Z,{value:"C++17",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'file="207-course-schedule/course-schedule.cpp"',file:'"207-course-schedule/course-schedule.cpp"'},"class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        int n = numCourses;\n        vector<vector<int>> G(n);\n        vector<int> num_prereqs(n, 0);\n        for(auto& e : prerequisites) {\n            int &course = e[0], &prereq = e[1];\n            G[prereq].push_back(course);\n            ++num_prereqs[course];\n        }\n        \n        vector<int> can_take;\n        for(int i=0; i<n; ++i) {\n            if(num_prereqs[i] == 0) can_take.push_back(i);\n        }\n        \n        for(int i=0; i<can_take.size(); ++i) {\n            int taken = can_take[i];\n            for(int& postreq : G[taken]) {\n                if(--num_prereqs[postreq] == 0) can_take.push_back(postreq);\n            }\n        }\n        return can_take.size() == n;\n    }\n};\n"))),(0,s.kt)(l.Z,{value:"Rust",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust",metastring:'file="207-course-schedule/course-schedule.rs"',file:'"207-course-schedule/course-schedule.rs"'},"impl Solution {\n    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {\n        let n = num_courses;\n        let mut G: Vec<Vec<i32>> = vec![vec![]; n as usize];\n        let mut num_prereqs: Vec<i32> = vec![0; n as usize];\n        for e in prerequisites {\n            let (course, prereq) = (e[0], e[1]);\n            G[prereq as usize].push(course);\n            num_prereqs[course as usize] += 1;\n        }\n        \n        let mut can_take = num_prereqs.iter().enumerate()\n            .filter(|(_, prereqs)| **prereqs == 0)\n            .map(|(course, _)| course as i32)\n            .collect::<Vec<i32>>();\n        \n        let mut i: usize = 0;\n        while i < can_take.len() {\n            let taken = can_take[i];\n            for p in G[taken as usize].iter() {\n                let postreq = *p;\n                num_prereqs[postreq as usize] -= 1;\n                if num_prereqs[postreq as usize] == 0 {\n                    can_take.push(postreq);\n                }\n            }\n            i += 1;\n        }\n        \n        can_take.len() == (n as usize)\n    }\n}\n")))),(0,s.kt)("h2",{id:"similar-questions"},"Similar Questions"),(0,s.kt)(f,{title:"Course Schedule II",m:!0,mdxType:"Similar"}),(0,s.kt)(f,{title:"Graph Valid Tree",m:!0,mdxType:"Similar"}),(0,s.kt)(f,{title:"Minimum Height Trees",m:!0,mdxType:"Similar"}),(0,s.kt)(f,{title:"Course Schedule III",h:!0,mdxType:"Similar"}))}b.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);