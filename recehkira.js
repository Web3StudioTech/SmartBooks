/* =========================================================
   SmartBooks v2.0 — offline micro-business bookkeeping
   Improvements: Mandarin, landing page, photo lightbox,
   per-doctype invoice numbering, overdue badge,
   garment/print presets, mobile polish
   ========================================================= */

/* ---------- i18n ---------- */
const I18N = {
  en: {
    tagline: "Smarter Accounting. Stronger Business.",
    theme: "Theme", lang: "EN",
    "nav.dashboard": "Dashboard", "nav.transactions": "Transactions",
    "nav.invoices": "Invoices", "nav.reports": "Reports", "nav.settings": "Settings",
    "footer": "SmartBooks — fully offline. Your data stays on this device only.",
    "common.save":"Save","common.cancel":"Cancel","common.delete":"Delete",
    "common.edit":"Edit","common.print":"Print","common.back":"Back",
    "common.add":"Add","common.remove":"Remove",
    "common.confirmDelete":"Delete this? Cannot be undone.",
    "common.yes":"Yes","common.no":"No","common.all":"All",
    "common.income":"Income","common.expense":"Expense",
    "common.total":"Total","common.net":"Net","common.date":"Date",
    "common.amount":"Amount","common.category":"Category",
    "common.description":"Description","common.method":"Method","common.actions":"Actions",
    "tx.add":"Add transaction","tx.edit":"Edit transaction",
    "tx.type":"Type","tx.income":"Income (Money In)","tx.expense":"Expense (Money Out)",
    "tx.date":"Date","tx.amount":"Amount (RM)","tx.method":"Payment method",
    "tx.category":"Category","tx.categoryOther":"+ Add new category",
    "tx.desc":"Description / notes","tx.photo":"Receipt photo (optional)",
    "tx.choosePhoto":"Choose photo","tx.removePhoto":"Remove photo",
    "tx.saved":"Transaction saved","tx.deleted":"Transaction deleted",
    "dash.title":"Dashboard","dash.sub":"Your business at a glance, this month.",
    "dash.thisMonth":"This month","dash.profit":"Untung (Profit)","dash.loss":"Rugi (Loss)",
    "dash.income":"Money in","dash.expense":"Money out",
    "dash.txCount":"transactions this month",
    "dash.addIncome":"+ Add money in","dash.addExpense":"+ Add money out",
    "dash.topExpenses":"Top expenses this month","dash.recent":"Recent activity",
    "dash.noData":"No transactions yet. Tap a button above to add your first one.",
    "dash.einvoiceTitle":"About e-Invoice (LHDN)",
    "dash.einvoiceBody":"Businesses under RM1,000,000 annual turnover are currently exempt from mandatory e-Invoicing. Keeping clean records here means you're ready if that changes.",
    "dash.turnoverWarn":"Heads up: your estimated annual turnover is approaching the RM1,000,000 e-Invoice exemption threshold.",
    "txv.title":"Transactions","txv.sub":"Every ringgit in and out of your business.",
    "txv.filterMonth":"Month","txv.filterType":"Type","txv.filterCategory":"Category",
    "txv.search":"Search","txv.exportCsv":"Export CSV",
    "txv.noResults":"No transactions match your filters.",
    "txv.totals":"Totals (filtered)",
    "inv.title":"Invoices & Receipts","inv.sub":"Create invoices, receipts and quotations for customers.",
    "inv.new":"+ New document","inv.noDocs":"No documents yet.",
    "inv.docType":"Document type","inv.typeInvoice":"Invoice",
    "inv.typeReceipt":"Receipt","inv.typeQuotation":"Quotation",
    "inv.number":"Document no.","inv.date":"Date","inv.dueDate":"Due date",
    "inv.client":"Customer / Buyer","inv.clientName":"Name",
    "inv.clientPhone":"Phone","inv.clientAddress":"Address",
    "inv.clientTin":"Buyer TIN (optional, for MyInvois)",
    "inv.items":"Items","inv.itemDesc":"Description",
    "inv.itemQty":"Qty","inv.itemPrice":"Unit price (RM)","inv.itemTotal":"Amount (RM)",
    "inv.addItem":"+ Add item","inv.discount":"Discount (RM)",
    "inv.taxRate":"Tax / SST rate (%)","inv.notes":"Notes",
    "inv.subtotal":"Subtotal","inv.total":"Total",
    "inv.status":"Status","inv.statusDraft":"Draft",
    "inv.statusUnpaid":"Unpaid","inv.statusPaid":"Paid",
    "inv.markPaid":"Mark as paid","inv.markUnpaid":"Mark as unpaid",
    "inv.saved":"Document saved","inv.deleted":"Document deleted",
    "inv.preview":"Preview","inv.billTo":"Bill to","inv.from":"From",
    "inv.dateLbl":"Date","inv.qrNote":"Scan to pay via DuitNow",
    "inv.paidByTx":"A matching income entry was added to Transactions.",
    "inv.overdue":"OVERDUE",
    "rep.title":"Reports","rep.sub":"Monthly profit & loss and category breakdown.",
    "rep.year":"Year","rep.tableMonth":"Month","rep.tableIncome":"Income",
    "rep.tableExpense":"Expense","rep.tableNet":"Net",
    "rep.breakdownFor":"Category breakdown for",
    "rep.showIncome":"Income categories","rep.showExpense":"Expense categories",
    "rep.noBreakdown":"No transactions for this month yet.","rep.yearTotal":"Year total",
    "set.title":"Settings","set.sub":"Business profile, categories, language and backups.",
    "set.profile":"Business profile","set.bizName":"Business name",
    "set.regNo":"Registration no. (SSM) — optional","set.tin":"Tax ID (TIN) — optional",
    "set.address":"Business address","set.phone":"Phone","set.email":"Email",
    "set.turnover":"Estimated annual turnover (RM) — optional",
    "set.logo":"Logo (for invoices)","set.qr":"DuitNow QR code image",
    "set.uploadImage":"Upload image","set.removeImage":"Remove",
    "set.preset":"Quick category preset",
    "set.presetDefault":"Default (general)","set.presetGarment":"Garment & Print Shop",
    "set.presetApply":"Apply preset","set.presetConfirm":"Replace current categories with the preset?",
    "set.categories":"Categories","set.incomeCats":"Income categories",
    "set.expenseCats":"Expense categories","set.newCatPlaceholder":"New category name",
    "set.dataMgmt":"Backup & data","set.exportJson":"Download full backup (.json)",
    "set.importJson":"Restore from backup (.json)","set.exportCsvAll":"Export all transactions (.csv)",
    "set.clearAll":"Erase all data",
    "set.clearAllWarn":"This permanently deletes everything stored by SmartBooks on this device. Cannot be undone.",
    "set.clearAllConfirm":"Type ERASE to confirm:",
    "set.saved":"Settings saved","set.imported":"Backup restored","set.importError":"Could not read file — must be a SmartBooks backup (.json).",
    "set.erased":"All data erased.",
    "set.einvoiceInfo":"About e-Invoice exemption (2026)",
    "set.einvoiceInfoBody":"Businesses under RM1,000,000 annual turnover are permanently exempt from LHDN's mandatory e-Invoicing (MyInvois). You may opt in voluntarily. This is not tax advice — check LHDN's official guidance."
  },
  ms: {
    tagline: "Smarter Accounting. Stronger Business.",
    theme: "Tema", lang: "BM",
    "nav.dashboard":"Papan Pemuka","nav.transactions":"Transaksi",
    "nav.invoices":"Invois","nav.reports":"Laporan","nav.settings":"Tetapan",
    "footer":"SmartBooks — berfungsi offline. Data anda kekal di peranti ini sahaja.",
    "common.save":"Simpan","common.cancel":"Batal","common.delete":"Padam",
    "common.edit":"Edit","common.print":"Cetak","common.back":"Kembali",
    "common.add":"Tambah","common.remove":"Buang",
    "common.confirmDelete":"Padam rekod ini? Tidak boleh dibatalkan.",
    "common.yes":"Ya","common.no":"Tidak","common.all":"Semua",
    "common.income":"Pendapatan","common.expense":"Perbelanjaan",
    "common.total":"Jumlah","common.net":"Bersih","common.date":"Tarikh",
    "common.amount":"Jumlah","common.category":"Kategori",
    "common.description":"Keterangan","common.method":"Cara Bayar","common.actions":"Tindakan",
    "tx.add":"Tambah transaksi","tx.edit":"Edit transaksi",
    "tx.type":"Jenis","tx.income":"Pendapatan (Duit Masuk)","tx.expense":"Perbelanjaan (Duit Keluar)",
    "tx.date":"Tarikh","tx.amount":"Jumlah (RM)","tx.method":"Cara bayaran",
    "tx.category":"Kategori","tx.categoryOther":"+ Tambah kategori baharu",
    "tx.desc":"Keterangan / nota","tx.photo":"Gambar resit (pilihan)",
    "tx.choosePhoto":"Pilih gambar","tx.removePhoto":"Buang gambar",
    "tx.saved":"Transaksi disimpan","tx.deleted":"Transaksi dipadam",
    "dash.title":"Papan Pemuka","dash.sub":"Status perniagaan anda bulan ini.",
    "dash.thisMonth":"Bulan ini","dash.profit":"Untung","dash.loss":"Rugi",
    "dash.income":"Duit masuk","dash.expense":"Duit keluar",
    "dash.txCount":"transaksi bulan ini",
    "dash.addIncome":"+ Tambah duit masuk","dash.addExpense":"+ Tambah duit keluar",
    "dash.topExpenses":"Perbelanjaan terbesar","dash.recent":"Aktiviti terkini",
    "dash.noData":"Belum ada transaksi. Tekan butang di atas untuk mula catat.",
    "dash.einvoiceTitle":"Tentang e-Invois (LHDN)",
    "dash.einvoiceBody":"Perniagaan dengan pusing ganti tahunan bawah RM1,000,000 dikecualikan daripada e-Invois mandatori.",
    "dash.turnoverWarn":"Amaran: anggaran pusing ganti tahunan anda hampir mencapai had pengecualian e-Invois RM1,000,000.",
    "txv.title":"Transaksi","txv.sub":"Setiap ringgit masuk dan keluar perniagaan anda.",
    "txv.filterMonth":"Bulan","txv.filterType":"Jenis","txv.filterCategory":"Kategori",
    "txv.search":"Cari","txv.exportCsv":"Eksport CSV",
    "txv.noResults":"Tiada transaksi sepadan dengan tapisan anda.",
    "txv.totals":"Jumlah (mengikut tapisan)",
    "inv.title":"Invois & Resit","inv.sub":"Cipta invois, resit dan sebutharga untuk pelanggan.",
    "inv.new":"+ Dokumen baharu","inv.noDocs":"Belum ada dokumen.",
    "inv.docType":"Jenis dokumen","inv.typeInvoice":"Invois",
    "inv.typeReceipt":"Resit","inv.typeQuotation":"Sebutharga",
    "inv.number":"No. dokumen","inv.date":"Tarikh","inv.dueDate":"Tarikh akhir",
    "inv.client":"Pelanggan","inv.clientName":"Nama",
    "inv.clientPhone":"No. telefon","inv.clientAddress":"Alamat",
    "inv.clientTin":"TIN Pembeli (pilihan)",
    "inv.items":"Item","inv.itemDesc":"Keterangan",
    "inv.itemQty":"Kuantiti","inv.itemPrice":"Harga seunit (RM)","inv.itemTotal":"Jumlah (RM)",
    "inv.addItem":"+ Tambah item","inv.discount":"Diskaun (RM)",
    "inv.taxRate":"Kadar Cukai / SST (%)","inv.notes":"Nota",
    "inv.subtotal":"Jumlah kecil","inv.total":"Jumlah Keseluruhan",
    "inv.status":"Status","inv.statusDraft":"Draf",
    "inv.statusUnpaid":"Belum Bayar","inv.statusPaid":"Sudah Bayar",
    "inv.markPaid":"Tanda sudah bayar","inv.markUnpaid":"Tanda belum bayar",
    "inv.saved":"Dokumen disimpan","inv.deleted":"Dokumen dipadam",
    "inv.preview":"Pratonton","inv.billTo":"Kepada","inv.from":"Daripada",
    "inv.dateLbl":"Tarikh","inv.qrNote":"Scan untuk bayar melalui DuitNow",
    "inv.paidByTx":"Rekod pendapatan sepadan telah ditambah ke Transaksi.",
    "inv.overdue":"TERTUNGGAK",
    "rep.title":"Laporan","rep.sub":"Untung-rugi bulanan dan pecahan kategori.",
    "rep.year":"Tahun","rep.tableMonth":"Bulan","rep.tableIncome":"Pendapatan",
    "rep.tableExpense":"Perbelanjaan","rep.tableNet":"Bersih",
    "rep.breakdownFor":"Pecahan kategori untuk",
    "rep.showIncome":"Kategori pendapatan","rep.showExpense":"Kategori perbelanjaan",
    "rep.noBreakdown":"Tiada transaksi untuk bulan ini.","rep.yearTotal":"Jumlah tahunan",
    "set.title":"Tetapan","set.sub":"Profil perniagaan, kategori, bahasa dan sandaran data.",
    "set.profile":"Profil perniagaan","set.bizName":"Nama perniagaan",
    "set.regNo":"No. pendaftaran (SSM) — pilihan","set.tin":"TIN — pilihan",
    "set.address":"Alamat perniagaan","set.phone":"Telefon","set.email":"Emel",
    "set.turnover":"Anggaran pusing ganti tahunan (RM) — pilihan",
    "set.logo":"Logo (untuk invois)","set.qr":"Gambar kod QR DuitNow",
    "set.uploadImage":"Muat naik gambar","set.removeImage":"Buang",
    "set.preset":"Pratetap kategori",
    "set.presetDefault":"Lalai (umum)","set.presetGarment":"Kedai Garmen & Cetak",
    "set.presetApply":"Guna pratetap","set.presetConfirm":"Gantikan kategori semasa dengan pratetap ini?",
    "set.categories":"Kategori","set.incomeCats":"Kategori pendapatan",
    "set.expenseCats":"Kategori perbelanjaan","set.newCatPlaceholder":"Nama kategori baharu",
    "set.dataMgmt":"Sandaran & Data","set.exportJson":"Muat turun sandaran penuh (.json)",
    "set.importJson":"Pulihkan dari sandaran (.json)","set.exportCsvAll":"Eksport semua transaksi (.csv)",
    "set.clearAll":"Padam semua data",
    "set.clearAllWarn":"Ini memadam semua data SmartBooks secara kekal di peranti ini.",
    "set.clearAllConfirm":"Taip ERASE untuk sahkan:",
    "set.saved":"Tetapan disimpan","set.imported":"Sandaran dipulihkan","set.importError":"Tidak dapat baca fail — mesti fail sandaran SmartBooks (.json).",
    "set.erased":"Semua data telah dipadam.",
    "set.einvoiceInfo":"Tentang pengecualian e-Invois (2026)",
    "set.einvoiceInfoBody":"Perniagaan dengan pusing ganti tahunan bawah RM1,000,000 dikecualikan secara kekal daripada e-Invois LHDN (MyInvois). Anda boleh menyertai secara sukarela. Ini bukan nasihat cukai."
  },
  zh: {
    tagline: "更智能的会计，更强大的业务。",
    theme: "主题", lang: "中文",
    "nav.dashboard":"总览","nav.transactions":"交易记录",
    "nav.invoices":"发票","nav.reports":"报表","nav.settings":"设置",
    "footer":"SmartBooks — 完全离线运行。数据仅保存在本设备。",
    "common.save":"保存","common.cancel":"取消","common.delete":"删除",
    "common.edit":"编辑","common.print":"打印","common.back":"返回",
    "common.add":"添加","common.remove":"移除",
    "common.confirmDelete":"确定删除？此操作不可撤销。",
    "common.yes":"是","common.no":"否","common.all":"全部",
    "common.income":"收入","common.expense":"支出",
    "common.total":"合计","common.net":"净额","common.date":"日期",
    "common.amount":"金额","common.category":"类别",
    "common.description":"说明","common.method":"付款方式","common.actions":"操作",
    "tx.add":"添加交易","tx.edit":"编辑交易",
    "tx.type":"类型","tx.income":"收入（进账）","tx.expense":"支出（出账）",
    "tx.date":"日期","tx.amount":"金额（RM）","tx.method":"付款方式",
    "tx.category":"类别","tx.categoryOther":"+ 添加新类别",
    "tx.desc":"说明 / 备注","tx.photo":"收据照片（可选）",
    "tx.choosePhoto":"选择照片","tx.removePhoto":"移除照片",
    "tx.saved":"交易已保存","tx.deleted":"交易已删除",
    "dash.title":"总览","dash.sub":"本月业务概况。",
    "dash.thisMonth":"本月","dash.profit":"盈利（Untung）","dash.loss":"亏损（Rugi）",
    "dash.income":"收入","dash.expense":"支出",
    "dash.txCount":"笔交易（本月）",
    "dash.addIncome":"+ 添加收入","dash.addExpense":"+ 添加支出",
    "dash.topExpenses":"本月主要支出","dash.recent":"近期记录",
    "dash.noData":"暂无交易记录。点击上方按钮添加第一笔。",
    "dash.einvoiceTitle":"关于电子发票（LHDN）",
    "dash.einvoiceBody":"年营业额低于RM100万的企业目前可豁免强制性电子发票（MyInvois）。保持良好记录，随时做好准备。",
    "dash.turnoverWarn":"提醒：您的预估年营业额即将接近RM100万电子发票豁免门槛。",
    "txv.title":"交易记录","txv.sub":"每一分收入与支出。",
    "txv.filterMonth":"月份","txv.filterType":"类型","txv.filterCategory":"类别",
    "txv.search":"搜索","txv.exportCsv":"导出CSV",
    "txv.noResults":"没有符合筛选条件的交易。",
    "txv.totals":"合计（已筛选）",
    "inv.title":"发票与收据","inv.sub":"为客户创建简易发票、收据和报价单。",
    "inv.new":"+ 新建文件","inv.noDocs":"暂无文件。",
    "inv.docType":"文件类型","inv.typeInvoice":"发票",
    "inv.typeReceipt":"收据","inv.typeQuotation":"报价单",
    "inv.number":"文件编号","inv.date":"日期","inv.dueDate":"截止日期",
    "inv.client":"客户","inv.clientName":"姓名",
    "inv.clientPhone":"电话","inv.clientAddress":"地址",
    "inv.clientTin":"买方税号（可选，用于MyInvois）",
    "inv.items":"项目","inv.itemDesc":"说明",
    "inv.itemQty":"数量","inv.itemPrice":"单价（RM）","inv.itemTotal":"金额（RM）",
    "inv.addItem":"+ 添加项目","inv.discount":"折扣（RM）",
    "inv.taxRate":"税率 / SST (%)","inv.notes":"备注",
    "inv.subtotal":"小计","inv.total":"总计",
    "inv.status":"状态","inv.statusDraft":"草稿",
    "inv.statusUnpaid":"未付款","inv.statusPaid":"已付款",
    "inv.markPaid":"标记为已付款","inv.markUnpaid":"标记为未付款",
    "inv.saved":"文件已保存","inv.deleted":"文件已删除",
    "inv.preview":"预览","inv.billTo":"收款方","inv.from":"来自",
    "inv.dateLbl":"日期","inv.qrNote":"扫码通过DuitNow付款",
    "inv.paidByTx":"已在交易记录中添加对应收入条目。",
    "inv.overdue":"已逾期",
    "rep.title":"报表","rep.sub":"月度盈亏与类别明细。",
    "rep.year":"年份","rep.tableMonth":"月份","rep.tableIncome":"收入",
    "rep.tableExpense":"支出","rep.tableNet":"净额",
    "rep.breakdownFor":"类别明细：",
    "rep.showIncome":"收入类别","rep.showExpense":"支出类别",
    "rep.noBreakdown":"本月暂无交易记录。","rep.yearTotal":"年度合计",
    "set.title":"设置","set.sub":"业务资料、类别、语言与数据备份。",
    "set.profile":"业务资料","set.bizName":"业务名称",
    "set.regNo":"注册编号（SSM）— 可选","set.tin":"税号（TIN）— 可选",
    "set.address":"业务地址","set.phone":"电话","set.email":"电邮",
    "set.turnover":"预估年营业额（RM）— 可选",
    "set.logo":"Logo（用于发票）","set.qr":"DuitNow QR码图片",
    "set.uploadImage":"上传图片","set.removeImage":"移除",
    "set.preset":"快速类别预设",
    "set.presetDefault":"默认（通用）","set.presetGarment":"服装与印刷店",
    "set.presetApply":"应用预设","set.presetConfirm":"将当前类别替换为此预设？",
    "set.categories":"类别","set.incomeCats":"收入类别",
    "set.expenseCats":"支出类别","set.newCatPlaceholder":"新类别名称",
    "set.dataMgmt":"备份与数据","set.exportJson":"下载完整备份（.json）",
    "set.importJson":"从备份恢复（.json）","set.exportCsvAll":"导出所有交易（.csv）",
    "set.clearAll":"清除所有数据",
    "set.clearAllWarn":"这将永久删除SmartBooks在本设备上的所有数据。不可撤销。",
    "set.clearAllConfirm":"输入 ERASE 确认删除所有内容：",
    "set.saved":"设置已保存","set.imported":"备份已恢复","set.importError":"无法读取文件 — 请确保这是SmartBooks备份文件（.json）。",
    "set.erased":"所有数据已清除。",
    "set.einvoiceInfo":"关于电子发票豁免（2026）",
    "set.einvoiceInfoBody":"2026年起，年营业额低于RM100万的企业永久豁免LHDN强制电子发票（MyInvois）要求，但可自愿加入。这不是税务建议，请参阅LHDN官方指引。"
  }
};

