(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[634],{6992:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return d}});var n=t(2122),s=t(9756),r=(t(7294),t(3905)),i=t(2168),m=t(8448),p=["components"],l={slug:".",tags:["medium","topological sort"]},o={unversionedId:"course-schedule/course-schedule",id:"course-schedule/course-schedule",isDocsHomePage:!1,title:"Course Schedule",description:"https://leetcode.com/problems/course-schedule/",source:"@site/z_lc/207-course-schedule/course-schedule.md",sourceDirName:"207-course-schedule",slug:"/course-schedule/",permalink:"/leetcode/course-schedule/",editUrl:"https://github.com/duanwilliam/leetcode/edit/main/z_lc/207-course-schedule/course-schedule.md",version:"current",lastUpdatedBy:"william duan",lastUpdatedAt:1624254632,formattedLastUpdatedAt:"6/21/2021",frontMatter:{slug:".",tags:["medium","topological sort"]},sidebar:"tutorialSidebar",previous:{title:"Longest Palindromic Substring",permalink:"/leetcode/longest-palindromic-substring/"}},c=[{value:"Problem",id:"problem",children:[]},{value:"Solution",id:"solution",children:[]},{value:"Similar Questions",id:"similar-questions",children:[]}],u=function(e){return function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)}},k=u("Difficulty"),h=u("Similar"),N={toc:c};function d(e){var a=e.components,t=(0,s.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(k,{m:!0,mdxType:"Difficulty"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://leetcode.com/problems/course-schedule/"},"https://leetcode.com/problems/course-schedule/")),(0,r.kt)("h2",{id:"problem"},"Problem"),(0,r.kt)("p",null,"There are a total of ",(0,r.kt)("inlineCode",{parentName:"p"},"numCourses")," courses you have to take, labeled from ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"numCourses - 1"),". You are given an array ",(0,r.kt)("inlineCode",{parentName:"p"},"prerequisites")," where ",(0,r.kt)("code",null,"prerequisites[i] = [a",(0,r.kt)("sub",null,"i"),", b",(0,r.kt)("sub",null,"i"),"]")," indicates that you must take course ",(0,r.kt)("code",null,"b",(0,r.kt)("sub",null,"i"))," first if you want to take course ",(0,r.kt)("code",null,"a",(0,r.kt)("sub",null,"i")),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For example, the pair ",(0,r.kt)("inlineCode",{parentName:"li"},"[0, 1]"),", indicates that to take course ",(0,r.kt)("inlineCode",{parentName:"li"},"0")," you have to first take course ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),".")),(0,r.kt)("p",null,"Return ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," if you can finish all courses. Otherwise, return ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Constraints"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"1 <= numCourses <= 10",(0,r.kt)("sup",null,"5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0 <= prerequisites.length <= 5000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"prerequisites[i].length == 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("code",null,"0 <= a",(0,r.kt)("sub",null,"i"),", b",(0,r.kt)("sub",null,"i")," < numCourses")),(0,r.kt)("li",{parentName:"ul"},"All pairs ",(0,r.kt)("inlineCode",{parentName:"li"},"prerequisites[i]")," are ",(0,r.kt)("strong",{parentName:"li"},"unique"),".")),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"This is the classic topological sort problem - finding if there is an ordering of vertices in a graph such that for all directed edges from ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"u")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u")))))," to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"v")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"))))),", ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"u")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"u")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"u")))))," appears before ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"v")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"v")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v")))))," in the ordering."),(0,r.kt)("p",null,"We can represent our list of prerequisites as a directed unweighted graph, where if course ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," is a prerequisite of course ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),", then there is a directed edge from ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"a")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"a")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.43056em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a")))))," to ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"b")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"b")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"b"))))),". Our goal is to see if we can create a topological ordering of this resultant graph; that is, we can visit all prerequisites before any given course, and thus being able to eventually finish all courses."),(0,r.kt)("p",null,"To see if an ordering's possible, we can maintain an array ",(0,r.kt)("inlineCode",{parentName:"p"},"can_take"),' to indicate which courses we can take (that is, all prerequisites have been fulfilled). To know which courses can be taken, we can maintain a count of the "remaining indegree" of each vertex, or the number of prerequisites for the class that haven\'t been "taken" yet.'),(0,r.kt)("p",null,'Whenever we "take" a class, we thus decrement the remaining degree of all outgoing edges (each of those classes have "one less prerequisite remaining"). If the indegree of any of these becomes zero, we know all prerequisites for that class have thus been fulfilled, and as a result can add it to ',(0,r.kt)("inlineCode",{parentName:"p"},"can_take"),"."),(0,r.kt)("p",null,"Thus, to check if an ordering exists, we simply need to check if all courses have been in ",(0,r.kt)("inlineCode",{parentName:"p"},"can_take"),"."),(0,r.kt)(i.Z,{defaultValue:"Python3",groupId:"codetabs-Python3-C++17-Rust",values:[{label:"Python3",value:"Python3"},{label:"C++17",value:"C++17"},{label:"Rust",value:"Rust"}],mdxType:"Tabs"},(0,r.kt)(m.Z,{value:"Python3",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python",metastring:'file="207-course-schedule/course-schedule.py"',file:'"207-course-schedule/course-schedule.py"'},"class Solution:\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\n        n = numCourses\n        G = [set() for _ in range(n)]\n        num_prereqs = [0] * n\n        for course,prereq in prerequisites:\n            G[prereq].add(course)\n            num_prereqs[course] += 1\n            \n        can_take = [i for i in range(n) if num_prereqs[i] == 0]\n        i = 0\n        while i < len(can_take):\n            taken = can_take[i]\n            for postreq in G[taken]:\n                num_prereqs[postreq] -= 1\n                if num_prereqs[postreq] == 0:\n                    can_take.append(postreq)\n            i += 1\n        return len(can_take) == n\n"))),(0,r.kt)(m.Z,{value:"C++17",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp",metastring:'file="207-course-schedule/course-schedule.cpp"',file:'"207-course-schedule/course-schedule.cpp"'},"class Solution {\npublic:\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\n        int n = numCourses;\n        vector<vector<int>> G(n);\n        vector<int> num_prereqs(n, 0);\n        for(auto& e : prerequisites) {\n            int &course = e[0], &prereq = e[1];\n            G[prereq].push_back(course);\n            ++num_prereqs[course];\n        }\n        \n        vector<int> can_take;\n        for(int i=0; i<n; ++i) {\n            if(num_prereqs[i] == 0) can_take.push_back(i);\n        }\n        \n        for(int i=0; i<can_take.size(); ++i) {\n            int taken = can_take[i];\n            for(int& postreq : G[taken]) {\n                if(--num_prereqs[postreq] == 0) can_take.push_back(postreq);\n            }\n        }\n        return can_take.size() == n;\n    }\n};\n"))),(0,r.kt)(m.Z,{value:"Rust",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust",metastring:'file="207-course-schedule/course-schedule.rs"',file:'"207-course-schedule/course-schedule.rs"'},"impl Solution {\n    pub fn can_finish(num_courses: i32, prerequisites: Vec<Vec<i32>>) -> bool {\n        let n = num_courses;\n        let mut G: Vec<Vec<i32>> = vec![vec![]; n as usize];\n        let mut num_prereqs: Vec<i32> = vec![0; n as usize];\n        for e in prerequisites {\n            let (course, prereq) = (e[0], e[1]);\n            G[prereq as usize].push(course);\n            num_prereqs[course as usize] += 1;\n        }\n        \n        let mut can_take = num_prereqs.iter().enumerate()\n            .filter(|(_, prereqs)| **prereqs == 0)\n            .map(|(course, _)| course as i32)\n            .collect::<Vec<i32>>();\n        \n        let mut i: usize = 0;\n        while i < can_take.len() {\n            let taken = can_take[i];\n            for p in G[taken as usize].iter() {\n                let postreq = *p;\n                num_prereqs[postreq as usize] -= 1;\n                if num_prereqs[postreq as usize] == 0 {\n                    can_take.push(postreq);\n                }\n            }\n            i += 1;\n        }\n        \n        can_take.len() == (n as usize)\n    }\n}\n")))),(0,r.kt)("h2",{id:"similar-questions"},"Similar Questions"),(0,r.kt)(h,{title:"Course Schedule II",m:!0,mdxType:"Similar"}),(0,r.kt)(h,{title:"Graph Valid Tree",m:!0,mdxType:"Similar"}),(0,r.kt)(h,{title:"Minimum Height Trees",m:!0,mdxType:"Similar"}),(0,r.kt)(h,{title:"Course Schedule III",h:!0,mdxType:"Similar"}))}d.isMDXComponent=!0}}]);