/// <reference types="cypress" />

context("Check", () => {
  afterEach(function () {
    if (this.currentTest.state === "failed") {
      Cypress.runner.stop();
    }
  });
  it("vatan", () => {
    cy.visit("https://www.vatanbilgisayar.com/geforce-rtx-30-serisi/");
    cy.contains("3070").should("not.exist");
  });
  // it("nvidia", () => {
  //   cy.visit(
  //     "https://www.nvidia.com/en-gb/geforce/graphics-cards/30-series/rtx-3070/"
  //   );
  //   cy.contains("Available from 29th October");
  // });
  it("itopya", () => {
    cy.visit(
      "https://www.itopya.com/bilgisayar-parcalari/ana-parcalar/ekran-karti/masaustu-ekran-karti/?g=sT&f=n&oid={_1904_:[9192]}"
    );
    cy.contains("Ürün bulunamamıştır.");
  });
  it("incehesap", () => {
    cy.visit("https://www.incehesap.com/rtx-3070/");
    cy.contains("Ücretsiz Kargo").should("not.exist");
  });
  it("ebrar", () => {
    cy.visit(
      "https://www.ebrarbilgisayar.com/rtx-30-serisi-pmk664?ob=3&sc=2&oz=216_3328"
    );
    cy.contains("Seçimlerinize uygun kayıt bulunamadı.");
  });
  it("amazon", () => {
    cy.visit(
      "https://www.amazon.com.tr/s?k=Ekran+Kartlar%C4%B1&i=computers&rh=n%3A12601951031%2Cp_n_feature_three_browse-bin%3A17478056031&s=date-desc-rank&dc&_encoding=UTF8&c=ts&qid=1603929315&rnid=12783238031&ts_id=12601951031&ref=sr_st_date-desc-rank"
    );
    cy.contains("3070").should("not.exist");
  });
  it("qp bilisim", () => {
    cy.visit(
      "https://www.qp.com.tr/bilgisayar-parcalari/ekran-karti?ekran_karti_chipset=831&stock=1"
    );
    cy.contains("3070").should("not.exist");
  });
  // it.only("newegg", () => {
  //   cy.visit(
  //     "https://www.newegg.com/global/tr-en/p/pl?N=101589871%20601357282%204131"
  //   );
  //   cy.contains("Add to cart").should("not.exist");
  // });
  // it.only("currys", () => {
  //   cy.visit(
  //     "https://www.currys.co.uk/gbuk/search-keywords/xx_xx_xx_xx_xx/rtx%2B3070/xx-criteria.html"
  //   );
  //   cy.contains("FREE delivery available").should("not.exist");
  // });
  it("novabilgisayar", () => {
    cy.visit(
      "https://www.novabilgisayar.com/Ekran-Karti.asp?EKRAN-KARTI-GPU=RTX-3070"
    );
    cy.get('[alt="Stokta Var"]').should("not.be.visible");
  });
});