const LANGS = ['en','ms','zh'];

function t(key){
  const lang = document.body.getAttribute('data-lang') || 'en';
  return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key;
}

/* ---------- category presets ---------- */
const PRESETS = {
  default: {
    income: [
      "Sales - Walk-in","Sales - Online (Shopee/Lazada/TikTok)",
      "Services Rendered","Other Income"
    ],
    expense: [
      "Stock / Raw Materials","Rent","Utilities (Electric/Water/Internet)",
      "Transport / Delivery","Wages / Staff","Marketing / Ads",
      "Bank & Payment Fees","Equipment / Repairs","Other Expense"
    ]
  },
  garment: {
    income: [
      "Screen Printing Job","Heat Transfer / Sublimation Job",
      "Embroidery Job","Custom Jersey / Uniform Order",
      "Cutting & Sewing Job","Lanyard / Cap / Bag Printing",
      "Walk-in Retail Sale","Online Order (Shopee/Lazada/TikTok)",
      "Design / Artwork Service","Other Income"
    ],
    expense: [
      "Blank Garments (T-shirt/Polo/Jersey)","Ink & Consumables (Plastisol/DTF/Sublimation)",
      "Transfer Paper & Film","Embroidery Thread & Backing",
      "Packaging & Labelling","Printing Equipment Maintenance",
      "Rent","Utilities (Electric/Water/Internet)",
      "Wages / Staff","Transport / Delivery",
      "Marketing / Ads","Bank & Payment Fees","Other Expense"
    ]
  }
};

const CAT_ZH = {
  "Sales - Walk-in":"门店销售","Sales - Online (Shopee/Lazada/TikTok)":"网络销售",
  "Services Rendered":"服务收入","Other Income":"其他收入",
  "Stock / Raw Materials":"库存 / 原材料","Rent":"租金",
  "Utilities (Electric/Water/Internet)":"水电网费",
  "Transport / Delivery":"运输 / 送货","Wages / Staff":"工资 / 员工",
  "Marketing / Ads":"市场营销","Bank & Payment Fees":"银行手续费",
  "Equipment / Repairs":"设备 / 维修","Other Expense":"其他支出",
  "Screen Printing Job":"丝印工程","Heat Transfer / Sublimation Job":"热转印 / 升华工程",
  "Embroidery Job":"刺绣工程","Custom Jersey / Uniform Order":"球衣 / 制服订单",
  "Cutting & Sewing Job":"裁缝工程","Lanyard / Cap / Bag Printing":"挂绳 / 帽 / 袋印刷",
  "Walk-in Retail Sale":"门店零售","Online Order (Shopee/Lazada/TikTok)":"网络订单",
  "Design / Artwork Service":"设计服务","Blank Garments (T-shirt/Polo/Jersey)":"空白服装",
  "Ink & Consumables (Plastisol/DTF/Sublimation)":"油墨与耗材",
  "Transfer Paper & Film":"转印纸与菲林","Embroidery Thread & Backing":"绣花线与底布",
  "Packaging & Labelling":"包装与标签","Printing Equipment Maintenance":"印刷设备维护"
};
const CAT_MS = {
  "Sales - Walk-in":"Jualan Walk-in","Sales - Online (Shopee/Lazada/TikTok)":"Jualan Online",
  "Services Rendered":"Perkhidmatan","Other Income":"Pendapatan Lain",
  "Stock / Raw Materials":"Stok / Bahan Mentah","Rent":"Sewa",
  "Utilities (Electric/Water/Internet)":"Utiliti","Transport / Delivery":"Pengangkutan",
  "Wages / Staff":"Gaji / Pekerja","Marketing / Ads":"Pemasaran",
  "Bank & Payment Fees":"Caj Bank","Equipment / Repairs":"Peralatan / Baik Pulih",
  "Other Expense":"Perbelanjaan Lain",
  "Screen Printing Job":"Kerja Sablon","Heat Transfer / Sublimation Job":"Kerja Transfer Haba",
  "Embroidery Job":"Kerja Sulaman","Custom Jersey / Uniform Order":"Tempahan Jersi / Uniform",
  "Cutting & Sewing Job":"Kerja Jahit Potong","Lanyard / Cap / Bag Printing":"Cetak Lanyard / Topi / Beg",
  "Walk-in Retail Sale":"Jualan Runcit Walk-in","Online Order (Shopee/Lazada/TikTok)":"Pesanan Online",
  "Design / Artwork Service":"Perkhidmatan Reka Bentuk",
  "Blank Garments (T-shirt/Polo/Jersey)":"Pakaian Kosong","Ink & Consumables (Plastisol/DTF/Sublimation)":"Dakwat & Bahan Habis Pakai",
  "Transfer Paper & Film":"Kertas Transfer & Filem","Embroidery Thread & Backing":"Benang & Kain Belakang Sulaman",
  "Packaging & Labelling":"Pembungkusan & Label","Printing Equipment Maintenance":"Penyelenggaraan Mesin Cetak"
};

const PAYMENT_METHODS = ["Cash","Bank Transfer","DuitNow","Card","Other"];
const METHOD_MS = {"Cash":"Tunai","Bank Transfer":"Pindahan Bank","DuitNow":"DuitNow","Card":"Kad","Other":"Lain-lain"};
const METHOD_ZH = {"Cash":"现金","Bank Transfer":"银行转账","DuitNow":"DuitNow","Card":"刷卡","Other":"其他"};
const MONTH_NAMES = {
  en:["January","February","March","April","May","June","July","August","September","October","November","December"],
  ms:["Januari","Februari","Mac","April","Mei","Jun","Julai","Ogos","September","Oktober","November","Disember"],
  zh:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
};

function translateCat(name){
  const lang = document.body.getAttribute('data-lang') || 'en';
  if(lang==='ms' && CAT_MS[name]) return CAT_MS[name];
  if(lang==='zh' && CAT_ZH[name]) return CAT_ZH[name];
  return name;
}
function translateMethod(name){
  const lang = document.body.getAttribute('data-lang') || 'en';
  if(lang==='ms' && METHOD_MS[name]) return METHOD_MS[name];
  if(lang==='zh' && METHOD_ZH[name]) return METHOD_ZH[name];
  return name;
}

/* ---------- state ---------- */
const STORAGE_KEY = 'smartbooks_v1';
let DB = null;

function defaultDB(){
  return {
    profile:{name:'',regNo:'',tin:'',address:'',phone:'',email:'',turnover:'',logo:'',qr:''},
    categories:{income:PRESETS.default.income.slice(),expense:PRESETS.default.expense.slice()},
    transactions:[], invoices:[],
    nextInvoiceNo:{invoice:1, receipt:1, quotation:1},
    lang:'en', theme:'light'
  };
}
function loadDB(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(raw){
      const p = JSON.parse(raw);
      const d = defaultDB();
      const merged = Object.assign(d, p, {
        profile: Object.assign(d.profile, p.profile||{}),
        categories: Object.assign(d.categories, p.categories||{})
      });
      // migrate old single nextInvoiceNo to per-type object
      if(typeof merged.nextInvoiceNo === 'number'){
        merged.nextInvoiceNo = {invoice: merged.nextInvoiceNo, receipt:1, quotation:1};
      }
      if(typeof merged.nextInvoiceNo !== 'object'){
        merged.nextInvoiceNo = {invoice:1, receipt:1, quotation:1};
      }
      return merged;
    }
  }catch(e){ console.warn('Could not load data',e); }
  return defaultDB();
}
function saveDB(){ try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(DB)); }catch(e){ showToast('Storage error.'); } }

