"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../components/Footer";
 import NavigationLinks from "../../components/NavigationLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CircleUserRound, Menu, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Leather Backpack",
    price: 89.99,
    image: "https://placehold.co/600x400/indigo/white?text=Backpack",
    category: "Accessories",
  },
  {
    id: 2,
    name: "Wireless Headphones",
    price: 129.99,
    image: "https://placehold.co/600x400/indigo/white?text=Headphones",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 199.99,
    image: "https://placehold.co/600x400/indigo/white?text=SmartWatch",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 79.99,
    image: "https://placehold.co/600x400/indigo/white?text=Shoes",
    category: "Footwear",
  },
  {
    id: 5,
    name: "Cotton T-Shirt",
    price: 24.99,
    image: "https://placehold.co/600x400/indigo/white?text=TShirt",
    category: "Clothing",
  },
  {
    id: 6,
    name: "Sunglasses",
    price: 59.99,
    image: "https://placehold.co/600x400/indigo/white?text=Sunglasses",
    category: "Accessories",
  },
  {
    id: 7,
    name: "Desk Lamp",
    price: 39.99,
    image: "https://placehold.co/600x400/indigo/white?text=Lamp",
    category: "Home",
  },
  {
    id: 8,
    name: "Denim Jacket",
    price: 69.99,
    image: "https://placehold.co/600x400/indigo/white?text=Jacket",
    category: "Clothing",
  },
];

const categories = [
  "Todos",
  "Moda",
  "Eletrônicos",
  "Acessórios",
  "Calçados",
  "Lar",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [cartItems, setCartItems] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-indigo-600">
                  ShopHub
                </span>
              </Link>
              <nav className="hidden md:ml-8 md:flex md:space-x-8">
                <NavigationLinks variant="desktop" />
              </nav>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <Button
                  variant="ghost"
                  className="p-2 text-gray-600 bg-transparent"
                  aria-label="Carrinho"
                >
                  <ShoppingBag className="size-6" />
                  {cartItems > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-indigo-600 rounded-full">
                      {cartItems}
                    </span>
                  )}
                </Button>
              </div>
              <Button
                variant="ghost"
                className="p-2 text-gray-600 bg-transparent"
                aria-label="Perfil"
              >
                <CircleUserRound className="size-6" />
              </Button>
              <div className="ml-4 md:hidden">
                <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
                      aria-label="Expandir"
                    >
                      <Menu className="size-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                    <SheetHeader>
                      <SheetTitle className="text-left">Menu</SheetTitle>
                      <SheetDescription className="text-left">
                        Navegue pelas seções do nosso site
                      </SheetDescription>
                    </SheetHeader>
                    <nav className="flex flex-col space-y-4 mt-6">
                      <NavigationLinks
                        variant="mobile"
                        onLinkClick={() => setIsMenuOpen(false)}
                      />
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-90" />
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            Coleção de Primavera e Verão 2025/2026 mas com preço de 2024
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-xl text-white">
            Descubra as últimas tendências com até 50% de desconto do ano de
            2023 em itens selecionados.
          </p>
          <div className="mt-8">
            <Link
              href="/products"
              className="px-8 py-3 text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
              aria-label="Comprar Agora"
            >
              Comprar agora
            </Link>
          </div>
        </div>
      </div>

      {/* Filtro por categoria */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex overflow-x-auto pb-2 hide-scrollbar space-x-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {selectedCategory === "Todos"
            ? "Produtos em Destaque"
            : selectedCategory}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-64 bg-gray-200">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  {product.image ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        className="object-center object-cover"
                      />
                    </div>
                  ) : (
                    <span>Imagem indisponível</span>
                  )}
                </div>
                <div className="absolute top-2 right-2">
                  <button className="p-2 rounded-full bg-white text-gray-900 hover:text-indigo-600 focus:outline-none shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="p-4">
                <span className="text-sm text-indigo-600 font-medium">
                  {product.category}
                </span>
                <h3 className="mt-1 text-lg font-medium text-gray-900">
                  {product.name}
                </h3>
                <p className="mt-1 text-xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>
                <div className="mt-4">
                  <button
                    onClick={addToCart}
                    className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Frete Grátis
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Frete grátis em todas as compras acima de R$ 150.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Garantia de Qualidade
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Se não estiver satisfeito, devolvemos o seu dinheiro.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                Suporte 24/7
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Nossa equipe de suporte sempre estará disponível para você.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
