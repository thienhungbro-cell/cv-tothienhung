'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AiOutlineEnvironment } from 'react-icons/ai';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaPrint, 
  FaFilePdf, 
  FaArrowLeft 
} from 'react-icons/fa';

export default function CV() {
  const [viewMode, setViewMode] = useState<'portfolio' | 'ats'>('portfolio');

  const handleExportATS = () => {
    setViewMode('ats');
    // Delay ngắn để DOM render template ATS trước khi bật hộp thoại Print
    setTimeout(() => {
      window.print();
    }, 250);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 print:bg-white">
      {/* ========================================================================= */}
      {/* Floating Action Button ở góc phải dưới màn hình */}
      <div className="fixed bottom-6 right-6 z-50 print:hidden flex flex-col items-end gap-2.5">
        {viewMode === 'portfolio' ? (
          <button
            type="button"
            onClick={handleExportATS}
            className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-2xl hover:bg-emerald-700 hover:scale-105 active:scale-95 transition-all border-2 border-white"
          >
            <FaFilePdf className="text-base" />
            <span>Chuyển sang mẫu ATS &amp; Xuất PDF</span>
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setViewMode('portfolio')}
              className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-800 shadow-xl hover:bg-slate-100 hover:scale-105 active:scale-95 transition-all border border-slate-300"
            >
              <FaArrowLeft className="text-xs" />
              <span>Về Web</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xl hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
            >
              <FaPrint className="text-sm" />
              <span>In PDF</span>
            </button>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 1. GIAO DIỆN GỐC: PORTFOLIO WEB (GIỮ NGUYÊN 100% NHƯ BAN ĐẦU) */}
      {/* ========================================================================= */}
      {viewMode === 'portfolio' && (
        <div className="p-4 sm:p-6 lg:p-8 print:p-0">
          <div className="mx-auto flex max-w-[1360px] flex-col lg:flex-row gap-6 print:flex-col print:gap-3 print:max-w-none">
            
            {/* Sidebar trên web (dọc), khi in A4 tự động dàn ngang thành 2 cột song song */}
            <div className="w-full lg:w-[320px] xl:w-[340px] flex-shrink-0 space-y-5 print:w-full print:space-y-0 print:grid print:grid-cols-2 print:gap-3 print-avoid-break">
              
              {/* Card Thông tin cá nhân */}
              <div className="flex flex-col items-center rounded-xl border border-slate-200 bg-white p-6 shadow-xs print:border-slate-300 print:shadow-none print:p-3 print:flex-row print:items-center print:text-left print:gap-3">
                {/* Ảnh đại diện */}
                <div className="mb-3 h-32 w-32 rounded-full border-4 border-[#3AB8FE] overflow-hidden shadow-xs flex-shrink-0 print:mb-0 print:h-20 print:w-20">
                  <Image
                    src="/img/ato_2.jpg"
                    alt="Hung To - Fullstack Developer"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                    unoptimized
                    priority
                  />
                </div>
                
                <div className="flex-1 min-w-0 flex flex-col items-center print:items-start w-full">
                  <h1 className="mt-1 mb-0.5 text-center text-2xl font-bold tracking-tight text-slate-900 print:mt-0 print:mb-0.5 print:text-xl print:text-left">
                    Hung To
                  </h1>
                  <p className="text-center text-xs sm:text-sm font-semibold text-blue-600 mb-1 print:text-left">
                    Fullstack Developer
                  </p>
                  <p className="text-center text-sm font-medium text-slate-600 flex items-center justify-center gap-1.5 print:text-left print:justify-start print:text-xs">
                    <AiOutlineEnvironment className="text-lg text-slate-500 flex-shrink-0 print:text-sm" />
                    <span>Ho Chi Minh City, Vietnam</span>
                  </p>
                  
                  <div className="mt-3 pt-3 border-t border-slate-100 w-full text-center text-sm text-slate-600 leading-relaxed print:mt-2 print:pt-2 print:text-left print:text-xs">
                    <p className="font-semibold text-slate-800 mb-0.5">
                      Contact:
                    </p>
                    <p>
                      Phone: <span className="font-bold text-slate-900">0858990375</span>
                    </p>
                    <p className="mt-0.5">
                      Email: <span className="font-bold text-slate-900 break-all">thienhungto@gmail.com</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Highlights */}
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-xs print:border-slate-300 print:shadow-none print:p-3 print:flex print:flex-col print:justify-between">
                <h2 className="mb-3 text-base font-bold text-slate-900 border-b border-slate-100 pb-2 print:mb-2 print:pb-1 print:text-sm">
                  Highlights
                </h2>
                
                {/* Dòng nội dung 1: Scrum Certificate */}
                <div className="flex items-start gap-3 mt-3 print:mt-0">
                  <div className="flex-shrink-0">
                    <Image
                      src="/img/1.jpg"
                      alt="Axon Active Scrum Certificate Logo"
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10 border border-slate-200 print:w-8 print:h-8"
                      unoptimized
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug print:text-xs">
                      Scrum Training Certificate - Axon Active
                    </p>
                    <a
                      href="https://verified.sertifier.com/en/verify/96291607243483/?ref=email"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-0.5 text-xs text-[#0056d2] font-medium underline hover:text-blue-800"
                    >
                      View certificate
                    </a>
                  </div>
                </div>

                {/* Dòng nội dung 2: University */}
                <div className="flex items-start gap-3 mt-4 pt-3 border-t border-slate-100 print:mt-1.5 print:pt-1.5">
                  <div className="flex-shrink-0">
                    <Image
                      src="/img/2.png"
                      alt="Ho Chi Minh City University of Agriculture and Forestry Logo"
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10 border border-slate-200 print:w-8 print:h-8"
                      unoptimized
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug print:text-xs">
                      Ho Chi Minh City University of Agriculture and Forestry
                    </p>
                    <p className="mt-0.5 text-xs text-[#0056d2] font-semibold">
                      Software engineer
                    </p>
                  </div>
                </div>

                {/* Dòng nội dung 3: TOEIC */}
                <div className="flex items-start gap-3 mt-4 pt-3 border-t border-slate-100 print:mt-1.5 print:pt-1.5">
                  <div className="flex-shrink-0">
                    <Image
                      src="/img/toeic.jpg"
                      alt="TOEIC Certificate Logo"
                      width={40}
                      height={40}
                      className="rounded-full object-cover w-10 h-10 border border-slate-200 print:w-8 print:h-8"
                      unoptimized
                    />
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug print:text-xs">
                      TOEIC
                    </p>
                    <p className="mt-0.5 text-xs text-[#0056d2] font-semibold">
                      Total Score: 750
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Nội dung bên phải */}
            <div className="flex-1 min-w-0 space-y-5 print:w-full print:space-y-3">
              
              {/* Card Giới thiệu bản thân */}
              <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs print:border-slate-300 print:shadow-none print:p-3 print-avoid-break">
                <section className="text-sm text-slate-700 leading-relaxed print:text-xs">
                  <p>
                    A results-driven <span className="font-semibold text-slate-900">Fullstack Developer</span> with 2+ years of hands-on experience building scalable, high-performance web applications across both <span className="font-semibold text-slate-900">Vue.js (Nuxt.js)</span> and <span className="font-semibold text-slate-900">ReactJS (Next.js)</span> ecosystems. Adept at developing responsive UI, architecting lightweight backend services, integrating type-safe/RESTful APIs, and optimizing system performance. Skilled in leveraging <span className="font-semibold text-slate-900">Generative AI &amp; modern AI-assisted workflows</span> to maximize engineering velocity while maintaining clean, robust code within Scrum/Agile environments.
                  </p>
                </section>
              </div>

              {/* Section: Experience */}
              <div>
                <h2 className="mb-2 text-xl font-bold tracking-tight text-slate-900 print:text-base print:mb-1">
                  Experience
                </h2>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs print:border-slate-300 print:shadow-none print:p-3.5">
                  <section>
                    <h3 className="mb-4 text-base font-semibold text-slate-800 border-b border-slate-100 pb-2 print:mb-2 print:pb-1 print:text-sm">
                      Work history{' '}
                      <span className="text-xs sm:text-sm font-normal text-slate-500">
                        (2+ years of experience)
                      </span>
                    </h3>

                    {/* Job 1: FIDT */}
                    <div className="mb-6 flex items-start gap-3.5 print:mb-3 print-avoid-break">
                      <div className="flex-shrink-0">
                        <Image
                          src="/img/fidtvn.jpg"
                          alt="FIDT Company Logo"
                          width={48}
                          height={48}
                          className="rounded-lg object-cover w-12 h-12 border border-slate-200 print:w-10 print:h-10"
                          unoptimized
                        />
                      </div>

                      <div className="flex-grow min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <h4 className="text-base font-bold text-slate-900 print:text-sm">
                            Fullstack Developer at FIDT
                          </h4>
                          <span className="text-xs sm:text-sm font-medium text-slate-500 print:text-xs">
                            (February 2025 to Present)
                          </span>
                        </div>

                        {/* Project & Tech inside FIDT */}
                        <div className="mt-2 rounded-lg bg-slate-50 p-3 border border-slate-200/80 print:p-2 print:border-slate-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 pb-1.5 border-b border-slate-200/60">
                            <span className="text-xs sm:text-sm font-bold text-slate-900">
                              Project: Wealth Ecosystem (Wealth For Me &amp; Wealth Platform)
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {['Nuxt 4 / Vue 3', 'Hono', 'PostgreSQL', 'Docker', 'oRPC', 'Directus', 'Tailwind v4', 'Playwright'].map((tech) => (
                                <span key={tech} className="rounded bg-[#E4EBE4] px-1.5 py-0.5 text-[10px] font-semibold text-emerald-900 border border-emerald-200/50">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                            Comprehensive digital wealth advisory and real estate valuation ecosystem. Built responsive, high-performance interfaces using Nuxt 4 and Vue 3 for financial analytics; engineered backend services with Hono, PostgreSQL, and Directus; containerized microservices using Docker and implemented end-to-end type-safe APIs using oRPC.
                          </p>

                          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                            <div>
                              <span className="font-semibold text-slate-800 mr-1">Wealth For Me:</span>
                              <a
                                href="https://wealthforme.fidt.vn/suc-khoe-tai-chinh"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#108a00] hover:underline break-all"
                              >
                                https://wealthforme.fidt.vn/suc-khoe-tai-chinh
                              </a>
                            </div>
                            <div>
                              <span className="font-semibold text-slate-800 mr-1">Wealth Platform:</span>
                              <a
                                href="https://wealthforme.fidt.vn/bat-dong-san"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#108a00] hover:underline break-all"
                              >
                                https://wealthforme.fidt.vn/bat-dong-san
                              </a>
                            </div>
                          </div>
                        </div>

                        <ul className="mt-2.5 ml-4 list-disc space-y-1 text-sm text-slate-600 leading-relaxed print:mt-1.5 print:space-y-0.5 print:text-xs">
                          <li>
                            Design and develop reactive web user interfaces following the MVVM architecture using Nuxt 4, Vue 3, and Tailwind CSS v4.
                          </li>
                          <li>
                            Build high-performance, lightweight backend services and APIs using Hono, Node.js, PostgreSQL, and Directus Headless CMS.
                          </li>
                          <li>
                            Containerize services using Docker to ensure consistent local development, staging environments, and streamlined deployments.
                          </li>
                          <li>
                            Implement end-to-end type-safe APIs using oRPC and ArkType/Zod schemas to seamlessly bridge Frontend and Backend communication with zero-overhead.
                          </li>
                          <li>
                            Develop interactive financial and real estate valuation analytics features using TanStack Table, optimizing rendering speed and UX responsiveness.
                          </li>
                          <li>
                            Establish robust testing strategies, including backend Unit Testing and Frontend E2E testing using Playwright and Vitest to ensure high scalability.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Job 2: Muadee */}
                    <div className="flex items-start gap-3.5 pt-5 border-t border-slate-100 print:pt-3 print-avoid-break">
                      <div className="flex-shrink-0">
                        <Image
                          src="/img/muadee.png"
                          alt="Muadee by HDBank Logo"
                          width={48}
                          height={48}
                          className="rounded-lg object-cover w-12 h-12 border border-slate-200 print:w-10 print:h-10"
                          unoptimized
                        />
                      </div>

                      <div className="flex-grow min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2">
                          <h4 className="text-base font-bold text-slate-900 print:text-sm">
                            Frontend Developer at Muadee by HDBank
                          </h4>
                          <span className="text-xs sm:text-sm font-medium text-slate-500 print:text-xs">
                            (February 2024 to January 2025)
                          </span>
                        </div>

                        {/* Project & Tech inside Muadee */}
                        <div className="mt-2 rounded-lg bg-slate-50 p-3 border border-slate-200/80 print:p-2 print:border-slate-300">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 pb-1.5 border-b border-slate-200/60">
                            <span className="text-xs sm:text-sm font-bold text-slate-900">
                              Project: Muadee BNPL &amp; Partner Campaign Ecosystem
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {['ReactJS', 'Next.js', 'Tailwind CSS', 'Deploy to Vercel'].map((tech) => (
                                <span key={tech} className="rounded bg-[#E4EBE4] px-1.5 py-0.5 text-[10px] font-semibold text-emerald-900 border border-emerald-200/50">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                            Developed co-branded promotional campaign landing pages and installment payment features for HDBank&apos;s Buy-Now-Pay-Later (BNPL) ecosystem.
                          </p>

                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-xs">
                            <div>
                              <span className="font-semibold text-slate-800 mr-1">ApplePay:</span>
                              <a
                                href="https://www.muadee.com.vn/thanh-toan-voi-apple-pay"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#108a00] hover:underline break-all"
                              >
                                https://www.muadee.com.vn/thanh-toan-voi-apple-pay
                              </a>
                            </div>
                            <div>
                              <span className="font-semibold text-slate-800 mr-1">ZaloPay:</span>
                              <a
                                href="https://www.muadee.com.vn/giam-den-100k-tren-zalopay-voi-the-tra-gop-muadee"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#108a00] hover:underline break-all"
                              >
                                https://www.muadee.com.vn/giam-den-100k-tren-zalopay-voi-the-tra-gop-muadee
                              </a>
                            </div>
                            <div>
                              <span className="font-semibold text-slate-800 mr-1">Shopee:</span>
                              <a
                                href="https://d3dxi7t02b61aw.cloudfront.net/shopeefood-khao-ban-70k-qua-the-tra-gop-muadee"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#108a00] hover:underline break-all"
                              >
                                https://d3dxi7t02b61aw.cloudfront.net/shopeefood-khao-ban-70k-qua-the-tra-gop-muadee
                              </a>
                            </div>
                            <div>
                              <span className="font-semibold text-slate-800 mr-1">Traveloka:</span>
                              <a
                                href="https://d3dxi7t02b61aw.cloudfront.net/di-muon-noi-voi-traveloka-giam-150k-qua-muadee"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#108a00] hover:underline break-all"
                              >
                                https://d3dxi7t02b61aw.cloudfront.net/di-muon-noi-voi-traveloka-giam-150k-qua-muadee
                              </a>
                            </div>
                            <div>
                              <span className="font-semibold text-slate-800 mr-1">Lazada:</span>
                              <a
                                href="https://d3dxi7t02b61aw.cloudfront.net/luot-lazada-tha-ga-giam-200k-qua-the-tra-gop-muadee"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#108a00] hover:underline break-all"
                              >
                                https://d3dxi7t02b61aw.cloudfront.net/luot-lazada-tha-ga-giam-200k-qua-the-tra-gop-muadee
                              </a>
                            </div>
                            <div>
                              <span className="font-semibold text-slate-800 mr-1">Muadee:</span>
                              <a
                                href="https://www.muadee.com.vn/tra-gop-muadee-trung-iphone-16-pro-max"
                                target="_blank"
                                rel="noreferrer"
                                className="font-medium text-[#108a00] hover:underline break-all"
                              >
                                https://www.muadee.com.vn/tra-gop-muadee-trung-iphone-16-pro-max
                              </a>
                            </div>
                          </div>
                        </div>

                        <ul className="mt-2.5 ml-4 list-disc space-y-1 text-sm text-slate-600 leading-relaxed print:mt-1.5 print:space-y-0.5 print:text-xs">
                          <li>
                            Engineered high-converting, responsive landing pages and campaign microsites for Tier-1 partners (ApplePay, ZaloPay, ShopeeFood, Traveloka, Lazada) using Next.js and Tailwind CSS.
                          </li>
                          <li>
                            Built modular, reusable UI components ensuring cross-browser consistency, mobile responsiveness, and pixel-perfect fidelity based on Figma designs.
                          </li>
                          <li>
                            Optimized Core Web Vitals and asset loading, achieving sub-second page loads for high-traffic promotional campaigns.
                          </li>
                          <li>
                            Integrated campaign forms, promotional voucher validations, and installment calculation logic with backend RESTful APIs.
                          </li>
                          <li>
                            Collaborated closely with Product and QA teams in Scrum sprints, managing CI/CD deployments on Vercel for zero-downtime campaign launches.
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                  </section>
                </div>
              </div>

              {/* Section: Education */}
              <div>
                <h2 className="mb-2 text-xl font-bold tracking-tight text-slate-900 print:text-base print:mb-1">
                  Education
                </h2>

                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs print:border-slate-300 print:shadow-none print:p-3.5 print-avoid-break">
                  <h3 className="text-base font-semibold text-slate-800 border-b border-slate-100 pb-2 mb-4 print:mb-2.5 print:pb-1 print:text-sm">
                    Credentials
                  </h3>

                  {/* Dòng nội dung 1: University */}
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <Image
                        src="/img/2.png"
                        alt="Ho Chi Minh City University of Agriculture and Forestry Logo"
                        width={48}
                        height={48}
                        className="rounded-lg object-cover w-12 h-12 border border-slate-200 print:w-10 print:h-10"
                        unoptimized
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-slate-900 text-sm sm:text-base print:text-sm">
                        Ho Chi Minh City University of Agriculture and Forestry
                      </p>
                      <p className="text-sm font-medium text-slate-700 mt-0.5 print:text-xs">
                        Engineer degree in Software Engineering
                      </p>
                      <p className="text-xs font-semibold text-slate-500 mt-1 print:text-[11px]">
                        4.5 years program • Completed May 2024
                      </p>
                    </div>
                  </div>

                  {/* Dòng nội dung 2: Scrum Certificate */}
                  <div className="flex items-start gap-4 mt-5 pt-4 border-t border-slate-100 print:mt-3 print:pt-2.5">
                    <div className="flex-shrink-0">
                      <Image
                        src="/img/1.jpg"
                        alt="Axon Active Scrum Certificate Logo"
                        width={48}
                        height={48}
                        className="rounded-lg object-cover w-12 h-12 border border-slate-200 print:w-10 print:h-10"
                        unoptimized
                      />
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-slate-900 text-sm sm:text-base print:text-sm">
                        Scrum Training Certificate - Axon Active
                      </p>
                      <a
                        href="https://verified.sertifier.com/en/verify/96291607243483/?ref=email"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-0.5 text-xs sm:text-sm text-[#0056d2] font-medium underline hover:text-blue-800 print:text-xs"
                      >
                        View certificate
                      </a>
                      <p className="text-xs font-semibold text-slate-500 mt-1 print:text-[11px]">
                        3 months program • Completed May 2024
                      </p>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. GIAO DIỆN MẪU ATS SINGLE COLUMN (ĐỒNG BỘ 100% NỘI DUNG TỪ WEB) */}
      {/* ========================================================================= */}
      {viewMode === 'ats' && (
        <div className="py-6 sm:py-10 print:py-0">
          <main className="mx-auto max-w-[850px] bg-white p-8 sm:p-12 shadow-md print:shadow-none print:p-0 print:max-w-none text-[#111827] font-serif leading-normal">
            
            {/* Header Section */}
            <header className="text-center border-b-0 pb-2 mb-3">
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-black mb-1.5">
                Hung To
              </h1>
              <p className="text-sm sm:text-base font-semibold text-neutral-800 mb-1.5">
                Fullstack Developer
              </p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-neutral-800">
                <a
                  href="tel:0858990375"
                  className="inline-flex items-center gap-1.5 hover:text-black hover:underline"
                >
                  <FaPhone className="text-xs text-neutral-700" />
                  <span>0858990375</span>
                </a>
                <span className="text-neutral-400 font-sans">•</span>
                <a
                  href="mailto:thienhungto@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-black hover:underline"
                >
                  <FaEnvelope className="text-xs text-neutral-700" />
                  <span>thienhungto@gmail.com</span>
                </a>
                <span className="text-neutral-400 font-sans">•</span>
                <span className="inline-flex items-center gap-1.5">
                  <FaMapMarkerAlt className="text-xs text-neutral-700" />
                  <span>Ho Chi Minh City, Vietnam</span>
                </span>
                <span className="text-neutral-400 font-sans">•</span>
                <a
                  href="https://github.com/thienhungbro-cell"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-black hover:underline"
                >
                  <FaGithub className="text-xs text-neutral-700" />
                  <span>GitHub</span>
                </a>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-4">
              <h2 className="text-base sm:text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-[13.5px] text-neutral-900 leading-relaxed text-justify">
                A results-driven <span className="font-bold text-black">Fullstack Developer</span> with 2+ years of hands-on experience building scalable, high-performance web applications across both <span className="font-bold text-black">Vue.js (Nuxt.js)</span> and <span className="font-bold text-black">ReactJS (Next.js)</span> ecosystems. Adept at developing responsive UI, architecting lightweight backend services, integrating type-safe/RESTful APIs, and optimizing system performance. Skilled in leveraging <span className="font-bold text-black">Generative AI &amp; modern AI-assisted workflows</span> to maximize engineering velocity while maintaining clean, robust code within Scrum/Agile environments.
              </p>
            </section>

            {/* Technical Skills */}
            <section className="mb-4">
              <h2 className="text-base sm:text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Technical Skills
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-[13.5px] text-neutral-900 leading-snug">
                <li>
                  <span className="font-bold">Frontend:</span> Vue 3, Nuxt 4, ReactJS, Next.js, TypeScript, JavaScript, Tailwind CSS (v4), HTML5, CSS3, TanStack Table.
                </li>
                <li>
                  <span className="font-bold">Backend:</span> Node.js, Hono, RESTful APIs, oRPC, Directus (Headless CMS), PostgreSQL, Type-safe Schemas (ArkType, Zod).
                </li>
                <li>
                  <span className="font-bold">Tools &amp; DevOps:</span> Docker, Git, GitHub, GitLab, CI/CD, Playwright, Vitest, Vercel.
                </li>
                <li>
                  <span className="font-bold">Methodologies &amp; Languages:</span> Scrum/Agile, MVVM Architecture, Unit Testing, E2E Testing, English (TOEIC 750).
                </li>
              </ul>
            </section>

            {/* Work Experience */}
            <section className="mb-4">
              <h2 className="text-base sm:text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Work Experience
              </h2>
              <div className="space-y-4">
                
                {/* Job 1: FIDT */}
                <div>
                  <div className="flex justify-between items-baseline text-sm sm:text-[14.5px]">
                    <div>
                      <span className="font-bold text-black">Fullstack Developer</span>
                      <span className="text-neutral-800"> – FIDT</span>
                    </div>
                    <span className="font-medium text-neutral-800 text-xs sm:text-sm">
                      February 2025 – Present
                    </span>
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-800 mt-0.5">
                    <span className="font-bold">Project:</span> Wealth Ecosystem (Wealth For Me &amp; Wealth Platform)
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-800">
                    <span className="font-bold">Tech Stack:</span> Nuxt 4 / Vue 3, Hono, PostgreSQL, Docker, oRPC, Directus, Tailwind v4, Playwright.
                  </div>
                  <p className="text-xs sm:text-[13px] text-neutral-700 italic mt-0.5">
                    Comprehensive digital wealth advisory and real estate valuation ecosystem. Built responsive, high-performance interfaces for financial analytics; engineered backend services and containerized microservices.
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-xs sm:text-[13px] text-neutral-900 leading-snug">
                    <li>
                      Design and develop reactive web user interfaces following the <span className="font-bold">MVVM architecture</span> using <span className="font-bold">Nuxt 4</span>, <span className="font-bold">Vue 3</span>, and <span className="font-bold">Tailwind CSS v4</span>.
                    </li>
                    <li>
                      Build high-performance, lightweight backend services and APIs using <span className="font-bold">Hono</span>, <span className="font-bold">Node.js</span>, <span className="font-bold">PostgreSQL</span>, and <span className="font-bold">Directus Headless CMS</span>.
                    </li>
                    <li>
                      Containerize services using <span className="font-bold">Docker</span> to ensure consistent local development, staging environments, and streamlined deployments.
                    </li>
                    <li>
                      Implement end-to-end type-safe APIs using <span className="font-bold">oRPC</span> and <span className="font-bold">ArkType/Zod</span> schemas to seamlessly bridge Frontend and Backend communication with zero-overhead.
                    </li>
                    <li>
                      Develop interactive financial and real estate valuation analytics features using <span className="font-bold">TanStack Table</span>, optimizing rendering speed and UX responsiveness.
                    </li>
                    <li>
                      Establish robust testing strategies, including backend Unit Testing and Frontend E2E testing using <span className="font-bold">Playwright</span> and <span className="font-bold">Vitest</span> to ensure high scalability.
                    </li>
                  </ul>
                  <div className="text-xs sm:text-[13px] text-neutral-700 mt-1 flex flex-wrap gap-x-4">
                    <span>
                      Wealth For Me:{' '}
                      <a href="https://wealthforme.fidt.vn/suc-khoe-tai-chinh" target="_blank" rel="noreferrer" className="underline hover:text-black">
                        wealthforme.fidt.vn/suc-khoe-tai-chinh
                      </a>
                    </span>
                    <span>
                      Wealth Platform:{' '}
                      <a href="https://wealthforme.fidt.vn/bat-dong-san" target="_blank" rel="noreferrer" className="underline hover:text-black">
                        wealthforme.fidt.vn/bat-dong-san
                      </a>
                    </span>
                  </div>
                </div>

                {/* Job 2: Muadee */}
                <div>
                  <div className="flex justify-between items-baseline text-sm sm:text-[14.5px]">
                    <div>
                      <span className="font-bold text-black">Frontend Developer</span>
                      <span className="text-neutral-800"> – Muadee by HDBank</span>
                    </div>
                    <span className="font-medium text-neutral-800 text-xs sm:text-sm">
                      February 2024 – January 2025
                    </span>
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-800 mt-0.5">
                    <span className="font-bold">Project:</span> Muadee BNPL &amp; Partner Campaign Ecosystem
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-800">
                    <span className="font-bold">Tech Stack:</span> ReactJS, Next.js, Tailwind CSS, Deploy to Vercel.
                  </div>
                  <p className="text-xs sm:text-[13px] text-neutral-700 italic mt-0.5">
                    Developed co-branded promotional campaign landing pages and installment payment features for HDBank&apos;s Buy-Now-Pay-Later (BNPL) ecosystem.
                  </p>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-xs sm:text-[13px] text-neutral-900 leading-snug">
                    <li>
                      Engineered high-converting, responsive landing pages and campaign microsites for Tier-1 partners (<span className="font-bold">ApplePay, ZaloPay, ShopeeFood, Traveloka, Lazada</span>) using <span className="font-bold">Next.js</span> and <span className="font-bold">Tailwind CSS</span>.
                    </li>
                    <li>
                      Built modular, reusable UI components ensuring cross-browser consistency, mobile responsiveness, and pixel-perfect fidelity based on Figma designs.
                    </li>
                    <li>
                      Optimized Core Web Vitals and asset loading, achieving sub-second page loads for high-traffic promotional campaigns.
                    </li>
                    <li>
                      Integrated campaign forms, promotional voucher validations, and installment calculation logic with backend RESTful APIs.
                    </li>
                    <li>
                      Collaborated closely with Product and QA teams in Scrum sprints, managing CI/CD deployments on Vercel for zero-downtime campaign launches.
                    </li>
                  </ul>
                  <div className="text-xs sm:text-[13px] text-neutral-700 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                    <span>Campaigns:</span>
                    <a href="https://www.muadee.com.vn/thanh-toan-voi-apple-pay" target="_blank" rel="noreferrer" className="underline hover:text-black">ApplePay</a>
                    <span>•</span>
                    <a href="https://www.muadee.com.vn/giam-den-100k-tren-zalopay-voi-the-tra-gop-muadee" target="_blank" rel="noreferrer" className="underline hover:text-black">ZaloPay</a>
                    <span>•</span>
                    <a href="https://d3dxi7t02b61aw.cloudfront.net/shopeefood-khao-ban-70k-qua-the-tra-gop-muadee" target="_blank" rel="noreferrer" className="underline hover:text-black">Shopee</a>
                    <span>•</span>
                    <a href="https://d3dxi7t02b61aw.cloudfront.net/di-muon-noi-voi-traveloka-giam-150k-qua-muadee" target="_blank" rel="noreferrer" className="underline hover:text-black">Traveloka</a>
                    <span>•</span>
                    <a href="https://d3dxi7t02b61aw.cloudfront.net/luot-lazada-tha-ga-giam-200k-qua-the-tra-gop-muadee" target="_blank" rel="noreferrer" className="underline hover:text-black">Lazada</a>
                    <span>•</span>
                    <a href="https://www.muadee.com.vn/tra-gop-muadee-trung-iphone-16-pro-max" target="_blank" rel="noreferrer" className="underline hover:text-black">Muadee iPhone 16</a>
                  </div>
                </div>

              </div>
            </section>

            {/* Education & Certifications */}
            <section className="mb-2">
              <h2 className="text-base sm:text-[17px] font-bold text-black border-b border-black pb-0.5 mb-2">
                Education &amp; Certifications
              </h2>
              <div className="space-y-2.5">
                <div>
                  <div className="flex justify-between items-baseline text-sm sm:text-[14.5px]">
                    <div>
                      <span className="font-bold text-black">Ho Chi Minh City University of Agriculture and Forestry</span>
                    </div>
                    <span className="font-medium text-neutral-800 text-xs sm:text-sm">
                      Completed May 2024
                    </span>
                  </div>
                  <div className="text-xs sm:text-[13px] text-neutral-800">
                    Engineer Degree in Software Engineering (4.5 years program)
                  </div>
                </div>

                <div className="pt-2 border-t border-neutral-200">
                  <div className="flex justify-between items-baseline text-xs sm:text-[13.5px]">
                    <div>
                      <span className="font-bold text-black">Scrum Training Certificate</span>
                      <span className="text-neutral-800"> – Axon Active (3 months program • Completed May 2024)</span>
                    </div>
                    <a
                      href="https://verified.sertifier.com/en/verify/96291607243483/?ref=email"
                      target="_blank"
                      rel="noreferrer"
                      className="italic underline text-neutral-700 hover:text-black text-xs sm:text-[13px]"
                    >
                      View certificate
                    </a>
                  </div>
                </div>

                <div className="pt-1">
                  <div className="flex justify-between items-baseline text-xs sm:text-[13.5px]">
                    <div>
                      <span className="font-bold text-black">TOEIC Certificate</span>
                      <span className="text-neutral-800"> – Total Score: 750</span>
                    </div>
                    <span className="italic text-neutral-700 text-xs sm:text-[13px]">
                      Credential available
                    </span>
                  </div>
                </div>
              </div>
            </section>

          </main>
        </div>
      )}

    </div>
  );
}
