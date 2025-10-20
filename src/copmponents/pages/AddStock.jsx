/* AddStockPage.jsx */
import React, { useState } from "react";

export default function AddStockPage() {
  /* ---------- state ---------- */
  const [bulk, setBulk] = useState({
    buy: 10,
    sale: 10,
    pSale: 10,
    mOffer: 12,
  });

  const [single, setSingle] = useState({
    buy: 10,
    sale: 10,
    pSale: 10,
    mOffer: 12,
    qty: 1000,
    exp: "",
    btc: "",
    autoBTC: false,
  });

  const [product, setProduct] = useState({
    desc: "",
    company: "",
    mrp: "",
  });

  /* ---------- handlers ---------- */
  const handleBulkChange = (e) =>
    setBulk({ ...bulk, [e.target.name]: Number(e.target.value) });

  const handleSingleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSingle({ ...single, [name]: type === "checkbox" ? checked : value });
  };

  const handleProductChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const handleAddStock = () => {
    console.log({ bulk, single, product });
    alert("Stock added (check console)");
  };

  /* ---------- render ---------- */
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">AddStock</h1>

        {/* ====== Bulk Section ====== */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">BulkStockHelper</h2>
            <p className="text-xs text-gray-500">
              Note: Bulk buy%, Sale%, P-sale%, M-offer% off calculate base on MRP
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(bulk).map(([key, val]) => (
              <label key={key} className="flex flex-col">
                <span className="text-sm capitalize mb-1">{key.replace(/([A-Z])/g, " $1")} %</span>
                <input
                  type="number"
                  name={key}
                  value={val}
                  onChange={handleBulkChange}
                  className="border rounded px-3 py-2"
                />
              </label>
            ))}
          </div>
        </section>

        {/* ====== Product Info ====== */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold mb-4">Product Description</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <label className="flex flex-col">
              <span className="text-sm mb-1">Product Description</span>
              <input
                name="desc"
                value={product.desc}
                onChange={handleProductChange}
                placeholder="e.g. Paracetamol 500mg"
                className="border rounded px-3 py-2"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm mb-1">Company Name</span>
              <input
                name="company"
                value={product.company}
                onChange={handleProductChange}
                placeholder="e.g. ABC Pharma"
                className="border rounded px-3 py-2"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm mb-1">MRP</span>
              <input
                name="mrp"
                value={product.mrp}
                onChange={handleProductChange}
                placeholder="e.g. 100"
                className="border rounded px-3 py-2"
              />
            </label>
          </div>
        </section>

        {/* ====== Single Stock ====== */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <p className="text-xs text-gray-500 mb-4">
            Note: If you stock as bulk then price and other input will place auto
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            {["buy", "sale", "pSale", "mOffer"].map((k) => (
              <label key={k} className="flex flex-col">
                <span className="text-sm capitalize mb-1">{k.replace(/([A-Z])/g, " $1")} *</span>
                <input
                  type="number"
                  name={k}
                  value={single[k]}
                  onChange={handleSingleChange}
                  className="border rounded px-3 py-2"
                />
              </label>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <label className="flex flex-col">
              <span className="text-sm mb-1">Exp * (YYYY/MM/DD)</span>
              <input
                type="date"
                name="exp"
                value={single.exp}
                onChange={handleSingleChange}
                className="border rounded px-3 py-2"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-sm mb-1">BTC * (GB-YYYY/MM/DD)</span>
              <input
                name="btc"
                value={single.btc}
                onChange={handleSingleChange}
                placeholder="GB-2025/12/31"
                className="border rounded px-3 py-2"
              />
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="autoBTC"
                checked={single.autoBTC}
                onChange={handleSingleChange}
                className="h-4 w-4"
              />
              <span className="text-sm">Auto BTC</span>
            </label>
          </div>

          <label className="flex flex-col max-w-xs">
            <span className="text-sm mb-1">QTY *</span>
            <input
              type="number"
              name="qty"
              value={single.qty}
              onChange={handleSingleChange}
              className="border rounded px-3 py-2"
            />
          </label>

          <button
            onClick={handleAddStock}
            className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            ADDSTOCK
          </button>
        </section>

        {/* ====== Recent Stock ====== */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4">RecentStock</h2>
          <div className="overflow-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Product Description</th>
                  <th className="text-left p-2">Company Name</th>
                  <th className="text-left p-2">MRP</th>
                  <th className="text-left p-2">Stock</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">-</td>
                  <td className="p-2">-</td>
                  <td className="p-2">-</td>
                  <td className="p-2">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}