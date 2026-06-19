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
