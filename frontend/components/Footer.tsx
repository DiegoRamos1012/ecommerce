import { Facebook } from "lucide-react";
import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer() {
  return (
    <footer className="bg-gray-800 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
              Loja
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Novidades
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Mais Vendidos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Ofertas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Todos os Produtos
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
              Empresa
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Carreiras
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Imprensa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Sustentabilidade
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
              Suporte
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Informações de Entrega
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 dark:text-gray-300 tracking-wider uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Política de Cookies
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200"
                >
                  Acessibilidade
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 dark:border-gray-600 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400"
                  >
                    <span className="sr-only">Facebook</span>
                    <FaFacebook size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Siga-nos no Facebook</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400"
                  >
                    <span className="sr-only">Instagram</span>
                    <FaInstagram size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Siga-nos no Instagram</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="#"
                    className="text-gray-400 dark:text-gray-500 hover:text-gray-300 dark:hover:text-gray-400"
                  >
                    <span className="sr-only">Twitter</span>
                    <FaXTwitter size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Siga-nos no X / Twitter</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="mt-8 text-base text-gray-400 dark:text-gray-500 md:mt-0 md:order-1">
            &copy; 2025 ShopHub, Inc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
