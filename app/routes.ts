import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("Menu", "routes/Menu.tsx"),
  
    route("cart", "routes/cart.tsx"),
   route("reservation", "routes/reservation.tsx"),
   route("contact", "routes/contact.tsx"),
   route("about","routes/about.tsx"),
   route("checkout","routes/checkout.tsx"),
] satisfies RouteConfig;
