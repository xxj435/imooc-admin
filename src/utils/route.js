import path from "path";
// 返回所有的子路由

const getChildrenRoutes = (routes) => {
  // 定义空数组
  const result = [];
  // 循环是否存在item length是否大于0
  routes.forEach((item) => {
    if (item?.children?.length > 0) {
      result.push(...item.children);
    }
  });
  return result;
};

// 某个一级路由成为其他的子路由 应该剔除该一级路由,保留路由层级
export const filterRouters = (routes) => {
  // 拿到所有的子路由
  const childrenRoutes = getChildrenRoutes(routes);
  return routes.filter((route) => {
    return !childrenRoutes.find((childrenRoute) => {
      return childrenRoute.path === route.path;
    });
  });
};

// 判断数据是否为空
function isNull(data) {
  // 没有值为true 有值为false
  if (!data) return true;
  if (JSON.stringify(data) === "{}") return true;
  if (JSON.stringify(data) === "[]") return true;
  return false;
}

// 根据 routes 数据 ,返回对应的menu规则数组
export const generateMenus = (routes, basePath = "") => {
  const result = [];
  // 遍历路由表
  routes.forEach((item) => {
    // 不存在 children && 不存在meta 直接return
    if (isNull(item.children) && isNull(item.meta)) return;

    // 存在children 不存在meta 进入迭代
    if (!isNull(item.children) && isNull(item.meta)) {
      result.push(...generateMenus(item.children));
    }

    // 合并 path 作为跳转路径
    const routePath = path.resolve(basePath, item.path);

    // 路由分离之后, 存在同名父路由的情况, 需要单独处理
    let route = result.find((item) => item.path === routePath);
    // 不存在当第一列路径
    if (!route) {
      route = {
        ...item,
        path: routePath,
        children: [],
      };
    }
    // 存在则 如果icon 与 title 存在就push
    if (route.meta.icon && route.meta.title) {
      result.push(route);
    }

    // 存在children 进入迭代到 children
    if (item.children) {
      route.children.push(...generateMenus(item.children, route.path));
    }
  });
  return result;
};
