import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Header from "./components/Header";
import Services from "./components/Services";

export default function Home() {
  return (
    <MainLayout>
      <Header />

      <main>
        <Services />

        <section>
          <h2>Section 01</h2>
        </section>

        <section>
          <h2>Section 01</h2>
        </section>
      </main>
    </MainLayout>
  );
}
