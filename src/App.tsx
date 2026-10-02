import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ProductDetailModal } from './components/ProductDetailModal';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { MixAndMatchPage } from './pages/MixAndMatchPage';
import { PersonalizationPage } from './pages/PersonalizationPage';
import { PromotionsPage } from './pages/PromotionsPage';
import { SizeGuidePage } from './pages/SizeGuidePage';
import { CartCheckoutPage } from './pages/CartCheckoutPage';
import { OrderTrackingPage } from './pages/OrderTrackingPage';
import { ContactPage } from './pages/ContactPage';
import { Product, AgeRange } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilterParam, setCategoryFilterParam] = useState<AgeRange>('all');

  // Scroll to top on tab change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentTab]);

  const handleNavigate = (tab: string, filterParam?: string) => {
    if (filterParam) {
      setCategoryFilterParam(filterParam as AgeRange);
    } else {
      setCategoryFilterParam('all');
    }
    setCurrentTab(tab);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#fdf9f1] text-[#1c1c17] font-sans">
        {/* Header with Navigation & Live Cart Counter */}
        <Header
          currentTab={currentTab}
          onNavigate={handleNavigate}
          onSearch={handleSearch}
          searchQuery={searchQuery}
        />

        {/* Main Content Router */}
        <main className="flex-1 w-full pt-28 sm:pt-32">
          {currentTab === 'home' && (
            <HomePage
              onSelectProduct={(p) => setSelectedProduct(p)}
              onNavigate={handleNavigate}
            />
          )}

          {currentTab === 'products' && (
            <ProductsPage
              onSelectProduct={(p) => setSelectedProduct(p)}
              onNavigate={handleNavigate}
              searchQuery={searchQuery}
              onClearSearch={() => setSearchQuery('')}
            />
          )}

          {currentTab === 'boys' && (
            <ProductsPage
              key={`boys-${categoryFilterParam}`}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onNavigate={handleNavigate}
              initialGender="boy"
              initialAge={categoryFilterParam}
              searchQuery={searchQuery}
              onClearSearch={() => setSearchQuery('')}
            />
          )}

          {currentTab === 'girls' && (
            <ProductsPage
              key={`girls-${categoryFilterParam}`}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onNavigate={handleNavigate}
              initialGender="girl"
              initialAge={categoryFilterParam}
              searchQuery={searchQuery}
              onClearSearch={() => setSearchQuery('')}
            />
          )}

          {currentTab === 'mixmatch' && (
            <MixAndMatchPage onNavigate={handleNavigate} />
          )}

          {currentTab === 'personalize' && (
            <PersonalizationPage onNavigate={handleNavigate} />
          )}

          {currentTab === 'promotions' && (
            <PromotionsPage onNavigate={handleNavigate} />
          )}

          {currentTab === 'sizeguide' && (
            <SizeGuidePage onNavigate={handleNavigate} />
          )}

          {(currentTab === 'cart' || currentTab === 'checkout') && (
            <CartCheckoutPage onNavigate={handleNavigate} />
          )}

          {currentTab === 'tracking' && (
            <OrderTrackingPage onNavigate={handleNavigate} />
          )}

          {currentTab === 'contact' && (
            <ContactPage onNavigate={handleNavigate} />
          )}
        </main>

        {/* Product Quick-View / Detail Modal */}
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onNavigate={handleNavigate}
        />

        {/* Universal Feedback Toast */}
        <Toast />

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />
      </div>
    </CartProvider>
  );
}
