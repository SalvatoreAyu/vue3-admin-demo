import router from "../router";
import list from "./menuList";
function filterMenu(menu) {
  console.log(list);
  return list.filter(item => menu.indexOf(item.id) != -1);
}
function getMenuList(menu) {
  let _parent = menu.filter(item => item.pid == 0);
  let _child = menu.filter(item => item.pid != 0);
  setTree(_parent, _child);
  function setTree(parent, children) {
    parent.map(p => {
      children.map((c, i) => {
        if (c.pid == p.id) {
          let _c = JSON.parse(JSON.stringify(children));
          _c.splice(i, 1);
          setTree([c], _c);
          if (p.children) {
            p.children.push(c);
          } else {
            p.children = [c];
          }
        }
      });
    });
  }
  return _parent;
}
function generatorRoute(menu) {
  let routes = menu.map(item => {
    let route = {
      path: item.path,
      name: item.name,
      component: () => import(`@/views/${item.name}`),
      meta: {
        requireAuth: true,
        title: item.title
      }
    };
    if (item.children) {
      route.children = generatorRoute(item.children);
    }
    return route;
  });
  return routes;
}
function asyncRouter(menu) {
  // let routes = [];
  // router.getRoutes().map(item => {
  //   if (item.name == "Home") {
  //     routes = item;
  //     console.log(...menu);
  //     item.children.push(...menu);
  //   }
  // });
  // router.addRoute(routes);
  menu.forEach(item => {
    router.addRoute("Home", item);
  });
}

export { getMenuList, generatorRoute, asyncRouter, filterMenu };