/* ---------- utilities ---------- */
function uid(){ return 'id_'+Date.now().toString(36)+Math.random().toString(36).slice(2,7); }
function todayStr(){ return new Date().toISOString().slice(0,10); }
function monthKey(d){ return (d||'').slice(0,7); }
function fmtMoney(n){ return 'RM '+(Number(n)||0).toLocaleString('en-MY',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function fmtDate(d){ if(!d) return ''; const [y,m,dd]=d.split('-'); return dd+'/'+m+'/'+y; }
function monthLabel(key){
  const lang=document.body.getAttribute('data-lang')||'en';
  const [y,m]=key.split('-');
  return (MONTH_NAMES[lang]||MONTH_NAMES.en)[parseInt(m,10)-1]+' '+y;
}
function escapeHtml(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
function showToast(msg){
  const el=document.getElementById('toast');
  el.textContent=msg; el.classList.add('show');
  clearTimeout(window._tt); window._tt=setTimeout(()=>el.classList.remove('show'),2200);
}
function resizeImage(file, maxDim, format, cb){
  const reader=new FileReader();
  reader.onload=e=>{
    const img=new Image();
    img.onload=()=>{
      let w=img.width, h=img.height;
      if(w>maxDim||h>maxDim){ if(w>h){h=Math.round(h*maxDim/w);w=maxDim;}else{w=Math.round(w*maxDim/h);h=maxDim;} }
      const c=document.createElement('canvas'); c.width=w; c.height=h;
      const ctx=c.getContext('2d');
      if(format==='image/png'){ctx.clearRect(0,0,w,h);}else{ctx.fillStyle='#fff';ctx.fillRect(0,0,w,h);}
      ctx.drawImage(img,0,0,w,h);
      cb(c.toDataURL(format,0.85));
    };
    img.src=e.target.result;
  };
  reader.readAsDataURL(file);
}
function downloadBlob(name, content, mime){
  const a=Object.assign(document.createElement('a'),{href:URL.createObjectURL(new Blob([content],{type:mime})),download:name});
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  setTimeout(()=>URL.revokeObjectURL(a.href),1000);
}
function isOverdue(inv){
  return inv.status==='unpaid' && inv.dueDate && inv.dueDate < todayStr();
}

/* ---------- photo lightbox ---------- */
function openLightbox(src){
  let lb = document.getElementById('lightbox');
  if(!lb){
    lb = document.createElement('div');
    lb.id = 'lightbox';
    lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:300;display:flex;align-items:center;justify-content:center;cursor:zoom-out;';
    lb.innerHTML = '<img style="max-width:90vw;max-height:90vh;border-radius:8px;box-shadow:0 4px 40px rgba(0,0,0,.6);">';
    lb.onclick = ()=>lb.remove();
    document.body.appendChild(lb);
  }
  lb.querySelector('img').src = src;
}

/* ---------- nav ---------- */
const RENDERERS = {};
function switchView(view){
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='view-'+view));
  if(RENDERERS[view]) RENDERERS[view]();
}
function getActiveView(){ const a=document.querySelector('.nav-item.active'); return a?a.dataset.view:'dashboard'; }

/* =========================================================
   DASHBOARD
   ========================================================= */
RENDERERS.dashboard = function(){
  const root=document.getElementById('view-dashboard');
  const mKey=monthKey(todayStr());
  const mTx=DB.transactions.filter(tx=>monthKey(tx.date)===mKey);
  const income=mTx.filter(t=>t.type==='income').reduce((s,t)=>s+Number(t.amount),0);
  const expense=mTx.filter(t=>t.type==='expense').reduce((s,t)=>s+Number(t.amount),0);
  const net=income-expense;
  const isProfit=net>=0;
  const catTotals={};
  mTx.filter(t=>t.type==='expense').forEach(t=>{ catTotals[t.category]=(catTotals[t.category]||0)+Number(t.amount); });
  const topCats=Object.entries(catTotals).sort((a,b)=>b[1]-a[1]).slice(0,3);
  const maxCat=topCats.length?topCats[0][1]:1;
  const recent=DB.transactions.slice().sort((a,b)=>(b.date+b.id).localeCompare(a.date+a.id)).slice(0,5);
  const turnover=parseFloat(DB.profile.turnover);
  const turnoverWarn=(turnover&&turnover>=800000&&turnover<1000000)?`<div class="card" style="margin-bottom:16px;border-color:var(--gold);">
    <div class="label-eyebrow" style="color:var(--gold);">⚠ ${t('dash.einvoiceTitle')}</div>
    <p style="margin:0;font-size:13.5px;">${t('dash.turnoverWarn')}</p></div>`:'';
  const topCatsHtml=topCats.length?topCats.map(([cat,amt])=>{
    const pct=Math.round((amt/maxCat)*100);
    return `<div class="bar-row"><div>${escapeHtml(translateCat(cat))}</div>
      <div class="bar-track"><div class="bar-fill expense" style="width:${pct}%"></div></div>
      <div class="num figure">${fmtMoney(amt)}</div></div>`;
  }).join(''):`<p class="hint">${t('rep.noBreakdown')}</p>`;
  const recentHtml=recent.length?`<div style="overflow-x:auto;"><table class="data-table"><tbody>`+recent.map(tx=>{
    const cls=tx.type==='income'?'amt-income':'amt-expense';
    const sign=tx.type==='income'?'+':'−';
    const photo=tx.photo?`<img class="img-thumb lightbox-trigger" src="${tx.photo}" style="cursor:zoom-in;" alt="">` :'';
    return `<tr><td>${fmtDate(tx.date)}</td><td>${escapeHtml(translateCat(tx.category))}${tx.description?' — '+escapeHtml(tx.description):''}</td>
      <td class="num ${cls}">${sign} ${fmtMoney(tx.amount)}</td><td>${photo}</td></tr>`;
  }).join('')+`</tbody></table></div>`:`<div class="empty-state"><div class="stamp-mark-lg">RK</div><p>${t('dash.noData')}</p></div>`;

  root.innerHTML=`<h2 class="view-title">${t('dash.title')}</h2><p class="view-sub">${t('dash.sub')}</p>
    ${turnoverWarn}
    <div class="grid cols-3" style="margin-bottom:18px;">
      <div class="card">
        <div class="label-eyebrow">${t('dash.thisMonth')} · ${monthLabel(mKey)}</div>
        <div class="stamp ${isProfit?'profit':'loss'}"><small>${isProfit?t('dash.profit'):t('dash.loss')}</small>${fmtMoney(Math.abs(net))}</div>
        <div class="hint">${mTx.length} ${t('dash.txCount')}</div>
      </div>
      <div class="card">
        <div class="label-eyebrow">${t('dash.income')}</div>
        <div class="figure lg" style="color:var(--income);">${fmtMoney(income)}</div>
        <div class="btn-row" style="margin-top:12px;"><button class="btn income-btn" id="dashAddIncome">${t('dash.addIncome')}</button></div>
      </div>
      <div class="card">
        <div class="label-eyebrow">${t('dash.expense')}</div>
        <div class="figure lg" style="color:var(--expense);">${fmtMoney(expense)}</div>
        <div class="btn-row" style="margin-top:12px;"><button class="btn expense-btn" id="dashAddExpense">${t('dash.addExpense')}</button></div>
      </div>
    </div>
    <div class="grid cols-2" style="margin-bottom:18px;">
      <div class="card"><div class="label-eyebrow">${t('dash.topExpenses')}</div>${topCatsHtml}</div>
      <div class="card"><div class="label-eyebrow">${t('dash.recent')}</div>${recentHtml}</div>
    </div>
    <details class="card"><summary style="font-family:var(--font-display);font-weight:700;cursor:pointer;">${t('dash.einvoiceTitle')}</summary>
      <p style="font-size:13px;margin-top:10px;">${t('dash.einvoiceBody')}</p></details>`;
  document.getElementById('dashAddIncome').onclick=()=>openTxModal(null,'income');
  document.getElementById('dashAddExpense').onclick=()=>openTxModal(null,'expense');
  root.querySelectorAll('.lightbox-trigger').forEach(img=>img.onclick=()=>openLightbox(img.src));
};

/* =========================================================
   TRANSACTIONS
   ========================================================= */
let txFilters={month:'all',type:'all',category:'all',search:''};

RENDERERS.transactions=function(){
  const root=document.getElementById('view-transactions');
  const months=Array.from(new Set(DB.transactions.map(t=>monthKey(t.date)))).sort().reverse();
  const allCats=Array.from(new Set([...DB.categories.income,...DB.categories.expense,...DB.transactions.map(t=>t.category)]));
  root.innerHTML=`
    <div class="row-between">
      <div><h2 class="view-title">${t('txv.title')}</h2><p class="view-sub" style="margin-bottom:0;">${t('txv.sub')}</p></div>
      <div class="btn-row">
        <button class="btn income-btn" id="addIncomeBtn">${t('dash.addIncome')}</button>
        <button class="btn expense-btn" id="addExpenseBtn">${t('dash.addExpense')}</button>
      </div>
    </div>
    <div class="card" style="margin:16px 0;">
      <div class="field-row" style="margin-bottom:0;flex-wrap:wrap;">
        <div class="field" style="min-width:130px;"><label class="field-label">${t('txv.filterMonth')}</label>
          <select id="filterMonth"><option value="all">${t('common.all')}</option>${months.map(m=>`<option value="${m}" ${txFilters.month===m?'selected':''}>${monthLabel(m)}</option>`).join('')}</select></div>
        <div class="field" style="min-width:120px;"><label class="field-label">${t('txv.filterType')}</label>
          <select id="filterType"><option value="all">${t('common.all')}</option><option value="income">${t('common.income')}</option><option value="expense">${t('common.expense')}</option></select></div>
        <div class="field" style="min-width:140px;"><label class="field-label">${t('txv.filterCategory')}</label>
          <select id="filterCategory"><option value="all">${t('common.all')}</option>${allCats.map(c=>`<option value="${escapeHtml(c)}" ${txFilters.category===c?'selected':''}>${escapeHtml(translateCat(c))}</option>`).join('')}</select></div>
        <div class="field" style="flex:2;min-width:120px;"><label class="field-label">${t('txv.search')}</label>
          <input type="text" id="filterSearch" value="${escapeHtml(txFilters.search)}" placeholder="..."></div>
      </div>
    </div>
    <div id="txTableWrap"></div>
    <div class="btn-row" style="margin-top:14px;"><button class="btn" id="exportCsvBtn">${t('txv.exportCsv')}</button></div>`;
  document.getElementById('filterMonth').value=txFilters.month;
  document.getElementById('filterType').value=txFilters.type;
  document.getElementById('filterCategory').value=txFilters.category;
  document.getElementById('filterMonth').onchange=e=>{txFilters.month=e.target.value;renderTxTable();};
  document.getElementById('filterType').onchange=e=>{txFilters.type=e.target.value;renderTxTable();};
  document.getElementById('filterCategory').onchange=e=>{txFilters.category=e.target.value;renderTxTable();};
  document.getElementById('filterSearch').oninput=e=>{txFilters.search=e.target.value;renderTxTable();};
  document.getElementById('addIncomeBtn').onclick=()=>openTxModal(null,'income');
  document.getElementById('addExpenseBtn').onclick=()=>openTxModal(null,'expense');
  document.getElementById('exportCsvBtn').onclick=exportFilteredCsv;
  renderTxTable();
};

function getFilteredTx(){
  return DB.transactions.filter(tx=>{
    if(txFilters.month!=='all'&&monthKey(tx.date)!==txFilters.month) return false;
    if(txFilters.type!=='all'&&tx.type!==txFilters.type) return false;
    if(txFilters.category!=='all'&&tx.category!==txFilters.category) return false;
    if(txFilters.search&&!(tx.description||'').toLowerCase().includes(txFilters.search.toLowerCase())) return false;
    return true;
  }).sort((a,b)=>(b.date+b.id).localeCompare(a.date+a.id));
}
function renderTxTable(){
  const wrap=document.getElementById('txTableWrap');
  const list=getFilteredTx();
  if(!list.length){wrap.innerHTML=`<div class="empty-state"><div class="stamp-mark-lg">RK</div><p>${t('txv.noResults')}</p></div>`;return;}
  let ti=0,te=0;
  const rows=list.map(tx=>{
    if(tx.type==='income') ti+=Number(tx.amount); else te+=Number(tx.amount);
    const cls=tx.type==='income'?'amt-income':'amt-expense';
    const sign=tx.type==='income'?'+':'−';
    const photo=tx.photo?`<img class="img-thumb lightbox-trigger" src="${tx.photo}" style="cursor:zoom-in;" alt="">`:'';
    return `<tr><td>${fmtDate(tx.date)}</td><td><span class="pill ${tx.type}">${t('common.'+tx.type)}</span></td>
      <td>${escapeHtml(translateCat(tx.category))}</td><td>${escapeHtml(tx.description||'')} ${photo}</td>
      <td>${escapeHtml(translateMethod(tx.method))}</td><td class="num ${cls}">${sign} ${fmtMoney(tx.amount)}</td>
      <td><button class="btn ghost sm edit-tx" data-id="${tx.id}">${t('common.edit')}</button></td></tr>`;
  }).join('');
  wrap.innerHTML=`<div style="overflow-x:auto;"><table class="data-table"><thead><tr>
    <th>${t('common.date')}</th><th>${t('tx.type')}</th><th>${t('common.category')}</th>
    <th>${t('common.description')}</th><th>${t('common.method')}</th><th class="num">${t('common.amount')}</th><th></th>
    </tr></thead><tbody>${rows}</tbody></table></div>
    <div class="card" style="margin-top:14px;">
      <div class="label-eyebrow">${t('txv.totals')}</div>
      <div class="field-row" style="margin-bottom:0;flex-wrap:wrap;">
        <div><div class="hint">${t('common.income')}</div><div class="figure" style="color:var(--income);">${fmtMoney(ti)}</div></div>
        <div><div class="hint">${t('common.expense')}</div><div class="figure" style="color:var(--expense);">${fmtMoney(te)}</div></div>
        <div><div class="hint">${t('common.net')}</div><div class="figure">${fmtMoney(ti-te)}</div></div>
      </div>
    </div>`;
  wrap.querySelectorAll('.edit-tx').forEach(b=>b.onclick=()=>openTxModal(b.dataset.id));
  wrap.querySelectorAll('.lightbox-trigger').forEach(img=>img.onclick=()=>openLightbox(img.src));
}
function exportFilteredCsv(){
  const list=getFilteredTx();
  const csv=[['Date','Type','Category','Description','Method','Amount'],...list.map(tx=>[tx.date,tx.type,tx.category,(tx.description||'').replace(/"/g,"'"),tx.method,Number(tx.amount).toFixed(2)])].map(r=>r.map(c=>`"${c}"`).join(',')).join('\n');
  downloadBlob('smartbooks-transactions.csv',csv,'text/csv');
}

/* ---------- tx modal ---------- */
function populateCategorySelect(type){
  const sel=document.getElementById('txCategory');
  sel.innerHTML=DB.categories[type].map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(translateCat(c))}</option>`).join('')+`<option value="__other__">${t('tx.categoryOther')}</option>`;
}
function populateMethodSelect(){
  document.getElementById('txMethod').innerHTML=PAYMENT_METHODS.map(m=>`<option value="${m}">${translateMethod(m)}</option>`).join('');
}
function openTxModal(id, presetType){
  const bg=document.getElementById('txModalBg'), form=document.getElementById('txForm');
  form.reset();
  document.getElementById('txNewCatWrap').style.display='none';
  document.getElementById('txPhotoPreviewWrap').innerHTML='';
  populateMethodSelect();
  let tx=id?DB.transactions.find(x=>x.id===id):null;
  const type=tx?tx.type:(presetType||'income');
  document.getElementById('txType').value=type;
  populateCategorySelect(type);
  document.getElementById('txModalTitle').textContent=tx?t('tx.edit'):t('tx.add');
  document.getElementById('txId').value=tx?tx.id:'';
  document.getElementById('txDate').value=tx?tx.date:todayStr();
  document.getElementById('txAmount').value=tx?tx.amount:'';
  document.getElementById('txMethod').value=tx?(tx.method||'Cash'):'Cash';
  document.getElementById('txDesc').value=tx?(tx.description||''):'';
  document.getElementById('txDeleteBtn').style.display=tx?'inline-flex':'none';
  if(tx){
    if(DB.categories[type].includes(tx.category)){ document.getElementById('txCategory').value=tx.category; }
    else { document.getElementById('txCategory').value='__other__'; document.getElementById('txNewCatWrap').style.display='block'; document.getElementById('txNewCat').value=tx.category; }
    if(tx.photo){
      document.getElementById('txPhotoPreviewWrap').innerHTML=`<img class="img-thumb" style="width:80px;height:80px;margin-top:8px;cursor:zoom-in;" src="${tx.photo}" alt="">
        <button type="button" class="btn ghost sm" id="removePhotoBtn" style="display:block;margin-top:4px;">${t('tx.removePhoto')}</button>`;
      document.getElementById('txPhotoPreviewWrap').querySelector('img').onclick=()=>openLightbox(tx.photo);
      document.getElementById('removePhotoBtn').onclick=()=>{ form.dataset.photo='__remove__'; document.getElementById('txPhotoPreviewWrap').innerHTML=''; };
    }
  }
  delete form.dataset.photo; delete form.dataset.newPhoto;
  bg.classList.add('open');
  document.getElementById('txAmount').focus();
}
function closeTxModal(){ document.getElementById('txModalBg').classList.remove('open'); }
document.getElementById('txModalClose').onclick=closeTxModal;
document.getElementById('txModalBg').addEventListener('click',e=>{ if(e.target.id==='txModalBg') closeTxModal(); });
document.getElementById('txType').addEventListener('change',e=>{ populateCategorySelect(e.target.value); document.getElementById('txNewCatWrap').style.display='none'; });
document.getElementById('txCategory').addEventListener('change',e=>{ document.getElementById('txNewCatWrap').style.display=e.target.value==='__other__'?'block':'none'; });
document.getElementById('txPhoto').addEventListener('change',e=>{
  const f=e.target.files[0]; if(!f) return;
  resizeImage(f,700,'image/jpeg',dataUrl=>{
    document.getElementById('txForm').dataset.newPhoto=dataUrl;
    document.getElementById('txPhotoPreviewWrap').innerHTML=`<img class="img-thumb" style="width:80px;height:80px;margin-top:8px;cursor:zoom-in;" src="${dataUrl}" alt="">`;
    document.getElementById('txPhotoPreviewWrap').querySelector('img').onclick=()=>openLightbox(dataUrl);
  });
});
document.getElementById('txDeleteBtn').addEventListener('click',()=>{
  const id=document.getElementById('txId').value; if(!id) return;
  if(confirm(t('common.confirmDelete'))){ DB.transactions=DB.transactions.filter(x=>x.id!==id); saveDB(); closeTxModal(); showToast(t('tx.deleted')); switchView(getActiveView()); }
});
document.getElementById('txForm').addEventListener('submit',e=>{
  e.preventDefault();
  const form=e.target;
  const id=document.getElementById('txId').value||uid();
  const type=document.getElementById('txType').value;
  let category=document.getElementById('txCategory').value;
  if(category==='__other__'){
    const nc=document.getElementById('txNewCat').value.trim();
    if(!nc){alert(t('tx.categoryOther'));return;}
    category=nc;
    if(!DB.categories[type].includes(nc)) DB.categories[type].push(nc);
  }
  const amount=parseFloat(document.getElementById('txAmount').value);
  if(isNaN(amount)||amount<=0){alert(t('common.amount'));return;}
  const existing=DB.transactions.find(x=>x.id===id);
  let photo=undefined;
  if(form.dataset.newPhoto) photo=form.dataset.newPhoto;
  else if(form.dataset.photo==='__remove__') photo=null;
  else if(existing) photo=existing.photo;
  const txObj={id,type,date:document.getElementById('txDate').value||todayStr(),amount,category,
    description:document.getElementById('txDesc').value.trim(),method:document.getElementById('txMethod').value,photo:photo||null};
  if(existing){ Object.assign(existing,txObj); } else { DB.transactions.push(txObj); }
  saveDB(); closeTxModal(); showToast(t('tx.saved')); switchView(getActiveView());
});

/* =========================================================
   INVOICES — per-doctype numbering + overdue badge
   ========================================================= */
let invEditor=null;

RENDERERS.invoices=function(){ invEditor?renderInvoiceEditor():renderInvoiceList(); };

function renderInvoiceList(){
  const root=document.getElementById('view-invoices');
  const list=DB.invoices.slice().sort((a,b)=>b.no.localeCompare(a.no));
  const itemsHtml=list.length?list.map(inv=>{
    const total=invoiceTotal(inv);
    const typeLabel=t('inv.type'+inv.docType.charAt(0).toUpperCase()+inv.docType.slice(1));
    const overdueBadge=isOverdue(inv)?`<span class="pill" style="background:var(--expense-soft);color:var(--expense);margin-left:6px;">${t('inv.overdue')}</span>`:'';
    return `<div class="inv-list-item">
      <div><strong>${escapeHtml(inv.no)}</strong> — ${typeLabel} ${overdueBadge}
        <div class="hint">${escapeHtml(inv.client.name||'—')} · ${fmtDate(inv.date)}${inv.dueDate?' → '+fmtDate(inv.dueDate):''}</div></div>
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span class="pill status-${inv.status}">${t('inv.status'+inv.status.charAt(0).toUpperCase()+inv.status.slice(1))}</span>
        <span class="figure">${fmtMoney(total)}</span>
        <div class="btn-row">
          <button class="btn ghost sm edit-inv" data-id="${inv.id}">${t('common.edit')}</button>
          <button class="btn ghost sm print-inv" data-id="${inv.id}">${t('common.print')}</button>
          <button class="btn ghost sm del-inv" data-id="${inv.id}">${t('common.delete')}</button>
        </div>
      </div></div>`;
  }).join(''):`<div class="empty-state"><div class="stamp-mark-lg">RK</div><p>${t('inv.noDocs')}</p></div>`;
  root.innerHTML=`<div class="row-between"><div><h2 class="view-title">${t('inv.title')}</h2><p class="view-sub" style="margin-bottom:0;">${t('inv.sub')}</p></div>
    <button class="btn primary" id="newInvBtn">${t('inv.new')}</button></div>
    <div style="margin-top:16px;">${itemsHtml}</div>`;
  document.getElementById('newInvBtn').onclick=()=>{invEditor=newInvoiceDraft();renderInvoiceEditor();};
  root.querySelectorAll('.edit-inv').forEach(b=>b.onclick=()=>{ invEditor=JSON.parse(JSON.stringify(DB.invoices.find(i=>i.id===b.dataset.id))); renderInvoiceEditor(); });
  root.querySelectorAll('.print-inv').forEach(b=>b.onclick=()=>printInvoice(DB.invoices.find(i=>i.id===b.dataset.id)));
  root.querySelectorAll('.del-inv').forEach(b=>b.onclick=()=>{
    if(confirm(t('common.confirmDelete'))){ DB.invoices=DB.invoices.filter(i=>i.id!==b.dataset.id); saveDB(); showToast(t('inv.deleted')); renderInvoiceList(); }
  });
}
function newInvoiceDraft(){
  const docType='invoice';
  return {id:uid(),no:nextInvNo(docType),docType,date:todayStr(),dueDate:'',
    client:{name:'',phone:'',address:'',tin:''},items:[{desc:'',qty:1,price:0}],
    discount:0,taxRate:0,notes:'',status:'draft',linkedTxId:null};
}
function nextInvNo(docType){
  const pfx={invoice:'INV',receipt:'RCT',quotation:'QUO'};
  const num=String(DB.nextInvoiceNo[docType]||1).padStart(4,'0');
  return pfx[docType]+'-'+num;
}
function invoiceSubtotal(inv){ return inv.items.reduce((s,it)=>s+(Number(it.qty)||0)*(Number(it.price)||0),0); }
function invoiceTotal(inv){
  const sub=invoiceSubtotal(inv);
  const after=Math.max(0,sub-(Number(inv.discount)||0));
  return after+after*((Number(inv.taxRate)||0)/100);
}
function renderInvoiceEditor(){
  const root=document.getElementById('view-invoices');
  root.innerHTML=`<div class="row-between"><h2 class="view-title">${escapeHtml(invEditor.no)}</h2>
    <div class="btn-row"><button class="btn" id="invCancelBtn">${t('common.back')}</button>
    <button class="btn primary" id="invSaveBtn">${t('common.save')}</button>
    <button class="btn ghost" id="invPrintBtn">${t('common.print')}</button></div></div>
    <div class="inv-layout"><div class="card" id="invFormCard"></div><div class="inv-preview" id="invPreviewBox"></div></div>`;
  document.getElementById('invCancelBtn').onclick=()=>{invEditor=null;renderInvoiceList();};
  document.getElementById('invSaveBtn').onclick=saveInvoiceEditor;
  document.getElementById('invPrintBtn').onclick=()=>printInvoice(invEditor);
  renderInvoiceForm(); updateInvoicePreview();
}
function renderInvoiceForm(){
  const inv=invEditor;
  const card=document.getElementById('invFormCard');
  const itemsRows=inv.items.map((it,idx)=>`
    <div class="field-row" style="align-items:flex-end;flex-wrap:nowrap;">
      <div class="field" style="flex:3;min-width:0;"><input type="text" class="item-desc" data-idx="${idx}" value="${escapeHtml(it.desc)}" placeholder="${t('inv.itemDesc')}"></div>
      <div class="field" style="flex:1;min-width:50px;"><input type="number" min="0" step="0.01" class="item-qty" data-idx="${idx}" value="${it.qty}"></div>
      <div class="field" style="flex:1.5;min-width:70px;"><input type="number" min="0" step="0.01" class="item-price" data-idx="${idx}" value="${it.price}"></div>
      <div style="flex:0 0 28px;"><button type="button" class="btn ghost sm remove-item" data-idx="${idx}">✕</button></div>
    </div>`).join('');
  card.innerHTML=`
    <div class="field"><label class="field-label">${t('inv.docType')}</label>
      <select id="f-docType">
        <option value="invoice" ${inv.docType==='invoice'?'selected':''}>${t('inv.typeInvoice')}</option>
        <option value="receipt" ${inv.docType==='receipt'?'selected':''}>${t('inv.typeReceipt')}</option>
        <option value="quotation" ${inv.docType==='quotation'?'selected':''}>${t('inv.typeQuotation')}</option>
      </select></div>
    <div class="field-row"><div class="field"><label class="field-label">${t('inv.date')}</label><input type="date" id="f-date" value="${inv.date}"></div>
      <div class="field"><label class="field-label">${t('inv.dueDate')}</label><input type="date" id="f-dueDate" value="${inv.dueDate||''}"></div></div>
    <div class="label-eyebrow" style="margin-top:14px;">${t('inv.client')}</div>
    <div class="field"><label class="field-label">${t('inv.clientName')}</label><input type="text" id="f-clientName" value="${escapeHtml(inv.client.name)}"></div>
    <div class="field-row">
      <div class="field"><label class="field-label">${t('inv.clientPhone')}</label><input type="text" id="f-clientPhone" value="${escapeHtml(inv.client.phone)}"></div>
      <div class="field"><label class="field-label">${t('inv.clientTin')}</label><input type="text" id="f-clientTin" value="${escapeHtml(inv.client.tin||'')}"></div></div>
    <div class="field"><label class="field-label">${t('inv.clientAddress')}</label><textarea id="f-clientAddress" rows="2">${escapeHtml(inv.client.address||'')}</textarea></div>
    <div class="label-eyebrow" style="margin-top:14px;">${t('inv.items')}
      <span style="font-size:11px;margin-left:8px;font-weight:400;opacity:.7;">${t('inv.itemDesc')} / ${t('inv.itemQty')} / ${t('inv.itemPrice')}</span></div>
    <div id="itemsWrap">${itemsRows}</div>
    <button type="button" class="btn sm" id="addItemBtn">${t('inv.addItem')}</button>
    <div class="field-row" style="margin-top:14px;">
      <div class="field"><label class="field-label">${t('inv.discount')}</label><input type="number" min="0" step="0.01" id="f-discount" value="${inv.discount}"></div>
      <div class="field"><label class="field-label">${t('inv.taxRate')}</label><input type="number" min="0" step="0.01" id="f-taxRate" value="${inv.taxRate}"></div></div>
    <div class="field"><label class="field-label">${t('inv.notes')}</label><textarea id="f-notes" rows="2">${escapeHtml(inv.notes||'')}</textarea></div>
    ${inv.docType!=='quotation'?`<div class="field"><label class="field-label">${t('inv.status')}</label>
      <select id="f-status">
        <option value="draft" ${inv.status==='draft'?'selected':''}>${t('inv.statusDraft')}</option>
        <option value="unpaid" ${inv.status==='unpaid'?'selected':''}>${t('inv.statusUnpaid')}</option>
        <option value="paid" ${inv.status==='paid'?'selected':''}>${t('inv.statusPaid')}</option>
      </select>${inv.status==='paid'?`<div class="hint">${t('inv.paidByTx')}</div>`:''}</div>`:''}`;

  const liveUpdate=()=>updateInvoicePreview();
  const bind=(id,prop,isClient)=>{
    const el=document.getElementById(id); if(!el) return;
    el.addEventListener('input',()=>{ if(isClient) inv.client[prop]=el.value; else inv[prop]=el.value; liveUpdate(); });
  };
  document.getElementById('f-docType').addEventListener('change',e=>{
    const newType=e.target.value;
    const oldPfx={invoice:'INV',receipt:'RCT',quotation:'QUO'}[inv.docType];
    // only reassign number if docType actually changes
    if(newType!==inv.docType){
      inv.docType=newType;
      // generate new number for this docType (don't increment yet — save does that)
      inv.no=nextInvNo(newType);
    }
    renderInvoiceEditor();
  });
  bind('f-date','date',false); bind('f-dueDate','dueDate',false);
  bind('f-clientName','name',true); bind('f-clientPhone','phone',true);
  bind('f-clientTin','tin',true); bind('f-clientAddress','address',true);
  bind('f-discount','discount',false); bind('f-taxRate','taxRate',false);
  bind('f-notes','notes',false);
  const statusEl=document.getElementById('f-status');
  if(statusEl) statusEl.addEventListener('change',e=>{inv.status=e.target.value;liveUpdate();});
  card.querySelectorAll('.item-desc').forEach(el=>el.addEventListener('input',e=>{inv.items[el.dataset.idx].desc=e.target.value;liveUpdate();}));
  card.querySelectorAll('.item-qty').forEach(el=>el.addEventListener('input',e=>{inv.items[el.dataset.idx].qty=parseFloat(e.target.value)||0;liveUpdate();}));
  card.querySelectorAll('.item-price').forEach(el=>el.addEventListener('input',e=>{inv.items[el.dataset.idx].price=parseFloat(e.target.value)||0;liveUpdate();}));
  card.querySelectorAll('.remove-item').forEach(el=>el.addEventListener('click',()=>{ if(inv.items.length>1){inv.items.splice(el.dataset.idx,1);renderInvoiceForm();liveUpdate();} }));
  document.getElementById('addItemBtn').onclick=()=>{ inv.items.push({desc:'',qty:1,price:0}); renderInvoiceForm(); liveUpdate(); };
}
function updateInvoicePreview(){ document.getElementById('invPreviewBox').innerHTML=invoiceHTML(invEditor); }
function invoiceHTML(inv){
  const sub=invoiceSubtotal(inv), discount=Number(inv.discount)||0;
  const after=Math.max(0,sub-discount), taxRate=Number(inv.taxRate)||0;
  const tax=after*(taxRate/100), total=after+tax;
  const p=DB.profile;
  const docLabel=t('inv.type'+inv.docType.charAt(0).toUpperCase()+inv.docType.slice(1));
  const itemsRows=inv.items.map(it=>{
    const lt=(Number(it.qty)||0)*(Number(it.price)||0);
    return `<tr><td>${escapeHtml(it.desc||'')}</td><td style="text-align:right;">${it.qty}</td><td style="text-align:right;">${Number(it.price).toFixed(2)}</td><td style="text-align:right;">${lt.toFixed(2)}</td></tr>`;
  }).join('');
  const overdueStamp=isOverdue(inv)?`<div style="display:inline-block;border:3px double #B2543A;color:#B2543A;padding:4px 12px;border-radius:6px;transform:rotate(4deg);font-weight:700;letter-spacing:2px;font-size:12px;margin-top:6px;">${t('inv.overdue')}</div>`:'';
  return `<div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:wrap;">
    <div>${p.logo?`<img src="${p.logo}" style="max-width:110px;max-height:55px;object-fit:contain;margin-bottom:8px;display:block;">`:''}<h3>${escapeHtml(p.name||'(Business name)')}</h3>
      <div style="font-size:12px;color:#666;white-space:pre-line;">${escapeHtml(p.address||'')}</div>
      <div style="font-size:12px;color:#666;">${escapeHtml(p.phone||'')}${p.email?' · '+escapeHtml(p.email):''}</div>
      ${p.regNo?`<div style="font-size:12px;color:#666;">SSM: ${escapeHtml(p.regNo)}</div>`:''}</div>
    <div style="text-align:right;"><div class="doc-type">${docLabel}</div>
      <div style="font-size:13px;"><strong>${escapeHtml(inv.no)}</strong></div>
      <div style="font-size:12px;color:#666;">${t('inv.dateLbl')}: ${fmtDate(inv.date)}</div>
      ${inv.dueDate?`<div style="font-size:12px;color:#666;">${t('inv.dueDate')}: ${fmtDate(inv.dueDate)}</div>`:''}
      ${overdueStamp}</div></div>
  <hr style="border:none;border-top:1px solid #ddd;margin:14px 0;">
  <div style="font-size:12px;text-transform:uppercase;letter-spacing:1px;color:#999;margin-bottom:4px;">${t('inv.billTo')}</div>
  <div style="font-size:13px;"><strong>${escapeHtml(inv.client.name||'—')}</strong></div>
  <div style="font-size:12px;color:#666;white-space:pre-line;">${escapeHtml(inv.client.address||'')}</div>
  <div style="font-size:12px;color:#666;">${escapeHtml(inv.client.phone||'')}</div>
  ${inv.client.tin?`<div style="font-size:12px;color:#666;">TIN: ${escapeHtml(inv.client.tin)}</div>`:''}
  <table><thead><tr><th>${t('inv.itemDesc')}</th><th style="text-align:right;">${t('inv.itemQty')}</th><th style="text-align:right;">${t('inv.itemPrice')}</th><th style="text-align:right;">${t('inv.itemTotal')}</th></tr></thead><tbody>${itemsRows}</tbody></table>
  <div class="totals">
    <div><span>${t('inv.subtotal')}</span><span>${sub.toFixed(2)}</span></div>
    ${discount?`<div><span>${t('inv.discount')}</span><span>-${discount.toFixed(2)}</span></div>`:''}
    ${taxRate?`<div><span>${t('inv.taxRate')} (${taxRate}%)</span><span>${tax.toFixed(2)}</span></div>`:''}
    <div class="grand"><span>${t('inv.total')}</span><span>RM ${total.toFixed(2)}</span></div>
  </div>
  ${inv.notes?`<div style="margin-top:14px;font-size:12px;color:#666;white-space:pre-line;"><strong>${t('inv.notes')}:</strong> ${escapeHtml(inv.notes)}</div>`:''}
  ${p.qr?`<div class="qr-box"><img src="${p.qr}" alt="DuitNow QR"><div style="font-size:12px;color:#666;">${t('inv.qrNote')}</div></div>`:''}`;
}
function saveInvoiceEditor(){
  const inv=invEditor;
  const existingIdx=DB.invoices.findIndex(i=>i.id===inv.id);
  const wasNew=existingIdx===-1;
  const prevStatus=wasNew?null:DB.invoices[existingIdx].status;
  if(wasNew){
    DB.invoices.push(inv);
    // increment counter for this docType
    if(!DB.nextInvoiceNo[inv.docType]) DB.nextInvoiceNo[inv.docType]=1;
    DB.nextInvoiceNo[inv.docType]+=1;
  } else { DB.invoices[existingIdx]=inv; }
  if(inv.docType!=='quotation'){
    if(inv.status==='paid'&&prevStatus!=='paid'&&!inv.linkedTxId){
      const txId=uid();
      DB.transactions.push({id:txId,type:'income',date:inv.date,amount:invoiceTotal(inv),
        category:DB.categories.income[0]||'Other Income',
        description:({invoice:'Invoice',receipt:'Receipt',quotation:'Quotation'}[inv.docType])+' '+inv.no+(inv.client.name?' — '+inv.client.name:''),
        method:'Bank Transfer',photo:null});
      inv.linkedTxId=txId;
      if(existingIdx!==-1) DB.invoices[existingIdx]=inv;
    } else if(inv.status!=='paid'&&inv.linkedTxId){
      DB.transactions=DB.transactions.filter(x=>x.id!==inv.linkedTxId);
      inv.linkedTxId=null;
      if(existingIdx!==-1) DB.invoices[existingIdx]=inv;
    }
  }
  saveDB(); showToast(t('inv.saved')); invEditor=null; renderInvoiceList();
}
function printInvoice(inv){
  if(!inv) return;
  const w=window.open('','_blank');
  w.document.write(`<!DOCTYPE html><html><head><title>${escapeHtml(inv.no)}</title><meta charset="utf-8">
    <style>body{font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;color:#222;padding:30px;max-width:700px;margin:0 auto;}
    h3{font-family:Georgia,serif;font-size:20px;margin:0 0 2px;}
    .doc-type{display:inline-block;font-family:Georgia,serif;font-weight:700;letter-spacing:3px;text-transform:uppercase;border:2px solid #8B2A2A;color:#8B2A2A;padding:4px 12px;border-radius:6px;transform:rotate(-2deg);margin-bottom:10px;font-size:13px;}
    table{width:100%;border-collapse:collapse;margin:14px 0;font-size:13px;}
    table th{text-align:left;border-bottom:2px solid #ddd;padding:6px 4px;font-size:11px;text-transform:uppercase;letter-spacing:1px;color:#777;}
    table td{border-bottom:1px solid #eee;padding:7px 4px;}
    .totals{margin-top:6px;width:240px;margin-left:auto;font-size:13px;}
    .totals div{display:flex;justify-content:space-between;padding:3px 0;}
    .totals .grand{font-weight:700;font-size:16px;border-top:2px solid #333;padding-top:6px;margin-top:4px;}
    .qr-box{display:flex;align-items:center;gap:10px;margin-top:16px;}
    .qr-box img{width:90px;height:90px;object-fit:contain;border:1px solid #eee;padding:4px;}
    @media print{body{padding:0;}}</style>
  </head><body>${invoiceHTML(inv)}</body></html>`);
  w.document.close();
  setTimeout(()=>{w.focus();w.print();},300);
}

/* =========================================================
   REPORTS
   ========================================================= */
let reportState={year:new Date().getFullYear(),month:monthKey(todayStr()),catType:'expense'};
RENDERERS.reports=function(){
  const root=document.getElementById('view-reports');
  const years=Array.from(new Set([...DB.transactions.map(t=>t.date.slice(0,4)),String(reportState.year)])).sort();
  root.innerHTML=`<div class="row-between"><div><h2 class="view-title">${t('rep.title')}</h2><p class="view-sub" style="margin-bottom:0;">${t('rep.sub')}</p></div>
    <div class="field" style="margin-bottom:0;min-width:100px;"><label class="field-label">${t('rep.year')}</label>
    <select id="repYear">${years.map(y=>`<option value="${y}" ${y===String(reportState.year)?'selected':''}>${y}</option>`).join('')}</select></div></div>
    <div class="card" style="margin:16px 0;overflow-x:auto;"><table class="data-table"><thead><tr>
      <th>${t('rep.tableMonth')}</th><th class="num">${t('rep.tableIncome')}</th><th class="num">${t('rep.tableExpense')}</th><th class="num">${t('rep.tableNet')}</th>
    </tr></thead><tbody id="repTableBody"></tbody><tfoot id="repTableFoot"></tfoot></table></div>
    <div class="card"><div class="row-between" style="margin-bottom:10px;">
      <div class="label-eyebrow" id="repBreakdownTitle" style="margin-bottom:0;"></div>
      <div class="btn-row"><button class="btn sm" id="repShowIncome">${t('rep.showIncome')}</button><button class="btn sm" id="repShowExpense">${t('rep.showExpense')}</button></div>
    </div><div id="repBreakdownBody"></div></div>`;
  document.getElementById('repYear').onchange=e=>{reportState.year=e.target.value;renderReportTable();};
  document.getElementById('repShowIncome').onclick=()=>{reportState.catType='income';renderReportBreakdown();};
  document.getElementById('repShowExpense').onclick=()=>{reportState.catType='expense';renderReportBreakdown();};
  renderReportTable(); renderReportBreakdown();
};
function renderReportTable(){
  const year=String(reportState.year);
  const names=MONTH_NAMES[document.body.getAttribute('data-lang')]||MONTH_NAMES.en;
  let yi=0,ye=0,rows='';
  for(let m=1;m<=12;m++){
    const mk=year+'-'+String(m).padStart(2,'0');
    const mTx=DB.transactions.filter(tx=>monthKey(tx.date)===mk);
    const inc=mTx.filter(t=>t.type==='income').reduce((s,t)=>s+Number(t.amount),0);
    const exp=mTx.filter(t=>t.type==='expense').reduce((s,t)=>s+Number(t.amount),0);
    yi+=inc; ye+=exp;
    const isCurrent=mk===monthKey(todayStr());
    rows+=`<tr style="cursor:pointer;" data-month="${mk}">
      <td>${names[m-1]}${isCurrent?' ●':''}</td>
      <td class="num" style="color:var(--income);">${inc?fmtMoney(inc):'—'}</td>
      <td class="num" style="color:var(--expense);">${exp?fmtMoney(exp):'—'}</td>
      <td class="num figure">${fmtMoney(inc-exp)}</td></tr>`;
  }
  document.getElementById('repTableBody').innerHTML=rows;
  document.getElementById('repTableFoot').innerHTML=`<tr style="font-weight:700;">
    <td>${t('rep.yearTotal')}</td><td class="num" style="color:var(--income);">${fmtMoney(yi)}</td>
    <td class="num" style="color:var(--expense);">${fmtMoney(ye)}</td><td class="num figure">${fmtMoney(yi-ye)}</td></tr>`;
  document.getElementById('repTableBody').querySelectorAll('tr').forEach(tr=>{
    tr.onclick=()=>{reportState.month=tr.dataset.month;renderReportBreakdown();};
  });
}
function renderReportBreakdown(){
  document.getElementById('repBreakdownTitle').textContent=t('rep.breakdownFor')+' '+monthLabel(reportState.month);
  const mTx=DB.transactions.filter(tx=>monthKey(tx.date)===reportState.month&&tx.type===reportState.catType);
  if(!mTx.length){document.getElementById('repBreakdownBody').innerHTML=`<p class="hint">${t('rep.noBreakdown')}</p>`;return;}
  const totals={};
  mTx.forEach(tx=>totals[tx.category]=(totals[tx.category]||0)+Number(tx.amount));
  const entries=Object.entries(totals).sort((a,b)=>b[1]-a[1]);
  const max=entries[0][1];
  document.getElementById('repBreakdownBody').innerHTML=entries.map(([cat,amt])=>{
    const pct=Math.round((amt/max)*100);
    return `<div class="bar-row"><div>${escapeHtml(translateCat(cat))}</div>
      <div class="bar-track"><div class="bar-fill ${reportState.catType}" style="width:${pct}%"></div></div>
      <div class="num figure">${fmtMoney(amt)}</div></div>`;
  }).join('');
}

/* =========================================================
   SETTINGS — presets added
   ========================================================= */
RENDERERS.settings=function(){
  const root=document.getElementById('view-settings');
  const p=DB.profile;
  root.innerHTML=`<h2 class="view-title">${t('set.title')}</h2><p class="view-sub">${t('set.sub')}</p>
    <div class="card" style="margin-bottom:16px;">
      <div class="label-eyebrow">${t('set.profile')}</div>
      <div class="field"><label class="field-label">${t('set.bizName')}</label><input type="text" id="p-name" value="${escapeHtml(p.name)}"></div>
      <div class="field-row">
        <div class="field"><label class="field-label">${t('set.regNo')}</label><input type="text" id="p-regNo" value="${escapeHtml(p.regNo)}"></div>
        <div class="field"><label class="field-label">${t('set.tin')}</label><input type="text" id="p-tin" value="${escapeHtml(p.tin)}"></div></div>
      <div class="field"><label class="field-label">${t('set.address')}</label><textarea id="p-address" rows="2">${escapeHtml(p.address)}</textarea></div>
      <div class="field-row">
        <div class="field"><label class="field-label">${t('set.phone')}</label><input type="text" id="p-phone" value="${escapeHtml(p.phone)}"></div>
        <div class="field"><label class="field-label">${t('set.email')}</label><input type="text" id="p-email" value="${escapeHtml(p.email)}"></div></div>
      <div class="field"><label class="field-label">${t('set.turnover')}</label><input type="number" min="0" step="100" id="p-turnover" value="${escapeHtml(p.turnover)}"></div>
      <div class="field-row">
        <div class="field"><label class="field-label">${t('set.logo')}</label>
          <label class="file-btn btn sm">${t('set.uploadImage')}<input type="file" id="p-logo" accept="image/*"></label>
          ${p.logo?`<div style="margin-top:6px;"><img class="logo-preview lightbox-trigger" src="${p.logo}" style="cursor:zoom-in;">
            <button type="button" class="btn ghost sm" id="removeLogoBtn">${t('set.removeImage')}</button></div>`:''}</div>
        <div class="field"><label class="field-label">${t('set.qr')}</label>
          <label class="file-btn btn sm">${t('set.uploadImage')}<input type="file" id="p-qr" accept="image/*"></label>
          ${p.qr?`<div style="margin-top:6px;"><img class="qr-preview lightbox-trigger" src="${p.qr}" style="cursor:zoom-in;">
            <button type="button" class="btn ghost sm" id="removeQrBtn">${t('set.removeImage')}</button></div>`:''}</div></div>
      <button class="btn primary" id="saveProfileBtn" style="margin-top:10px;">${t('common.save')}</button>
    </div>

    <div class="card" style="margin-bottom:16px;">
      <div class="label-eyebrow">${t('set.categories')}</div>
      <div class="field" style="margin-bottom:12px;">
        <label class="field-label">${t('set.preset')}</label>
        <div class="btn-row">
          <button class="btn sm" data-preset="default" id="presetDefault">${t('set.presetDefault')}</button>
          <button class="btn sm" data-preset="garment" id="presetGarment">🖨 ${t('set.presetGarment')}</button>
        </div>
      </div>
      <div class="grid cols-2">
        <div><strong style="font-size:13px;">${t('set.incomeCats')}</strong><div id="incomeCatsList" style="margin:8px 0;"></div>
          <div class="field-row" style="margin-bottom:0;"><input type="text" id="newIncomeCat" placeholder="${t('set.newCatPlaceholder')}"><button class="btn sm" id="addIncomeCatBtn">${t('common.add')}</button></div></div>
        <div><strong style="font-size:13px;">${t('set.expenseCats')}</strong><div id="expenseCatsList" style="margin:8px 0;"></div>
          <div class="field-row" style="margin-bottom:0;"><input type="text" id="newExpenseCat" placeholder="${t('set.newCatPlaceholder')}"><button class="btn sm" id="addExpenseCatBtn">${t('common.add')}</button></div></div>
      </div>
    </div>

    <div class="card" style="margin-bottom:16px;">
      <div class="label-eyebrow">${t('set.dataMgmt')}</div>
      <div class="btn-row" style="flex-wrap:wrap;">
        <button class="btn" id="exportJsonBtn">${t('set.exportJson')}</button>
        <label class="btn file-btn">${t('set.importJson')}<input type="file" id="importJsonInput" accept="application/json"></label>
        <button class="btn" id="exportCsvAllBtn">${t('set.exportCsvAll')}</button>
      </div>
      <div class="danger-zone">
        <strong style="color:var(--expense);">${t('set.clearAll')}</strong>
        <p class="hint">${t('set.clearAllWarn')}</p>
        <button class="btn expense-btn" id="clearAllBtn">${t('set.clearAll')}</button>
      </div>
    </div>

    <details class="card"><summary style="font-family:var(--font-display);font-weight:700;cursor:pointer;">${t('set.einvoiceInfo')}</summary>
      <p style="font-size:13px;margin-top:10px;">${t('set.einvoiceInfoBody')}</p></details>`;

  renderCatList('income'); renderCatList('expense');

  document.getElementById('saveProfileBtn').onclick=()=>{
    ['name','regNo','tin','phone','email'].forEach(k=>DB.profile[k]=document.getElementById('p-'+k).value.trim());
    DB.profile.address=document.getElementById('p-address').value.trim();
    DB.profile.turnover=document.getElementById('p-turnover').value;
    saveDB(); showToast(t('set.saved'));
  };
  document.getElementById('p-logo').addEventListener('change',e=>{
    const f=e.target.files[0]; if(!f) return;
    resizeImage(f,300,'image/png',d=>{DB.profile.logo=d;saveDB();RENDERERS.settings();});
  });
  document.getElementById('p-qr').addEventListener('change',e=>{
    const f=e.target.files[0]; if(!f) return;
    resizeImage(f,400,'image/png',d=>{DB.profile.qr=d;saveDB();RENDERERS.settings();});
  });
  const removeLogo=document.getElementById('removeLogoBtn');
  if(removeLogo) removeLogo.onclick=()=>{DB.profile.logo='';saveDB();RENDERERS.settings();};
  const removeQr=document.getElementById('removeQrBtn');
  if(removeQr) removeQr.onclick=()=>{DB.profile.qr='';saveDB();RENDERERS.settings();};

  root.querySelectorAll('.lightbox-trigger').forEach(img=>img.onclick=()=>openLightbox(img.src));

  document.getElementById('addIncomeCatBtn').onclick=()=>addCategory('income');
  document.getElementById('addExpenseCatBtn').onclick=()=>addCategory('expense');

  document.getElementById('presetDefault').onclick=()=>{
    if(confirm(t('set.presetConfirm'))){ DB.categories=JSON.parse(JSON.stringify(PRESETS.default)); saveDB(); renderCatList('income'); renderCatList('expense'); showToast(t('set.saved')); }
  };
  document.getElementById('presetGarment').onclick=()=>{
    if(confirm(t('set.presetConfirm'))){ DB.categories=JSON.parse(JSON.stringify(PRESETS.garment)); saveDB(); renderCatList('income'); renderCatList('expense'); showToast(t('set.saved')); }
  };

  document.getElementById('exportJsonBtn').onclick=()=>{
    downloadBlob('smartbooks-backup-'+todayStr()+'.json',JSON.stringify(DB,null,2),'application/json');
  };
  document.getElementById('exportCsvAllBtn').onclick=()=>{
    const csv=[['Date','Type','Category','Description','Method','Amount'],...DB.transactions.map(tx=>[tx.date,tx.type,tx.category,(tx.description||'').replace(/"/g,"'"),tx.method,Number(tx.amount).toFixed(2)])].map(r=>r.map(c=>`"${c}"`).join(',')).join('\n');
    downloadBlob('smartbooks-all-transactions.csv',csv,'text/csv');
  };
  document.getElementById('importJsonInput').addEventListener('change',e=>{
    const f=e.target.files[0]; if(!f) return;
    const reader=new FileReader();
    reader.onload=ev=>{
      try{
        const parsed=JSON.parse(ev.target.result);
        if(!parsed.transactions||!parsed.profile) throw new Error('bad');
        if(confirm((document.body.getAttribute('data-lang')==='ms')?'Ini akan menggantikan semua data semasa. Teruskan?':(document.body.getAttribute('data-lang')==='zh')?'这将替换所有当前数据。继续？':'This will replace all current data. Continue?')){
          DB=Object.assign(defaultDB(),parsed,{profile:Object.assign(defaultDB().profile,parsed.profile||{}),categories:Object.assign(defaultDB().categories,parsed.categories||{})});
          if(typeof DB.nextInvoiceNo==='number') DB.nextInvoiceNo={invoice:DB.nextInvoiceNo,receipt:1,quotation:1};
          saveDB(); document.body.setAttribute('data-lang',DB.lang||'en'); document.body.setAttribute('data-theme',DB.theme||'light');
          applyStaticI18n(); showToast(t('set.imported')); switchView('dashboard');
        }
      }catch(err){alert(t('set.importError'));}
    };
    reader.readAsText(f);
  });
  document.getElementById('clearAllBtn').onclick=()=>{
    const answer=prompt(t('set.clearAllWarn')+'\n\n'+t('set.clearAllConfirm'));
    if(answer==='ERASE'){
      const lang=DB.lang, theme=DB.theme;
      DB=defaultDB(); DB.lang=lang; DB.theme=theme; saveDB();
      showToast(t('set.erased')); switchView('dashboard');
    }
  };
};
function renderCatList(type){
  const wrap=document.getElementById(type+'CatsList');
  wrap.innerHTML=DB.categories[type].map((c,idx)=>`
    <div style="display:flex;justify-content:space-between;align-items:center;padding:4px 0;font-size:13px;border-bottom:1px solid var(--paper-line);">
      <span>${escapeHtml(translateCat(c))}</span>
      <button class="btn ghost sm remove-cat" data-type="${type}" data-idx="${idx}">✕</button>
    </div>`).join('');
  wrap.querySelectorAll('.remove-cat').forEach(b=>b.onclick=()=>{
    DB.categories[b.dataset.type].splice(parseInt(b.dataset.idx),1); saveDB(); renderCatList(b.dataset.type);
  });
}
function addCategory(type){
  const input=document.getElementById('new'+(type==='income'?'Income':'Expense')+'Cat');
  const val=input.value.trim(); if(!val) return;
  if(!DB.categories[type].includes(val)) DB.categories[type].push(val);
  input.value=''; saveDB(); renderCatList(type);
}

/* =========================================================
   LANDING PAGE (first-run)
   ========================================================= */
function showLanding(){
  const root=document.getElementById('view-dashboard');
  root.innerHTML=`
    <div style="max-width:560px;margin:40px auto 0;text-align:center;">
      <div style="font-family:var(--font-display);font-size:48px;color:var(--cover);margin-bottom:6px;">RK</div>
      <h1 style="font-family:var(--font-display);font-size:32px;margin:0 0 8px;">SmartBooks</h1>
      <p style="color:var(--ink-soft);font-size:15px;margin:0 0 30px;">${t('tagline')}</p>
      <div class="grid cols-3" style="margin-bottom:30px;text-align:left;">
        <div class="card"><div style="font-size:22px;margin-bottom:6px;">📒</div><strong>Income & Expense</strong><p class="hint" style="margin-top:4px;">Log every ringgit in and out. Add receipt photos.</p></div>
        <div class="card"><div style="font-size:22px;margin-bottom:6px;">🧾</div><strong>Invoices & Receipts</strong><p class="hint" style="margin-top:4px;">Create professional invoices with DuitNow QR. Print or share.</p></div>
        <div class="card"><div style="font-size:22px;margin-bottom:6px;">📊</div><strong>Reports</strong><p class="hint" style="margin-top:4px;">Monthly P&L, category breakdowns, CSV export.</p></div>
      </div>
      <div class="card" style="margin-bottom:20px;text-align:left;">
        <div class="label-eyebrow">Pick a category preset to get started fast</div>
        <div class="btn-row" style="margin-top:10px;">
          <button class="btn" id="landingPresetDefault">📋 General Business</button>
          <button class="btn" id="landingPresetGarment">🖨 Garment & Print Shop</button>
        </div>
      </div>
      <div class="card" style="margin-bottom:20px;text-align:left;">
        <div class="label-eyebrow">Set up your business profile (optional — can do later)</div>
        <div class="field" style="margin-top:10px;"><label class="field-label">Business name</label><input type="text" id="landingBizName" placeholder="e.g. Kedai Ashin Print"></div>
        <div class="field"><label class="field-label">Phone</label><input type="text" id="landingPhone" placeholder="+601x-xxxxxxx"></div>
      </div>
      <button class="btn primary" id="landingStart" style="font-size:16px;padding:14px 36px;">${document.body.getAttribute('data-lang')==='zh'?'开始使用 SmartBooks':document.body.getAttribute('data-lang')==='ms'?'Mula Guna SmartBooks':'Start using SmartBooks'} →</button>
      <p class="hint" style="margin-top:14px;">100% offline · No account needed · Your data stays on this device</p>
    </div>`;

  let landingPreset='default';
  document.getElementById('landingPresetDefault').onclick=()=>{
    landingPreset='default';
    document.getElementById('landingPresetDefault').classList.add('primary');
    document.getElementById('landingPresetGarment').classList.remove('primary');
  };
  document.getElementById('landingPresetGarment').onclick=()=>{
    landingPreset='garment';
    document.getElementById('landingPresetGarment').classList.add('primary');
    document.getElementById('landingPresetDefault').classList.remove('primary');
  };
  document.getElementById('landingStart').onclick=()=>{
    const name=document.getElementById('landingBizName').value.trim();
    const phone=document.getElementById('landingPhone').value.trim();
    if(name) DB.profile.name=name;
    if(phone) DB.profile.phone=phone;
    DB.categories=JSON.parse(JSON.stringify(PRESETS[landingPreset]));
    DB.profile._setupDone=true;
    saveDB();
    RENDERERS.dashboard=renderDashboard;
    RENDERERS.dashboard();
  };
}

/* rename to allow landing to replace it then restore */
function renderDashboard(){
  const root=document.getElementById('view-dashboard');
  const mKey=monthKey(todayStr());
  const mTx=DB.transactions.filter(tx=>monthKey(tx.date)===mKey);
  const income=mTx.filter(t=>t.type==='income').reduce((s,t)=>s+Number(t.amount),0);
  const expense=mTx.filter(t=>t.type==='expense').reduce((s,t)=>s+Number(t.amount),0);
  const net=income-expense;
  const isProfit=net>=0;
  const catTotals={};
  mTx.filter(t=>t.type==='expense').forEach(t=>{catTotals[t.category]=(catTotals[t.category]||0)+Number(t.amount);});
  const topCats=Object.entries(catTotals).sort((a,b)=>b[1]-a[1]).slice(0,3);
  const maxCat=topCats.length?topCats[0][1]:1;
  const recent=DB.transactions.slice().sort((a,b)=>(b.date+b.id).localeCompare(a.date+a.id)).slice(0,5);
  const turnover=parseFloat(DB.profile.turnover);
  const turnoverWarn=(turnover&&turnover>=800000&&turnover<1000000)?`<div class="card" style="margin-bottom:16px;border-color:var(--gold);"><div class="label-eyebrow" style="color:var(--gold);">⚠ ${t('dash.einvoiceTitle')}</div><p style="margin:0;font-size:13.5px;">${t('dash.turnoverWarn')}</p></div>`:'';
  const topCatsHtml=topCats.length?topCats.map(([cat,amt])=>{const pct=Math.round((amt/maxCat)*100);return `<div class="bar-row"><div>${escapeHtml(translateCat(cat))}</div><div class="bar-track"><div class="bar-fill expense" style="width:${pct}%"></div></div><div class="num figure">${fmtMoney(amt)}</div></div>`;}).join(''):`<p class="hint">${t('rep.noBreakdown')}</p>`;
  const recentHtml=recent.length?`<div style="overflow-x:auto;"><table class="data-table"><tbody>`+recent.map(tx=>{const cls=tx.type==='income'?'amt-income':'amt-expense';const sign=tx.type==='income'?'+':'−';const photo=tx.photo?`<img class="img-thumb lightbox-trigger" src="${tx.photo}" style="cursor:zoom-in;" alt="">` :'';return `<tr><td>${fmtDate(tx.date)}</td><td>${escapeHtml(translateCat(tx.category))}${tx.description?' — '+escapeHtml(tx.description):''}</td><td class="num ${cls}">${sign} ${fmtMoney(tx.amount)}</td><td>${photo}</td></tr>`;}).join('')+`</tbody></table></div>`:`<div class="empty-state"><div class="stamp-mark-lg">RK</div><p>${t('dash.noData')}</p></div>`;
  root.innerHTML=`<h2 class="view-title">${t('dash.title')}</h2><p class="view-sub">${t('dash.sub')}</p>${turnoverWarn}
    <div class="grid cols-3" style="margin-bottom:18px;">
      <div class="card"><div class="label-eyebrow">${t('dash.thisMonth')} · ${monthLabel(mKey)}</div><div class="stamp ${isProfit?'profit':'loss'}"><small>${isProfit?t('dash.profit'):t('dash.loss')}</small>${fmtMoney(Math.abs(net))}</div><div class="hint">${mTx.length} ${t('dash.txCount')}</div></div>
      <div class="card"><div class="label-eyebrow">${t('dash.income')}</div><div class="figure lg" style="color:var(--income);">${fmtMoney(income)}</div><div class="btn-row" style="margin-top:12px;"><button class="btn income-btn" id="dashAddIncome">${t('dash.addIncome')}</button></div></div>
      <div class="card"><div class="label-eyebrow">${t('dash.expense')}</div><div class="figure lg" style="color:var(--expense);">${fmtMoney(expense)}</div><div class="btn-row" style="margin-top:12px;"><button class="btn expense-btn" id="dashAddExpense">${t('dash.addExpense')}</button></div></div>
    </div>
    <div class="grid cols-2" style="margin-bottom:18px;">
      <div class="card"><div class="label-eyebrow">${t('dash.topExpenses')}</div>${topCatsHtml}</div>
      <div class="card"><div class="label-eyebrow">${t('dash.recent')}</div>${recentHtml}</div>
    </div>
    <details class="card"><summary style="font-family:var(--font-display);font-weight:700;cursor:pointer;">${t('dash.einvoiceTitle')}</summary><p style="font-size:13px;margin-top:10px;">${t('dash.einvoiceBody')}</p></details>`;
  document.getElementById('dashAddIncome').onclick=()=>openTxModal(null,'income');
  document.getElementById('dashAddExpense').onclick=()=>openTxModal(null,'expense');
  root.querySelectorAll('.lightbox-trigger').forEach(img=>img.onclick=()=>openLightbox(img.src));
}
RENDERERS.dashboard=renderDashboard;

/* =========================================================
   THEME / LANGUAGE / INIT
   ========================================================= */
function applyStaticI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.getAttribute('data-i18n')); });
  const langBtn=document.getElementById('langToggle');
  const cur=document.body.getAttribute('data-lang')||'en';
  langBtn.textContent=I18N[cur]?I18N[cur].lang:'EN';
}
document.getElementById('themeToggle').addEventListener('click',()=>{
  const next=document.body.getAttribute('data-theme')==='light'?'dark':'light';
  document.body.setAttribute('data-theme',next); DB.theme=next; saveDB();
});
document.getElementById('langToggle').addEventListener('click',()=>{
  const cur=document.body.getAttribute('data-lang')||'en';
  const idx=LANGS.indexOf(cur);
  const next=LANGS[(idx+1)%LANGS.length];
  document.body.setAttribute('data-lang',next); DB.lang=next; saveDB();
  applyStaticI18n(); switchView(getActiveView());
});
document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>switchView(btn.dataset.view)));

(function init(){
  DB=loadDB();
  document.body.setAttribute('data-theme',DB.theme||'light');
  document.body.setAttribute('data-lang',DB.lang||'en');
  applyStaticI18n();
  if(!DB.profile._setupDone){
    // show landing on fresh install
    document.querySelectorAll('.nav-item').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.tab-btn[data-view="dashboard"]').forEach(b=>b.classList.add('active'));
    document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='view-dashboard'));
    showLanding();
  } else {
    switchView('dashboard');
  }
})();


/* =========================================================
   SMARTBOOKS UI — sidebar nav, mobile menu, topbar
   ========================================================= */

// Topbar titles per view
const VIEW_TITLES = {
  dashboard: { en:'Dashboard', ms:'Papan Pemuka', zh:'总览', sub:{en:'Your business at a glance',ms:'Gambaran perniagaan anda',zh:'业务概况'} },
  transactions: { en:'Transactions', ms:'Transaksi', zh:'交易记录', sub:{en:'Every ringgit in and out',ms:'Setiap ringgit masuk dan keluar',zh:'每笔收支记录'} },
  invoices: { en:'Invoices & Receipts', ms:'Invois & Resit', zh:'发票与收据', sub:{en:'Manage your billing documents',ms:'Urus dokumen bil anda',zh:'管理账单文件'} },
  reports: { en:'Reports', ms:'Laporan', zh:'报表', sub:{en:'Analytics and insights',ms:'Analitik dan penemuan',zh:'数据分析'} },
  settings: { en:'Settings', ms:'Tetapan', zh:'设置', sub:{en:'Configure SmartBooks',ms:'Konfigurasi SmartBooks',zh:'系统设置'} }
};

function updateTopbar(view){
  const lang = document.body.getAttribute('data-lang') || 'en';
  const info = VIEW_TITLES[view];
  if(!info) return;
  // Insert/update topbar inside content
  let tb = document.querySelector('.topbar');
  if(!tb){
    tb = document.createElement('div');
    tb.className = 'topbar no-print';
    const content = document.querySelector('.content');
    if(content) content.insertBefore(tb, content.firstChild);
  }
  tb.innerHTML = `<div>
    <div class="topbar-title">${info[lang]||info.en}</div>
    <div class="topbar-sub">${(info.sub&&(info.sub[lang]||info.sub.en))||''}</div>
  </div>`;
}

// Patch switchView to update topbar
const _origSwitchView = switchView;
// Override switchView
window.switchView = function(view){
  document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===view));
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id==='view-'+view));
  updateTopbar(view);
  // close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
  if(RENDERERS[view]) RENDERERS[view]();
};

// Mobile menu
document.getElementById('menuToggle').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('show');
});
document.getElementById('sidebarOverlay').addEventListener('click', ()=>{
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
});

// Sync mobile lang/theme buttons
function syncMobileButtons(){
  const lang = document.body.getAttribute('data-lang')||'en';
  const mLang = document.getElementById('langToggleMobile');
  if(mLang) mLang.textContent = I18N[lang]?I18N[lang].lang:'EN';
}
document.getElementById('langToggleMobile').addEventListener('click', ()=>{
  const cur = document.body.getAttribute('data-lang')||'en';
  const idx = LANGS.indexOf(cur);
  const next = LANGS[(idx+1)%LANGS.length];
  document.body.setAttribute('data-lang', next); DB.lang=next; saveDB();
  applyStaticI18n(); syncMobileButtons(); switchView(getActiveView());
});
document.getElementById('themeToggleMobile').addEventListener('click', ()=>{
  const next = document.body.getAttribute('data-theme')==='light'?'dark':'light';
  document.body.setAttribute('data-theme',next); DB.theme=next; saveDB();
});

// Override lang/theme toggle labels
const origApplyI18n = applyStaticI18n;
window.applyStaticI18n = function(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent=t(el.getAttribute('data-i18n')); });
  const lang = document.body.getAttribute('data-lang')||'en';
  const lb = document.getElementById('langToggle');
  if(lb) lb.textContent = I18N[lang]?I18N[lang].lang:'EN';
  syncMobileButtons();
};

// Override getActiveView for sidebar
window.getActiveView = function(){
  const a = document.querySelector('.nav-item.active');
  return a ? a.dataset.view : 'dashboard';
};

// Bind sidebar nav items (re-bind since JS loaded before sidebar buttons existed)
document.querySelectorAll('.nav-item').forEach(btn=>{
  btn.addEventListener('click', ()=> window.switchView(btn.dataset.view));
});

// Patch stat cards in dashboard to use new design
const _origDash = RENDERERS.dashboard;
RENDERERS.dashboard = function(){
  const root = document.getElementById('view-dashboard');
  const mKey = monthKey(todayStr());
  const mTx = DB.transactions.filter(tx=>monthKey(tx.date)===mKey);
  const income = mTx.filter(t=>t.type==='income').reduce((s,t)=>s+Number(t.amount),0);
  const expense = mTx.filter(t=>t.type==='expense').reduce((s,t)=>s+Number(t.amount),0);
  const net = income - expense;
  const isProfit = net >= 0;
  const catTotals = {};
  mTx.filter(t=>t.type==='expense').forEach(t=>{ catTotals[t.category]=(catTotals[t.category]||0)+Number(t.amount); });
  const topCats = Object.entries(catTotals).sort((a,b)=>b[1]-a[1]).slice(0,5);
  const maxCat = topCats.length ? topCats[0][1] : 1;
  const recent = DB.transactions.slice().sort((a,b)=>(b.date+b.id).localeCompare(a.date+a.id)).slice(0,8);
  const turnover = parseFloat(DB.profile.turnover);
  const turnoverWarn = (turnover&&turnover>=800000&&turnover<1000000) ? `
    <div class="card" style="margin-bottom:20px;border-left:4px solid #F59E0B;background:#FFFBEB;">
      <div style="font-size:12px;font-weight:700;color:#92400E;text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px;">⚠ e-Invoice Notice</div>
      <p style="margin:0;font-size:13px;color:#78350F;">${t('dash.turnoverWarn')}</p>
    </div>` : '';

  const topCatsHtml = topCats.length ? topCats.map(([cat,amt])=>{
    const pct = Math.round((amt/maxCat)*100);
    return `<div class="bar-row"><div style="font-size:12.5px;">${escapeHtml(translateCat(cat))}</div>
      <div class="bar-track"><div class="bar-fill expense" style="width:${pct}%"></div></div>
      <div class="num" style="font-family:var(--font-mono);font-size:12px;font-weight:700;color:var(--expense);">${fmtMoney(amt)}</div></div>`;
  }).join('') : `<p style="color:var(--ink-soft);font-size:13px;">${t('rep.noBreakdown')}</p>`;

  const recentRows = recent.length ? recent.map(tx=>{
    const cls = tx.type==='income'?'amt-income':'amt-expense';
    const sign = tx.type==='income'?'+':'−';
    const photo = tx.photo?`<img class="img-thumb lightbox-trigger" src="${tx.photo}" style="cursor:zoom-in;" alt="">`:'';
    return `<tr><td style="color:var(--ink-soft);font-size:12px;">${fmtDate(tx.date)}</td>
      <td>${escapeHtml(translateCat(tx.category))}${tx.description?'<div style="font-size:11px;color:var(--ink-soft);">'+escapeHtml(tx.description)+'</div>':''}</td>
      <td><span class="pill ${tx.type}">${t('common.'+tx.type)}</span></td>
      <td class="num ${cls}">${sign} ${fmtMoney(tx.amount)}</td>
      <td>${photo}</td></tr>`;
  }).join('') : `<tr><td colspan="5" style="text-align:center;padding:30px;color:var(--ink-soft);">${t('dash.noData')}</td></tr>`;

  root.innerHTML = `
    ${turnoverWarn}
    <div class="stat-grid">
      <div class="stat-card primary">
        <div class="stat-label">${t('dash.thisMonth')} · ${monthLabel(mKey)}</div>
        <div class="stat-value">${fmtMoney(Math.abs(net))}</div>
        <div class="stat-badge ${isProfit?'profit':'loss'}">${isProfit?'▲ '+t('dash.profit'):'▼ '+t('dash.loss')}</div>
        <div style="font-size:12px;color:rgba(255,255,255,.6);margin-top:6px;">${mTx.length} ${t('dash.txCount')}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label" style="color:var(--income);">▲ ${t('dash.income')}</div>
        <div class="stat-value" style="color:var(--income);">${fmtMoney(income)}</div>
        <div class="btn-row" style="margin-top:14px;">
          <button class="btn income-btn sm" id="dashAddIncome">${t('dash.addIncome')}</button>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-label" style="color:var(--expense);">▼ ${t('dash.expense')}</div>
        <div class="stat-value" style="color:var(--expense);">${fmtMoney(expense)}</div>
        <div class="btn-row" style="margin-top:14px;">
          <button class="btn expense-btn sm" id="dashAddExpense">${t('dash.addExpense')}</button>
        </div>
      </div>
    </div>

    <div class="grid2" style="margin-bottom:20px;">
      <div class="card">
        <div class="card-title"><div class="dot blue"></div>${t('dash.recent')}</div>
        <div class="table-wrap">
          <table class="data-table">
            <thead><tr><th>${t('common.date')}</th><th>${t('common.category')}</th><th>Type</th><th class="num">${t('common.amount')}</th><th></th></tr></thead>
            <tbody>${recentRows}</tbody>
          </table>
        </div>
      </div>
      <div class="card">
        <div class="card-title"><div class="dot blue"></div>${t('dash.topExpenses')}</div>
        ${topCatsHtml}
        <hr class="divider">
        <details>
          <summary style="font-size:12px;cursor:pointer;color:var(--ink-soft);">${t('dash.einvoiceTitle')}</summary>
          <p style="font-size:12px;margin-top:8px;color:var(--ink-soft);">${t('dash.einvoiceBody')}</p>
        </details>
      </div>
    </div>`;

  document.getElementById('dashAddIncome').onclick = ()=>openTxModal(null,'income');
  document.getElementById('dashAddExpense').onclick = ()=>openTxModal(null,'expense');
  root.querySelectorAll('.lightbox-trigger').forEach(img=>img.onclick=()=>openLightbox(img.src));
};

// Re-init with SmartBooks branding
(function reinit(){
  // re-apply lang toggle label
  applyStaticI18n();
  // update topbar for current view
  updateTopbar(getActiveView());
  // re-render current view with new dashboard renderer
  if(getActiveView()==='dashboard') RENDERERS.dashboard();
})();

/* =========================================================
   SMARTBOOKS v3 — LHDN & Bank-Ready Features
   1. Annual Income Statement (printable)
   2. Business Financial Summary (bank loan ready)
   3. Outstanding AR (Accounts Receivable)
   4. Recurring transactions
   5. Multi-year P&L comparison
   ========================================================= */

/* ---------- extend i18n ---------- */
const I18N_V3 = {
  en: {
    "nav.statements": "Statements",
    "nav.ar": "Outstanding",
    "stmt.annualTitle": "Annual Income Statement",
    "stmt.annualSub": "Printable statement for LHDN & bank submission",
    "stmt.selectYear": "Select year",
    "stmt.generate": "Generate Statement",
    "stmt.bankTitle": "Business Financial Summary",
    "stmt.bankSub": "One-page summary for bank loan applications",
    "stmt.generateBank": "Generate Bank Summary",
    "stmt.revenue": "REVENUE",
    "stmt.expenses": "EXPENSES",
    "stmt.grossProfit": "Gross Profit",
    "stmt.netProfit": "Net Profit / (Loss)",
    "stmt.preparedBy": "Prepared by",
    "stmt.period": "Financial Period",
    "stmt.disclaimer": "This statement is prepared based on records maintained by the business owner. It has not been audited by a certified public accountant.",
    "stmt.totalRevenue": "Total Revenue",
    "stmt.totalExpenses": "Total Expenses",
    "stmt.profitMargin": "Net Profit Margin",
    "stmt.outstanding": "Outstanding Receivables",
    "stmt.outstandingNote": "Amounts owed to the business as at",
    "stmt.monthlyTrend": "Monthly Revenue Trend (12 months)",
    "stmt.print": "Print / Save as PDF",
    "stmt.close": "Close",
    "stmt.noData": "No transactions found for this year. Add transactions first.",
    "ar.title": "Outstanding Invoices",
    "ar.sub": "Money owed to your business by customers.",
    "ar.totalOutstanding": "Total Outstanding",
    "ar.overdueAmount": "Overdue",
    "ar.customer": "Customer",
    "ar.invoiceNo": "Invoice No.",
    "ar.invoiceDate": "Date",
    "ar.dueDate": "Due Date",
    "ar.amount": "Amount",
    "ar.daysOverdue": "Days Overdue",
    "ar.noOutstanding": "No outstanding invoices. All payments are up to date.",
    "ar.sendReminder": "WhatsApp Reminder",
    "rec.recurring": "Recurring",
    "rec.setRecurring": "Set as recurring",
    "rec.frequency": "Frequency",
    "rec.monthly": "Monthly",
    "rec.weekly": "Weekly",
    "rec.due": "recurring entries due",
    "rec.logNow": "Log Now",
    "rec.dismiss": "Dismiss",
    "rep.multiYear": "Multi-Year Comparison",
    "rep.year1": "Year",
    "rep.vsLastYear": "vs last year",
  },
  ms: {
    "nav.statements": "Penyata",
    "nav.ar": "Tertunggak",
    "stmt.annualTitle": "Penyata Pendapatan Tahunan",
    "stmt.annualSub": "Penyata boleh cetak untuk LHDN & permohonan bank",
    "stmt.selectYear": "Pilih tahun",
    "stmt.generate": "Jana Penyata",
    "stmt.bankTitle": "Ringkasan Kewangan Perniagaan",
    "stmt.bankSub": "Ringkasan satu halaman untuk permohonan pinjaman bank",
    "stmt.generateBank": "Jana Ringkasan Bank",
    "stmt.revenue": "PENDAPATAN",
    "stmt.expenses": "PERBELANJAAN",
    "stmt.grossProfit": "Keuntungan Kasar",
    "stmt.netProfit": "Keuntungan / (Kerugian) Bersih",
    "stmt.preparedBy": "Disediakan oleh",
    "stmt.period": "Tempoh Kewangan",
    "stmt.disclaimer": "Penyata ini disediakan berdasarkan rekod yang diselenggara oleh pemilik perniagaan. Ia tidak diaudit oleh akauntan awam bertauliah.",
    "stmt.totalRevenue": "Jumlah Pendapatan",
    "stmt.totalExpenses": "Jumlah Perbelanjaan",
    "stmt.profitMargin": "Margin Keuntungan Bersih",
    "stmt.outstanding": "Akaun Belum Terima",
    "stmt.outstandingNote": "Amaun yang terhutang kepada perniagaan setakat",
    "stmt.monthlyTrend": "Trend Pendapatan Bulanan (12 bulan)",
    "stmt.print": "Cetak / Simpan sebagai PDF",
    "stmt.close": "Tutup",
    "stmt.noData": "Tiada transaksi untuk tahun ini. Sila tambah transaksi terlebih dahulu.",
    "ar.title": "Invois Tertunggak",
    "ar.sub": "Wang yang terhutang kepada perniagaan anda oleh pelanggan.",
    "ar.totalOutstanding": "Jumlah Tertunggak",
    "ar.overdueAmount": "Sudah Lampau",
    "ar.customer": "Pelanggan",
    "ar.invoiceNo": "No. Invois",
    "ar.invoiceDate": "Tarikh",
    "ar.dueDate": "Tarikh Akhir",
    "ar.amount": "Jumlah",
    "ar.daysOverdue": "Hari Lampau",
    "ar.noOutstanding": "Tiada invois tertunggak. Semua bayaran telah dikemas kini.",
    "ar.sendReminder": "Peringatan WhatsApp",
    "rec.recurring": "Berulang",
    "rec.setRecurring": "Tetapkan sebagai berulang",
    "rec.frequency": "Kekerapan",
    "rec.monthly": "Bulanan",
    "rec.weekly": "Mingguan",
    "rec.due": "entri berulang perlu direkod",
    "rec.logNow": "Rekod Sekarang",
    "rec.dismiss": "Abaikan",
    "rep.multiYear": "Perbandingan Pelbagai Tahun",
    "rep.year1": "Tahun",
    "rep.vsLastYear": "berbanding tahun lepas",
  },
  zh: {
    "nav.statements": "财务报表",
    "nav.ar": "应收账款",
    "stmt.annualTitle": "年度收入报表",
    "stmt.annualSub": "可打印报表，用于税务局申报及银行提交",
    "stmt.selectYear": "选择年份",
    "stmt.generate": "生成报表",
    "stmt.bankTitle": "业务财务摘要",
    "stmt.bankSub": "银行贷款申请用一页摘要",
    "stmt.generateBank": "生成银行摘要",
    "stmt.revenue": "收入",
    "stmt.expenses": "支出",
    "stmt.grossProfit": "毛利润",
    "stmt.netProfit": "净利润 / （亏损）",
    "stmt.preparedBy": "编制人",
    "stmt.period": "财务期间",
    "stmt.disclaimer": "本报表根据业主自行维护的记录编制，未经注册公共会计师审计。",
    "stmt.totalRevenue": "总收入",
    "stmt.totalExpenses": "总支出",
    "stmt.profitMargin": "净利润率",
    "stmt.outstanding": "应收账款",
    "stmt.outstandingNote": "截至以下日期业务应收款项",
    "stmt.monthlyTrend": "月度收入趋势（12个月）",
    "stmt.print": "打印 / 保存为PDF",
    "stmt.close": "关闭",
    "stmt.noData": "本年度无交易记录，请先添加交易。",
    "ar.title": "未收款发票",
    "ar.sub": "客户欠您业务的款项。",
    "ar.totalOutstanding": "未收款总额",
    "ar.overdueAmount": "已逾期",
    "ar.customer": "客户",
    "ar.invoiceNo": "发票编号",
    "ar.invoiceDate": "日期",
    "ar.dueDate": "截止日期",
    "ar.amount": "金额",
    "ar.daysOverdue": "逾期天数",
    "ar.noOutstanding": "无未收款发票，所有付款均已到位。",
    "ar.sendReminder": "WhatsApp提醒",
    "rec.recurring": "定期",
    "rec.setRecurring": "设为定期",
    "rec.frequency": "频率",
    "rec.monthly": "每月",
    "rec.weekly": "每周",
    "rec.due": "定期条目待记录",
    "rec.logNow": "立即记录",
    "rec.dismiss": "忽略",
    "rep.multiYear": "多年对比",
    "rep.year1": "年份",
    "rep.vsLastYear": "对比去年",
  }
};

// Merge into main I18N
['en','ms','zh'].forEach(lang => {
  Object.assign(I18N[lang], I18N_V3[lang] || {});
});

/* =========================================================
   FEATURE 1 — STATEMENTS VIEW
   Annual Income Statement + Bank Financial Summary
   ========================================================= */

RENDERERS.statements = function(){
  const root = document.getElementById('view-statements');
  const years = Array.from(new Set([
    ...DB.transactions.map(tx => tx.date.slice(0,4)),
    String(new Date().getFullYear())
  ])).sort().reverse();

  root.innerHTML = `
    <div class="row-between">
      <div>
        <div class="section-title">${t('stmt.annualTitle')}</div>
        <div class="section-sub">${t('stmt.annualSub')}</div>
      </div>
    </div>

    <!-- Annual Income Statement generator -->
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><div class="dot blue"></div>${t('stmt.annualTitle')}</div>
      <div style="display:flex;gap:14px;align-items:flex-end;flex-wrap:wrap;">
        <div class="field" style="margin-bottom:0;min-width:160px;">
          <label class="field-label">${t('stmt.selectYear')}</label>
          <select id="stmtYear">${years.map(y=>`<option value="${y}">${y}</option>`).join('')}</select>
        </div>
        <button class="btn primary" id="genAnnualBtn">${t('stmt.generate')}</button>
      </div>
    </div>

    <!-- Bank Financial Summary generator -->
    <div class="card" style="margin-bottom:20px;">
      <div class="card-title"><div class="dot green"></div>${t('stmt.bankTitle')}</div>
      <p style="font-size:13px;color:var(--ink-soft);margin-bottom:14px;">${t('stmt.bankSub')}</p>
      <div style="display:flex;gap:14px;align-items:flex-end;flex-wrap:wrap;">
        <div class="field" style="margin-bottom:0;min-width:160px;">
          <label class="field-label">${t('stmt.selectYear')}</label>
          <select id="bankYear">${years.map(y=>`<option value="${y}">${y}</option>`).join('')}</select>
        </div>
        <button class="btn success" id="genBankBtn">${t('stmt.generateBank')}</button>
      </div>
    </div>

    <!-- Statement preview area -->
    <div id="stmtPreviewArea"></div>
  `;

  document.getElementById('genAnnualBtn').onclick = () => generateAnnualStatement(document.getElementById('stmtYear').value);
  document.getElementById('genBankBtn').onclick = () => generateBankSummary(document.getElementById('bankYear').value);
};

function getYearData(year){
  const txs = DB.transactions.filter(tx => tx.date.startsWith(year));
  const incTxs = txs.filter(t=>t.type==='income');
  const expTxs = txs.filter(t=>t.type==='expense');
  const totalIncome = incTxs.reduce((s,t)=>s+Number(t.amount),0);
  const totalExpense = expTxs.reduce((s,t)=>s+Number(t.amount),0);

  // Group by category
  const incByCat = {}, expByCat = {};
  incTxs.forEach(tx=>{ incByCat[tx.category]=(incByCat[tx.category]||0)+Number(tx.amount); });
  expTxs.forEach(tx=>{ expByCat[tx.category]=(expByCat[tx.category]||0)+Number(tx.amount); });

  // Monthly breakdown
  const monthly = {};
  for(let m=1;m<=12;m++){
    const mk = year+'-'+String(m).padStart(2,'0');
    const mTxs = txs.filter(t=>monthKey(t.date)===mk);
    monthly[mk]={
      income: mTxs.filter(t=>t.type==='income').reduce((s,t)=>s+Number(t.amount),0),
      expense: mTxs.filter(t=>t.type==='expense').reduce((s,t)=>s+Number(t.amount),0)
    };
  }
  return { txs, incTxs, expTxs, totalIncome, totalExpense, incByCat, expByCat, monthly, net: totalIncome-totalExpense };
}

function generateAnnualStatement(year){
  const data = getYearData(year);
  const p = DB.profile;
  const area = document.getElementById('stmtPreviewArea');

  if(!data.txs.length){
    area.innerHTML = `<div class="card"><p style="color:var(--ink-soft);text-align:center;padding:20px;">${t('stmt.noData')}</p></div>`;
    return;
  }

  const incRows = Object.entries(data.incByCat).sort((a,b)=>b[1]-a[1]).map(([cat,amt])=>
    `<tr><td style="padding:8px 12px;">${escapeHtml(cat)}</td><td style="padding:8px 12px;text-align:right;font-family:monospace;">${fmtMoney(amt)}</td></tr>`
  ).join('');
  const expRows = Object.entries(data.expByCat).sort((a,b)=>b[1]-a[1]).map(([cat,amt])=>
    `<tr><td style="padding:8px 12px;">${escapeHtml(cat)}</td><td style="padding:8px 12px;text-align:right;font-family:monospace;">${fmtMoney(amt)}</td></tr>`
  ).join('');

  const netColor = data.net >= 0 ? '#16A34A' : '#DC2626';
  const months = MONTH_NAMES.en;

  const monthRows = Object.entries(data.monthly).map(([mk, d])=>{
    const mn = months[parseInt(mk.split('-')[1],10)-1];
    const net = d.income - d.expense;
    return `<tr>
      <td style="padding:6px 12px;">${mn}</td>
      <td style="padding:6px 12px;text-align:right;font-family:monospace;color:#16A34A;">${d.income?fmtMoney(d.income):'—'}</td>
      <td style="padding:6px 12px;text-align:right;font-family:monospace;color:#DC2626;">${d.expense?fmtMoney(d.expense):'—'}</td>
      <td style="padding:6px 12px;text-align:right;font-family:monospace;font-weight:${net!==0?'700':'400'};color:${net>=0?'#16A34A':'#DC2626'};">${fmtMoney(net)}</td>
    </tr>`;
  }).join('');

  const html = `
  <div id="annualStmtDoc" style="font-family:-apple-system,Arial,sans-serif;color:#1a1a2e;max-width:720px;margin:0 auto;background:#fff;padding:40px;border:1px solid #e2e8f0;border-radius:10px;">

    <!-- Header -->
    <div style="border-bottom:3px solid #1A56DB;padding-bottom:20px;margin-bottom:24px;">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:12px;">
        <div>
          <div style="font-size:22px;font-weight:800;color:#0F172A;">${escapeHtml(p.name||'Business Name')}</div>
          ${p.regNo?`<div style="font-size:13px;color:#64748B;margin-top:3px;">SSM: ${escapeHtml(p.regNo)}</div>`:''}
          ${p.tin?`<div style="font-size:13px;color:#64748B;">TIN: ${escapeHtml(p.tin)}</div>`:''}
          <div style="font-size:13px;color:#64748B;margin-top:3px;">${escapeHtml(p.address||'')}</div>
          <div style="font-size:13px;color:#64748B;">${escapeHtml(p.phone||'')}${p.email?' · '+escapeHtml(p.email):''}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:13px;font-weight:700;color:#1A56DB;letter-spacing:1px;text-transform:uppercase;">${t('stmt.annualTitle')}</div>
          <div style="font-size:13px;color:#64748B;margin-top:4px;">${t('stmt.period')}: 1 January ${year} – 31 December ${year}</div>
          <div style="font-size:12px;color:#94A3B8;margin-top:2px;">${t('stmt.preparedBy')}: ${escapeHtml(p.name||'')}</div>
          <div style="font-size:12px;color:#94A3B8;">Generated: ${fmtDate(todayStr())}</div>
        </div>
      </div>
    </div>

    <!-- Revenue section -->
    <div style="margin-bottom:20px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#1A56DB;text-transform:uppercase;padding:8px 12px;background:#EBF2FF;border-radius:6px;margin-bottom:8px;">${t('stmt.revenue')}</div>
      <table style="width:100%;border-collapse:collapse;">
        ${incRows}
        <tr style="border-top:2px solid #1A56DB;">
          <td style="padding:10px 12px;font-weight:700;">${t('stmt.totalRevenue')}</td>
          <td style="padding:10px 12px;text-align:right;font-weight:800;font-size:15px;font-family:monospace;color:#1A56DB;">${fmtMoney(data.totalIncome)}</td>
        </tr>
      </table>
    </div>

    <!-- Expenses section -->
    <div style="margin-bottom:20px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:2px;color:#DC2626;text-transform:uppercase;padding:8px 12px;background:#FEE2E2;border-radius:6px;margin-bottom:8px;">${t('stmt.expenses')}</div>
      <table style="width:100%;border-collapse:collapse;">
        ${expRows}
        <tr style="border-top:2px solid #DC2626;">
          <td style="padding:10px 12px;font-weight:700;">${t('stmt.totalExpenses')}</td>
          <td style="padding:10px 12px;text-align:right;font-weight:800;font-size:15px;font-family:monospace;color:#DC2626;">${fmtMoney(data.totalExpense)}</td>
        </tr>
      </table>
    </div>

    <!-- Net profit -->
    <div style="background:${data.net>=0?'#DCFCE7':'#FEE2E2'};border-radius:8px;padding:16px 20px;margin-bottom:24px;display:flex;justify-content:space-between;align-items:center;">
      <div style="font-weight:700;font-size:16px;color:${netColor};">${t('stmt.netProfit')}</div>
      <div style="font-weight:800;font-size:22px;font-family:monospace;color:${netColor};">${fmtMoney(data.net)}</div>
    </div>

    <!-- Monthly breakdown -->
    <div style="margin-bottom:24px;">
      <div style="font-size:12px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#64748B;margin-bottom:10px;">Monthly Breakdown</div>
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <thead><tr style="background:#F8FAFC;">
          <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.8px;">Month</th>
          <th style="padding:8px 12px;text-align:right;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.8px;">Revenue</th>
          <th style="padding:8px 12px;text-align:right;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.8px;">Expenses</th>
          <th style="padding:8px 12px;text-align:right;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.8px;">Net</th>
        </tr></thead>
        <tbody>${monthRows}</tbody>
      </table>
    </div>

    <!-- Disclaimer -->
    <div style="border-top:1px solid #E2E8F0;padding-top:16px;margin-top:8px;">
      <p style="font-size:11px;color:#94A3B8;line-height:1.6;">${t('stmt.disclaimer')}</p>
      <div style="margin-top:24px;display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:20px;">
        <div>
          <div style="width:200px;border-top:1px solid #334155;padding-top:6px;margin-top:40px;font-size:12px;color:#64748B;">Authorised Signature & Stamp</div>
        </div>
        <div style="text-align:right;font-size:12px;color:#64748B;">
          <div>SmartBooks</div>
          <div style="color:#94A3B8;">smartbooks.web3studiotech.com</div>
        </div>
      </div>
    </div>
  </div>`;

  area.innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px;">
        <div class="card-title" style="margin-bottom:0;"><div class="dot blue"></div>${t('stmt.annualTitle')} ${year}</div>
        <button class="btn primary" onclick="printStatement('annualStmtDoc')">${t('stmt.print')}</button>
      </div>
      ${html}
    </div>`;
}

function generateBankSummary(year){
  const data = getYearData(year);
  const prevData = getYearData(String(parseInt(year)-1));
  const p = DB.profile;
  const area = document.getElementById('stmtPreviewArea');

  const outstandingInvs = DB.invoices.filter(i=>i.status==='unpaid' && i.docType!=='quotation');
  const totalOutstanding = outstandingInvs.reduce((s,i)=>s+invoiceTotal(i),0);
  const overdueInvs = outstandingInvs.filter(i=>isOverdue(i));
  const totalOverdue = overdueInvs.reduce((s,i)=>s+invoiceTotal(i),0);

  const margin = data.totalIncome > 0 ? ((data.net/data.totalIncome)*100).toFixed(1) : '0.0';
  const prevMargin = prevData.totalIncome > 0 ? ((prevData.net/prevData.totalIncome)*100).toFixed(1) : '0.0';
  const revenueGrowth = prevData.totalIncome > 0 ? (((data.totalIncome-prevData.totalIncome)/prevData.totalIncome)*100).toFixed(1) : null;

  // Monthly revenue bars (last 12 months)
  const months = MONTH_NAMES.en;
  const maxMonthly = Math.max(...Object.values(data.monthly).map(m=>m.income), 1);
  const monthlyBars = Object.entries(data.monthly).map(([mk, d])=>{
    const mn = months[parseInt(mk.split('-')[1],10)-1].slice(0,3);
    const pct = Math.round((d.income/maxMonthly)*100);
    return `<div style="display:flex;flex-direction:column;align-items:center;flex:1;min-width:0;">
      <div style="width:100%;background:#F1F5F9;border-radius:4px;height:60px;display:flex;align-items:flex-end;overflow:hidden;">
        <div style="width:100%;height:${pct}%;background:linear-gradient(180deg,#22C55E,#1A56DB);border-radius:4px 4px 0 0;min-height:${pct>0?2:0}px;"></div>
      </div>
      <div style="font-size:9px;color:#94A3B8;margin-top:3px;text-align:center;">${mn}</div>
    </div>`;
  }).join('');

  const html = `
  <div id="bankSummaryDoc" style="font-family:-apple-system,Arial,sans-serif;color:#1a1a2e;max-width:720px;margin:0 auto;background:#fff;padding:40px;border:1px solid #e2e8f0;border-radius:10px;">

    <!-- Header -->
    <div style="display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:20px;border-bottom:3px solid #1A56DB;margin-bottom:24px;flex-wrap:wrap;gap:12px;">
      <div>
        <div style="font-size:22px;font-weight:800;color:#0F172A;">${escapeHtml(p.name||'Business Name')}</div>
        ${p.regNo?`<div style="font-size:12px;color:#64748B;">SSM Reg No: ${escapeHtml(p.regNo)}</div>`:''}
        ${p.tin?`<div style="font-size:12px;color:#64748B;">TIN: ${escapeHtml(p.tin)}</div>`:''}
        <div style="font-size:12px;color:#64748B;">${escapeHtml(p.address||'')} · ${escapeHtml(p.phone||'')}</div>
      </div>
      <div style="text-align:right;">
        <div style="background:#1A56DB;color:#fff;padding:6px 16px;border-radius:6px;font-size:12px;font-weight:700;letter-spacing:1px;">BUSINESS FINANCIAL SUMMARY</div>
        <div style="font-size:12px;color:#64748B;margin-top:6px;">Financial Year: ${year}</div>
        <div style="font-size:12px;color:#64748B;">As at: ${fmtDate(todayStr())}</div>
      </div>
    </div>

    <!-- Key metrics grid -->
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:24px;">
      <div style="background:#EBF2FF;border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#1A56DB;margin-bottom:6px;">Total Revenue (${year})</div>
        <div style="font-size:18px;font-weight:800;color:#0F172A;font-family:monospace;">${fmtMoney(data.totalIncome)}</div>
        ${revenueGrowth!==null?`<div style="font-size:11px;margin-top:4px;color:${parseFloat(revenueGrowth)>=0?'#16A34A':'#DC2626'};">${parseFloat(revenueGrowth)>=0?'▲':'▼'} ${Math.abs(revenueGrowth)}% vs ${parseInt(year)-1}</div>`:''}
      </div>
      <div style="background:#DCFCE7;border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#16A34A;margin-bottom:6px;">Net Profit (${year})</div>
        <div style="font-size:18px;font-weight:800;color:${data.net>=0?'#16A34A':'#DC2626'};font-family:monospace;">${fmtMoney(data.net)}</div>
        <div style="font-size:11px;margin-top:4px;color:#64748B;">Margin: ${margin}%</div>
      </div>
      <div style="background:${totalOutstanding>0?'#FEF3C7':'#F0FDF4'};border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:10px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${totalOutstanding>0?'#92400E':'#16A34A'};margin-bottom:6px;">Outstanding Receivables</div>
        <div style="font-size:18px;font-weight:800;color:${totalOutstanding>0?'#92400E':'#16A34A'};font-family:monospace;">${fmtMoney(totalOutstanding)}</div>
        <div style="font-size:11px;margin-top:4px;color:#64748B;">${outstandingInvs.length} invoice${outstandingInvs.length!==1?'s':''}</div>
      </div>
    </div>

    <!-- Monthly revenue trend -->
    <div style="margin-bottom:24px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#64748B;margin-bottom:12px;">${t('stmt.monthlyTrend')}</div>
      <div style="display:flex;gap:4px;height:80px;align-items:flex-end;">${monthlyBars}</div>
    </div>

    <!-- P&L comparison table -->
    <div style="margin-bottom:24px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#64748B;margin-bottom:10px;">Year-on-Year Comparison</div>
      <table style="width:100%;border-collapse:collapse;font-size:13px;">
        <thead><tr style="background:#F8FAFC;">
          <th style="padding:8px 12px;text-align:left;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.8px;">Particulars</th>
          <th style="padding:8px 12px;text-align:right;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.8px;">${parseInt(year)-1}</th>
          <th style="padding:8px 12px;text-align:right;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.8px;">${year}</th>
          <th style="padding:8px 12px;text-align:right;font-size:11px;color:#94A3B8;text-transform:uppercase;letter-spacing:.8px;">Change</th>
        </tr></thead>
        <tbody>
          ${[
            ['Total Revenue', prevData.totalIncome, data.totalIncome],
            ['Total Expenses', prevData.totalExpense, data.totalExpense],
            ['Net Profit / (Loss)', prevData.net, data.net],
          ].map(([lbl, prev, curr])=>{
            const diff = curr - prev;
            const pct = prev > 0 ? ((diff/prev)*100).toFixed(1) : '—';
            const isGood = lbl.includes('Expense') ? diff<=0 : diff>=0;
            return `<tr style="${lbl.includes('Net')?'font-weight:700;border-top:2px solid #E2E8F0;':''}">
              <td style="padding:9px 12px;">${lbl}</td>
              <td style="padding:9px 12px;text-align:right;font-family:monospace;color:#64748B;">${fmtMoney(prev)}</td>
              <td style="padding:9px 12px;text-align:right;font-family:monospace;">${fmtMoney(curr)}</td>
              <td style="padding:9px 12px;text-align:right;font-size:12px;color:${isGood?'#16A34A':'#DC2626'};">${pct!=='—'?(diff>=0?'▲':'▼')+' '+Math.abs(pct)+'%':'—'}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>

    <!-- Outstanding receivables detail -->
    ${outstandingInvs.length ? `
    <div style="margin-bottom:24px;">
      <div style="font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:#64748B;margin-bottom:10px;">Outstanding Receivables Detail</div>
      <table style="width:100%;border-collapse:collapse;font-size:12.5px;">
        <thead><tr style="background:#FEF3C7;">
          <th style="padding:7px 10px;text-align:left;font-size:10px;color:#92400E;text-transform:uppercase;">Customer</th>
          <th style="padding:7px 10px;text-align:left;font-size:10px;color:#92400E;text-transform:uppercase;">Invoice</th>
          <th style="padding:7px 10px;text-align:right;font-size:10px;color:#92400E;text-transform:uppercase;">Amount</th>
          <th style="padding:7px 10px;text-align:right;font-size:10px;color:#92400E;text-transform:uppercase;">Due</th>
        </tr></thead>
        <tbody>
          ${outstandingInvs.slice(0,10).map(inv=>`<tr>
            <td style="padding:7px 10px;">${escapeHtml(inv.client.name||'—')}</td>
            <td style="padding:7px 10px;color:#64748B;">${escapeHtml(inv.no)}</td>
            <td style="padding:7px 10px;text-align:right;font-family:monospace;font-weight:700;">${fmtMoney(invoiceTotal(inv))}</td>
            <td style="padding:7px 10px;text-align:right;font-size:11px;color:${isOverdue(inv)?'#DC2626':'#64748B'};">${inv.dueDate?fmtDate(inv.dueDate):'—'}</td>
          </tr>`).join('')}
          <tr style="border-top:2px solid #F59E0B;font-weight:700;">
            <td style="padding:8px 10px;" colspan="2">Total Outstanding</td>
            <td style="padding:8px 10px;text-align:right;font-family:monospace;color:#92400E;">${fmtMoney(totalOutstanding)}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>` : ''}

    <!-- Disclaimer & signature -->
    <div style="border-top:1px solid #E2E8F0;padding-top:16px;">
      <p style="font-size:11px;color:#94A3B8;line-height:1.6;margin-bottom:20px;">${t('stmt.disclaimer')}</p>
      <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:24px;">
        <div>
          <div style="width:200px;border-top:1px solid #334155;padding-top:6px;margin-top:40px;font-size:12px;color:#64748B;">Authorised Signature & Stamp</div>
          <div style="font-size:11px;color:#94A3B8;margin-top:4px;">${escapeHtml(p.name||'')}</div>
        </div>
        <div style="text-align:right;font-size:11px;color:#94A3B8;">
          <div>Prepared using SmartBooks</div>
          <div>smartbooks.web3studiotech.com</div>
        </div>
      </div>
    </div>
  </div>`;

  area.innerHTML = `
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:16px;">
        <div class="card-title" style="margin-bottom:0;"><div class="dot green"></div>${t('stmt.bankTitle')} ${year}</div>
        <button class="btn primary" onclick="printStatement('bankSummaryDoc')">${t('stmt.print')}</button>
      </div>
      ${html}
    </div>`;
}

function printStatement(elementId){
  const el = document.getElementById(elementId);
  if(!el) return;
  const w = window.open('','_blank');
  w.document.write(`<!DOCTYPE html><html><head><title>SmartBooks Statement</title><meta charset="utf-8">
    <style>body{margin:0;padding:20px;font-family:-apple-system,Arial,sans-serif;}@media print{body{padding:0;}}</style>
  </head><body>${el.outerHTML}</body></html>`);
  w.document.close();
  setTimeout(()=>{w.focus();w.print();},300);
}

/* =========================================================
   FEATURE 2 — OUTSTANDING AR VIEW
   ========================================================= */
RENDERERS.ar = function(){
  const root = document.getElementById('view-ar');
  const outstanding = DB.invoices.filter(i=>i.status==='unpaid' && i.docType!=='quotation');
  const totalAmt = outstanding.reduce((s,i)=>s+invoiceTotal(i),0);
  const overdueList = outstanding.filter(i=>isOverdue(i));
  const overdueAmt = overdueList.reduce((s,i)=>s+invoiceTotal(i),0);
  const today = new Date(todayStr());

  if(!outstanding.length){
    root.innerHTML = `
      <div class="row-between"><div><div class="section-title">${t('ar.title')}</div><div class="section-sub">${t('ar.sub')}</div></div></div>
      <div class="card"><div class="empty-state">
        <div class="empty-icon"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
        <div style="font-weight:700;margin-bottom:6px;">${t('ar.noOutstanding')}</div>
      </div></div>`;
    return;
  }

  // Group by customer
  const byCustomer = {};
  outstanding.forEach(inv=>{
    const name = inv.client.name || '(No name)';
    if(!byCustomer[name]) byCustomer[name] = {invs:[], phone: inv.client.phone||''};
    byCustomer[name].invs.push(inv);
    if(inv.client.phone) byCustomer[name].phone = inv.client.phone;
  });

  const customerCards = Object.entries(byCustomer).map(([name, data])=>{
    const custTotal = data.invs.reduce((s,i)=>s+invoiceTotal(i),0);
    const rows = data.invs.map(inv=>{
      const daysOverdue = inv.dueDate ? Math.floor((today - new Date(inv.dueDate))/(1000*60*60*24)) : null;
      const overdueTag = (daysOverdue!==null && daysOverdue>0)
        ? `<span style="background:#FEE2E2;color:#DC2626;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:700;">${daysOverdue}d overdue</span>`
        : (inv.dueDate ? `<span style="background:#DCFCE7;color:#16A34A;padding:2px 7px;border-radius:999px;font-size:11px;font-weight:700;">Due ${fmtDate(inv.dueDate)}</span>` : '');
      const waLink = data.phone
        ? `https://wa.me/${data.phone.replace(/\D/g,'')}?text=${encodeURIComponent('Hi '+name+', this is a friendly reminder that invoice '+inv.no+' for '+fmtMoney(invoiceTotal(inv))+' is outstanding. Thank you.')}`
        : null;
      return `<tr>
        <td style="padding:9px 12px;">${escapeHtml(inv.no)}</td>
        <td style="padding:9px 12px;color:#64748B;font-size:12px;">${fmtDate(inv.date)}</td>
        <td style="padding:9px 12px;">${overdueTag}</td>
        <td style="padding:9px 12px;text-align:right;font-family:monospace;font-weight:700;">${fmtMoney(invoiceTotal(inv))}</td>
        <td style="padding:9px 12px;">
          ${waLink ? `<a href="${waLink}" target="_blank" class="btn sm" style="background:#25D366;color:#fff;border-color:#25D366;text-decoration:none;font-size:11px;">💬 ${t('ar.sendReminder')}</a>` : ''}
        </td>
      </tr>`;
    }).join('');

    return `<div class="card" style="margin-bottom:14px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
        <div>
          <div style="font-weight:700;font-size:15px;">${escapeHtml(name)}</div>
          ${data.phone?`<div style="font-size:12px;color:#64748B;">${escapeHtml(data.phone)}</div>`:''}
        </div>
        <div style="font-size:18px;font-weight:800;font-family:monospace;color:#92400E;">${fmtMoney(custTotal)}</div>
      </div>
      <div class="table-wrap">
        <table class="data-table">
          <thead><tr>
            <th>${t('ar.invoiceNo')}</th><th>${t('ar.invoiceDate')}</th><th>Status</th>
            <th class="num">${t('ar.amount')}</th><th></th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`;
  }).join('');

  root.innerHTML = `
    <div class="row-between">
      <div><div class="section-title">${t('ar.title')}</div><div class="section-sub">${t('ar.sub')}</div></div>
    </div>
    <div class="stat-grid" style="margin-bottom:20px;">
      <div class="stat-card primary">
        <div class="stat-label">${t('ar.totalOutstanding')}</div>
        <div class="stat-value">${fmtMoney(totalAmt)}</div>
        <div class="stat-badge profit">${outstanding.length} invoice${outstanding.length!==1?'s':''}</div>
      </div>
      <div class="stat-card" style="border-left:4px solid #DC2626;">
        <div class="stat-label" style="color:#DC2626;">${t('ar.overdueAmount')}</div>
        <div class="stat-value" style="color:#DC2626;">${fmtMoney(overdueAmt)}</div>
        <div class="hint">${overdueList.length} overdue invoice${overdueList.length!==1?'s':''}</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">Customers Owing</div>
        <div class="stat-value">${Object.keys(byCustomer).length}</div>
        <div class="hint">unique customers</div>
      </div>
    </div>
    ${customerCards}`;
};

/* =========================================================
   FEATURE 3 — RECURRING TRANSACTIONS
   ========================================================= */

// extend DB defaults
(function patchDBForRecurring(){
  if(!DB.recurringTemplates) DB.recurringTemplates = [];
  saveDB();
})();

function checkRecurringDue(){
  if(!DB.recurringTemplates || !DB.recurringTemplates.length) return;
  const today = todayStr();
  const due = DB.recurringTemplates.filter(r => r.nextDate <= today && !r.dismissedDate);
  if(!due.length) return;

  const banner = document.createElement('div');
  banner.id = 'recurringBanner';
  banner.style.cssText = 'position:fixed;bottom:70px;right:20px;background:var(--blue);color:#fff;border-radius:10px;padding:14px 18px;box-shadow:0 4px 20px rgba(26,86,219,.3);z-index:150;max-width:320px;font-size:13px;';
  banner.innerHTML = `<div style="font-weight:700;margin-bottom:8px;">🔄 ${due.length} ${t('rec.due')}</div>
    ${due.map(r=>`<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:6px;padding:6px 0;border-bottom:1px solid rgba(255,255,255,.2);">
      <div><div style="font-weight:600;">${escapeHtml(r.description||r.category)}</div><div style="font-size:11px;opacity:.8;">${fmtMoney(r.amount)} · ${r.frequency}</div></div>
      <button onclick="logRecurring('${r.id}')" class="btn sm" style="background:#fff;color:var(--blue);border:none;flex-shrink:0;">${t('rec.logNow')}</button>
    </div>`).join('')}
    <button onclick="dismissRecurring()" style="background:none;border:none;color:rgba(255,255,255,.7);font-size:12px;cursor:pointer;margin-top:4px;">${t('rec.dismiss')}</button>`;
  document.body.appendChild(banner);
}

window.logRecurring = function(id){
  const r = DB.recurringTemplates.find(x=>x.id===id);
  if(!r) return;
  DB.transactions.push({
    id: uid(), type: r.type, date: todayStr(), amount: r.amount,
    category: r.category, description: r.description + ' (Auto)', method: r.method||'Bank Transfer', photo: null
  });
  // Advance nextDate
  const d = new Date(r.nextDate);
  if(r.frequency === 'monthly') d.setMonth(d.getMonth()+1);
  else d.setDate(d.getDate()+7);
  r.nextDate = d.toISOString().slice(0,10);
  r.dismissedDate = null;
  saveDB();
  showToast(t('tx.saved'));
  const banner = document.getElementById('recurringBanner');
  if(banner) banner.remove();
  checkRecurringDue();
};
window.dismissRecurring = function(){
  const today = todayStr();
  DB.recurringTemplates.forEach(r=>{ if(r.nextDate <= today) r.dismissedDate = today; });
  saveDB();
  const banner = document.getElementById('recurringBanner');
  if(banner) banner.remove();
};

// Add recurring UI to tx modal (inject into existing form)
const _origOpenTxModal = openTxModal;
window.openTxModal = function(id, presetType){
  _origOpenTxModal(id, presetType);
  // Inject recurring toggle after photo field if not exists
  setTimeout(()=>{
    if(document.getElementById('recurringWrap')) return;
    const form = document.getElementById('txForm');
    const wrap = document.createElement('div');
    wrap.id = 'recurringWrap';
    wrap.style.cssText = 'border-top:1px solid var(--border);padding-top:12px;margin-top:4px;';

    const existing = id ? (DB.recurringTemplates||[]).find(r=>r.sourceTxId===id) : null;
    wrap.innerHTML = `<label class="field-label" style="display:flex;align-items:center;gap:8px;cursor:pointer;">
      <input type="checkbox" id="isRecurring" style="width:16px;height:16px;" ${existing?'checked':''}> ${t('rec.setRecurring')}
    </label>
    <div id="recurringOptions" style="display:${existing?'block':'none'};margin-top:10px;">
      <div class="field">
        <label class="field-label">${t('rec.frequency')}</label>
        <select id="recFrequency">
          <option value="monthly" ${existing&&existing.frequency==='monthly'?'selected':''}>${t('rec.monthly')}</option>
          <option value="weekly" ${existing&&existing.frequency==='weekly'?'selected':''}>${t('rec.weekly')}</option>
        </select>
      </div>
    </div>`;
    form.querySelector('.btn-row').before(wrap);
    document.getElementById('isRecurring').onchange = e=>{
      document.getElementById('recurringOptions').style.display = e.target.checked?'block':'none';
    };
  }, 50);
};

// Patch tx form submit to handle recurring
const _origTxFormSubmit = document.getElementById('txForm').onsubmit;
document.getElementById('txForm').addEventListener('submit', function(e){
  setTimeout(()=>{
    // After save, check if recurring was set
    const isRec = document.getElementById('isRecurring');
    if(!isRec || !isRec.checked) return;
    const lastTx = DB.transactions[DB.transactions.length-1];
    if(!lastTx) return;
    const freq = document.getElementById('recFrequency').value;
    const d = new Date(lastTx.date);
    if(freq==='monthly') d.setMonth(d.getMonth()+1);
    else d.setDate(d.getDate()+7);
    // Remove existing template for this if any
    DB.recurringTemplates = (DB.recurringTemplates||[]).filter(r=>r.sourceTxId!==lastTx.id);
    DB.recurringTemplates.push({
      id: uid(), sourceTxId: lastTx.id, type: lastTx.type, amount: lastTx.amount,
      category: lastTx.category, description: lastTx.description, method: lastTx.method,
      frequency: freq, nextDate: d.toISOString().slice(0,10), dismissedDate: null
    });
    saveDB();
  }, 200);
}, true);

/* =========================================================
   FEATURE 4 — MULTI-YEAR P&L IN REPORTS
   ========================================================= */
const _origReportsRenderer = RENDERERS.reports;
RENDERERS.reports = function(){
  _origReportsRenderer();
  // Add multi-year tab after render
  setTimeout(()=>{
    const root = document.getElementById('view-reports');
    const existing = document.getElementById('multiYearSection');
    if(existing) return;

    const section = document.createElement('div');
    section.id = 'multiYearSection';
    section.className = 'card';
    section.style.marginTop = '20px';

    const allYears = Array.from(new Set(DB.transactions.map(t=>t.date.slice(0,4)))).sort().reverse().slice(0,5);
    if(allYears.length < 2){ return; } // only show if 2+ years

    const rows = ['totalIncome','totalExpense','net'].map((key,ki)=>{
      const labels = ['Total Revenue','Total Expenses','Net Profit / (Loss)'];
      const cols = allYears.map(y=>{
        const d = getYearData(y);
        const val = d[key];
        const color = key==='totalExpense' ? '#DC2626' : (val>=0?'#16A34A':'#DC2626');
        return `<td style="padding:9px 12px;text-align:right;font-family:monospace;font-weight:${ki===2?'700':'400'};color:${ki===0?'var(--blue)':color};">${fmtMoney(val)}</td>`;
      }).join('');
      return `<tr style="${ki===2?'border-top:2px solid var(--border);font-weight:700;':''}"}<td style="padding:9px 12px;">${labels[ki]}</td>${cols}</tr>`;
    }).join('');

    section.innerHTML = `<div class="card-title"><div class="dot green"></div>${t('rep.multiYear')}</div>
      <div style="overflow-x:auto;">
        <table class="data-table">
          <thead><tr><th>Particulars</th>${allYears.map(y=>`<th class="num">${y}</th>`).join('')}</tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>`;
    root.appendChild(section);
  }, 100);
};

/* =========================================================
   WIRE UP NEW VIEWS + NAV ITEMS
   ========================================================= */
(function wireUpNewFeatures(){
  // Add view sections to DOM
  const content = document.querySelector('.content');
  if(!document.getElementById('view-statements')){
    ['statements','ar'].forEach(id=>{
      const sec = document.createElement('section');
      sec.className = 'view';
      sec.id = 'view-' + id;
      content.appendChild(sec);
    });
  }

  // Add sidebar nav items
  const sidebarNav = document.querySelector('.sidebar-nav');
  if(sidebarNav && !document.querySelector('.nav-item[data-view="statements"]')){
    const mainSection = sidebarNav.querySelector('.nav-section-label');
    const insertAfterInvoices = document.querySelector('.nav-item[data-view="invoices"]');

    // AR item after invoices
    const arBtn = document.createElement('button');
    arBtn.className = 'nav-item';
    arBtn.dataset.view = 'ar';
    arBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><span>${t('nav.ar')}</span>`;
    insertAfterInvoices.after(arBtn);

    // Statements item before Reports
    const analyticsLabel = Array.from(sidebarNav.querySelectorAll('.nav-section-label')).find(el=>el.textContent==='Analytics');
    if(analyticsLabel){
      const stmtBtn = document.createElement('button');
      stmtBtn.className = 'nav-item';
      stmtBtn.dataset.view = 'statements';
      stmtBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg><span>${t('nav.statements')}</span>`;
      analyticsLabel.after(stmtBtn);
    }

    // Bind all nav items including new ones
    document.querySelectorAll('.nav-item').forEach(btn=>{
      btn.onclick = ()=> window.switchView(btn.dataset.view);
    });
  }

  // Check recurring on load
  setTimeout(checkRecurringDue, 1500);

  // Update VIEW_TITLES
  VIEW_TITLES.statements = { en:'Statements', ms:'Penyata', zh:'财务报表', sub:{en:'LHDN & bank-ready documents',ms:'Dokumen untuk LHDN & bank',zh:'税务局及银行申报文件'} };
  VIEW_TITLES.ar = { en:'Outstanding Invoices', ms:'Invois Tertunggak', zh:'未收款发票', sub:{en:'Money owed to your business',ms:'Wang yang terhutang kepada perniagaan anda',zh:'客户欠款明细'} };
})();

