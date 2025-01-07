import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Mais Vendidos",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Loja",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Fale Conosco",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "Nossas Páginas",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Loja com Sidebar",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Loja sem Sidebar",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Finalizar Compra",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Carrinho de Compras",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Lista de Desejos",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Entrar",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Cadastrar-se",
        newTab: false,
        path: "/signup",
      },
      {
        id: 69,
        title: "Minha Conta",
        newTab: false,
        path: "/my-account",
      },
      { 
        id: 70,
        title: "Atendimento",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "Erro",
        newTab: false,
        path: "/error",
      },
      {
        id: 63,
        title: "Sucesso no Envio",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 7,  
    title: "Blog & Artigos",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        title: "Blog Grid com sidebar",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Blog Grid sem sidebar",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 73,
        title: "Detalhes do Blog com Sidebar",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 74,
        title: "Detalhes do Blog",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];
