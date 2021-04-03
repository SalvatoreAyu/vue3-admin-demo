const list = [
  {
    id: 1,
    pid: 0,
    name: "Course",
    path: "/course",
    title: "课程管理"
  },
  {
    id: 2,
    pid: 1,
    path: "operate",
    name: "CourseOperate",
    link: "/course/operate",
    title: "课程操作"
  },
  {
    id: 3,
    pid: 2,
    path: "add",
    name: "CourseAdd",
    link: "/course/operate/add",
    title: "课程添加"
  },
  {
    id: 9,
    pid: 2,
    path: "delete",
    name: "CourseDelete",
    link: "/course/operate/delete",
    title: "课程删除"
  },
  {
    id: 4,
    pid: 1,
    path: "info_data",
    name: "CourseInfoData",
    link: "/course/info_data",
    title: "课程数据"
  },
  {
    id: 5,
    pid: 0,
    path: "/student",
    name: "Student",
    title: "学生管理"
  },
  {
    id: 6,
    pid: 5,
    path: "operate",
    name: "StudentOperate",
    link: "/student/operate",
    title: "学生操作"
  },
  {
    id: 7,
    pid: 6,
    path: "add",
    name: "StudentAdd",
    link: "/student/operate/add",
    title: "学生添加"
  },
  {
    id: 10,
    pid: 6,
    path: "analyse",
    name: "StudentAnalyse",
    link: "/student/operate/analyse",
    title: "学生分析"
  },
  {
    id: 8,
    pid: 5,
    path: "query",
    name: "StudentQuery",
    link: "/student/query",
    title: "学生查询"
  }
];
export default list;
