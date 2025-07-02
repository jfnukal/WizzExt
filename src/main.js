// Kontrola dostupnosti Leaflet
if (typeof L === 'undefined') {
    console.error('PPL Widget: Leaflet library is required. Please include leaflet.js before this script.');
}

const logoSVG = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 143.4343">
<defs>
<style>.cls-1,.cls-2{fill:#004b93;}.cls-3{fill:#fc0;}.cls-4{fill:#d40511;}.cls-4,.cls-2{fill-rule:evenodd;}</style>
</defs>
<polygon class="cls-2" points="571.4608 91.5465 565.0722 113.6922 445.6734 113.6922 470.8015 26.3788 517.3702 26.3788 498.6307 91.5465 571.4608 91.5465"/>
<path class="cls-2" d="m229.1666,65.0001h-33.6447l6.3885-22.0051h33.3635c6.1031,0,11.7844,4.9677,9.9353,11.0729-1.5593,5.6749-6.2436,10.2208-16.0427,10.9323m21.0146-38.6187h-90.153l-24.9832,87.3113h46.5602l9.0875-32.0832h44.5812c25.4114,0,48.5562-11.2156,52.9573-26.551,3.6874-12.4873-7.3876-28.677-38.05-28.677"/>
<path class="cls-2" d="m384.4824,65.0001h-33.6447l6.3907-22.0051h33.502c6.1052,0,11.6416,4.9677,9.9374,11.0729-1.702,5.6749-6.3885,10.2208-16.1854,10.9323m21.0104-38.6187h-90.1466l-24.9875,87.3113h46.5645l9.2303-32.0832h44.577c25.2729,0,48.552-11.2156,52.953-26.551,3.5532-12.4873-7.5218-28.677-38.1906-28.677"/>
<polygon class="cls-2" points="111.3342 113.6933 118.2893 89.56 13.5145 89.56 6.5593 113.6933 111.3342 113.6933"/>
<polygon class="cls-2" points="128.0858 55.4846 132.4868 40.2961 27.5692 40.2961 23.3131 55.4846 128.0858 55.4846"/>
<polygon class="cls-2" points="120.2753 82.462 126.0993 62.4443 21.3245 62.4443 15.5026 82.462 120.2753 82.462"/>
<polygon class="cls-2" points="134.4734 33.3399 136.4609 26.3805 31.6882 26.3805 29.7007 33.3399 134.4734 33.3399"/>
<path class="cls-1" d="m601.2683,61.7445h.0064v1.6807h-.0064m-12.7835-6.9168c3.2549,3.2336,7.7646,5.236,12.7835,5.236v1.6807c-5.4768-.0021-10.4061-2.1877-13.9657-5.7303l1.1823-1.1865Zm-5.2531-12.662c0,4.9506,2.0003,9.4262,5.2531,12.662l-1.1823,1.1865c-3.5618-3.5404-5.7516-8.4378-5.7516-13.8485h1.6807Zm0,0h-1.6807v-.0021h1.6807v.0021Zm0-.0043h-1.6807v-.0043h1.6807v.0043Zm5.2553-12.7813c-3.2529,3.2507-5.2553,7.7604-5.2553,12.7792h-1.6807c0-5.4831,2.1898-10.4104,5.7473-13.9699l1.1887,1.1908Zm12.7855-5.2574c-5.0188.0021-9.5327,2.0003-12.7855,5.2574l-1.1887-1.1908c3.5596-3.5596,8.491-5.7452,13.9742-5.7473v1.6807Zm.0021,0h-.0021v-1.6807h.0021v1.6807Zm.0064,0h-.0085v-1.6807h.0085v1.6807Zm12.7281,5.2552c-3.2699-3.2549-7.7796-5.2531-12.7281-5.2552v-1.6807c5.4065.0021,10.3337,2.1877,13.9103,5.7452l-1.1823,1.1908Zm5.3064,12.7835c-.0021-5.0209-2.0365-9.5306-5.3064-12.7835l1.1823-1.1908c3.5788,3.5617,5.8049,8.491,5.8049,13.9742h-1.6807Zm0,0h1.6807v.0021h-1.6807v-.0021Zm0,0h1.6807v.0043h-1.6807v-.0043Zm-5.3042,12.662c3.2677-3.2337,5.3021-7.7072,5.3042-12.6557h1.6807c-.0021,5.4108-2.2261,10.306-5.8027,13.8443l-1.1823-1.1887Zm-12.7344,5.2403c4.9527,0,9.4646-2.0024,12.7344-5.2403l1.1823,1.1887c-3.5767,3.5447-8.5081,5.7303-13.9167,5.7324v-1.6807Zm-.0021,0h.0021v1.6786h-.0021v-1.6786Z"/>
<path class="cls-2" d="m595.8786,42.1409h7.3833c2.4114,0,4.9655-.5666,6.1031-3.8344,1.1333-3.4062-1.5615-3.6874-3.1271-3.6874h-7.9457l-2.4135,7.5218Zm-3.975,11.9271h-3.1229l7.0979-22.0051h10.9344c3.9729,0,7.5218,1.2781,5.9604,5.9624-.9948,3.2635-3.2635,4.3968-4.9698,5.2531,1.1354.5666,2.2708,1.1354,1.4209,4.1177l-.997,3.9728c-.4239,1.2781-.4239,1.7021.4282,2.2729l-.1428.4261h-3.9728c0-1.4208.9884-4.6865,1.2739-5.5407.5688-1.6999.8542-3.8301-2.9759-3.8301h-7.8115l-3.1229,9.3708Z"/>
<rect class="cls-3" x="713.5416" y="56.2872" width="260.3792" height="57.405"/>
<path class="cls-4" d="m759.3016,64.4613l-8.2974,11.3712h45.3904c2.2352,0,2.2352.8416,1.113,2.3236-1.113,1.5887-3.0738,4.2905-4.196,5.7847-.6495.8355-1.6771,2.2321,1.8724,2.2321h18.5434s2.9793-4.0008,5.4981-7.4527c3.3574-4.5649.2806-14.259-11.9354-14.259h-47.9884"/>
<path class="cls-4" d="m747.6547,101.2685l16.6802-22.6448h20.7786c2.2383,0,2.2383.8447,1.1191,2.3297-1.1191,1.5857-3.0738,4.196-4.196,5.7817-.6465.8386-1.6741,2.2352,1.8693,2.2352h27.7648c-2.3298,3.1683-9.7825,12.2983-23.2913,12.2983h-40.7248"/>
<polygon class="cls-4" points="843.3595 88.9666 834.3181 101.2679 810.3681 101.2679 819.4095 88.9666 843.3595 88.9666"/>
<polygon class="cls-4" points="895.9169 64.4613 872.0583 64.4613 862.837 76.9486 852.2128 76.9486 861.3458 64.4613 837.4872 64.4613 821.4596 86.173 879.9806 86.173 895.9169 64.4613"/>
<polyline class="cls-4" points="713.5456 93.8175 748.7692 93.8175 746.8115 96.4248 713.5456 96.4248"/>
<polyline class="cls-4" points="713.5456 88.9666 752.3156 88.9666 750.3519 91.5799 713.5456 91.5799"/>
<polyline class="cls-4" points="713.5456 98.7551 745.1343 98.7551 743.2742 101.2709 713.5456 101.2709"/>
<polygon class="cls-4" points="877.9333 88.9666 868.8004 101.2679 844.9418 101.2679 853.9833 88.9666 877.9333 88.9666"/>
<polyline class="cls-4" points="973.9209 96.4263 938.8802 96.4263 940.7434 93.8221 973.9209 93.8221"/>
<polyline class="cls-4" points="973.9209 101.2685 935.2423 101.2685 937.2061 98.7557 973.9209 98.7557"/>
<polygon class="cls-4" points="944.3798 88.9666 973.9194 88.9666 973.9194 91.5799 942.419 91.5799 944.3798 88.9666"/>
<polygon class="cls-4" points="929.002 64.4613 913.0657 86.173 887.7222 86.173 903.7438 64.4613 929.002 64.4613"/>
<path class="cls-4" d="m939.9994,88.9666l-9.1329,12.3013h-38.3035c-9.7825,0-12.4873-4.6534-9.505-8.7579.8386-1.113,2.6103-3.5434,2.6103-3.5434h54.3311Z"/>
<path d="m713.8826,40.4227l5.7671-17.3031h3.6447l5.7678,17.3031h-2.4388l-1.494-4.483h-7.3934l-1.494,4.483h-2.3595Zm7.3665-15.1534l-2.8577,8.6779h6.0828l-2.8577-8.6779h-.3673Z"/>
<path d="m740.571,40.7373c-1.1361,0-2.1326-.2666-2.9886-.7997-.8568-.5328-1.5209-1.2754-1.9929-2.2282-.4713-.9525-.7077-2.0667-.7077-3.3429v-.9961c0-1.2758.2364-2.39.7077-3.3429.472-.9521,1.1361-1.6951,1.9929-2.2282.8561-.5331,1.8525-.7997,2.9886-.7997,1.7653,0,3.2512.647,4.4572,1.9402l-1.2328,1.442c-.8561-.9088-1.8787-1.3634-3.0672-1.3634-1.1187,0-1.9966.3979-2.6344,1.1928-.6386.7957-.9572,1.8747-.9572,3.2378v.839c0,1.3634.3186,2.4428.9572,3.2378.6379.7957,1.5158,1.1928,2.6344,1.1928,1.2758,0,2.342-.4542,3.1989-1.363l1.2321,1.4416c-1.1892,1.2939-2.7181,1.9402-4.5881,1.9402Z"/>
<path d="m752.3161,40.7373c-1.2234,0-2.2722-.2666-3.1458-.7997-.8743-.5328-1.5427-1.2754-2.006-2.2282-.4633-.9525-.6946-2.0667-.6946-3.3429v-.9961c0-1.2758.2313-2.39.6946-3.3429.4633-.9521,1.1317-1.6951,2.006-2.2282.8735-.5331,1.9224-.7997,3.1458-.7997s2.2722.2666,3.1465.7997c.8735.5331,1.542,1.2761,2.0053,2.2282.4626.9528.6946,2.0671.6946,3.3429v.9961c0,1.2761-.232,2.3904-.6946,3.3429-.4633.9528-1.1317,1.6954-2.0053,2.2282-.8743.5331-1.9231.7997-3.1465.7997Zm0-1.9926c1.1187,0,2.0009-.3888,2.6483-1.1667.6459-.7775.9695-1.8744.9695-3.2901v-.839c0-1.4158-.3237-2.5122-.9695-3.2901-.6473-.7775-1.5296-1.1667-2.6483-1.1667s-2.0016.3891-2.6475,1.1667c-.6473.7779-.9703,1.8744-.9703,3.2901v.839c0,1.4158.3229,2.5126.9703,3.2901.6459.7779,1.5289,1.1667,2.6475,1.1667Z"/>
<path d="m760.8893,40.4227v-13.1085h2.0707v2.517c.384-.7866.9259-1.446,1.6256-1.9795.699-.5328,1.5812-.7997,2.6475-.7997.9441,0,1.7522.2408,2.4257.7212.6721.4808,1.1485,1.1928,1.4285,2.1366.4015-.7866.9521-1.459,1.6518-2.0187.699-.559,1.6074-.839,2.7261-.839,1.2932,0,2.3202.4288,3.081,1.2848.7601.8564,1.1405,2.1326,1.1405,3.8276v8.2582h-2.2286v-7.9699c0-1.1361-.232-1.9882-.6946-2.5562-.4633-.5677-1.1317-.8521-2.006-.8521-.8219,0-1.5121.2273-2.0707.6815-.5601.455-.9877.9703-1.2845,1.5471v9.1496h-2.2286v-7.9699c0-1.1361-.232-1.9882-.6946-2.5562-.4633-.5677-1.1325-.8521-2.006-.8521-.8219,0-1.5121.2273-2.0707.6815-.5601.455-.9877.9703-1.2852,1.5471v9.1496h-2.2278Z"/>
<path d="m783.0157,45.4039v-18.0897h2.0707v2.517c.4546-.8914,1.0532-1.5772,1.7958-2.058.7426-.4804,1.5863-.7212,2.5297-.7212.9965,0,1.87.2622,2.6221.7866.7513.5244,1.3325,1.2583,1.7434,2.2024.4102.9437.6161,2.0537.6161,3.3294v.9961c0,1.2761-.2058,2.3857-.6161,3.3298-.4109.9437-.9921,1.6776-1.7434,2.202-.7521.5244-1.6256.7866-2.6221.7866-.891,0-1.6954-.2142-2.4119-.6422s-1.3019-1.0441-1.7565-1.8485v7.2098h-2.2278Zm5.6624-16.3594c-.7164,0-1.3761.1967-1.9791.5899s-1.0881.9397-1.4554,1.6387v5.1907c.3673.6993.8524,1.2456,1.4554,1.6387s1.2627.5899,1.9791.5899c1.0837,0,1.9355-.3888,2.5566-1.1667.6197-.7775.9303-1.8569.9303-3.2378v-.839c0-1.3805-.3106-2.4599-.9303-3.2378-.6212-.7775-1.4729-1.1667-2.5566-1.1667Z"/>
<path d="m799.7941,40.6849c-1.171,0-2.1238-.3539-2.8577-1.0619-.7339-.7077-1.1012-1.6296-1.1012-2.7657,0-1.2758.4633-2.2849,1.39-3.0283.9259-.7426,2.1842-1.1139,3.7749-1.1139h2.9625v-.4197c0-2.2195-1.0314-3.3294-3.0934-3.3294-.5942,0-1.1797.1095-1.7565.3277-.5768.2186-1.075.5288-1.4947.9306l-1.1536-1.4943c1.2059-1.1536,2.7268-1.7303,4.5619-1.7303,3.3734,0,5.0601,1.7656,5.0601,5.2958v5.0863c0,.9266.3666,1.3892,1.1012,1.3892.0691,0,.144-.004.2226-.0131.0786-.0084.1789-.0215.3018-.0393v1.8878c-.2975.0524-.6553.0786-1.075.0786-1.5732,0-2.43-.8037-2.5697-2.4119-.4713.7692-1.0743,1.363-1.8089,1.7827-.7339.4193-1.5558.6292-2.4642.6292Zm.6553-1.914c1.5034,0,2.6744-.7339,3.5131-2.202v-2.1235h-2.7523c-.9797,0-1.7485.2055-2.3071.6161-.5601.4106-.8394.9743-.8394,1.6907,0,.6121.2138,1.1012.6422,1.4681.4284.3673,1.0096.5506,1.7434.5506Z"/>
<path d="m809.6779,40.4227v-13.1085h2.0707v2.517c.4022-.7688.9528-1.4245,1.6518-1.9664.699-.5415,1.59-.8128,2.6737-.8128,1.3114,0,2.3551.4288,3.1334,1.2848.7775.8564,1.1667,2.1326,1.1667,3.8276v8.2582h-2.2286v-7.9699c0-1.1361-.2451-1.9882-.7339-2.5562-.4895-.5677-1.1797-.8521-2.0715-.8521-.8386,0-1.5427.2273-2.11.6815-.5688.455-1.0096.9703-1.3245,1.5471v9.1496h-2.2278Z"/>
<path d="m825.4081,45.4039l1.7827-4.9812h-.9703l-4.4564-13.1085h2.4119l3.5916,11.116h.3142l3.6185-11.116h2.3333l-6.3446,18.0897h-2.2809Z"/>
<path d="m845.6733,40.7373c-1.2234,0-2.2722-.2666-3.1458-.7997-.8743-.5328-1.5427-1.2754-2.006-2.2282-.4633-.9525-.6946-2.0667-.6946-3.3429v-.9961c0-1.2758.2313-2.39.6946-3.3429.4633-.9521,1.1317-1.6951,2.006-2.2282.8735-.5331,1.9224-.7997,3.1458-.7997s2.2722.2666,3.1465.7997c.8735.5331,1.542,1.2761,2.0053,2.2282.4626.9528.6946,2.0671.6946,3.3429v.9961c0,1.2761-.232,2.3904-.6946,3.3429-.4633.9528-1.1317,1.6954-2.0053,2.2282-.8743.5331-1.9231.7997-3.1465.7997Zm0-1.9926c1.1187,0,2.0009-.3888,2.6483-1.1667.6459-.7775.9695-1.8744.9695-3.2901v-.839c0-1.4158-.3237-2.5122-.9695-3.2901-.6473-.7775-1.5296-1.1667-2.6483-1.1667s-2.0016.3891-2.6475,1.1667c-.6473.7779-.9703,1.8744-.9703,3.2901v.839c0,1.4158.3229,2.5126.9703,3.2901.6459.7779,1.5289,1.1667,2.6475,1.1667Z"/>
<path d="m854.9273,40.4227v-11.2207h-2.2286v-1.8878h2.2286v-.7601c0-1.6605.3804-2.8748,1.1405-3.6443.7601-.7688,1.8394-1.1536,3.2381-1.1536.2444,0,.467.0091.6684.0262.2007.0178.3797.044.5375.0789v1.9136c-.3848-.0524-.6997-.0786-.9441-.0786-.9092,0-1.5383.236-1.8875.7077-.3499.472-.5244,1.215-.5244,2.2286v.6815h3.3821v1.8878h-3.3821v11.2207h-2.2286Z"/>
<rect class="cls-1" x="657.8067" y="6.3413" width="2.1697" height="132.8999"/>
</svg>`;

class PPLWidget {
  constructor(containerElement, config = {}) {
    this.container = containerElement;
    if (!this.container) {
      console.error('PPL Widget: Kontejnerový element nebyl nalezen.');
      return;
    }

    this.currentLanguage = 'CZ';
    this.translations = {
      CZ: {
        header: '📦 PPL - Výběr výdejního místa',
        searchPlaceholder: 'Zadejte adresu, město nebo PSČ...',
        allFilters: 'Všechny filtry',
        typeFilter: 'Typ místa',
        paymentFilter: 'Platba',
        packageSizeFilter: 'Velikost zásilky',
        weekendFilter: 'Otevřeno o víkendu',
        parcelshop: 'Parcelshop',
        parcelbox: 'Parcelbox',
        card: 'Kartou',
        cash: 'V hotovosti',
        selectBtn: 'Zvolit',
        loading: 'Načítám výdejní místa...',
        noResults: 'Pro daný filtr nebyly nalezeny žádné výsledky.',
        loadError:
          'Nepodařilo se načíst data o výdejních místech. Zkuste to prosím znovu později.',
        geolocationPrompt:
          'Povolte prosím zjištění polohy nebo vyhledejte konkrétní výdejní místo.',
      },
      EN: {
        header: '📦 PPL - Select pickup point',
        searchPlaceholder: 'Enter address, city or postal code...',
        allFilters: 'All filters',
        typeFilter: 'Location type',
        paymentFilter: 'Payment',
        packageSizeFilter: 'Package size',
        weekendFilter: 'Open on weekends',
        parcelshop: 'Parcelshop',
        parcelbox: 'Parcelbox',
        card: 'Card',
        cash: 'Cash',
        selectBtn: 'Select',
        loading: 'Loading pickup points...',
        noResults: 'No results found for selected filters.',
        loadError: 'Failed to load pickup point data. Please try again later.',
        geolocationPrompt:
          'Please enable geolocation or search for a specific Pickup point.',
      },
      DE: {
        header: '📦 PPL - Abholstelle auswählen',
        searchPlaceholder: 'Adresse, Stadt oder PLZ eingeben...',
        allFilters: 'Alle Filter',
        typeFilter: 'Standorttyp',
        paymentFilter: 'Zahlung',
        packageSizeFilter: 'Paketgröße',
        weekendFilter: 'Am Wochenende geöffnet',
        parcelshop: 'Paketshop',
        parcelbox: 'Paketbox',
        card: 'Karte',
        cash: 'Bar',
        selectBtn: 'Auswählen',
        loading: 'Lade Abholstellen...',
        noResults: 'Für den gewählten Filter wurden keine Ergebnisse gefunden.',
        loadError:
          'Fehler beim Laden der Abholstellen. Bitte versuchen Sie es später erneut.',
        geolocationPrompt:
          'Bitte aktivieren Sie die Geolokalisierung oder suchen Sie nach einem bestimmten Pickup point.',
      },
      PL: {
        header: '📦 PPL - Wybierz punkt odbioru',
        searchPlaceholder: 'Wprowadź adres, miasto lub kod pocztowy...',
        allFilters: 'Wszystkie filtry',
        typeFilter: 'Typ miejsca',
        paymentFilter: 'Płatność',
        packageSizeFilter: 'Rozmiar paczki',
        weekendFilter: 'Otwarte w weekendy',
        parcelshop: 'Parcelshop',
        parcelbox: 'Parcelbox',
        card: 'Kartą',
        cash: 'Gotówka',
        selectBtn: 'Wybierz',
        loading: 'Ładuję punkty odbioru...',
        noResults: 'Nie znaleziono wyników dla wybranego filtru.',
        loadError:
          'Nie udało się załadować punktów odbioru. Spróbuj ponownie później.',
        geolocationPrompt:
          'Proszę włączyć geolokalizację lub wyszukać konkretny Pickup point.',
      },
    };

    const defaultConfig = {
      lat: this.container.dataset.centerLat || '49.7437',
      lng: this.container.dataset.centerLng || '15.3386',
      zoom: this.container.dataset.zoom || '7',
    };

    this.config = {
      oauth: {
        tokenUrl: 'https://api-dev.dhl.com/ecs/ppl/myapi2/login/getAccessToken',
        clientId: 'jfnukaltestcustomer2',
        clientSecret: 'rqmTA14lN8Bu999szryRsHZhjTGOdxmp',
        scope: 'myapi2',
      },
      apiBaseUrl: 'https://api-dev.dhl.com/ecs/ppl/myapi2',

      // OPRAVENÉ API endpointy podle dokumentace
      previewApiUrl:
        'https://api-dev.dhl.com/ecs/ppl/webapi/psmaps/AccessPoint/Preview',
      detailApiUrl: 'https://api-dev.dhl.com/ecs/ppl/webapi/psmaps/AccessPoint', // Pro /{id}
      dhlApiKey: 'ycnf2h85ms1NjDcM2aOGMJPXBLaNgnGy',

      // Fallback zůstává původní MyAPI2
      fallbackPreviewUrl: 'https://api-dev.dhl.com/ecs/ppl/myapi2',

      center: [parseFloat(defaultConfig.lat), parseFloat(defaultConfig.lng)],
      zoom: parseInt(defaultConfig.zoom, 10),

      // PŘIDÁNO: Nominatim API pro map search
      nominatimUrl: 'https://nominatim.openstreetmap.org/search',
      nominatimParams: {
        format: 'json',
        addressdetails: 1,
        limit: 5,
        countrycodes: 'cz',
      },

      // Optimalizace konfigurace
      cache: {
        enabled: true,
        ttl: 30 * 60 * 1000, // 30 minut v ms (0 = vypnuto)
        maxSize: 1000, // Maximální počet cached položek
      },
      viewport: {
        enabled: true,
        padding: 0.2, // 20% padding kolem viewport
        minZoomForViewport: 10, // Pod tímto zoom načítej vše
      },
      clustering: {
        cacheEnabled: true,
        maxCacheSize: 100,
        updateThreshold: 0.5, // Minimální změna zoom pro přepočet
      },

      batchSize: 1000,
      concurrentRequests: 4,
      maxRetries: 3,
      retryDelay: 1000,
      maxResultsInSidebar: 20,
      ...config,
    };

    // Cache systémy
    this.dataCache = new Map(); // Cache pro API data
    this.clusterCache = new Map(); // Cache pro clustery
    this.viewportCache = new Map(); // Cache pro viewport data

    // State proměnné
    this.map = null;
    this.markers = [];
    this.clusterMarkers = [];
    this.userLocationMarker = null;
    this.allAccessPoints = [];
    this.currentAccessPoints = [];
    this.activeFilters = new Set();
    this.activeQuickFilters = new Set();
    this.selectedTypes = new Set(['parcelshop', 'parcelbox']);
    this.selectedPointId = null;
    this.selectedPayments = new Set(['card', 'cash']);

    // Tracking pro hybrid loading
    this.previewDataLoaded = false;
    this.detailsCache = new Map(); // Cache pro detailní data
    this.currentSidebarPoints = []; // Aktuálně zobrazené body v sidebaru
    this.loadingDetails = new Set(); // ID bodů, které se právě načítají

    this.geolocationDenied = false;

    // Optimalizace state
    this.lastViewport = null;
    this.lastZoom = null;
    this.isLoading = false;
    this.pendingViewportUpdate = null;

    // UPRAVENO: Hybrid search functionality
    this.searchSuggestions = [];
    this.isSearching = false;
    this.searchTimeout = null;
    this.clickTimeout = null;
    this.maxSuggestions = 8;
    this.maxMapSuggestions = 6; // Počet map suggestions
    this.maxVmSuggestions = 6; // Počet VM suggestions

    // Detekce země z kontejneru
    if (!config.country && this.container.dataset.country) {
      this.country = this.container.dataset.country.toUpperCase();
    } else {
      this.country = config.country || 'CZ';
    }

    // PŘIDÁNO: Inicializace pro filtry zemí (pro oba případy)
    this.defaultCountry =
      this.container.dataset.country || this.country || 'CZ';
    this.selectedCountries = new Set([this.defaultCountry]);
    console.log(`🌍 Default country from HTML: ${this.defaultCountry}`);

    console.log(`🌍 PPL Widget initialized for country: ${this.country}`);

    this.renderWidgetHTML();
    this.init();
  }

  // === CACHE MANAGEMENT ===

  /**
   * Univerzální cache get/set systém
   */
  getCacheKey(type, params) {
    return `${type}_${JSON.stringify(params)}`;
  }

  getFromCache(cacheMap, key) {
    if (!this.config.cache.enabled) return null;

    const cached = cacheMap.get(key);
    if (!cached) return null;

    // Kontrola TTL
    if (
      this.config.cache.ttl > 0 &&
      Date.now() - cached.timestamp > this.config.cache.ttl
    ) {
      cacheMap.delete(key);
      return null;
    }

    console.log(`Cache hit: ${key}`);
    return cached.data;
  }

  setToCache(cacheMap, key, data) {
    if (!this.config.cache.enabled) return;

    // Cache size management
    if (cacheMap.size >= this.config.cache.maxSize) {
      const oldestKey = cacheMap.keys().next().value;
      cacheMap.delete(oldestKey);
    }

    cacheMap.set(key, {
      data: data,
      timestamp: Date.now(),
    });

    console.log(`Cache set: ${key}`);
  }

  clearCache(type = 'all') {
    if (type === 'all' || type === 'data') {
      this.dataCache.clear();
    }
    if (type === 'all' || type === 'cluster') {
      this.clusterCache.clear();
    }
    if (type === 'all' || type === 'viewport') {
      this.viewportCache.clear();
    }
    console.log(`Cache cleared: ${type}`);
  }

  // === VIEWPORT MANAGEMENT ===

  /**
   * Získá aktuální viewport bounds
   */
  getCurrentViewport() {
    if (!this.map) return null;

    const bounds = this.map.getBounds();
    const zoom = this.map.getZoom();

    return {
      north: bounds.getNorth(),
      south: bounds.getSouth(),
      east: bounds.getEast(),
      west: bounds.getWest(),
      zoom: zoom,
    };
  }

  /**
   * Rozšíří viewport o padding
   */
  expandViewport(viewport, padding = 0.2) {
    const latDiff = viewport.north - viewport.south;
    const lngDiff = viewport.east - viewport.west;

    return {
      north: viewport.north + latDiff * padding,
      south: viewport.south - latDiff * padding,
      east: viewport.east + lngDiff * padding,
      west: viewport.west - lngDiff * padding,
      zoom: viewport.zoom,
    };
  }

  /**
   * Kontroluje, zda se viewport významně změnil
   */
  isViewportChanged(newViewport, oldViewport, threshold = 0.1) {
    if (!oldViewport) return true;

    const latDiff =
      Math.abs(newViewport.north - oldViewport.north) +
      Math.abs(newViewport.south - oldViewport.south);
    const lngDiff =
      Math.abs(newViewport.east - oldViewport.east) +
      Math.abs(newViewport.west - oldViewport.west);

    const totalDiff = (latDiff + lngDiff) / 4;
    const zoomDiff = Math.abs(newViewport.zoom - oldViewport.zoom);

    return (
      totalDiff > threshold || zoomDiff > this.config.clustering.updateThreshold
    );
  }

  /**
   * Filtruje body podle viewport
   */
  filterPointsByViewport(points, viewport) {
    if (!this.config.viewport.enabled || !viewport) {
      return points;
    }

    // Pod minimálním zoom načítej vše
    if (viewport.zoom < this.config.viewport.minZoomForViewport) {
      return points;
    }

    const expandedViewport = this.expandViewport(
      viewport,
      this.config.viewport.padding
    );

    return points.filter((point) => {
      const lat = point.gps.latitude;
      const lng = point.gps.longitude;

      return (
        lat >= expandedViewport.south &&
        lat <= expandedViewport.north &&
        lng >= expandedViewport.west &&
        lng <= expandedViewport.east
      );
    });
  }

  /**
   * Načte data pro konkrétní zemi
   */
  async loadCountryData(countryCode) {
    console.log(`🌍 Loading data for country: ${countryCode}`);

    // Zobraz globální loading
    this.showGlobalLoading(countryCode, 'Připojuji se k serveru...');

    // Vymaž současná data a cache
    this.allAccessPoints = [];
    this.currentAccessPoints = [];
    this.previewDataLoaded = false;
    this.clearCache('all');

    // Aktualizuj country v config
    this.country = countryCode;

    // Vymaž současné markery
    this.markers.forEach((marker) => this.map.removeLayer(marker));
    this.clusterMarkers.forEach((marker) => this.map.removeLayer(marker));
    this.markers = [];
    this.clusterMarkers = [];

    try {
      // Nastav map centrum podle země
      const countryCenters = {
        DE: [51.1657, 10.4515],
        PL: [51.9194, 19.1451],
        CZ: [49.7437, 15.3386],
        SK: [48.669, 19.699],
      };

      const countryZooms = {
        DE: 6,
        PL: 6,
        CZ: 7,
        SK: 7,
      };

      if (this.map && countryCenters[countryCode]) {
        this.map.setView(
          countryCenters[countryCode],
          countryZooms[countryCode] || 7
        );
      }

      // Načti nová data
      await this.loadAccessPoints();

      console.log(
        `✅ Data loaded successfully for ${countryCode}: ${this.allAccessPoints.length} points`
      );
    } catch (error) {
      console.error(`❌ Failed to load data for ${countryCode}:`, error);
      this.hideGlobalLoading(); // PŘIDEJ TUTO ŘÁDKU
      this.handleLoadError(error);
    }
  }

  // === OPTIMALIZOVANÉ NAČÍTÁNÍ ===
  async loadAccessPoints() {
    console.log('🔄 Starting hybrid loading with CORRECT endpoints');

    // DEBUG: Test Preview vs Detail
    if (this.allAccessPoints.length > 0) {
      const samplePoint = this.allAccessPoints[0];
      console.log(
        `🧪 Debug: Testing endpoints with sample point: ${samplePoint.id}`
      );

      setTimeout(async () => {
        const token = await this.getAccessToken();

        // Test Preview vs Detail comparison
        await this.testPreviewVsDetail(samplePoint.id, token);

        // Find working detail endpoint
        const workingEndpoint = await this.debugDetailEndpoints(
          samplePoint.id,
          token
        );
        if (workingEndpoint) {
          console.log(
            `✅ Found working detail endpoint: ${workingEndpoint.url}`
          );
        }
      }, 2000);
    }

    // Kontrola cache pro preview data
    const previewCacheKey = this.getCacheKey('preview_data', {});
    const cachedPreviewData = this.getFromCache(
      this.dataCache,
      previewCacheKey
    );

    if (cachedPreviewData) {
      console.log('✅ Using cached preview data');
      this.allAccessPoints = cachedPreviewData;
      this.previewDataLoaded = true;
      this.applyFilters();
      return;
    }

    if (this.isLoading) {
      console.log('Already loading, skipping...');
      return;
    }

    this.isLoading = true;

    try {
      const token = await this.getAccessToken();
      console.log('🔑 Token obtained for hybrid loading');

      // KROK A: Načti preview data (rychlé, základní info)
      console.log('📡 Loading preview data for map...');
      const totalCount = await this.getTotalItemsCount(token);
      console.log('📊 Total items count:', totalCount);

      if (totalCount === 0) {
        console.warn('No access points found');
        this.allAccessPoints = [];
        this.applyFilters();
        return;
      }

      const totalRequests = Math.ceil(totalCount / this.config.batchSize);
      console.log(
        `📡 Loading preview data: ${totalRequests} requests (batch size: ${this.config.batchSize})`
      );

      // Načti preview data (jen základní info pro mapu)
      const previewData = await this.loadPreviewDataInBatches(
        token,
        totalCount,
        totalRequests
      );
      this.allAccessPoints = this.transformPreviewData(previewData);

      // Cache preview data
      this.setToCache(this.dataCache, previewCacheKey, this.allAccessPoints);

      console.log(
        `✅ Preview data loaded: ${this.allAccessPoints.length} access points`
      );
      this.previewDataLoaded = true;

      // Ukončí globální loading na 100%
      this.updateGlobalLoadingProgress(100, 'Dokončeno!');
      setTimeout(() => {
        this.hideGlobalLoading();
      }, 500);

      // KROK B: Aplikuj filtry a zobraz mapu
     console.log('🔍 loadAccessPoints: Before applyFilters(), geolocationDenied =', this.geolocationDenied);

      // NOVÁ KONTROLA: Pokud byla geolokace zamítnuta, NEAPLIKUJ filtry!
          if (!this.geolocationDenied) {
            this.applyFilters();
          } else {
            console.log('🔍 loadAccessPoints: Geolokace zamítnuta, přeskakuji applyFilters()');
          }

      // KROK C: Načti detaily pro první batch sidebaru (asynchronně)
      setTimeout(() => {
        this.loadDetailsForSidebar();
      }, 100);
    } catch (error) {
      console.error('❌ Hybrid loading failed:', error);
      this.handleLoadError(error);
    } finally {
      this.isLoading = false;
    }
  }

  async loadPreviewDataInBatches(token, totalCount, totalRequests) {
    const allPreviewData = [];
    let processedRequests = 0;

    const updateProgress = () => {
      const progress = Math.round((processedRequests / totalRequests) * 100);
      console.log(
        `📡 Preview loading progress: ${processedRequests}/${totalRequests} (${progress}%)`
      );
      this.updateLoadingMessage(`Loading map data... ${progress}%`);
    };

    for (
      let startIndex = 0;
      startIndex < totalRequests;
      startIndex += this.config.concurrentRequests
    ) {
      const endIndex = Math.min(
        startIndex + this.config.concurrentRequests,
        totalRequests
      );
      const batchPromises = [];

      for (let i = startIndex; i < endIndex; i++) {
        const offset = i * this.config.batchSize;
        const limit = Math.min(this.config.batchSize, totalCount - offset);

        if (limit <= 0) break;

        const promise = this.fetchPreviewBatch(token, offset, limit, i + 1);
        batchPromises.push(promise);
      }

      const batchResults = await Promise.allSettled(batchPromises);

      batchResults.forEach((result, index) => {
        processedRequests++;
        if (result.status === 'fulfilled') {
          allPreviewData.push(...result.value);
          console.log(
            `✅ Preview request ${startIndex + index + 1} completed (${
              result.value.length
            } items)`
          );
        } else {
          console.error(
            `❌ Preview request ${startIndex + index + 1} failed:`,
            result.reason
          );
        }
      });

      updateProgress();
      if (endIndex < totalRequests) {
        await this.delay(100); // Kratší delay pro preview
      }
    }

    console.log(
      `✅ Preview data loading completed: ${allPreviewData.length} items`
    );
    return allPreviewData;
  }

  async fetchPreviewBatch(token, offset, limit, requestNumber) {
    const countryCode = this.country || 'CZ';
    const previewUrl = `${
      this.config.previewApiUrl
    }?country=${countryCode.toLowerCase()}&limit=${limit}&offset=${offset}`;

    const headers = {
      Authorization: `Bearer ${token}`,
      'dhl-api-key': this.config.dhlApiKey,
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    };

    console.log(
      `📡 Preview request ${requestNumber}: ${limit} items from offset ${offset}`
    );

    const response = await this.fetchWithRetry(previewUrl, { headers });

    if (!response.ok) {
      throw new Error(
        `Preview API request ${requestNumber} failed: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();
    const items = Array.isArray(data) ? data : data.dataItems || [];

    console.log(
      `📡 Preview request ${requestNumber}: Received ${items.length} items`
    );
    return items;
  }

  transformPreviewData(previewItems) {
    return previewItems
      .map((item, index) => {
        // Základní GPS kontrola (stejná jako před tím)
        let latitude = null,
          longitude = null;
        if (
          typeof item.latitude !== 'undefined' &&
          typeof item.longitude !== 'undefined'
        ) {
          latitude = parseFloat(item.latitude);
          longitude = parseFloat(item.longitude);
        } else if (item.gps && typeof item.gps === 'object') {
          latitude = parseFloat(item.gps.latitude);
          longitude = parseFloat(item.gps.longitude);
        } else if (item.gps && typeof item.gps === 'string') {
          const coords = item.gps
            .split(',')
            .map((coord) => parseFloat(coord.trim()));
          if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
            [latitude, longitude] = coords;
          }
        }

        if (
          latitude === null ||
          longitude === null ||
          isNaN(latitude) ||
          isNaN(longitude)
        ) {
          return null;
        }

        // Základní typ
        let pointType = 'parcelshop';
        if (item.accessPointType) {
          const typeStr = item.accessPointType.toLowerCase();
          if (typeStr.includes('parcelbox') || typeStr.includes('box')) {
            pointType = 'parcelbox';
          }
        }

        // PREVIEW TRANSFORM - jen základní data pro mapu
        const previewPoint = {
          id:
            item.pplKod ||
            item.id ||
            item.accessPointCode ||
            `preview_${index}`,
          name: item.name || item.nazev || item.companyName || 'Loading...',
          type: pointType,
          street: item.street || item.ulice || item.address || '',
          city: item.city || item.mesto || '',
          zipCode: item.zipCode || item.psc || item.zip || '',
          gps: { latitude, longitude },

          // Základní fallback hodnoty pro filtry
          canPayByCard: false, // Bude načteno z detailů
          openOnWeekend: pointType === 'parcelbox', // Parcelbox = vždy
          activeCardPayment: false, // Bude načteno z detailů
          activeCashPayment: true, // Default
          pickupEnabled: pointType === 'parcelshop', // Default pro parcelshop

          // Preview metadata
          isPreviewData: true, // Flag že jsou to jen preview data
          detailsLoaded: false, // Flag že detaily nejsou načtené

          rawData: {
            ...item,
            openingHours: [], // Prázdné, bude načteno z detailů
          },
        };

        return previewPoint;
      })
      .filter(Boolean);
  }

  async loadDetailsForSidebar() {
    if (!this.previewDataLoaded || this.currentAccessPoints.length === 0) {
      console.log('⏳ Preview data not ready or no points to load details for');
      return;
    }

    const sidebarPoints = this.currentAccessPoints.slice(
      0,
      this.config.maxResultsInSidebar
    );
    const pointsNeedingDetails = sidebarPoints.filter(
      (p) => !p.detailsLoaded && !this.loadingDetails.has(p.id)
    );

    if (pointsNeedingDetails.length === 0) {
      console.log('✅ All sidebar points already have details loaded');
      return;
    }

    console.log(
      `📋 Loading details for ${pointsNeedingDetails.length} sidebar points...`
    );

    try {
      const token = await this.getAccessToken();

      // Pokud je to první načítání detailů, zkus najít fungující endpoint
      if (
        this.workingDetailEndpoint === undefined &&
        pointsNeedingDetails.length > 0
      ) {
        console.log('🔍 First detail loading - finding working endpoint...');
        const samplePointId = pointsNeedingDetails[0].id;
        const workingEndpoint = await this.debugDetailEndpoints(
          samplePointId,
          token
        );

        if (workingEndpoint) {
          this.workingDetailEndpoint = workingEndpoint.index;
          console.log(
            `💾 Found working detail endpoint: ${workingEndpoint.url}`
          );
        } else {
          console.error('❌ No working detail endpoints found!');
          return;
        }
      }

      const pointIds = pointsNeedingDetails.map((p) => p.id);

      // Označ jako načítající se
      pointIds.forEach((id) => this.loadingDetails.add(id));

      // Načti detaily
      const detailsData = await this.loadMultiplePointDetails(pointIds, token);

      // Aktualizuj body s detaily
      pointsNeedingDetails.forEach((point) => {
        const details = detailsData[point.id];
        if (details) {
          this.mergeDetailIntoPoint(point, details);
          console.log(`✅ Details merged for: ${point.name}`);
        } else {
          console.warn(
            `⚠️ No details received for: ${point.name} (${point.id})`
          );
          // Označ jako "načtené" i když se nepodařilo, aby se to nepokoušelo stále
          point.detailsLoaded = true;
          point.detailsLoadFailed = true;
        }
        this.loadingDetails.delete(point.id);
      });

      // Re-render sidebar s novými detaily
      console.log('🔄 Re-rendering sidebar with loaded details');
      this.renderResults();
    } catch (error) {
      console.error('❌ Failed to load sidebar details:', error);
      // Cleanup loading flags
      pointsNeedingDetails.forEach((point) =>
        this.loadingDetails.delete(point.id)
      );
    }
  }

  async searchNominatim(searchTerm) {
    try {
      const params = new URLSearchParams({
        ...this.config.nominatimParams,
        q: searchTerm,
      });

      const url = `${this.config.nominatimUrl}?${params}`;
      console.log(`🗺️ Nominatim search: ${url}`);

      const response = await fetch(url, {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'PPL-Widget/1.0',
        },
      });

      if (!response.ok) {
        throw new Error(`Nominatim API error: ${response.status}`);
      }

      const data = await response.json();
      console.log(`🗺️ Nominatim returned ${data.length} results`);

      return data.slice(0, this.maxMapSuggestions || 4);
    } catch (error) {
      console.warn('Nominatim search failed:', error);
      return [];
    }
  }

  /**
   * OPRAVENÁ FUNKCE: Formátování adresy z Nominatim
   */
  formatMapAddress(place) {
    const addr = place.address || {};
    const parts = [];

    // Priorita: ulice, číslo domu
    if (addr.house_number && addr.road) {
      parts.push(`${addr.road} ${addr.house_number}`);
    } else if (addr.road) {
      parts.push(addr.road);
    }

    // Město
    if (addr.city || addr.town || addr.village) {
      parts.push(addr.city || addr.town || addr.village);
    }

    // PSČ
    if (addr.postcode) {
      parts.push(addr.postcode);
    }

    // Fallback na display_name pokud nemáme jednotlivé části
    if (parts.length === 0) {
      const displayParts = place.display_name.split(',').slice(0, 3);
      return displayParts.join(', ');
    }

    return parts.join(', ');
  }

  /**
   * OPRAVENÁ FUNKCE: Lepší zvýraznění search termů
   */
  highlightSearchTerm(text, searchTerm) {
    if (!searchTerm || !text) return text;

    // Escape special regex characters
    const escapedTerm = searchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedTerm})`, 'gi');

    return text.replace(regex, '<span class="search-highlight">$1</span>');
  }

  /**
   * NOVÁ FUNKCE: Reset vyhledávání
   */
  resetSearch() {
    const searchInput = this.container.querySelector('.ppl-search-input');
    if (searchInput) {
      searchInput.value = '';
    }

    this.hideSearchSuggestions();
    this.selectedPointId = null;

    // Reset na všechny body
    this.currentAccessPoints = [...this.allAccessPoints];
    this.renderAll();

    console.log('🔄 Search reset - showing all access points');
  }

  /**
   * OPRAVENÁ FUNKCE: Vylepšené vyhledávání ve výdejních místech
   */
  findNearbyAccessPoints(lat, lon, radiusKm = 5) {
    if (!this.allAccessPoints || this.allAccessPoints.length === 0) {
      return [];
    }

    const nearbyPoints = this.allAccessPoints
      .map((point) => {
        const distance = this.calculateDistance(
          lat,
          lon,
          point.gps.latitude,
          point.gps.longitude
        );
        return { ...point, distance };
      })
      .filter((point) => point.distance <= radiusKm)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 20); // Omezte na 20 nejbližších

    console.log(`📍 Found ${nearbyPoints.length} points within ${radiusKm}km`);
    return nearbyPoints;
  }

  /**
   * NOVÁ FUNKCE: Zobrazí detail vybraného bodu při search
   */
  showSelectedPointDetail(pointId) {
    const point = this.allAccessPoints.find(
      (p) => String(p.id) === String(pointId)
    );
    if (!point) {
      console.warn(`Point with ID ${pointId} not found`);
      return;
    }

    // Vyber bod v seznamu
    this.container
      .querySelectorAll('.ppl-result-item')
      .forEach((item) => item.classList.remove('selected'));

    const item = this.container.querySelector(`[data-id="${pointId}"]`);
    if (item) {
      item.classList.add('selected');
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Přesun mapy na bod
    if (this.map) {
      this.map.setView([point.gps.latitude, point.gps.longitude], 16);
    }

    // Event pro externí handlery
    document.dispatchEvent(
      new CustomEvent('pplPointSelected', { detail: point, bubbles: true })
    );

    console.log(`🎯 Selected point: ${point.name}`);
  }

  /**
   * OPRAVENÁ FUNKCE: Lepší bindování search eventů
   */
  bindSearchEvents() {
    const searchInput = this.container.querySelector('.ppl-search-input');
    if (!searchInput) return;

    // Input event pro live search
    searchInput.addEventListener('input', (e) => {
      this.handleSearchInput(e.target.value);
    });

    // Focus event
    searchInput.addEventListener('focus', () => {
      const value = searchInput.value.trim();
      if (value.length >= 2) {
        this.performLiveSearch(value);
      }
    });

    // Blur event s delay pro umožnění kliknutí na suggestions
    searchInput.addEventListener('blur', () => {
      setTimeout(() => {
        this.hideSearchSuggestions();
      }, 200);
    });

    // Keyboard navigation pro suggestions
    searchInput.addEventListener('keydown', (e) => {
      this.handleSearchKeydown(e);
    });

    console.log('✅ Search events bound successfully');
  }

  /**
   * NOVÁ FUNKCE: Keyboard navigation pro suggestions
   */
  handleSearchKeydown(e) {
    const suggestions = this.container.querySelectorAll('.ppl-suggestion-item');
    if (suggestions.length === 0) return;

    let currentIndex = -1;
    suggestions.forEach((item, index) => {
      if (item.classList.contains('highlighted')) {
        currentIndex = index;
      }
    });

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        currentIndex = Math.min(currentIndex + 1, suggestions.length - 1);
        this.highlightSuggestion(currentIndex);
        break;

      case 'ArrowUp':
        e.preventDefault();
        currentIndex = Math.max(currentIndex - 1, -1);
        this.highlightSuggestion(currentIndex);
        break;

      case 'Enter':
        e.preventDefault();
        if (currentIndex >= 0) {
          this.handleSuggestionClick(currentIndex);
        }
        break;

      case 'Escape':
        this.hideSearchSuggestions();
        break;
    }
  }

  /**
   * NOVÁ FUNKCE: Zvýrazní suggestion při keyboard navigation
   */
  highlightSuggestion(index) {
    const suggestions = this.container.querySelectorAll('.ppl-suggestion-item');

    // Odstraň předchozí zvýraznění
    suggestions.forEach((item) => {
      item.classList.remove('highlighted');
      item.removeAttribute('aria-selected');
    });

    // Zvýrazni nový
    if (index >= 0 && index < suggestions.length) {
      const item = suggestions[index];
      item.classList.add('highlighted');
      item.setAttribute('aria-selected', 'true');
      item.scrollIntoView({ block: 'nearest' });
    }
  }

  /**
   * OPRAVENÁ FUNKCE: Vylepšená detekce změny inputu
   */
  handleSearchInput(searchTerm) {
    const trimmedTerm = searchTerm.trim();

    // Clear předchozí timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Pokud je search prázdný, reset a skryj suggestions
    if (trimmedTerm.length === 0) {
      this.hideSearchSuggestions();
      this.resetToAllPoints();
      return;
    }

    // Pokud je search příliš krátký, zobraz hint
    if (trimmedTerm.length < 2) {
      this.showSearchSuggestions([
        {
          type: 'loading',
          text: 'Zadejte alespoň 2 znaky...',
          secondary: 'Pro vyhledávání na mapě i ve výdejních místech',
        },
      ]);
      return;
    }

    // Debounce search s kratším delay pro lepší UX
    this.searchTimeout = setTimeout(() => {
      this.performLiveSearch(trimmedTerm);
    }, 250); // Sníženo z 300ms na 250ms
  }

  /**
   * NOVÁ FUNKCE: Reset na všechny body
   */
  resetToAllPoints() {
    // Aplikuj jen aktivní filtry, ne search
    this.currentAccessPoints = this.applyActiveFilters([
      ...this.allAccessPoints,
    ]);
    this.renderResults();
    this.renderMarkers();
    this.fitMapToPoints();

    console.log(
      `🔄 Reset to ${this.currentAccessPoints.length} points (with filters)`
    );
  }

  /**
   * OPRAVENÁ FUNKCE: Lepší handling suggestions click s debouncing
   */
  handleSuggestionClick(suggestionIndex) {
    // Prevent double-clicks
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
    }

    this.clickTimeout = setTimeout(() => {
      this.processSuggestionClick(suggestionIndex);
    }, 50);
  }

  /**
   * NOVÁ FUNKCE: Zpracování kliknutí na suggestion
   */
  processSuggestionClick(suggestionIndex) {
    const suggestion = this.searchSuggestions[suggestionIndex];
    if (!suggestion) return;

    console.log(`🎯 Processing suggestion click:`, suggestion);

    const searchInput = this.container.querySelector('.ppl-search-input');

    switch (suggestion.type) {
      case 'accesspoint':
        this.handleAccessPointSelection(suggestion, searchInput);
        break;

      case 'map-location':
        this.handleMapLocationSelection(suggestion, searchInput);
        break;

      case 'separator':
      case 'loading':
      case 'no-results':
        return; // Ignoruj tyto typy

      default:
        this.hideSearchSuggestions();
    }
  }

  /**
   * NOVÁ FUNKCE: Zpracování výběru výdejního místa
   */
  handleAccessPointSelection(suggestion, searchInput) {
    searchInput.value = suggestion.text;
    this.hideSearchSuggestions();

    if (suggestion.pointId) {
      console.log(`📦 Selecting access point: ${suggestion.text}`);

      // Nastav aktuální body na jen vybraný
      const selectedPoint = this.allAccessPoints.find(
        (p) => String(p.id) === String(suggestion.pointId)
      );

      if (selectedPoint) {
        this.currentAccessPoints = [selectedPoint];
        this.renderResults();
        this.selectPoint(suggestion.pointId);

        // Event pro externí systémy
        document.dispatchEvent(
          new CustomEvent('pplSearchSelection', {
            detail: {
              type: 'accesspoint',
              point: selectedPoint,
              searchTerm: suggestion.searchTerm,
            },
            bubbles: true,
          })
        );
      }
    }
  }

  /**
   * NOVÁ FUNKCE: Zpracování výběru lokace na mapě
   */
  handleMapLocationSelection(suggestion, searchInput) {
    searchInput.value = suggestion.text;
    this.hideSearchSuggestions();

    console.log(
      `🗺️ Map location selected: ${suggestion.text} at ${suggestion.lat}, ${suggestion.lon}`
    );

    if (this.map && suggestion.lat && suggestion.lon) {
      // Přesun mapy na vybranou lokaci
      this.map.setView([suggestion.lat, suggestion.lon], 15);

      // Najdi a zobraz nejbližší výdejní místa
      const nearbyPoints = this.findNearbyAccessPoints(
        suggestion.lat,
        suggestion.lon,
        10
      );

      if (nearbyPoints.length > 0) {
        this.currentAccessPoints = nearbyPoints;
        this.renderResults();
        this.renderMarkers();

        console.log(`📍 Showing ${nearbyPoints.length} nearby access points`);

        // Event pro externí systémy
        document.dispatchEvent(
          new CustomEvent('pplSearchSelection', {
            detail: {
              type: 'map-location',
              location: { lat: suggestion.lat, lon: suggestion.lon },
              address: suggestion.text,
              nearbyPoints: nearbyPoints.length,
              searchTerm: suggestion.searchTerm,
            },
            bubbles: true,
          })
        );
      } else {
        console.log(`📍 No access points found near ${suggestion.text}`);
        // Zobraz všechny body pokud nejsou žádné blízké
        this.resetToAllPoints();
      }
    }
  }

  /**
   * OPRAVENÁ FUNKCE: Správné skrytí suggestions
   */
  hideSearchSuggestions() {
    const suggestionsContainer = this.container.querySelector(
      '.ppl-search-suggestions'
    );

    if (suggestionsContainer) {
      suggestionsContainer.classList.remove('show');
      suggestionsContainer.style.display = '';
    }

    this.searchSuggestions = [];

    // Vyčisti keyboard highlights
    this.container.querySelectorAll('.ppl-suggestion-item').forEach((item) => {
      item.classList.remove('highlighted');
      item.removeAttribute('aria-selected');
    });
  }

  /**
   * INICIALIZACE: Přidej do init() metody
   */
  initSearchFeatures() {
    // Bind search events
    this.bindSearchEvents();

    // Nastav search suggestions
    this.searchSuggestions = [];
    this.isSearching = false;
    this.searchTimeout = null;
    this.clickTimeout = null;

    // Konfigurace search
    this.maxSuggestions = 8;
    this.maxMapSuggestions = 4;
    this.maxVmSuggestions = 4;

    console.log('✅ Search features initialized');
  }

  /**
   * Provede hybrid search: Nominatim + Výdejní místa
   */
  // === OPRAVENÉ HYBRIDNÍ VYHLEDÁVÁNÍ ===

  /**
   * Provede hybrid search: Nominatim + Výdejní místa
   */
  async performLiveSearch(searchTerm) {
    console.log(`🔍 HYBRID search starting for: "${searchTerm}"`);

    // Zobraz loading
    this.showSearchSuggestions([
      {
        type: 'loading',
        text: 'Vyhledávám...',
        secondary: 'Prohledávám mapu i výdejní místa',
      },
    ]);

    try {
      // Paralelní search: Nominatim + VM
      console.log('🔄 Starting parallel search...');
      const [mapResults, vmResults] = await Promise.all([
        this.searchNominatim(searchTerm),
        this.searchInAccessPoints(searchTerm),
      ]);

      console.log(
        `✅ Parallel search completed: ${mapResults.length} map, ${vmResults.length} VM`
      );

      const suggestions = this.combineSearchResults(
        mapResults,
        vmResults,
        searchTerm
      );
      this.showSearchSuggestions(suggestions);
    } catch (error) {
      console.error('❌ Hybrid search failed:', error);
      // Fallback na jen VM search
      const vmResults = this.searchInAccessPoints(searchTerm);
      if (vmResults.length > 0) {
        this.showSearchSuggestions(vmResults);
      } else {
        this.showSearchSuggestions([
          {
            type: 'no-results',
            text: 'Chyba vyhledávání',
            secondary: 'Zkuste to prosím znovu',
          },
        ]);
      }
    }
  }

  /**
   * Vyhledá ve výdejních místech (rozšířená logika)
   */
  searchInAccessPoints(searchTerm) {
    if (!this.allAccessPoints || this.allAccessPoints.length === 0) {
      console.log('📦 No access points loaded yet');
      return [];
    }

    const results = this.generateAccessPointSuggestions(searchTerm);
    console.log(`📦 Found ${results.length} VM results for "${searchTerm}"`);
    return results;
  }

  /**
   * OPRAVENÁ FUNKCE: Generuje suggestions pro výdejní místa s lepším vyhledáváním
   */
  generateAccessPointSuggestions(searchTerm) {
    const lowerSearchTerm = searchTerm.toLowerCase();
    const suggestions = [];
    const addedSuggestions = new Set();

    // ROZŠÍŘENÉ VYHLEDÁVÁNÍ ve výdejních místech
    this.allAccessPoints.forEach((point) => {
      if (suggestions.length >= (this.maxVmSuggestions || 4)) return;

      const name = (point.name || '').toLowerCase();
      const city = (point.city || '').toLowerCase();
      const street = (point.street || '').toLowerCase();
      const zipCode = (point.zipCode || '').toLowerCase();

      // Rozšířené vyhledávání v několika polích
      const matches =
        name.includes(lowerSearchTerm) ||
        city.includes(lowerSearchTerm) ||
        street.includes(lowerSearchTerm) ||
        zipCode.includes(lowerSearchTerm);

      if (matches) {
        const suggestionKey = `vm_${point.id}`;
        if (!addedSuggestions.has(suggestionKey)) {
          suggestions.push({
            type: 'accesspoint',
            pointId: point.id,
            text: point.name,
            secondary: `${point.street}, ${point.city}`,
            searchTerm: searchTerm,
            point: point,
          });
          addedSuggestions.add(suggestionKey);
        }
      }
    });

    return suggestions;
  }

  /**
   * OPRAVENÁ FUNKCE: Kombinuje výsledky z map search a VM search
   */
  combineSearchResults(mapResults, vmResults, searchTerm) {
    const suggestions = [];

    // 1. MAP RESULTS první (max 4)
    mapResults.slice(0, this.maxMapSuggestions || 4).forEach((place) => {
      suggestions.push({
        type: 'map-location',
        text: place.display_name.split(',')[0],
        secondary: this.formatMapAddress(place),
        searchTerm: searchTerm,
        lat: parseFloat(place.lat),
        lon: parseFloat(place.lon),
        place: place,
      });
    });

    // 2. SEPARATOR pokud máme oba typy
    if (mapResults.length > 0 && vmResults.length > 0) {
      suggestions.push({
        type: 'separator',
        text: 'Výdejní místa',
        secondary: '',
      });
    }

    // 3. VM RESULTS (max 4)
    vmResults.slice(0, this.maxVmSuggestions || 4).forEach((vm) => {
      suggestions.push(vm);
    });

    // 4. FALLBACK pro prázdné výsledky
    if (
      suggestions.length === 0 ||
      suggestions.every((s) => s.type === 'separator')
    ) {
      suggestions.push({
        type: 'no-results',
        text: 'Žádné výsledky',
        secondary: `Pro "${searchTerm}" nebyly nalezeny žádné výsledky`,
      });
    }

    console.log(
      `🔍 Combined: ${mapResults.length} map + ${vmResults.length} VM = ${suggestions.length} total`
    );
    return suggestions;
  }

  /**
   * OPRAVENÁ FUNKCE: Vrátí ikonu pro typ suggestion s korektními SVG
   */
  getSuggestionIcon(suggestion) {
    if (suggestion.type === 'accesspoint' && suggestion.point) {
      return this.getTypeIconSvg(suggestion.point.type, 16); // Voláme správnou funkci
    }

    const icons = {
      accesspoint: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#004B93" stroke-width="2" fill="none"/>
        <path d="M2 17l10 5 10-5" stroke="#004B93" stroke-width="2" fill="none"/>
        <path d="M2 12l10 5 10-5" stroke="#004B93" stroke-width="2" fill="none"/>
      </svg>`,

      'map-location': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="#e74c3c" stroke-width="2" fill="none"/>
        <circle cx="12" cy="10" r="3" stroke="#e74c3c" stroke-width="2" fill="none"/>
      </svg>`,

      separator: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="#666" stroke-width="2" fill="none"/>
      </svg>`,

      loading: `<div style="width: 16px; height: 16px; border: 2px solid #e0e0e0; border-top: 2px solid #004b93; border-radius: 50%; animation: spin 1s linear infinite;"></div>`,

      'no-results': `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="8" stroke="#999" stroke-width="2" fill="none"/>
        <path d="m21 21-4.35-4.35" stroke="#999" stroke-width="2" fill="none"/>
      </svg>`,
    };

    return icons[suggestion.type] || icons['no-results'];
  }

  /**
   * OPRAVENÁ FUNKCE: Zobrazí search suggestions s lepším error handlingem
   */
  showSearchSuggestions(suggestions) {
    console.log('📋 Showing suggestions:', suggestions); // Logy jsou užitečné, nechte je

    const suggestionsContainer = this.container.querySelector(
      '.ppl-search-suggestions'
    );
    const suggestionsList = this.container.querySelector(
      '.ppl-suggestions-list'
    );

    if (!suggestionsContainer || !suggestionsList) {
      console.warn('⚠️ Search suggestions containers not found in HTML');
      return;
    }

    // Vygeneruj HTML pro suggestions
    suggestionsList.innerHTML = suggestions
      .map((suggestion, index) => {
        const icon = this.getSuggestionIcon(suggestion); // Toto je již správně
        const highlightedText = this.highlightSearchTerm(
          suggestion.text,
          suggestion.searchTerm
        );

        return `
        <div class="ppl-suggestion-item" data-index="${index}" data-type="${
          suggestion.type
        }">
          <div class="ppl-suggestion-icon">${icon}</div>
          <div class="ppl-suggestion-content">
            <div class="ppl-suggestion-main">${highlightedText}</div>
            ${
              suggestion.secondary
                ? `<div class="ppl-suggestion-secondary">${suggestion.secondary}</div>`
                : ''
            }
          </div>
        </div>
      `;
      })
      .join('');

    // Ulož suggestions pro click handling
    this.searchSuggestions = suggestions;

    // Zobraz dropdown
    suggestionsContainer.classList.add('show');
    suggestionsContainer.style.display = '';
    console.log('✅ Suggestions displayed');
  }

  /**
   * OPRAVENÁ FUNKCE: Zpracuje kliknutí na suggestion s lepší logikou
   */
  handleSuggestionClick(suggestionIndex) {
    const suggestion = this.searchSuggestions[suggestionIndex];
    if (!suggestion) return;

    console.log(`🎯 Suggestion clicked:`, suggestion);

    const searchInput = this.container.querySelector('.ppl-search-input');

    switch (suggestion.type) {
      case 'accesspoint':
        // OPRAVENO: Nastav hodnotu do inputu a vyberi bod
        searchInput.value = suggestion.text;
        this.hideSearchSuggestions();

        if (suggestion.pointId) {
          console.log(`📦 Selecting VM: ${suggestion.text}`);
          this.selectPoint(suggestion.pointId);

          // PŘIDÁNO: Filtruj výsledky podle vybraného bodu
          this.filterBySelectedPoint(suggestion.pointId);
        }
        break;

      case 'map-location':
        searchInput.value = suggestion.text;
        this.hideSearchSuggestions();
        console.log(
          `🗺️ Map location selected: ${suggestion.text} at ${suggestion.lat}, ${suggestion.lon}`
        );

        if (this.map && suggestion.lat && suggestion.lon) {
          this.map.setView([suggestion.lat, suggestion.lon], 15);

          // OPRAVENO: Najdi nejbližší VM a zobraz je
          this.showNearbyAccessPoints(suggestion.lat, suggestion.lon);
        }
        break;

      case 'separator':
      case 'loading':
        return;

      default:
        this.hideSearchSuggestions();
    }
  }

  /**
   * NOVÁ FUNKCE: Filtruje a zobrazí výsledky podle vybraného bodu
   */
  filterBySelectedPoint(pointId) {
    const selectedPoint = this.allAccessPoints.find(
      (p) => String(p.id) === String(pointId)
    );
    if (!selectedPoint) return;

    // Nastav current access points na jen vybraný bod
    this.currentAccessPoints = [selectedPoint];

    // Re-render vše
    this.renderResults();
    this.renderMarkers(pointId);

    // Nastav mapu na vybraný bod
    if (this.map) {
      this.map.setView(
        [selectedPoint.gps.latitude, selectedPoint.gps.longitude],
        16
      );
    }

    console.log(
      `🎯 Filtered to show only selected point: ${selectedPoint.name}`
    );
  }

  /**
   * NOVÁ FUNKCE: Zobrazí nejbližší výdejní místa k vybrané adrese
   */
  showNearbyAccessPoints(lat, lon, radiusKm = 5) {
    if (!this.allAccessPoints || this.allAccessPoints.length === 0) {
      console.warn('⚠️ No access points available for nearby search');
      return;
    }

    const nearbyPoints = this.findNearbyAccessPoints(lat, lon, radiusKm);

    if (nearbyPoints.length > 0) {
      this.currentAccessPoints = nearbyPoints;
      this.renderResults();
      this.renderMarkers();
      console.log(`📍 Showing ${nearbyPoints.length} nearby access points`);
    } else {
      console.log(`📍 No access points found within ${radiusKm}km`);
      // Zobraz všechny body pokud nejsou žádné blízké
      this.currentAccessPoints = this.allAccessPoints;
      this.renderResults();
      this.renderMarkers();
    }
  }

  /**
   * OPRAVENÁ FUNKCE: Lepší handling search inputu
   */
  handleSearchInput(searchTerm) {
    const trimmedTerm = searchTerm.trim();

    // Clear předchozí timeout
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    // Pokud je search prázdný, skryj suggestions A aplikuj filtry
    if (trimmedTerm.length === 0) {
      this.hideSearchSuggestions();
      this.applyFilters(); // PŘIDÁNO: aplikuj filtry pro reset
      return;
    }

    // Pokud je search příliš krátký, počkej
    if (trimmedTerm.length < 2) {
      this.showSearchSuggestions([
        {
          type: 'loading',
          text: 'Zadejte alespoň 2 znaky...',
          secondary: '',
        },
      ]);
      return;
    }

    // Debounce search
    this.searchTimeout = setTimeout(() => {
      this.performLiveSearch(trimmedTerm);
    }, 300);
  }

  /**
   * OPRAVENÁ FUNKCE: Lepší aplikace filtrů s reset možností
   */
  applyFilters() {
  // DEBUG: Kdo volá applyFilters?
  console.trace('🔍 applyFilters() was called from:');
  console.log('🔍 geolocationDenied flag:', this.geolocationDenied);
  
  if (this.allAccessPoints.length === 0) {
    console.log('applyFilters: Čekám na načtení dat, zatím nic nedělám.');
    return;
  }
  
  // NOVÁ KONTROLA: Pokud byla geolokace zamítnuta, neaplikuj filtry
  if (this.geolocationDenied) {
    console.log('applyFilters: Geolokace byla zamítnuta, neaplikuji filtry.');
    return;
  }
  
  this.clearCache('viewport');

    const searchTerm = this.container
      .querySelector('.ppl-search-input')
      .value.toLowerCase()
      .trim();

    let filtered = [...this.allAccessPoints];

    // POKUD JE SEARCH TERM PRÁZDNÝ, RESET FILTRŮ
    if (!searchTerm) {
      // Reset na všechny body a aplikuj jen aktivní filtry
      this.currentAccessPoints = this.applyActiveFilters(filtered);
      this.renderAll();
      return;
    }

    // Filtruj podle typu - aplikuj filtr vždy když nejsou vybrané všechny typy
    if (this.selectedTypes.size > 0 && this.selectedTypes.size < 2) {
      filtered = filtered.filter((p) => this.selectedTypes.has(p.type));
    }

    // Filtruj podle platby - aplikuj filtr vždy když nejsou vybrané všechny platby
    if (this.selectedPayments.size > 0 && this.selectedPayments.size < 2) {
      filtered = filtered.filter((p) => {
        if (
          this.selectedPayments.has('card') &&
          !this.selectedPayments.has('cash')
        ) {
          return p.activeCardPayment || p.canPayByCard;
        }
        if (
          this.selectedPayments.has('cash') &&
          !this.selectedPayments.has('card')
        ) {
          return p.activeCashPayment;
        }
        return true;
      });
    }

    // Aplikuj ostatní aktivní filtry
    filtered = this.applyActiveFilters(filtered);

    // Textové vyhledávání
    if (searchTerm) {
      filtered = filtered.filter(
        (p) =>
          (p.name && p.name.toLowerCase().includes(searchTerm)) ||
          (p.city && p.city.toLowerCase().includes(searchTerm)) ||
          (p.street && p.street.toLowerCase().includes(searchTerm)) ||
          (p.zipCode && p.zipCode.toLowerCase().includes(searchTerm))
      );
    }

    console.log(
      `Filter applied: ${this.allAccessPoints.length} → ${filtered.length} points`
    );

    this.currentAccessPoints = filtered;
    this.renderAll();

    // PŘIDÁNO: Načti detaily pro nově filtrované body
    if (this.previewDataLoaded) {
      setTimeout(() => {
        this.loadDetailsForSidebar();
      }, 100);
    }
  }

  /**
   * NOVÁ POMOCNÁ FUNKCE: Aplikuje aktivní filtry (víkend, kapacita, atd.)
   */
  applyActiveFilters(points) {
    let filtered = [...points];

    // Filtr pro víkendový provoz
    if (
      this.activeFilters.has('weekend') ||
      this.activeFilters.has('openOnWeekend')
    ) {
      const beforeCount = filtered.length;
      filtered = filtered.filter((p) => this.checkWeekendOperation(p));
      const afterCount = filtered.length;
      console.log(
        `Weekend filter applied: ${beforeCount} → ${afterCount} points`
      );
    }

    // Filtr pro platbu kartou
    if (this.activeFilters.has('cardPayment')) {
      filtered = filtered.filter((p) => p.canPayByCard);
    }

    // Další filtry lze přidat zde...

    return filtered;
  }

  /**
   * Najde nejbližší výdejní místa
   */
  findNearbyAccessPoints(lat, lon, radiusKm = 5) {
    if (!this.allAccessPoints || this.allAccessPoints.length === 0) {
      return [];
    }

    const nearbyPoints = this.allAccessPoints
      .map((point) => {
        const distance = this.calculateDistance(
          lat,
          lon,
          point.gps.latitude,
          point.gps.longitude
        );
        return { ...point, distance };
      })
      .filter((point) => point.distance <= radiusKm)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 20);

    return nearbyPoints;
  }

  mergeDetailIntoPoint(previewPoint, detailData) {
    console.log('🔄 MERGING DETAIL DATA');
    console.log('🔄 Detail data keys:', Object.keys(detailData));
    console.log('🔄 Detail openHours:', detailData.openHours);
    console.log('🔄 Detail workHours:', detailData.workHours);
    console.log('🔄 Detail capacityStatus:', detailData.capacityStatus);

    const capacityStatus = detailData.capacityStatus;
    let capacityInfo = this.getCapacityInfo(capacityStatus);

    previewPoint.capacityStatus = capacityStatus;
    previewPoint.capacityInfo = capacityInfo;

    console.log('🔄 Capacity status:', capacityStatus, '→', capacityInfo);

    // Aktualizuj s detailními daty
    previewPoint.name =
      detailData.name ||
      detailData.nazev ||
      detailData.companyName ||
      previewPoint.name;
    previewPoint.street =
      detailData.street ||
      detailData.ulice ||
      detailData.address ||
      previewPoint.street;
    previewPoint.city =
      detailData.city || detailData.mesto || previewPoint.city;
    previewPoint.zipCode =
      detailData.zipCode ||
      detailData.psc ||
      detailData.zip ||
      previewPoint.zipCode;

    // Platební možnosti z detailů
    previewPoint.activeCardPayment =
      detailData.activeCardPayment || detailData.canPayByCard || false;
    previewPoint.activeCashPayment = detailData.activeCashPayment !== false; // default true
    previewPoint.canPayByCard =
      detailData.canPayByCard || detailData.activeCardPayment || false;

    // Pickup možnosti
    previewPoint.pickupEnabled = detailData.pickupEnabled !== false;

    // Parsování openHours z API
    let processedOpeningHours = [];

    if (detailData.openHours && Array.isArray(detailData.openHours)) {
      console.log(
        '🕒 Processing openHours from detail API:',
        detailData.openHours
      );

      processedOpeningHours = detailData.openHours
        .map((hourString) => {
          // Format: 'Mon;05:30;12:00;12:00;19:00' = Den;OdRano;DoPoledne;OdPoledne;DoVecer
          const parts = hourString.split(';');
          if (parts.length >= 5) {
            const dayMap = {
              Mon: 2,
              Tue: 3,
              Wed: 4,
              Thu: 5,
              Fri: 6,
              Sat: 7,
              Sun: 1,
            };

            const weekDay = dayMap[parts[0]];
            const morning = { from: parts[1], to: parts[2] };
            const afternoon = { from: parts[3], to: parts[4] };

            console.log(
              `🕒 Parsed ${parts[0]} (${weekDay}): ${morning.from}-${morning.to}, ${afternoon.from}-${afternoon.to}`
            );

            const intervals = [];

            // Ráno
            if (morning.from !== morning.to) {
              intervals.push({
                weekDay: weekDay,
                timeFrom: morning.from,
                timeTo: morning.to,
              });
            }

            // Odpoledne
            if (afternoon.from !== afternoon.to) {
              intervals.push({
                weekDay: weekDay,
                timeFrom: afternoon.from,
                timeTo: afternoon.to,
              });
            }

            return intervals;
          }
          return [];
        })
        .flat()
        .filter(Boolean);

      console.log('🕒 Processed opening hours:', processedOpeningHours);
    }
    // Fallback na workHours pokud existuje
    else if (detailData.workHours && Array.isArray(detailData.workHours)) {
      processedOpeningHours = detailData.workHours.map((wh) => ({
        weekDay: wh.weekDay,
        timeFrom: wh.openFrom,
        timeTo: wh.openTo,
      }));
    }

    // Víkendový provoz z detailních dat
    if (processedOpeningHours.length > 0) {
      const hasWeekendHours = processedOpeningHours.some(
        (hour) => parseInt(hour.weekDay) === 7 || parseInt(hour.weekDay) === 1
      );
      previewPoint.openOnWeekend =
        hasWeekendHours || previewPoint.type === 'parcelbox';
    }

    // Aktualizuj raw data s detaily a zpracovanými hodinami
    previewPoint.rawData = {
      ...previewPoint.rawData,
      ...detailData,
      openingHours: processedOpeningHours,
    };

    // Označ jako detailně načtené
    previewPoint.isPreviewData = false;
    previewPoint.detailsLoaded = true;

    console.log(`🔄 Merged details for point: ${previewPoint.name}`);
    console.log(`🔄 Final opening hours:`, previewPoint.rawData.openingHours);
  }

  /**
   * Optimalizované renderování markerů s cache
   */
  renderMarkers(selectedPointId = null) {
    if (!this.map) return;

    // Použij uložený selectedPointId pokud není explicitně zadán
    const currentSelectedId = selectedPointId || this.selectedPointId;

    const currentViewport = this.getCurrentViewport();
    if (!currentViewport) return;

    // Kontrola, zda je potřeba přepočítat
    if (
      !currentSelectedId &&
      !this.isViewportChanged(currentViewport, this.lastViewport)
    ) {
      console.log('Viewport se významně nezměnil, přeskakuji renderování');
      return;
    }

    // Cache key pro aktuální viewport a filtry
    const cacheKey = this.getCacheKey('viewport_render', {
      viewport: currentViewport,
      filters: Array.from(this.activeFilters),
      types: Array.from(this.selectedTypes),
      payments: Array.from(this.selectedPayments),
      selected: currentSelectedId,
    });

    // Zkus najít v cache
    const cachedRender = this.getFromCache(this.viewportCache, cacheKey);
    if (cachedRender && !currentSelectedId) {
      console.log('Using cached viewport render');
      this.applyMarkers(cachedRender.markers, cachedRender.clusters);
      this.lastViewport = currentViewport;
      return;
    }

    // Filtruj body podle viewport
    const viewportPoints = this.filterPointsByViewport(
      this.currentAccessPoints,
      currentViewport
    );
    console.log(
      `Rendering ${viewportPoints.length}/${this.currentAccessPoints.length} points for viewport`
    );

    // Vytvoř clustery
    const currentZoom = this.map.getZoom();
    const clusters = this.createClusters(viewportPoints, currentZoom);

    const renderData = {
      markers: [],
      clusters: [],
    };

    clusters.forEach((cluster) => {
      if (cluster.isCluster && cluster.points.length > 1) {
        renderData.clusters.push({
          position: cluster.position,
          count: cluster.points.length,
          bounds: cluster.bounds,
        });
      } else {
        const point = cluster.point;
        const isSelected =
          currentSelectedId && String(point.id) === currentSelectedId;
        renderData.markers.push({
          point: point,
          position: [point.gps.latitude, point.gps.longitude],
          isSelected: isSelected,
        });
      }
    });

    // Cache pouze pokud není selected point
    if (!currentSelectedId) {
      this.setToCache(this.viewportCache, cacheKey, renderData);
    }

    this.applyMarkers(renderData.markers, renderData.clusters);
    this.lastViewport = currentViewport;
  }

  /**
   * Aplikuje markery na mapu
   */
  applyMarkers(markerData, clusterData) {
    // Odstraň všechny existující markery
    this.markers.forEach((marker) => this.map.removeLayer(marker));
    this.clusterMarkers.forEach((marker) => this.map.removeLayer(marker));
    this.markers = [];
    this.clusterMarkers = [];

    // Přidej cluster markery
    clusterData.forEach((clusterInfo) => {
      const clusterMarker = L.marker(clusterInfo.position, {
        icon: this.createClusterIcon(clusterInfo.count),
      }).addTo(this.map);

      clusterMarker.on('click', () => {
        if (this.map.getZoom() < 12) {
          const bounds = L.latLngBounds([
            [clusterInfo.bounds.south, clusterInfo.bounds.west],
            [clusterInfo.bounds.north, clusterInfo.bounds.east],
          ]);
          this.map.fitBounds(bounds.pad(0.1));
        }
      });

      this.clusterMarkers.push(clusterMarker);
    });

    // Přidej jednotlivé markery
    markerData.forEach((markerInfo) => {
      const marker = L.marker(markerInfo.position, {
        icon: this.createSingleMarkerIcon(
          markerInfo.point.type,
          markerInfo.isSelected
        ),
      }).addTo(this.map);

      marker.on('click', () => this.selectPoint(String(markerInfo.point.id)));
      this.markers.push(marker);
    });
  }

  // === OPTIMALIZOVANÝ CLUSTERING ===

  /**
   * Vytvoří clustery s cache
   */
  createClusters(points, zoom) {
    if (!this.config.clustering.cacheEnabled) {
      return this.performClustering(points, zoom);
    }

    const cacheKey = this.getCacheKey('cluster', {
      pointIds: points
        .map((p) => p.id)
        .sort()
        .join(','),
      zoom: Math.floor(zoom),
    });

    const cached = this.getFromCache(this.clusterCache, cacheKey);
    if (cached) {
      console.log(`Using cached clusters for zoom ${zoom}`);
      return cached;
    }

    const clusters = this.performClustering(points, zoom);
    this.setToCache(this.clusterCache, cacheKey, clusters);

    return clusters;
  }

  /**
   * Provede skutečné clustering
   */
  performClustering(points, zoom) {
    if (zoom >= 12) {
      return points.map((point) => ({
        isCluster: false,
        point: point,
        position: [point.gps.latitude, point.gps.longitude],
      }));
    }

    const clusters = [];
    const processed = new Set();
    const clusterDistance = this.getClusterDistance(zoom);

    points.forEach((point, index) => {
      if (processed.has(index)) return;

      const cluster = {
        isCluster: true,
        points: [point],
        position: [point.gps.latitude, point.gps.longitude],
        bounds: {
          north: point.gps.latitude,
          south: point.gps.latitude,
          east: point.gps.longitude,
          west: point.gps.longitude,
        },
      };

      processed.add(index);

      points.forEach((otherPoint, otherIndex) => {
        if (processed.has(otherIndex)) return;

        const distance = this.calculateDistance(
          point.gps.latitude,
          point.gps.longitude,
          otherPoint.gps.latitude,
          otherPoint.gps.longitude
        );

        if (distance <= clusterDistance) {
          cluster.points.push(otherPoint);
          processed.add(otherIndex);

          cluster.bounds.north = Math.max(
            cluster.bounds.north,
            otherPoint.gps.latitude
          );
          cluster.bounds.south = Math.min(
            cluster.bounds.south,
            otherPoint.gps.latitude
          );
          cluster.bounds.east = Math.max(
            cluster.bounds.east,
            otherPoint.gps.longitude
          );
          cluster.bounds.west = Math.min(
            cluster.bounds.west,
            otherPoint.gps.longitude
          );
        }
      });

      if (cluster.points.length > 1) {
        const avgLat =
          cluster.points.reduce((sum, p) => sum + p.gps.latitude, 0) /
          cluster.points.length;
        const avgLng =
          cluster.points.reduce((sum, p) => sum + p.gps.longitude, 0) /
          cluster.points.length;
        cluster.position = [avgLat, avgLng];
      } else {
        cluster.isCluster = false;
        cluster.point = cluster.points[0];
      }

      clusters.push(cluster);
    });

    return clusters;
  }

  // === OPTIMALIZOVANÉ EVENT HANDLING ===

  /**
   * Throttled update pro viewport změny
   */
  scheduleViewportUpdate() {
    if (this.pendingViewportUpdate) {
      clearTimeout(this.pendingViewportUpdate);
    }

    this.pendingViewportUpdate = setTimeout(() => {
      // Zachovat aktuálně vybraný bod při viewport update
      this.renderMarkers(this.selectedPointId);
      this.pendingViewportUpdate = null;
    }, 150); // 150ms debounce
  }

  /**
   * Optimalizované zoom handling
   */
  updateClustering() {
    const currentZoom = this.map.getZoom();

    // Pouze při významné změně zoom
    if (
      this.lastZoom &&
      Math.abs(currentZoom - this.lastZoom) <
        this.config.clustering.updateThreshold
    ) {
      return;
    }

    this.lastZoom = currentZoom;
    this.scheduleViewportUpdate();
  }

  renderWidgetHTML() {
    this.container.innerHTML = `
      <div class="ppl-widget">
        <div class="ppl-content">
          <div class="ppl-sidebar">
            <div class="ppl-search-section">
              <div class="ppl-logo">
                ${logoSVG}
              </div>
              <div class="ppl-search-input-wrapper">
                <div class="ppl-search-icon"></div>
                <input type="text" class="ppl-search-input" placeholder="${
                  this.translations[this.currentLanguage].searchPlaceholder
                }">
                
                <!-- PŘIDÁNO: Suggestions container -->
                <div class="ppl-search-suggestions" style="display: none;">
                  <div class="ppl-suggestions-list"></div>
                </div>
              </div>
            </div>
            
            <div class="ppl-results">
              <div class="ppl-loading">${
                this.translations[this.currentLanguage].loading
              }</div>
            </div>

              <div class="ppl-big-filter" style="display: none;">
                <div class="ppl-big-filter-content">

                  <div class="ppl-filter-header">
                    <button class="ppl-back-button">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 12H5M12 19l-7-7 7-7" stroke="#004B93" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                      <span>Zpět na výběr místa</span>
                    </button>
                  </div>

                  <div class="ppl-filters-section">

                 

                    <div class="ppl-toggle-group">
                      <div class="ppl-toggle-item">
                        <div class="ppl-toggle-info">
                          <div class="ppl-toggle-icon capacity-icon"></div>
                          <span>Pouze volná výdejní místa</span>
                        </div>
                        <div class="ppl-toggle-switch">
                          <input type="checkbox" id="capacity-toggle">
                          <label for="capacity-toggle"></label>
                        </div>
                      </div>

                      <div class="ppl-toggle-item">
                        <div class="ppl-toggle-info">
                          <div class="ppl-toggle-icon hours-icon"></div>
                          <span>Pouze otevřená výdejní místa</span>
                        </div>
                        <div class="ppl-toggle-switch">
                          <input type="checkbox" id="open-toggle">
                          <label for="open-toggle"></label>
                        </div>
                      </div>
                    </div>

                    <div class="ppl-filter-divider"></div>
                    <div class="ppl-toggle-item">
                      <div class="ppl-toggle-info">
                        <div class="ppl-toggle-icon weekend-icon"></div>
                        <span>Otevřeno o víkendu</span>
                      </div>
                      <div class="ppl-toggle-switch">
                        <input type="checkbox" id="weekend-toggle">
                        <label for="weekend-toggle"></label>
                      </div>
                    </div>

                    <div class="ppl-filter-divider"></div>
                    <div class="ppl-toggle-item">
                      <div class="ppl-toggle-info">
                        <div class="ppl-toggle-icon pickup-icon"></div>
                        <span>Podání zásilky</span>
                      </div>
                      <div class="ppl-toggle-switch">
                        <input type="checkbox" id="pickup-toggle">
                        <label for="pickup-toggle"></label>
                      </div>
                    </div>
                    <div class="ppl-filter-spacer"></div>
                                       <!-- NOVÁ SEKCE: Možnosti platby -->
                    <div class="ppl-filter-category">
                      <div class="ppl-filter-category-header">
                        <span class="filter-category-title">Možnosti platby</span>
                        <div class="filter-category-arrow">
                        </div>
                      </div>
                      <div class="ppl-filter-category-content">
                        <div class="ppl-filter-option">
                          <input type="checkbox" id="payment-card-filter" checked>
                          <label for="payment-card-filter">
                            <span class="custom-checkbox"></span>
                            <span class="option-label">Kartou</span>
                          </label>
                        </div>
                        <div class="ppl-filter-option">
                          <input type="checkbox" id="payment-cash-filter" checked>
                          <label for="payment-cash-filter">
                            <span class="custom-checkbox"></span>
                            <span class="option-label">Hotově</span>
                          </label>
                        </div>
                      </div>
                    </div>
              
                    <!-- NOVÁ SEKCE: Typ výdejního místa -->
                    <div class="ppl-filter-category">
                      <div class="ppl-filter-category-header">
                        <span class="filter-category-title">Typ výdejního místa</span>
                        <div class="filter-category-arrow">
                        </div>
                      </div>
                      <div class="ppl-filter-category-content">
                        <div class="ppl-filter-option">
                          <input type="checkbox" id="type-parcelshop-filter" checked>
                          <label for="type-parcelshop-filter">
                            <span class="custom-checkbox"></span>
                            <span class="option-label">Parcelshop</span>
                          </label>
                        </div>
                        <div class="ppl-filter-option">
                          <input type="checkbox" id="type-parcelbox-filter" checked>
                          <label for="type-parcelbox-filter">
                            <span class="custom-checkbox"></span>
                            <span class="option-label">Parcelbox</span>
                          </label>
                        </div>
                      </div>
                    </div>
              
                    <!-- NOVÁ SEKCE: Otevírací doba -->
                    <div class="ppl-filter-category">
                    <div class="ppl-filter-category-header">
                      <span class="filter-category-title">Otevírací doba</span>
                      <div class="filter-category-arrow">
                      </div>
                    </div>
                    <div class="ppl-filter-category-content">
                      <div class="ppl-filter-option">
                        <input type="checkbox" id="hours-before-9am-filter">
                        <label for="hours-before-9am-filter">
                          <span class="custom-checkbox"></span>
                          <span class="option-label">Před 9:00</span>
                        </label>
                      </div>
                      <div class="ppl-filter-option">
                        <input type="checkbox" id="hours-after-5pm-filter">
                        <label for="hours-after-5pm-filter">
                          <span class="custom-checkbox"></span>
                          <span class="option-label">Po 17:00 a dále</span>
                        </label>
                      </div>
                      <div class="ppl-filter-option">
                        <input type="checkbox" id="hours-saturday-filter">
                        <label for="hours-saturday-filter">
                          <span class="custom-checkbox"></span>
                          <span class="option-label">Sobota</span>
                        </label>
                      </div>
                      <div class="ppl-filter-option">
                        <input type="checkbox" id="hours-sunday-filter">
                        <label for="hours-sunday-filter">
                          <span class="custom-checkbox"></span>
                          <span class="option-label">Neděle</span>
                        </label>
                      </div>
                    </div>
                  </div>
              
                    <!-- NOVÁ SEKCE: Země -->
                    <div class="ppl-filter-category">
                    <div class="ppl-filter-category-header">
                      <span class="filter-category-title">Země</span>
                      <div class="filter-category-arrow"></div>
                    </div>
                    <div class="ppl-filter-category-content">
                      <div class="ppl-filter-option">
                        <input type="checkbox" id="country-cz-filter" checked>
                        <label for="country-cz-filter">
                          <div class="checkbox-container">
                            <span class="custom-checkbox"></span>
                          </div>
                          <span class="option-label czechia">Česko</span>
                        </label>
                      </div>
                      <div class="ppl-filter-option">
                        <input type="checkbox" id="country-sk-filter">
                        <label for="country-sk-filter">
                          <div class="checkbox-container">
                            <span class="custom-checkbox"></span>
                          </div>
                          <span class="option-label slovakia">Slovensko</span>
                        </label>
                      </div>
                      <div class="ppl-filter-option">
                        <input type="checkbox" id="country-de-filter">
                        <label for="country-de-filter">
                          <div class="checkbox-container">
                            <span class="custom-checkbox"></span>
                          </div>
                          <span class="option-label germany">Německo</span>
                        </label>
                      </div>
                      <div class="ppl-filter-option">
                        <input type="checkbox" id="country-pl-filter">
                        <label for="country-pl-filter">
                          <div class="checkbox-container">
                            <span class="custom-checkbox"></span>
                          </div>
                          <span class="option-label poland">Polsko</span>
                        </label>
                      </div>
                    </div>
                  </div>

                    </div>
                </div>
              </div>

          </div>
          <div class="ppl-map-container">
            <div class="ppl-language-selector">
              <button class="ppl-language-button" id="language-button">
                <div class="ppl-language-content">
                  <div class="ppl-language-flag ${
                    this.currentLanguage.toLowerCase() === 'cz'
                      ? 'czech'
                      : 'english'
                  }"></div>
                  <span class="ppl-language-text">${this.currentLanguage}</span>
                </div>
                <div class="ppl-language-arrow"></div>
              </button>

              <div class="ppl-language-dropdown" id="language-dropdown">
                <div class="ppl-language-option ${
                  this.currentLanguage === 'CZ' ? 'selected' : ''
                }" data-lang="CZ">
                  <div class="ppl-language-flag czech"></div>
                  <span class="ppl-language-text">CZ</span>
                </div>
                <div class="ppl-language-option ${
                  this.currentLanguage === 'EN' ? 'selected' : ''
                }" data-lang="EN">
                  <div class="ppl-language-flag english"></div>
                  <span class="ppl-language-text">EN</span>
                </div>
              </div>
            </div>

            <div class="ppl-quick-filters-overlay">
              <div class="ppl-quick-filters">
              <button class="ppl-quick-filter all-filters" data-filter="all">
                <div class="filter-content">
                  <div class="filter-icon"></div>
                  <div class="filter-text">${
                    this.translations[this.currentLanguage].allFilters
                  }</div>
                </div>
                <div class="ppl-filter-count-badge" id="filter-count-badge">0</div>
                </button>

                <div class="ppl-quick-filter-container">
                  <button class="ppl-quick-filter type-filter" data-filter="type">
                    <div class="filter-content">
                      <div class="filter-main">
                        <div class="filter-icon">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75037 11.2742H2.49883V8.37097H5.74781V11.2742H5.75037ZM10.9989 11.2742H7.74995V8.37097H10.9989V11.2742ZM5.75037 16.5968H2.49883V13.9355V13.6935H5.74781V16.5968H5.75037ZM10.9989 16.5968H7.74995V13.9355V13.6935H10.9989V16.5968ZM16.2475 11.2742H13.2469V9.09677V8.6129V8.37097H16.2475V11.2742ZM21.747 11.2742H18.498V9.09677V8.6129V8.37097H21.747V11.2742ZM13.997 19.5H20.7459V14.6613V14.4194H13.997V19.5ZM15.4973 4.5H1.24941C0.250907 4.5 0 5.46774 0 5.70968V17.8065V18.2903C0 18.5323 0 19.5 1.24941 19.5H13.2494V13.6935H21.7495V19.5H22.7506C23.2498 19.5 24 19.0161 24 18.2903V5.70968C24 4.74194 23.2498 4.5 22.7506 4.5H15.5025H15.4973Z" fill="#004B93"/>
                          </svg>
                        </div>
                        <div class="filter-text">${
                          this.translations[this.currentLanguage].typeFilter
                        }</div>
                      </div>
                      <div class="dropdown-arrow"></div>
                    </div>
                  </button>

                  <div class="ppl-type-dropdown" id="type-dropdown">
                    <div class="dropdown-option">
                      <label class="checkbox-container">
                        <input type="checkbox" id="filter-parcelshop" data-type="parcelshop" checked>
                        <span class="checkbox-custom"></span>
                        <span class="option-text">${
                          this.translations[this.currentLanguage].parcelshop
                        }</span>
                      </label>
                    </div>
                    <div class="dropdown-option">
                      <label class="checkbox-container">
                        <input type="checkbox" id="filter-parcelbox" data-type="parcelbox" checked>
                        <span class="checkbox-custom"></span>
                        <span class="option-text">${
                          this.translations[this.currentLanguage].parcelbox
                        }</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="ppl-payment-filter-container">
                  <button class="ppl-quick-filter payment-filter" data-filter="payment">
                    <div class="filter-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C2.89543 5 2 5.89543 2 7V8.09524H22V7C22 5.89543 21.1046 5 20 5H4ZM22 10.9048H2V17C2 18.1046 2.89543 19 4 19H20C21.1046 19 22 18.1046 22 17V10.9048Z" fill="#004B93"/>
                      </svg>
                    </div>
                    <div class="filter-content">
                      <div class="filter-text">${
                        this.translations[this.currentLanguage].paymentFilter
                      }</div>
                      <div class="dropdown-arrow"></div>
                    </div>
                  </button>

                  <div class="ppl-payment-dropdown" id="payment-dropdown">
                    <div class="payment-dropdown-option">
                      <label class="payment-checkbox-container">
                        <input type="checkbox" id="filter-card" data-payment="card" checked>
                        <span class="payment-checkbox-custom"></span>
                        <span class="payment-option-text">${
                          this.translations[this.currentLanguage].card
                        }</span>
                      </label>
                    </div>
                    <div class="payment-dropdown-option">
                      <label class="payment-checkbox-container">
                        <input type="checkbox" id="filter-cash" data-payment="cash" checked>
                        <span class="payment-checkbox-custom"></span>
                        <span class="payment-option-text">${
                          this.translations[this.currentLanguage].cash
                        }</span>
                      </label>
                    </div>
                  </div>
                </div>

                <button class="ppl-quick-filter package-size-filter" data-filter="packageSize">
                  <div class="filter-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.7112 10.9585L2.79936 3.59744L13.5885 0V10.1597L10.7112 10.9585ZM14.4677 9.84026V0.159744L22.4601 7.20128L14.4677 9.84026ZM2 16.0831V4.15974L9.99233 11.6805V23.7572L2 16.0831ZM11.1112 12.0831L22.7796 7.91693V20L11.1112 24V12.0831Z" fill="#004B93"/>
                    </svg>
                  </div>
                  <div class="filter-content">
                    <div class="filter-text">${
                      this.translations[this.currentLanguage].packageSizeFilter
                    }</div>
                    <div class="dropdown-arrow"></div>
                  </div>
                </button>

                <button class="ppl-quick-filter weekend-filter" data-filter="weekend">
                  <div class="filter-icon">
                    <svg width="15" height="17" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21665 4.05933C5.87244 4.05933 5.70033 3.88129 5.70033 3.53114V0.528187C5.70033 0.178041 5.87244 0 6.21665 0C6.5668 0 6.91101 0.178041 6.91101 0.528187V3.53114C6.91101 3.88129 6.5668 4.05933 6.21665 4.05933ZM16.8991 4.05933C16.5371 4.05933 16.1691 3.88129 16.1691 3.53114V0.528187C16.1691 0.178041 16.5371 0 16.8991 0C17.267 0 17.451 0.178041 17.451 0.528187V3.53114C17.451 3.88129 17.267 4.05933 16.8991 4.05933ZM18.715 2.13661H20.8219C21.5222 2.13661 22.2224 2.8369 22.2224 3.53719V22.5994C22.2224 23.2997 21.5222 24 20.8219 24H2.57863C1.70029 24 1 23.2997 1 22.5994V3.53719C1 2.8369 1.70029 2.13661 2.57863 2.13661H4.68544V3.53719C4.68544 4.58763 5.38574 5.28199 6.26407 5.28199C7.31451 5.28199 8.0148 4.58763 8.0148 3.53719V2.13661H15.2076V3.53719C15.2076 4.58763 15.9079 5.28199 16.9584 5.28199C17.8367 5.28199 18.715 4.58763 18.715 3.53719V2.13661ZM19.7655 21.727H3.10681V9.8339H19.7655V21.727Z" fill="#004B93"/>
                    </svg>
                  </div>
                  <div class="filter-content">
                    <div class="filter-text">${
                      this.translations[this.currentLanguage].weekendFilter
                    }</div>
                  </div>
                </button>
              </div>
            </div>

            <div class="ppl-map"></div>

            <div class="ppl-map-controls">
              <div class="ppl-zoom-controls">
                <button class="ppl-zoom-btn ppl-zoom-in" id="zoom-in">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="9" y="4" width="2" height="12" fill="#004B93" rx="1"/>
                    <rect x="4" y="9" width="12" height="2" fill="#004B93" rx="1"/>
                  </svg>
                </button>
                <button class="ppl-zoom-btn ppl-zoom-out" id="zoom-out">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="4" y="9" width="12" height="2" fill="#004B93" rx="1"/>
                  </svg>
                </button>
              </div>
              <button class="ppl-location-btn" id="locate-me">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" stroke="#004B93" stroke-width="1.5" fill="none"/>
                  <circle cx="12" cy="12" r="4" fill="#004B93"/>
                  <rect x="11" y="0" width="2" height="4.5" fill="#004B93" rx="1"/>
                  <rect x="11" y="19.5" width="2" height="4.5" fill="#004B93" rx="1"/>
                  <rect x="0" y="11" width="4.5" height="2" fill="#004B93" rx="1"/>
                  <rect x="19.5" y="11" width="4.5" height="2" fill="#004B93" rx="1"/>
                </svg>
              </button>
            </div>

            <div class="ppl-map-attribution">
              <div class="attribution-text">
                © OpenStreetMap contributors | © OpenMapTiles
              </div>
            </div>
          </div>
          <div class="detail-vm-panel" style="display: none;">
            <div class="hlavni-info">
                <div class="nazev">
                    <div class="ikona-a-nazev">
                        <svg class="typ-vm" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 0L0 9.5V24H24V9.5L12 0ZM12 2.89L20.89 10H3.11L12 2.89ZM22 22H14V14H10V22H2V10.82L12 3.18L22 10.82V22Z" fill="#004B93"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10.96L12 0L24 10.96V24H0V10.96ZM12 2.89L20.89 10H3.11L12 2.89ZM22 22H14V14H10V22H2V10.82L12 3.18L22 10.82V22Z" fill="#D3072A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.73177 11.35C3.73177 11.35 4.87177 11.35 5.57177 11.35C6.27177 11.35 7.15177 11.35 7.15177 11.35C7.15177 11.35 7.15177 12.59 7.15177 13.06C7.15177 13.53 7.15177 13.88 7.15177 13.88C7.15177 13.88 7.15177 15.65 7.15177 17.07C7.15177 18.49 7.15177 22 7.15177 22C7.15177 22 8.52177 22 9.04177 22C9.56177 22 10.8718 22 10.8718 22C10.8718 22 10.8718 18.59 10.8718 17.07C10.8718 15.55 10.8718 13.88 10.8718 13.88C10.8718 13.88 10.8718 13.53 10.8718 13.06C10.8718 12.59 10.8718 11.35 10.8718 11.35C10.8718 11.35 12.0118 11.35 12.7118 11.35C13.4118 11.35 14.2918 11.35 14.2918 11.35C14.2918 11.35 14.2918 12.59 14.2918 13.06C14.2918 13.53 14.2918 13.88 14.2918 13.88C14.2918 13.88 14.2918 15.65 14.2918 17.07C14.2918 18.49 14.2918 22 14.2918 22C14.2918 22 15.6618 22 16.1818 22C16.7018 22 18.0118 22 18.0118 22C18.0118 22 18.0118 18.59 18.0118 17.07C18.0118 15.55 18.0118 13.88 18.0118 13.88C18.0118 13.88 18.0118 13.53 18.0118 13.06C18.0118 12.59 18.0118 11.35 18.0118 11.35C18.0118 11.35 19.1518 11.35 19.8518 11.35C20.5518 11.35 21.4318 11.35 21.4318 11.35C21.4318 11.35 21.4318 12.59 21.4318 13.06C21.4318 13.53 21.4318 13.88 21.4318 13.88C21.4318 13.88 21.4318 15.65 21.4318 17.07C21.4318 18.49 21.4318 22 21.4318 22C21.4318 22 22 22 22 22V10H1.99999V22H3.73177Z" fill="#D3072A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9997 22H7.42969V14.0016H11.9997V22Z" fill="#D3072A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5703 22H12.0003V14.0016H16.5703V22Z" fill="#D3072A"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 11.35H20.0002V10.15L12.0002 4.00001L4.0002 10.15V11.35H12.0002Z" fill="#D3072A"/>
                        </svg>
                        <h4 class="nazev-vm">Název výdejního místa</h4>
                    </div>
                    <div class="bezbarierove">
                        <div class="frame-35">
                            <div class="frame-1000003615">
                                <svg class="vector" width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0" y="0" width="14" height="20" fill="#004B93"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="frame-1000003654">
                    <div class="vzdalenost">
                        <p>320 m</p>
                    </div>
                    <div class="elipsa"></div>
                    <div class="adresa">
                        <p>Hybernská 1013/34, Praha</p>
                    </div>
                </div>
                <div class="otevreno-a-kapacita">
                    <div class="frame-1000003626">
                        <div class="oteviraci-doba">
                            <div class="frame-1000003595">
                                <div class="frame-12">
                                    <div class="frame-40">
                                        <div class="frame-35">
                                            <p>Otevřeno do 11:00</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="kapacita">
                            <div class="frame-35">
                                <div class="dhl-icon-box1">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.99999 21.9998L11.9997 1.99988L21.9997 21.9998H1.99999ZM12.0003 3.65988L4.00032 20.3399H20.0003L12.0003 3.65988Z" fill="#92400B"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 11.9997H1.99999V20.3397H12.0002V11.9997Z" fill="#D3072A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 11.9997H22.0002V20.3397H12.0002V11.9997Z" fill="#D3072A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 11.9997H1.99999V20.3397H12.0002V11.9997Z" fill="#D3072A"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0002 11.9997H22.0002V20.3397H12.0002V11.9997Z" fill="#D3072A"/>
                                    </svg>
                                </div>
                                <p>Částečně plné</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ppl-action-section">
                <div class="ppl-action-card route">
                    <div class="ppl-action-icon"></div>
                    <span class="ppl-action-text">Trasa</span>
                </div>

                <div class="ppl-action-card storage-time">
                    <div class="ppl-action-icon"></div>
                    <span class="ppl-action-text value">7 DNÍ</span>
                    <span class="ppl-action-text">Úložní doba</span>
                </div>

                <div class="ppl-action-card pickup-delivery">
                    <div class="ppl-action-icon"></div>
                    <span class="ppl-action-text">Příjem i výdej zásilek</span>
                </div>

                <div class="ppl-action-card share">
                    <div class="ppl-action-icon"></div>
                    <span class="ppl-action-text">Sdílet</span>
                </div>
            </div>

            <div class="opening-hours-section">
                  <p class="section-title">Otevírací doba</p>
                  <div class="opening-hours-day-row">
                      <span class="loading-text">Načítám otevírací dobu...</span>
                  </div>
                  <div class="divider"></div>
              </div>
            <button class="zavrit">
                <svg class="icons-close-20" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.58579L15.6569 2.92893L17.0711 4.34315L11.4142 10L17.0711 15.6569L15.6569 17.0711L10 11.4142L4.34315 17.0711L2.92893 15.6569L8.58579 10L2.92893 4.34315L4.34315 2.92893L10 8.58579Z" fill="#02213F"/>
                </svg>
            </button>
          </div>
          <!-- NOVÉ: Panel toggle button - mimo sidebar -->
          <button class="ppl-panel-toggle" id="panel-toggle" title="Skrýt/zobrazit panel">
            <svg class="ppl-panel-toggle-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
        </div>
      </div>`;
  }

 

        async init() {
        console.log('🔍 INIT START: Widget initialization beginning');
        
        // Základní nastavení komponent (mapa, eventy...)
        this.initMap();
        this.bindEvents();
        this.initSearchFeatures();
        this.initializeCountryFilter();
        setTimeout(() => {
          this.bindZoomControls();
        }, 100);
      
        console.log('🔍 INIT: About to start geolocation flow');
        
        // Toto je teď jediná věc, která se na konci startu stane.
        // Počkáme, dokud se celý proces geolokace nedokončí.
        await this.initGeolocationFlow();
        
        console.log('🔍 INIT END: Widget initialization complete');
      }

     initGeolocationFlow() {
      // Vracíme Promise, abychom mohli v init() použít await a počkat na výsledek
      return new Promise((resolve) => {
        if (!navigator.geolocation) {
          console.log('Geolokace není podporována.');
          this.handleGeolocationDenied().then(resolve);
          return;
        }
    
        console.log('Žádám o polohu...');
        navigator.geolocation.getCurrentPosition(
          // Callback pro ÚSPĚCH (uživatel povolil)
          (position) => this.handleGeolocationAllowed(position).then(resolve),
          // Callback pro CHYBU (uživatel zamítnul)
          () => this.handleGeolocationDenied().then(resolve),
          { timeout: 10000 } // Timeout pro případ, že by to trvalo moc dlouho
        );
      });
    }

      async handleGeolocationAllowed(position) {
      console.log('Poloha získána:', position.coords);
      const { latitude, longitude } = position.coords;
    
      const container = this.container.querySelector('.ppl-results');
      if (container) {
        container.innerHTML = `<div class="ppl-loading">Vyhledávám nejbližší místa...</div>`;
      }
    
      // Načteme všechna data z API
      await this.loadAccessPoints();
    
      if (this.allAccessPoints.length > 0) {
        const nearbyPoints = this.findNearbyAccessPoints(latitude, longitude, 15);
    
        if (nearbyPoints.length > 0) {
          console.log(`Nalezeno ${nearbyPoints.length} blízkých bodů.`);
          this.currentAccessPoints = nearbyPoints;
          this.renderAll(); // Vykreslíme jen blízké body
          this.map.setView([latitude, longitude], 12);
        } else {
          await this.handleGeolocationDenied();
        }
      }
    }

      async handleGeolocationDenied() {
      console.log('Geolokace zamítnuta nebo se nezdařila.');
      const container = this.container.querySelector('.ppl-results');
      if (!container) return;
    
      // 1. Zobrazíme v levém panelu výzvu a KONČÍME!
      const promptMessage =
        this.translations[this.currentLanguage].geolocationPrompt;
      container.innerHTML = `<div class="ppl-loading" style="padding: 40px 20px;">${promptMessage}</div>`;
    
      // 2. Načteme data POUZE pro mapu (bez vykreslení seznamu)
        if (this.allAccessPoints.length === 0) {
          // Nastav flag PŘED načítáním, aby loadAccessPoints nevykreslilo seznam
          this.geolocationDenied = true;
          await this.loadAccessPoints();
        }
    
      // 3. NESTAVÍME currentAccessPoints! Jen zobrazíme markery
      this.renderMarkers();
      this.fitMapToPoints();
      this.hideGlobalLoading();
      
      // 4. ZABRÁNÍME jakémukoli dalšímu vykreslování seznamu
      console.log('🔍 handleGeolocationDenied: DOKONČENO, flag nastaven na true');
    }
  
  bindZoomControls() {
    try {
      console.log('Binding zoom controls...');
      const mapContainer = this.container.querySelector('.ppl-map-container');

      if (!mapContainer) {
        console.warn('Map container not found');
        return;
      }

      mapContainer.addEventListener('click', (e) => {
        const zoomInBtn = e.target.closest('#zoom-in');
        const zoomOutBtn = e.target.closest('#zoom-out');
        const locateBtn = e.target.closest('#locate-me');

        if (zoomInBtn) {
          e.preventDefault();
          e.stopPropagation();
          if (this.map) {
            this.map.zoomIn();
          }
        } else if (zoomOutBtn) {
          e.preventDefault();
          e.stopPropagation();
          if (this.map) {
            this.map.zoomOut();
          }
        } else if (locateBtn) {
          e.preventDefault();
          e.stopPropagation();
          this.locateUser();
        }
      });
    } catch (error) {
      console.error('Error binding zoom controls:', error);
    }
  }

  initMap() {
    const mapElement = this.container.querySelector('.ppl-map');

    // Country-specific map centers
    const countryCenters = {
      DE: [51.1657, 10.4515], // Německo střed
      PL: [51.9194, 19.1451], // Polsko střed
      CZ: [49.7437, 15.3386], // Česko střed
      SK: [48.669, 19.699], // Slovensko střed
    };

    const countryZooms = {
      DE: 6, // Větší země = menší zoom
      PL: 6,
      CZ: 7, // Menší země = větší zoom
      SK: 7,
    };

    // Použij country-specific centrum pokud není specifikováno v data atributech
    let mapCenter = this.config.center;
    let mapZoom = this.config.zoom;

    // Pokud není specifikováno centrum v HTML, použij country default
    if (
      this.config.center[0] === 49.7437 &&
      this.config.center[1] === 15.3386
    ) {
      // Je to default CZ centrum, takže můžeme změnit podle země
      mapCenter = countryCenters[this.country] || this.config.center;
      mapZoom = countryZooms[this.country] || this.config.zoom;
    }

    console.log(
      `🗺️ Initializing map for ${this.country} at center:`,
      mapCenter,
      'zoom:',
      mapZoom
    );

    this.map = L.map(mapElement, {
      zoomControl: false,
      attributionControl: false,
    }).setView(mapCenter, mapZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '',
    }).addTo(this.map);

    // Optimalizované event listenery pro mapu
    this.map.on('zoomend', () => {
      this.updateClustering();
    });

    this.map.on('moveend', () => {
      this.scheduleViewportUpdate();
    });

    // Inicializuj viewport tracking
    this.lastViewport = this.getCurrentViewport();
    this.lastZoom = this.map.getZoom();
  }

  async getAccessToken() {
    console.log('🔑 TOKEN REQUEST DEBUG:');
    console.log('Current token exists:', !!this.accessToken);
    console.log(
      'Token expiry:',
      this.tokenExpiry ? new Date(this.tokenExpiry) : 'NO EXPIRY'
    );
    console.log(
      'Token still valid:',
      this.tokenExpiry ? Date.now() < this.tokenExpiry : 'UNKNOWN'
    );

    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      console.log('✅ Using cached token');
      return this.accessToken;
    }

    try {
      console.log('🔄 Requesting new token...');
      console.log('Token URL:', this.config.oauth.tokenUrl);
      console.log('Client ID:', this.config.oauth.clientId);
      console.log(
        'Client Secret:',
        this.config.oauth.clientSecret ? '***HIDDEN***' : 'MISSING'
      );

      const response = await fetch(this.config.oauth.tokenUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          grant_type: 'client_credentials',
          client_id: this.config.oauth.clientId,
          client_secret: this.config.oauth.clientSecret,
          scope: this.config.oauth.scope,
        }),
      });

      console.log('🔑 Token response status:', response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(
          '❌ Token request failed:',
          response.status,
          response.statusText
        );
        console.error('❌ Token error body:', errorText);
        throw new Error(`OAuth selhalo: ${response.status}`);
      }

      const data = await response.json();
      console.log('✅ Token received');
      console.log('Token type:', data.token_type);
      console.log('Expires in:', data.expires_in, 'seconds');
      console.log(
        'Token preview:',
        data.access_token
          ? data.access_token.substring(0, 20) + '...'
          : 'NO TOKEN'
      );

      this.accessToken = data.access_token;
      this.tokenExpiry = Date.now() + data.expires_in * 1000;

      return this.accessToken;
    } catch (error) {
      console.error('PPL Widget: Chyba při získávání tokenu:', error);
      throw error;
    }
  }

  async testDifferentAuthMethods(baseUrl, countryCode) {
    const token = await this.getAccessToken();

    console.log('🧪 TESTING DIFFERENT AUTH METHODS WITH DHL API KEY:');

    const authMethods = [
      {
        name: 'DHL API Key + Bearer token',
        headers: {
          Authorization: `Bearer ${token}`,
          'dhl-api-key': this.config.dhlApiKey,
          Accept: 'application/json',
          'Cache-Control': 'no-cache',
        },
      },
      {
        name: 'Only DHL API Key',
        headers: {
          'dhl-api-key': this.config.dhlApiKey,
          Accept: 'application/json',
        },
      },
      {
        name: 'Only Bearer token',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        },
      },
      {
        name: 'DHL API Key as Authorization',
        headers: {
          Authorization: this.config.dhlApiKey,
          Accept: 'application/json',
        },
      },
      {
        name: 'No auth',
        headers: {
          Accept: 'application/json',
        },
      },
    ];

    const testUrl = `${baseUrl}?country=${countryCode.toLowerCase()}&limit=1&offset=0`;

    for (const method of authMethods) {
      try {
        console.log(`🧪 Testing: ${method.name}`);
        console.log(`   Headers:`, method.headers);

        const response = await fetch(testUrl, { headers: method.headers });

        console.log(`   Status: ${response.status}`);

        if (response.ok) {
          console.log(`✅ SUCCESS with ${method.name}!`);
          const data = await response.text();
          console.log(`   Response preview:`, data.substring(0, 200));
          return method;
        } else if (response.status === 401) {
          console.log(`❌ 401 Unauthorized with ${method.name}`);
        } else if (response.status === 403) {
          console.log(`❌ 403 Forbidden with ${method.name}`);
        } else {
          console.log(`❌ Error ${response.status} with ${method.name}`);
        }
      } catch (error) {
        console.log(`❌ Exception with ${method.name}:`, error.message);
      }
    }

    return null;
  }

  async getTotalItemsCount(token) {
    const countryCode = this.country || 'CZ';

    console.log('🔑 TOKEN DEBUG INFO:');
    console.log('Token exists:', !!token);
    console.log('DHL API Key exists:', !!this.config.dhlApiKey);
    console.log(
      'DHL API Key preview:',
      this.config.dhlApiKey
        ? this.config.dhlApiKey.substring(0, 10) + '...'
        : 'NO KEY'
    );

    // Zkus preview API s DHL API key + Bearer token
    try {
      const previewUrl = `${
        this.config.previewApiUrl
      }?country=${countryCode.toLowerCase()}&limit=1&offset=0`;

      const headers = {
        Authorization: `Bearer ${token}`,
        'dhl-api-key': this.config.dhlApiKey,
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      };

      console.log('🔍 TESTING Preview API URL:', previewUrl);
      console.log('🔍 TESTING Preview API Headers:', headers);

      const response = await this.fetchWithRetry(previewUrl, { headers });

      console.log('🔍 TESTING Preview API Response status:', response.status);
      console.log('🔍 TESTING Preview API Response headers:', [
        ...response.headers.entries(),
      ]);

      if (response.ok) {
        const totalItemsHeader = response.headers.get(
          'X-Paging-Total-Items-Count'
        );

        if (totalItemsHeader) {
          const totalCount = parseInt(totalItemsHeader, 10);
          console.log(
            `✅ Preview API SUCCESS: ${totalCount} access points for ${countryCode}`
          );
          return totalCount;
        } else {
          console.warn(
            '⚠️ Preview API: Missing X-Paging-Total-Items-Count header'
          );
          const data = await response.json();
          console.log('🔍 Preview API Response body sample:', data);
          return data.totalItems || data.length || 0;
        }
      } else {
        console.error(
          '❌ Preview API HTTP Error:',
          response.status,
          response.statusText
        );
        const errorText = await response.text();
        console.error('❌ Preview API Error body:', errorText);
      }
    } catch (error) {
      console.error('❌ Preview API Exception:', error);
    }

    // Fallback na původní funkční API
    console.log('🔄 Falling back to original MyAPI2...');
    try {
      const fallbackUrl = `${this.config.fallbackPreviewUrl}/accessPoint?Offset=0&CountryCode=${countryCode}&Limit=1`;

      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };

      console.log('🔍 TESTING Fallback URL:', fallbackUrl);
      const response = await this.fetchWithRetry(fallbackUrl, { headers });

      console.log('🔍 TESTING Fallback Response status:', response.status);

      if (response.ok) {
        const totalItemsHeader = response.headers.get(
          'X-Paging-Total-Items-Count'
        );

        if (totalItemsHeader) {
          const totalCount = parseInt(totalItemsHeader, 10);
          console.log(
            `✅ Fallback API SUCCESS: ${totalCount} access points for ${countryCode}`
          );
          return totalCount;
        }

        const data = await response.json();
        return data.totalItems || data.dataItems?.length || 0;
      }
    } catch (error) {
      console.error('❌ Fallback API failed:', error);
    }

    throw new Error(`Failed to get total items count for ${countryCode}`);
  }

  async loadDataInBatches(token, totalCount, totalRequests) {
    const allData = [];
    let processedRequests = 0;

    const updateProgress = () => {
      const progress = Math.round((processedRequests / totalRequests) * 100);
      console.log(
        `Loading progress: ${processedRequests}/${totalRequests} (${progress}%)`
      );
      this.updateLoadingMessage(progress);
    };

    for (
      let startIndex = 0;
      startIndex < totalRequests;
      startIndex += this.config.concurrentRequests
    ) {
      const endIndex = Math.min(
        startIndex + this.config.concurrentRequests,
        totalRequests
      );
      const batchPromises = [];

      for (let i = startIndex; i < endIndex; i++) {
        const offset = i * this.config.batchSize;
        const limit = Math.min(this.config.batchSize, totalCount - offset);

        if (limit <= 0) break;

        const promise = this.fetchAccessPointsBatch(
          token,
          offset,
          limit,
          i + 1
        );
        batchPromises.push(promise);
      }

      console.log(
        `Executing batch ${
          Math.floor(startIndex / this.config.concurrentRequests) + 1
        }: requests ${startIndex + 1}-${endIndex}`
      );

      const batchResults = await Promise.allSettled(batchPromises);

      batchResults.forEach((result, index) => {
        processedRequests++;

        if (result.status === 'fulfilled') {
          allData.push(...result.value);
          console.log(
            `✓ Request ${startIndex + index + 1} completed successfully (${
              result.value.length
            } items)`
          );
        } else {
          console.error(
            `✗ Request ${startIndex + index + 1} failed:`,
            result.reason
          );
        }
      });

      updateProgress();

      if (endIndex < totalRequests) {
        await this.delay(200);
      }
    }
    console.log(
      `Data loading completed. Total items loaded: ${allData.length}`
    );
    return allData;
  }

  async fetchAccessPointsBatch(token, offset, limit, requestNumber) {
    const countryCode = this.country || 'CZ';

    // Zkus preview API s DHL API key + Bearer token
    try {
      const previewUrl = `${
        this.config.previewApiUrl
      }?country=${countryCode.toLowerCase()}&limit=${limit}&offset=${offset}`;

      const headers = {
        Authorization: `Bearer ${token}`,
        'dhl-api-key': this.config.dhlApiKey,
        Accept: 'application/json',
        'Cache-Control': 'no-cache',
      };

      console.log(
        `Request ${requestNumber}: Fetching ${limit} items from offset ${offset} for ${countryCode} (Preview API with DHL key)`
      );

      const response = await this.fetchWithRetry(previewUrl, { headers });

      if (response.ok) {
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.dataItems || [];

        console.log(
          `Request ${requestNumber}: Received ${items.length} items for ${countryCode} (Preview API)`
        );
        return items;
      } else {
        console.warn(
          `Request ${requestNumber}: Preview API failed with ${response.status}: ${response.statusText}`
        );
      }
    } catch (error) {
      console.warn(
        `Request ${requestNumber}: Preview API failed:`,
        error.message
      );
    }

    // Fallback na původní MyAPI2
    try {
      const fallbackUrl = `${this.config.fallbackPreviewUrl}/accessPoint?Offset=${offset}&CountryCode=${countryCode}&Limit=${limit}`;

      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      };

      console.log(
        `Request ${requestNumber}: Fetching ${limit} items from offset ${offset} for ${countryCode} (Fallback MyAPI2)`
      );

      const response = await this.fetchWithRetry(fallbackUrl, { headers });

      if (response.ok) {
        const data = await response.json();
        const items = Array.isArray(data) ? data : data.dataItems || [];

        console.log(
          `Request ${requestNumber}: Received ${items.length} items for ${countryCode} (Fallback)`
        );
        return items;
      }
    } catch (error) {
      console.error(`Request ${requestNumber}: Fallback failed:`, error);
    }

    throw new Error(
      `API request ${requestNumber} failed for both Preview and Fallback APIs: ${countryCode}`
    );
  }

  async fetchWithRetry(url, options, retryCount = 0) {
    try {
      const response = await fetch(url, options);

      if (response.ok || (response.status >= 400 && response.status < 500)) {
        return response;
      }

      if (retryCount < this.config.maxRetries) {
        console.warn(
          `Request failed with ${response.status}, retrying... (${
            retryCount + 1
          }/${this.config.maxRetries})`
        );
        await this.delay(this.config.retryDelay * (retryCount + 1));
        return this.fetchWithRetry(url, options, retryCount + 1);
      }

      return response;
    } catch (error) {
      if (retryCount < this.config.maxRetries) {
        console.warn(
          `Request failed with error, retrying... (${retryCount + 1}/${
            this.config.maxRetries
          })`,
          error.message
        );
        await this.delay(this.config.retryDelay * (retryCount + 1));
        return this.fetchWithRetry(url, options, retryCount + 1);
      }

      throw error;
    }
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  updateLoadingMessage(progress) {
    // Aktualizuj POUZE globální loading
    if (progress !== undefined) {
      this.updateGlobalLoadingProgress(progress, 'Načítám výdejní místa...');
    }

    // Sidebar loading bez procent
    const resultsContainer = this.container.querySelector('.ppl-results');
    if (resultsContainer) {
      resultsContainer.innerHTML = `
        <div class="ppl-loading">
          <div class="ppl-loading-spinner"></div>
          <div class="ppl-loading-text">Načítám výdejní místa</div>
          <div class="ppl-loading-subtext">Připravuji mapu pro váš region...</div>
        </div>
      `;
    }
  }

  handleLoadError(error) {
    const resultsContainer = this.container.querySelector('.ppl-results');
    if (resultsContainer) {
      resultsContainer.innerHTML = `<div class="ppl-loading">${
        this.translations[this.currentLanguage].loadError
      }</div>`;
    }
  }

  setLoadingConfig(config) {
    this.config = {
      ...this.config,
      ...config,
    };

    console.log('Loading configuration updated:', {
      batchSize: this.config.batchSize,
      concurrentRequests: this.config.concurrentRequests,
      maxRetries: this.config.maxRetries,
      retryDelay: this.config.retryDelay,
    });
  }
  // === VELKÝ FILTR METODY ===

  /**
   * Zobrazí velký filtr
   */
  showBigFilter() {
    console.log('🔧 Zobrazuji velký filtr');

    // Skryj výsledky
    const resultsContainer = this.container.querySelector('.ppl-results');
    if (resultsContainer) {
      resultsContainer.style.display = 'none';
    }

    // Synchronizuj stav weekend toggle
    const weekendToggle = this.container.querySelector('#weekend-toggle');
    if (weekendToggle) {
      weekendToggle.checked = this.activeFilters.has('weekend');
    }

    // Synchronizuj stav open toggle
    const openToggle = this.container.querySelector('#open-toggle');
    if (openToggle) {
      openToggle.checked = this.activeFilters.has('open');
    }

    // PŘIDÁNO: Synchronizuj country checkboxy
    const countryCheckboxes = {
      CZ: this.container.querySelector('#country-cz-filter'),
      SK: this.container.querySelector('#country-sk-filter'),
      DE: this.container.querySelector('#country-de-filter'),
      PL: this.container.querySelector('#country-pl-filter'),
    };

    Object.entries(countryCheckboxes).forEach(([country, checkbox]) => {
      if (checkbox) {
        checkbox.checked = this.selectedCountries.has(country);
      }
    });

    // Zobraz velký filtr
    const bigFilter = this.container.querySelector('.ppl-big-filter');
    if (bigFilter) {
      bigFilter.style.display = 'block';

      // Malé zpoždění pro animaci
      setTimeout(() => {
        bigFilter.classList.add('show');
      }, 10);
    }
    this.updateFilterCountBadge();
  }

  /**
   * Skryje velký filtr
   */
  hideBigFilter() {
    console.log('🔧 Skrývám velký filtr');

    const bigFilter = this.container.querySelector('.ppl-big-filter');
    if (bigFilter) {
      bigFilter.classList.remove('show');

      // Počkej na dokončení animace a pak skryj
      setTimeout(() => {
        bigFilter.style.display = 'none';

        // Zobraz zpět výsledky
        const resultsContainer = this.container.querySelector('.ppl-results');
        if (resultsContainer) {
          resultsContainer.style.display = 'block';
        }
      }, 300); // 300ms = délka CSS transition
    }
    this.updateFilterCountBadge();
  }

  /**
   * Načte detailní informace pro konkrétní výdejní místo
   */
  async loadPointDetails(pointId, token) {
    console.log(`🔍 LOAD POINT DETAILS - START`);
    console.log(`🔍 Point ID: ${pointId}`);
    console.log(`🔍 Working endpoint index: ${this.workingDetailEndpoint}`);

    // Zkusíme správné endpointy podle dokumentace
    const detailEndpoints = [
      // HLAVNÍ: /AccessPoint/{id} podle dokumentace
      `${this.config.detailApiUrl}/${pointId}`,
      // Fallback: původní MyAPI2
      `${this.config.apiBaseUrl}/accessPoint/${pointId}`,
      // Alternativa: možná lowercase
      `https://api-dev.dhl.com/ecs/ppl/webapi/psmaps/accesspoint/${pointId}`,
    ];

    for (let i = 0; i < detailEndpoints.length; i++) {
      const detailUrl = detailEndpoints[i];

      try {
        console.log(
          `🔍 Trying endpoint ${i + 1}/${detailEndpoints.length}: ${detailUrl}`
        );

        // Pro webapi endpointy potřebujeme DHL API key
        const headers = detailUrl.includes('webapi')
          ? {
              Authorization: `Bearer ${token}`,
              'dhl-api-key': this.config.dhlApiKey,
              Accept: 'application/json',
              'Cache-Control': 'no-cache',
            }
          : {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            };

        const response = await this.fetchWithRetry(detailUrl, { headers });
        console.log(`🔍 Response status: ${response.status}`);

        if (response.ok) {
          const detailData = await response.json();
          console.log(
            `✅ Details loaded for point: ${pointId} using endpoint ${i + 1}`
          );
          console.log(`📋 COMPLETE DETAIL DATA:`, detailData);
          console.log(`📋 WorkHours in detail:`, detailData.workHours);
          console.log(`📋 Opening hours in detail:`, detailData.openingHours);

          // Uložíme který endpoint funguje
          if (this.workingDetailEndpoint === undefined) {
            this.workingDetailEndpoint = i;
            console.log(`💾 Saved working endpoint index: ${i} (${detailUrl})`);
          }

          return detailData;
        } else {
          const errorText = await response.text();
          console.warn(
            `⚠️ Endpoint ${i + 1} failed with ${response.status}: ${errorText}`
          );
        }
      } catch (error) {
        console.warn(`⚠️ Endpoint ${i + 1} threw error:`, error.message);
      }
    }

    console.error(`❌ All detail endpoints failed for point: ${pointId}`);
    return null;
  }

  /**
   * Načte detaily pro více výdejních míst najednou
   */
  async loadMultiplePointDetails(pointIds, token) {
    console.log(`🔄 Loading details for ${pointIds.length} points...`);

    // Pokud už víme který endpoint funguje, použij jen ten
    if (this.workingDetailEndpoint !== undefined) {
      return this.loadDetailsWithWorkingEndpoint(pointIds, token);
    }

    // Jinak zkus všechny pro první bod, pak použij fungující
    const detailPromises = pointIds.map((id) =>
      this.loadPointDetails(id, token)
    );
    const results = await Promise.allSettled(detailPromises);

    const details = {};
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        details[pointIds[index]] = result.value;
      }
    });

    console.log(
      `✅ Loaded details for ${Object.keys(details).length}/${
        pointIds.length
      } points`
    );
    return details;
  }

  async loadDetailsWithWorkingEndpoint(pointIds, token) {
    const detailEndpointBases = [
      this.config.detailApiUrl, // /AccessPoint/{id}
      this.config.apiBaseUrl + '/accessPoint', // fallback
      'https://api-dev.dhl.com/ecs/ppl/webapi/psmaps/accesspoint', // lowercase
    ];

    const baseUrl = detailEndpointBases[this.workingDetailEndpoint];
    const isWebapi = baseUrl.includes('webapi');

    console.log(
      `⚡ Using known working endpoint: ${baseUrl} (index ${this.workingDetailEndpoint})`
    );

    const headers = isWebapi
      ? {
          Authorization: `Bearer ${token}`,
          'dhl-api-key': this.config.dhlApiKey,
          Accept: 'application/json',
          'Cache-Control': 'no-cache',
        }
      : {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        };

    const details = {};

    // Načti detaily pro každý bod
    for (const pointId of pointIds) {
      try {
        const detailUrl = `${baseUrl}/${pointId}`;

        console.log(`🔍 Loading detail: ${detailUrl}`);
        const response = await this.fetchWithRetry(detailUrl, { headers });

        if (response.ok) {
          const detailData = await response.json();
          details[pointId] = detailData;
          console.log(`✅ Detail loaded: ${pointId}`);
        } else {
          console.warn(
            `⚠️ Failed to load detail for ${pointId}: ${response.status}`
          );
        }
      } catch (error) {
        console.warn(
          `⚠️ Exception loading detail for ${pointId}:`,
          error.message
        );
      }

      // Malá pauza mezi requesty
      await this.delay(50);
    }

    return details;
  }

  async debugDetailEndpoints(samplePointId, token) {
    console.log('🔍 DEBUGGING DETAIL ENDPOINTS (CORRECT API PATHS)...');

    const testEndpoints = [
      // SPRÁVNÉ endpointy podle dokumentace
      `${this.config.detailApiUrl}/${samplePointId}`,
      `https://api-dev.dhl.com/ecs/ppl/webapi/psmaps/AccessPoint/${samplePointId}`,

      // Možné varianty case-sensitivity
      `https://api-dev.dhl.com/ecs/ppl/webapi/psmaps/accesspoint/${samplePointId}`,
      `https://api-dev.dhl.com/ecs/ppl/webapi/psmaps/accessPoint/${samplePointId}`,

      // Fallback MyAPI2
      `${this.config.apiBaseUrl}/accessPoint/${samplePointId}`,
      `${this.config.apiBaseUrl}/accessPoints/${samplePointId}`,

      // Jiné možné varianty
      `https://api-dev.dhl.com/ecs/ppl/webapi/AccessPoint/${samplePointId}`,
      `https://api-dev.dhl.com/ecs/ppl/webapi/psmaps/Access-Point/${samplePointId}`,
    ];

    for (let i = 0; i < testEndpoints.length; i++) {
      const testUrl = testEndpoints[i];

      try {
        console.log(
          `🧪 Testing detail endpoint ${i + 1}/${
            testEndpoints.length
          }: ${testUrl}`
        );

        const headers = testUrl.includes('webapi')
          ? {
              Authorization: `Bearer ${token}`,
              'dhl-api-key': this.config.dhlApiKey,
              Accept: 'application/json',
              'Cache-Control': 'no-cache',
            }
          : {
              Authorization: `Bearer ${token}`,
              Accept: 'application/json',
            };

        const response = await fetch(testUrl, { headers });

        console.log(`🧪 Endpoint ${i + 1} status: ${response.status}`);

        if (response.ok) {
          const data = await response.json();
          console.log(`✅ WORKING DETAIL ENDPOINT FOUND: ${testUrl}`);
          console.log(`📋 Response keys:`, Object.keys(data));
          console.log(`📋 Sample response:`, data);

          // Zkontroluj zda obsahuje detailní data
          const hasDetailFields =
            data.workHours ||
            data.openingHours ||
            data.street ||
            data.name ||
            data.companyName ||
            data.activeCardPayment !== undefined ||
            data.pickupEnabled !== undefined;

          if (hasDetailFields) {
            console.log(`✅ Response contains expected detail fields`);
            return { url: testUrl, index: i, data: data };
          } else {
            console.log(
              `⚠️ Response missing expected detail fields. Available:`,
              Object.keys(data)
            );
            console.log(
              `⚠️ Sample data:`,
              JSON.stringify(data, null, 2).substring(0, 500)
            );
          }
        } else {
          const errorText = await response.text();
          console.log(
            `❌ Endpoint ${i + 1} error (${
              response.status
            }): ${errorText.substring(0, 200)}`
          );
        }
      } catch (error) {
        console.log(`❌ Endpoint ${i + 1} exception:`, error.message);
      }
    }

    return null;
  }

  async testPreviewVsDetail(samplePointId, token) {
    console.log('🧪 COMPARING PREVIEW VS DETAIL ENDPOINTS...');

    const previewUrl = `${this.config.previewApiUrl}?country=cz&limit=1&offset=0`;
    const detailUrl = `${this.config.detailApiUrl}/${samplePointId}`;

    const headers = {
      Authorization: `Bearer ${token}`,
      'dhl-api-key': this.config.dhlApiKey,
      Accept: 'application/json',
      'Cache-Control': 'no-cache',
    };

    try {
      // Test Preview
      console.log(`🧪 Testing Preview: ${previewUrl}`);
      const previewResponse = await fetch(previewUrl, { headers });
      console.log(`📡 Preview status: ${previewResponse.status}`);

      if (previewResponse.ok) {
        const previewData = await previewResponse.json();
        const previewKeys =
          Array.isArray(previewData) && previewData.length > 0
            ? Object.keys(previewData[0])
            : Object.keys(previewData);
        console.log(`📡 Preview fields (${previewKeys.length}):`, previewKeys);
      }

      // Test Detail
      console.log(`🧪 Testing Detail: ${detailUrl}`);
      const detailResponse = await fetch(detailUrl, { headers });
      console.log(`📋 Detail status: ${detailResponse.status}`);

      if (detailResponse.ok) {
        const detailData = await detailResponse.json();
        const detailKeys = Object.keys(detailData);
        console.log(`📋 Detail fields (${detailKeys.length}):`, detailKeys);

        // Porovnej počet polí
        const previewFieldCount =
          Array.isArray(previewData) && previewData.length > 0
            ? Object.keys(previewData[0]).length
            : Object.keys(previewData || {}).length;

        console.log(
          `📊 Field comparison: Preview ${previewFieldCount} vs Detail ${detailKeys.length}`
        );

        if (detailKeys.length > previewFieldCount) {
          console.log(
            `✅ Detail endpoint has more fields - hybrid approach will work!`
          );
        } else {
          console.log(
            `⚠️ Detail endpoint doesn't seem to have more fields than preview`
          );
        }
      }
    } catch (error) {
      console.error(`❌ Preview vs Detail test failed:`, error);
    }
  }

  // NOVÁ VERZE, KTEROU VLOŽÍTE MÍSTO TÉ STARÉ
  transformApiData(dataItems) {
    return dataItems
      .map((item, index) => {
        // --- Část pro zjištění GPS a typu místa (zůstává stejná) ---
        let latitude = null,
          longitude = null;
        if (
          typeof item.latitude !== 'undefined' &&
          typeof item.longitude !== 'undefined'
        ) {
          latitude = parseFloat(item.latitude);
          longitude = parseFloat(item.longitude);
        } else if (item.gps && typeof item.gps === 'object') {
          latitude = parseFloat(item.gps.latitude);
          longitude = parseFloat(item.gps.longitude);
        } else if (item.gps && typeof item.gps === 'string') {
          const coords = item.gps
            .split(',')
            .map((coord) => parseFloat(coord.trim()));
          if (coords.length === 2 && !isNaN(coords[0]) && !isNaN(coords[1])) {
            [latitude, longitude] = coords;
          }
        }
        if (
          latitude === null ||
          longitude === null ||
          isNaN(latitude) ||
          isNaN(longitude)
        )
          return null;

        let pointType = 'parcelshop';
        if (item.accessPointType) {
          const typeStr = item.accessPointType.toLowerCase();
          if (
            typeStr.includes('parcelbox') ||
            typeStr.includes('box') ||
            typeStr === 'parcelbox'
          ) {
            pointType = 'parcelbox';
          } else {
            pointType = 'parcelshop';
          }
        } else if (item.type) {
          const typeStr = item.type.toLowerCase();
          pointType =
            typeStr.includes('parcelbox') || typeStr.includes('box')
              ? 'parcelbox'
              : 'parcelshop';
        } else if (item.pointType) {
          const typeStr = item.pointType.toLowerCase();
          pointType =
            typeStr.includes('parcelbox') || typeStr.includes('box')
              ? 'parcelbox'
              : 'parcelshop';
        } else if (item.name) {
          const nameStr = item.name.toLowerCase();
          if (
            nameStr.includes('parcelbox') ||
            nameStr.includes('box') ||
            nameStr.includes('automat')
          ) {
            pointType = 'parcelbox';
          }
        }
        // --- Konec části pro GPS a typ ---

        // =========================================================================
        // ZDE JE DŮLEŽITÁ ZMĚNA: Sjednocení dat o otevírací době z 'workHours'
        // =========================================================================
        let standardizedOpeningHours = [];
        // Hledáme pole 'workHours' z API
        if (item.workHours && Array.isArray(item.workHours)) {
          standardizedOpeningHours = item.workHours.map((wh) => ({
            weekDay: wh.weekDay,
            timeFrom: wh.openFrom, // Přejmenujeme 'openFrom' na 'timeFrom'
            timeTo: wh.openTo, // Přejmenujeme 'openTo' na 'timeTo'
          }));
        }
        // Ponecháme i starou logiku pro případ, že by API vrátilo jiný formát
        else if (item.openingHours && Array.isArray(item.openingHours)) {
          standardizedOpeningHours = item.openingHours;
        }
        // =========================================================================

        const activeCardPayment =
          item.activeCardPayment ||
          item.cardPayment ||
          item.canPayByCard ||
          item.payByCard ||
          false;
        const activeCashPayment =
          item.activeCashPayment ||
          item.cashPayment ||
          item.canPayByCash ||
          item.payByCash ||
          true;
        let openOnWeekend = item.openOnWeekend || item.weekendOpen || false;
        if (pointType === 'parcelbox') {
          openOnWeekend = true;
        }
        // Zkontrolujeme víkendový provoz z nově sjednocených dat
        if (standardizedOpeningHours.length > 0) {
          const hasWeekendHours = standardizedOpeningHours.some(
            (hour) =>
              parseInt(hour.weekDay) === 7 || parseInt(hour.weekDay) === 1 // sobota nebo neděle
          );
          if (hasWeekendHours) {
            openOnWeekend = true;
          }
        }
        let pickupEnabled = item.pickupEnabled || false;
        if (pointType === 'parcelshop') {
          pickupEnabled = item.pickupEnabled !== false;
        }

        const transformedItem = {
          id: item.pplKod || item.id || item.accessPointCode || `ppl_${index}`,
          name: item.name || item.nazev || item.companyName || 'Bez názvu',
          type: pointType,
          street: item.street || item.ulice || item.address || '',
          city: item.city || item.mesto || '',
          zipCode: item.zipCode || item.psc || item.zip || '',
          gps: { latitude, longitude },
          canPayByCard: item.canPayByCard || item.payByCard || false,
          openOnWeekend: openOnWeekend,
          activeCardPayment: activeCardPayment,
          activeCashPayment: activeCashPayment,
          pickupEnabled: pickupEnabled,
          accessPointType: item.accessPointType || null,
          // DŮLEŽITÉ: Uložíme původní data a přidáme naše nové sjednocené pole
          rawData: {
            ...item,
            openingHours: standardizedOpeningHours,
          },
        };

        if (index < 3) {
          // Tento log je užitečný pro kontrolu, zda se data transformovala správně
          console.log('Transformed item', index, ':', transformedItem);
        }
        return transformedItem;
      })
      .filter(Boolean);
  }

  getTypeIconSvg(type, size = 16) {
    const isParcelshop = type === 'parcelshop';

    if (isParcelshop) {
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1025 2.63135C11.5404 2.63135 10.9783 3.00398 10.9783 3.00398C10.9783 3.00398 0.531978 10.8419 0.34882 11.025C0.159347 11.025 -0.213285 11.5878 0.159347 11.9604C0.531978 12.333 0.90461 12.1436 1.09408 11.9604C1.27724 11.9604 11.5404 4.12251 11.5404 4.12251C11.5404 4.12251 11.913 3.93872 12.1025 3.93872C12.2857 3.93872 12.4751 4.12251 12.4751 4.12251C12.4751 4.12251 22.732 11.7709 22.9215 11.9604C23.2941 12.1436 23.6667 12.1436 23.8499 11.9604C24.0393 11.5878 24.0393 11.2145 23.8499 11.025C23.4772 10.8419 20.4962 8.41661 20.4962 8.41661V5.24672C20.4962 4.86714 20.4962 4.68398 20.1236 4.68398H17.6983C17.1362 4.68398 17.1362 5.05661 17.1362 5.05661V5.99135L13.2204 3.00398C13.2204 3.00398 12.6583 2.63135 12.1025 2.63135ZM12.1024 5.51166C11.5466 5.51166 10.9845 5.88429 10.9845 5.88429L3.72764 11.6317V19.6079C3.72764 21.0927 4.28343 21.2759 5.40133 21.2759H9.3108V15.8948C9.3108 15.339 9.86659 14.2275 10.9845 14.2275H12.8476C14.1487 14.2275 14.5213 15.5285 14.5213 15.8948V21.2759H18.9866C19.9213 21.2759 20.4771 21.0927 20.4771 19.7917V11.6317L13.2203 5.88429C13.2203 5.88429 12.6582 5.51166 12.1024 5.51166Z" fill="#004B93"/>
    </svg>`;
    } else {
      return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5.75037 11.2742H2.49883V8.37097H5.74781V11.2742H5.75037ZM10.9989 11.2742H7.74995V8.37097H10.9989V11.2742ZM5.75037 16.5968H2.49883V13.9355V13.6935H5.74781V16.5968H5.75037ZM10.9989 16.5968H7.74995V13.9355V13.6935H10.9989V16.5968ZM16.2475 11.2742H13.2469V9.09677V8.6129V8.37097H16.2475V11.2742ZM21.747 11.2742H18.498V9.09677V8.6129V8.37097H21.747V11.2742ZM13.997 19.5H20.7459V14.6613V14.4194H13.997V19.5ZM15.4973 4.5H1.24941C0.250907 4.5 0 5.46774 0 5.70968V17.8065V18.2903C0 18.5323 0 19.5 1.24941 19.5H13.2494V13.6935H21.7495V19.5H22.7506C23.2498 19.5 24 19.0161 24 18.2903V5.70968C24 4.74194 23.2498 4.5 22.7506 4.5H15.5025H15.4973Z" fill="#004B93"/>
    </svg>`;
    }
  }

  /**
   * Mapuje capacityStatus z API na CSS třídu
   */
  getCapacityInfo(capacityStatus) {
    if (!capacityStatus) {
      return {
        text: 'Kapacita neznámá',
        cssClass: 'capacity-unknown',
        icon: 'unknown',
      };
    }

    const statusMap = {
      Free: {
        text: 'Volné',
        cssClass: 'capacity-free',
        icon: 'free',
      },
      PartiallyFull: {
        text: 'Částečně plné',
        cssClass: 'capacity-partial',
        icon: 'partial',
      },
      Full: {
        text: 'Plné',
        cssClass: 'capacity-full',
        icon: 'full',
      },
      Blocked: {
        text: 'Nedostupné',
        cssClass: 'capacity-blocked',
        icon: 'blocked',
      },
      Maintenance: {
        text: 'Údržba',
        cssClass: 'capacity-maintenance',
        icon: 'maintenance',
      },
    };

    const result = statusMap[capacityStatus] || statusMap['Free'];

    console.log(
      `🔋 Capacity mapping: ${capacityStatus} → ${result.text} (${result.cssClass})`
    );
    return result;
  }

  /**
   * Vrací SVG ikonu podle stavu kapacity
   */
  getCapacityIcon(iconType) {
    const colorMap = {
      free: '#017957', // Zelená pro volné
      partial: '#92400B', // Oranžová pro částečně plné
      full: '#D40511', // Červená pro plné
      blocked: '#D40511', // Červená pro nedostupné
      maintenance: '#92400B', // Oranžová pro údržbu
      unknown: '#004B93', // Modrá pro neznámé
    };

    const fillColor = colorMap[iconType] || colorMap['unknown'];

    return `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.20946 5.5L1.10308 10.6472H17.4997L22.795 5.5H6.20946ZM0 19.8387H17.28V11.8115H0V19.8387ZM18.4444 11.5867L23.5916 6.41905V13.8182L18.4444 18.9195V11.5867Z" fill="${fillColor}"/>
      </svg>`;
  }

  createSingleMarkerIcon(type, isSelected = false) {
    const isParcelshop = type === 'parcelshop';

    if (isSelected) {
      const selectedSvg = isParcelshop
        ? `<svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_1165_10836" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.5C2.23858 0.5 0 2.73858 0 5.5V35.5C0 38.2614 2.23858 40.5 5 40.5H14.2265L19.134 49C19.5189 49.6667 20.4811 49.6667 20.866 49L25.7735 40.5H35C37.7614 40.5 40 38.2614 40 35.5V5.5C40 2.73858 37.7614 0.5 35 0.5H5Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.5C2.23858 0.5 0 2.73858 0 5.5V35.5C0 38.2614 2.23858 40.5 5 40.5H14.2265L19.134 49C19.5189 49.6667 20.4811 49.6667 20.866 49L25.7735 40.5H35C37.7614 40.5 40 38.2614 40 35.5V5.5C40 2.73858 37.7614 0.5 35 0.5H5Z" fill="white"/>
        <path d="M14.2265 40.5L15.0925 40L14.8038 39.5H14.2265V40.5ZM19.134 49L18.2679 49.5L19.134 49ZM20.866 49L20 48.5L20.866 49ZM25.7735 40.5V39.5H25.1962L24.9075 40L25.7735 40.5ZM1 5.5C1 3.29086 2.79086 1.5 5 1.5V-0.5C1.68629 -0.5 -1 2.18629 -1 5.5H1ZM1 35.5V5.5H-1V35.5H1ZM5 39.5C2.79086 39.5 1 37.7091 1 35.5H-1C-1 38.8137 1.68629 41.5 5 41.5V39.5ZM14.2265 39.5H5V41.5H14.2265V39.5ZM20 48.5L15.0925 40L13.3605 41L18.2679 49.5L20 48.5ZM20 48.5H20L18.2679 49.5C19.0377 50.8333 20.9622 50.8333 21.732 49.5L20 48.5ZM24.9075 40L20 48.5L21.732 49.5L26.6395 41L24.9075 40ZM35 39.5H25.7735V41.5H35V39.5ZM39 35.5C39 37.7091 37.2091 39.5 35 39.5V41.5C38.3137 41.5 41 38.8137 41 35.5H39ZM39 5.5V35.5H41V5.5H39ZM35 1.5C37.2091 1.5 39 3.29086 39 5.5H41C41 2.18629 38.3137 -0.5 35 -0.5V1.5ZM5 1.5H35V-0.5H5V1.5Z" fill="#004B93" mask="url(#path-1-inside-1_1165_10836)"/>
        <g clip-path="url(#clip0_1165_10836)" transform="translate(3, 5) scale(0.8)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.1025 12.6314C19.5404 12.6314 18.9783 13.004 18.9783 13.004C18.9783 13.004 8.53198 20.8419 8.34882 21.025C8.15935 21.025 7.78671 21.5878 8.15935 21.9604C8.53198 22.333 8.90461 22.1436 9.09408 21.9604C9.27724 21.9604 19.5404 14.1225 19.5404 14.1225C19.5404 14.1225 19.913 13.9387 20.1025 13.9387C20.2857 13.9387 20.4751 14.1225 20.4751 14.1225C20.4751 14.1225 30.732 21.7709 30.9215 21.9604C31.2941 22.1436 31.6667 22.1436 31.8499 21.9604C32.0393 21.5878 32.0393 21.2145 31.8499 21.025C31.4772 20.8419 28.4962 18.4166 28.4962 18.4166V15.2467C28.4962 14.8671 28.4962 14.684 28.1236 14.684H25.6983C25.1362 14.684 25.1362 15.0566 25.1362 15.0566V15.9914L21.2204 13.004C21.2204 13.004 20.6583 12.6314 20.1025 12.6314ZM20.1024 15.5117C19.5466 15.5117 18.9845 15.8843 18.9845 15.8843L11.7276 21.6317V29.6079C11.7276 31.0927 12.2834 31.2759 13.4013 31.2759H17.3108V25.8948C17.3108 25.339 17.8666 24.2275 18.9845 24.2275H20.8476C22.1487 24.2275 22.5213 25.5285 22.5213 25.8948V31.2759H26.9866C27.9213 31.2759 28.4771 31.0927 28.4771 29.7917V21.6317L21.2203 15.8843C21.2203 15.8843 20.6582 15.5117 20.1024 15.5117Z" fill="#004B93"/>
        </g>
        <defs>
          <clipPath id="clip0_1165_10836">
            <rect width="23.6842" height="18" fill="white" transform="translate(8 11.5)"/>
          </clipPath>
        </defs>
      </svg>`
        : `<svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_1165_10836" fill="white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.5C2.23858 0.5 0 2.73858 0 5.5V35.5C0 38.2614 2.23858 40.5 5 40.5H14.2265L19.134 49C19.5189 49.6667 20.4811 49.6667 20.866 49L25.7735 40.5H35C37.7614 40.5 40 38.2614 40 35.5V5.5C40 2.73858 37.7614 0.5 35 0.5H5Z"/>
        </mask>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0.5C2.23858 0.5 0 2.73858 0 5.5V35.5C0 38.2614 2.23858 40.5 5 40.5H14.2265L19.134 49C19.5189 49.6667 20.4811 49.6667 20.866 49L25.7735 40.5H35C37.7614 40.5 40 38.2614 40 35.5V5.5C40 2.73858 37.7614 0.5 35 0.5H5Z" fill="white"/>
        <path d="M14.2265 40.5L15.0925 40L14.8038 39.5H14.2265V40.5ZM19.134 49L18.2679 49.5L19.134 49ZM20.866 49L20 48.5L20.866 49ZM25.7735 40.5V39.5H25.1962L24.9075 40L25.7735 40.5ZM1 5.5C1 3.29086 2.79086 1.5 5 1.5V-0.5C1.68629 -0.5 -1 2.18629 -1 5.5H1ZM1 35.5V5.5H-1V35.5H1ZM5 39.5C2.79086 39.5 1 37.7091 1 35.5H-1C-1 38.8137 1.68629 41.5 5 41.5V39.5ZM14.2265 39.5H5V41.5H14.2265V39.5ZM20 48.5L15.0925 40L13.3605 41L18.2679 49.5L20 48.5ZM20 48.5H20L18.2679 49.5C19.0377 50.8333 20.9622 50.8333 21.732 49.5L20 48.5ZM24.9075 40L20 48.5L21.732 49.5L26.6395 41L24.9075 40ZM35 39.5H25.7735V41.5H35V39.5ZM39 35.5C39 37.7091 37.2091 39.5 35 39.5V41.5C38.3137 41.5 41 38.8137 41 35.5H39ZM39 5.5V35.5H41V5.5H39ZM35 1.5C37.2091 1.5 39 3.29086 39 5.5H41C41 2.18629 38.3137 -0.5 35 -0.5V1.5ZM5 1.5H35V-0.5H5V1.5Z" fill="#004B93" mask="url(#path-1-inside-1_1165_10836)"/>
        <g clip-path="url(#clip0_1165_10836)" transform="translate(1, 0) scale(1.0)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 21.2742H11.4988V19.371H13.7478V21.2742H13.75ZM17.9989 21.2742H15.7500V19.371H17.9989V21.2742ZM13.75 24.5968H11.4988V22.9355V22.6935H13.7478V24.5968H13.75ZM17.9989 24.5968H15.7500V22.9355V22.6935H17.9989V24.5968ZM22.2475 21.2742H20.2469V20.0968V19.6129V19.371H22.2475V21.2742ZM25.747 21.2742H23.498V20.0968V19.6129V19.371H25.747V21.2742ZM21.997 27.5H26.7459V25.6613V25.4194H21.997V27.5ZM22.4973 16.5H10.2494C9.25091 16.5 9 17.4677 9 17.7097V25.8065V26.2903C9 26.5323 9 27.5 10.2494 27.5H21.2494V25.6935H25.7495V27.5H26.7506C27.2498 27.5 28 27.0161 28 26.2903V17.7097C28 16.7419 27.2498 16.5 26.7506 16.5H22.5025H22.4973Z" fill="#004B93"/>
        </g>
        <defs>
          <clipPath id="clip0_1165_10836">
            <rect width="23.6842" height="18" fill="white" transform="translate(8 11.5)"/>
          </clipPath>
        </defs>
      </svg>`;

      return L.divIcon({
        html: selectedSvg,
        className: 'single-marker selected-marker',
        iconSize: [40, 50],
        iconAnchor: [20, 50],
      });
    } else {
      const normalSvg = isParcelshop
        ? `<svg width="32" height="39" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H11.3812L15.134 38.5C15.5189 39.1667 16.4811 39.1667 16.866 38.5L20.6188 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0H5Z" fill="#004B93"/>
      <g clip-path="url(#clip0_841_4919)" transform="translate(3, 5) scale(0.8)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.1025 2.63135C15.5404 2.63135 14.9783 3.00398 14.9783 3.00398C14.9783 3.00398 4.53198 10.8419 4.34882 11.025C4.15935 11.025 3.78671 11.5878 4.15935 11.9604C4.53198 12.333 4.90461 12.1436 5.09408 11.9604C5.27724 11.9604 15.5404 4.12251 15.5404 4.12251C15.5404 4.12251 15.913 3.93872 16.1025 3.93872C16.2857 3.93872 16.4751 4.12251 16.4751 4.12251C16.4751 4.12251 26.732 11.7709 26.9215 11.9604C27.2941 12.1436 27.6667 12.1436 27.8499 11.9604C28.0393 11.5878 28.0393 11.2145 27.8499 11.025C27.4772 10.8419 24.4962 8.41661 24.4962 8.41661V5.24672C24.4962 4.86714 24.4962 4.68398 24.1236 4.68398H21.6983C21.1362 4.68398 21.1362 5.05661 21.1362 5.05661V5.99135L17.2204 3.00398C17.2204 3.00398 16.6583 2.63135 16.1025 2.63135ZM16.1024 5.51166C15.5466 5.51166 14.9845 5.88429 14.9845 5.88429L7.72764 11.6317V19.6079C7.72764 21.0927 8.28343 21.2759 9.40133 21.2759H13.3108V15.8948C13.3108 15.339 13.8666 14.2275 14.9845 14.2275H16.8476C18.1487 14.2275 18.5213 15.5285 18.5213 15.8948V21.2759H22.9866C23.9213 21.2759 24.4771 21.0927 24.4771 19.7917V11.6317L17.2203 5.88429C17.2203 5.88429 16.6582 5.51166 16.1024 5.51166Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_841_4919">
          <rect width="24" height="19" fill="white" transform="translate(4 2)"/>
        </clipPath>
      </defs>
    </svg>`
        : `<svg width="32" height="39" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M5 0C2.23858 0 0 2.23858 0 5V27C0 29.7614 2.23858 32 5 32H11.3812L15.134 38.5C15.5189 39.1667 16.4811 39.1667 16.866 38.5L20.6188 32H27C29.7614 32 32 29.7614 32 27V5C32 2.23858 29.7614 0 27 0H5Z" fill="#004B93"/>
      <g clip-path="url(#clip0_841_4920)" transform="translate(3, 5) scale(0.8)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.834 14.6841H9.66606V12.6766H11.8323V14.6841H11.834ZM15.3334 14.6841H13.1672V12.6766H15.3334V14.6841ZM11.834 18.3645H9.66606V16.5243V16.357H11.8323V18.3645H11.834ZM15.3334 18.3645H13.1672V16.5243V16.357H15.3334V18.3645ZM18.8328 14.6841H16.8322V13.1785V12.8439V12.6766H18.8328V14.6841ZM22.4995 14.6841H20.3333V13.1785V12.8439V12.6766H22.4995V14.6841ZM17.3323 20.3719H21.8321V17.0261V16.8589H17.3323V20.3719ZM18.3327 10H8.83303C8.16729 10 8 10.6692 8 10.8364V19.2009V19.5355C8 19.7028 8 20.3719 8.83303 20.3719H16.8339V16.357H22.5012V20.3719H23.1687C23.5015 20.3719 24.0017 20.0373 24.0017 19.5355V10.8364C24.0017 10.1673 23.5015 10 23.1687 10H18.3361H18.3327Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_841_4920">
          <rect width="16" height="10.3719" fill="white" transform="translate(8 10)"/>
        </clipPath>
      </defs>
    </svg>`;

      return L.divIcon({
        html: normalSvg,
        className: 'single-marker',
        iconSize: [32, 39],
        iconAnchor: [16, 39],
      });
    }
  }

  renderResults() {
  // DEBUG: Kdo volá renderResults?
  console.trace('🔍 renderResults() was called from:');
  console.log('🔍 geolocationDenied flag:', this.geolocationDenied);
  console.log('🔍 currentAccessPoints length:', this.currentAccessPoints.length);
  
  const container = this.container.querySelector('.ppl-results');
  if (!container) return;

    if (this.currentAccessPoints.length === 0) {
      container.innerHTML = `<div class="ppl-loading">${
        this.translations[this.currentLanguage].noResults
      }</div>`;
      return;
    }

    const limitedPoints = this.currentAccessPoints.slice(
      0,
      this.config.maxResultsInSidebar
    );

    console.log(
      `📊 Rendering ${limitedPoints.length} points (${
        limitedPoints.filter((p) => p.detailsLoaded).length
      } with details)`
    );

    container.innerHTML = limitedPoints
      .map((point, index) => {
        const isLoadingDetails = this.loadingDetails.has(point.id);
        const hasDetails = point.detailsLoaded;

        // Základní rendering (stejný jako před tím)
        const isParcelshop = point.type === 'parcelshop';
        const iconSvg = this.getTypeIconSvg(point.type, 16);

        // Pokud nemáme detaily, použij základní hodnoty
        const hasCardPayment = hasDetails ? point.activeCardPayment : false;
        const isOpenOnWeekend = hasDetails
          ? this.checkWeekendOperation(point)
          : point.type === 'parcelbox';
        const hasPickupEnabled = hasDetails
          ? point.pickupEnabled
          : point.type === 'parcelshop';

        const openingStatus = hasDetails ? this.getOpeningStatus(point) : null;

        // Quick cards jen pokud máme detaily
        const quickCards = [];

        if (hasDetails) {
          // Standardní quick cards (stejné jako před tím)
          if (hasCardPayment) {
            quickCards.push(`
              <div class="quick-card card-payment">
                <div class="quick-card-content">
                  <div class="quick-card-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="6" width="20" height="12" rx="2" stroke="#505E6C" fill="none"/>
                      <rect x="2" y="8" width="20" height="2" fill="#505E6C"/>
                      <rect x="4" y="12" width="6" height="1" fill="#505E6C"/>
                    </svg>
                  </div>
                  <span class="quick-card-text">Platba kartou</span>
                </div>
              </div>
            `);
          }

          if (isOpenOnWeekend && point.type !== 'parcelbox') {
            quickCards.push(`
              <div class="quick-card weekend-open">
                <div class="quick-card-content">
                  <div class="quick-card-icon">
                    <svg width="10" height="11" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 3h10v10H2V3z" stroke="#505E6C" fill="none"/>
                      <path d="M4 1v2M10 1v2M2 5h10" stroke="#505E6C" fill="none"/>
                    </svg>
                  </div>
                  <span class="quick-card-text">Otevřeno o víkendu</span>
                </div>
              </div>
            `);
          }

          if (hasPickupEnabled) {
            quickCards.push(`
              <div class="quick-card pickup-enabled">
                <div class="quick-card-content">
                  <div class="quick-card-icon">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="#505E6C" stroke-width="1.5" fill="none"/>
                      <path d="M2 17l10 5 10-5" stroke="#505E6C" stroke-width="1.5" fill="none"/>
                      <path d="M2 12l10 5 10-5" stroke="#505E6C" stroke-width="1.5" fill="none"/>
                    </svg>
                  </div>
                  <span class="quick-card-text">Podání zásilky</span>
                </div>
              </div>
            `);
          }
        } else if (isLoadingDetails) {
          // Loading card
          quickCards.push(`
            <div class="quick-card loading">
              <div class="quick-card-content">
                <div class="quick-card-icon">
                  <div style="width: 12px; height: 12px; border: 2px solid #e0e0e0; border-top: 2px solid #004b93; border-radius: 50%; animation: spin 1s linear infinite;"></div>
                </div>
                <span class="quick-card-text">Načítám...</span>
              </div>
            </div>
          `);
        }

        return `
          <div class="ppl-result-item ${
            !hasDetails ? 'loading-details' : ''
          }" data-id="${point.id}">
            <div class="ppl-result-header">
              <div style="display: flex; align-items: center; flex: 1; min-width: 0;">
                <div class="ppl-type-icon">
                  ${iconSvg}
                </div>
                <div class="ppl-result-name" title="${point.name}">${
          point.name
        }</div>
              </div>
              <button class="ppl-select-btn" data-id="${point.id}">
                <span>${
                  this.translations[this.currentLanguage].selectBtn
                }</span>
              </button>
            </div>
            <div class="ppl-result-details">
              <div class="ppl-result-address">${point.street}, ${
          point.zipCode
        } ${point.city}</div>
              ${
                hasDetails && openingStatus
                  ? `<div class="ppl-result-opening-hours ${openingStatus.status}">
                      ${openingStatus.text}
                    </div>`
                  : !hasDetails
                  ? `<div class="ppl-result-opening-hours loading">
                      ${
                        isLoadingDetails
                          ? 'Načítám otevírací dobu...'
                          : 'Otevírací doba se načítá'
                      }
                    </div>`
                  : ''
              }
              ${
                quickCards.length > 0
                  ? `
                <div class="ppl-quick-cards">
                  ${quickCards.join('')}
                </div>
              `
                  : ''
              }
            </div>
          </div>
        `;
      })
      .join('');
  }

  getOpeningStatus(point) {
    // Parcelbox je vždy nonstop
    if (point.type === 'parcelbox') {
      return {
        status: 'nonstop',
        text: 'Otevřeno nonstop',
      };
    }

    // Kontrola, zda máme vůbec nějaká data o otevírací době
    if (
      !point.rawData ||
      !point.rawData.openingHours ||
      !Array.isArray(point.rawData.openingHours) ||
      point.rawData.openingHours.length === 0
    ) {
      console.log(
        `No opening hours data for ${point.name}, considering it closed for "Open Now" filter.`
      );
      return false; // Změna: Pokud chybí data, považujeme za zavřené pro tento filtr
    }

    const now = new Date();
    const currentDay = now.getDay(); // 0 = neděle, 1 = pondělí, ..., 6 = sobota
    const currentTime = now.getHours() * 60 + now.getMinutes(); // minuty od půlnoci
    const apiWeekDay = currentDay === 0 ? 1 : currentDay + 1;

    // Zpracování více směn během dne
    const todayIntervals = point.rawData.openingHours.filter(
      (hour) => parseInt(hour.weekDay) === apiWeekDay
    );

    // Pokud pro dnešek nejsou žádné záznamy, je zavřeno
    if (todayIntervals.length === 0) {
      const nextOpenDay = this.findNextOpenDay(
        point.rawData.openingHours,
        apiWeekDay
      );
      if (nextOpenDay) {
        return {
          status: 'closed',
          text: `Zavřeno do ${nextOpenDay}`,
        };
      }
      return null; // Nenalezen žádný další otevřený den
    }

    // Zpracujeme všechny dnešní směny
    let earliestOpen = 24 * 60; // Nejčasnější otevření
    let latestClose = 0; // Nejpozdější zavření
    let isOpenNow = false; // Příznak, zda je právě teď otevřeno

    todayIntervals.forEach((interval) => {
      const openTime = this.parseTime(interval.timeFrom);
      const closeTime = this.parseTime(interval.timeTo);

      if (openTime !== null && closeTime !== null) {
        if (openTime < earliestOpen) earliestOpen = openTime;
        if (closeTime > latestClose) latestClose = closeTime;
        // Zjistíme, jestli aktuální čas spadá do tohoto intervalu
        if (currentTime >= openTime && currentTime < closeTime) {
          isOpenNow = true;
        }
      }
    });

    // Finální vyhodnocení stavu na základě všech směn
    if (isOpenNow) {
      // Je otevřeno, zobrazíme čas nejpozdějšího zavření
      const closeTimeFormatted = this.formatTime(
        Math.floor(latestClose / 60),
        latestClose % 60
      );
      const isClosingSoon =
        latestClose - currentTime > 0 && latestClose - currentTime <= 60;
      const statusClass = isClosingSoon ? 'closing' : 'open';
      const statusText = isClosingSoon ? 'Zavírá v' : 'Otevřeno do';

      return {
        status: statusClass,
        text: `${statusText} ${closeTimeFormatted}`,
      };
    } else if (currentTime < earliestOpen) {
      // Ještě není otevřeno, ale dnes otevře
      const openTimeFormatted = this.formatTime(
        Math.floor(earliestOpen / 60),
        earliestOpen % 60
      );
      return {
        status: 'closed',
        text: `Otevře v ${openTimeFormatted}`,
      };
    } else {
      // Dnes už je po pracovní době
      const nextOpenDay = this.findNextOpenDay(
        point.rawData.openingHours,
        apiWeekDay
      );
      if (nextOpenDay) {
        return {
          status: 'closed',
          text: `Zavřeno do ${nextOpenDay}`,
        };
      }
      return null;
    }
  }

  /**
   * Generuje HTML pro sekci otevírací doby v detail panelu.
   * @param {Object} point - Objekt výdejního místa s rawData.openingHours.
   * @returns {string} HTML řetězec nebo prázdný řetězec.
   */
  generateOpeningHoursHtml(point) {
    console.log('🕒 === GENERATE OPENING HOURS HTML ===');
    console.log('🕒 Point name:', point.name);
    console.log('🕒 Point.rawData exists:', !!point.rawData);
    console.log('🕒 Point.rawData.openingHours:', point.rawData?.openingHours);
    console.log('🕒 Point.detailData exists:', !!point.detailData);
    console.log('🕒 Point.detailData.openHours:', point.detailData?.openHours);

    // Nejdřív zkus rawData.openingHours (už zpracované)
    let openingHours = null;
    if (
      point.rawData &&
      point.rawData.openingHours &&
      point.rawData.openingHours.length > 0
    ) {
      console.log('🕒 Using rawData.openingHours (processed)');
      openingHours = point.rawData.openingHours;
    }

    console.log('🕒 Final openingHours to use:', openingHours);

    if (!openingHours || openingHours.length === 0) {
      console.log('🕒 No opening hours data available');
      return null;
    }

    const dayNames = {
      2: 'Pondělí',
      3: 'Úterý',
      4: 'Středa',
      5: 'Čtvrtek',
      6: 'Pátek',
      7: 'Sobota',
      1: 'Neděle',
    };

    const today = new Date();
    const currentApiWeekDay = today.getDay() === 0 ? 1 : today.getDay() + 1;

    // Vytvoř mapu pro snadný přístup k intervalům podle dne
    const dailyIntervals = openingHours.reduce((acc, interval) => {
      const day = parseInt(interval.weekDay);
      if (!acc[day]) acc[day] = [];
      acc[day].push(interval);
      return acc;
    }, {});

    console.log('🕒 Daily intervals:', dailyIntervals);

    let html = '';
    const dayOrder = [2, 3, 4, 5, 6, 7, 1];

    for (const day of dayOrder) {
      const intervals = dailyIntervals[day] || [];
      const dayName = dayNames[day];
      const isToday = day === currentApiWeekDay;
      const highlightClass = isToday ? 'highlight' : '';

      let timeHtml = '';
      if (intervals.length > 0) {
        intervals.sort(
          (a, b) =>
            this.parseTime(a.timeFrom || a.openFrom) -
            this.parseTime(b.timeTo || b.openTo)
        );
        timeHtml = intervals
          .map((interval) => {
            // Zkus oba formáty
            const timeFrom = interval.timeFrom || interval.openFrom;
            const timeTo = interval.timeTo || interval.openTo;

            const fromTime = this.parseTime(timeFrom);
            const toTime = this.parseTime(timeTo);

            if (fromTime === null || toTime === null) {
              console.warn(`🕒 Invalid time format: ${timeFrom} - ${timeTo}`);
              return '';
            }

            const from = this.formatTime(
              Math.floor(fromTime / 60),
              fromTime % 60
            );
            const to = this.formatTime(Math.floor(toTime / 60), toTime % 60);
            return `<span class="opening-hours-time">${from} - ${to}</span>`;
          })
          .filter(Boolean)
          .join(' ');
      } else {
        timeHtml = `<span class="closed-text">Zavřeno</span>`;
      }

      html += `
            <div class="opening-hours-day-row ${highlightClass}">
                <span class="opening-hours-day-name">${dayName}</span>
                ${timeHtml}
            </div>
        `;
    }

    console.log('🕒 Generated HTML length:', html.length);
    return html;
  }

  parseTime(timeString) {
    if (!timeString || typeof timeString !== 'string') {
      return null;
    }

    // Formáty: "HH:MM", "HH:MM:SS", nebo jen "HHMM"
    const cleanTime = timeString.trim();
    let hours, minutes;

    if (cleanTime.includes(':')) {
      const parts = cleanTime.split(':');
      hours = parseInt(parts[0], 10);
      minutes = parseInt(parts[1], 10);
    } else if (cleanTime.length === 4) {
      // Format HHMM
      hours = parseInt(cleanTime.substring(0, 2), 10);
      minutes = parseInt(cleanTime.substring(2, 4), 10);
    } else {
      return null;
    }

    if (
      isNaN(hours) ||
      isNaN(minutes) ||
      hours < 0 ||
      hours > 23 ||
      minutes < 0 ||
      minutes > 59
    ) {
      return null;
    }

    return hours * 60 + minutes;
  }

  formatTime(hours, minutes) {
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`;
  }

  findNextOpenDay(openingHours, currentApiWeekDay) {
    const dayNames = {
      1: 'neděli', // neděle
      2: 'pondělí', // pondělí
      3: 'úterý', // úterý
      4: 'středu', // středa
      5: 'čtvrtek', // čtvrtek
      6: 'pátek', // pátek
      7: 'sobotu', // sobota
    };

    // Hledej další otevřený den (max 7 dní dopředu)
    for (let i = 1; i <= 7; i++) {
      let nextDay = currentApiWeekDay + i;
      if (nextDay > 7) {
        nextDay = nextDay - 7;
      }

      const nextDayHours = openingHours.find(
        (hour) => parseInt(hour.weekDay) === nextDay
      );

      if (nextDayHours && nextDayHours.timeFrom && nextDayHours.timeTo) {
        const openTime = this.parseTime(nextDayHours.timeFrom);
        if (openTime !== null) {
          const openTimeFormatted = this.formatTime(
            Math.floor(openTime / 60),
            openTime % 60
          );
          return `${dayNames[nextDay]} ${openTimeFormatted}`;
        }
      }
    }

    return null;
  }

  /**
   * Kontroluje, zda je výdejní místo aktuálně otevřeno
   */
  checkCurrentlyOpen(point) {
    // Parcelbox je vždy otevřený (24/7)
    if (point.type === 'parcelbox') {
      return true;
    }

    // DŮLEŽITÁ ZMĚNA ZDE:
    // Pokud nemáme detailní data otevírací doby, NEMŮŽEME potvrdit, že je otevřeno.
    // Pro účely filtru "Pouze otevřená" je proto bezpečnější považovat takové místo za zavřené.
    if (
      !point.rawData ||
      !point.rawData.openingHours ||
      !Array.isArray(point.rawData.openingHours) ||
      point.rawData.openingHours.length === 0
    ) {
      console.log(
        `No opening hours data for ${point.name}, considering it closed for "Open Now" filter.`
      );
      return false; // Změna: Pokud chybí data, považujeme za zavřené pro tento filtr
    }

    const now = new Date();
    const currentDay = now.getDay(); // 0 = neděle, 1 = pondělí, ..., 6 = sobota
    const currentTime = now.getHours() * 60 + now.getMinutes(); // minuty od půlnoci
    const apiWeekDay = currentDay === 0 ? 1 : currentDay + 1; // API formát: 1=Ne, 2=Po, ... 7=So

    // Najdi dnešní otevírací hodiny
    const todayIntervals = point.rawData.openingHours.filter(
      (hour) => parseInt(hour.weekDay) === apiWeekDay
    );

    // Pokud pro dnešek nejsou žádné záznamy, je zavřeno
    if (todayIntervals.length === 0) {
      console.log(
        `${point.name} has no opening hours defined for today, so it's closed.`
      );
      return false;
    }

    // Zkontroluj, zda aktuální čas spadá do některého z intervalů
    let isOpenNow = false;

    todayIntervals.forEach((interval) => {
      const openTime = this.parseTime(interval.timeFrom);
      const closeTime = this.parseTime(interval.timeTo);

      if (openTime !== null && closeTime !== null) {
        // Speciální případ: zavírací čas je dříve než otevírací (přes půlnoc)
        if (openTime > closeTime) {
          // Pokud je aktuální čas po openTime nebo před closeTime (následující den)
          if (currentTime >= openTime || currentTime < closeTime) {
            isOpenNow = true;
            console.log(
              `${point.name} is open now (overnight: ${interval.timeFrom}-${interval.timeTo})`
            );
          }
        } else {
          // Standardní případ: otevřeno během jednoho dne
          if (currentTime >= openTime && currentTime < closeTime) {
            isOpenNow = true;
            console.log(
              `${point.name} is open now (${interval.timeFrom}-${interval.timeTo})`
            );
          }
        }
      }
    });

    if (!isOpenNow) {
      console.log(`${point.name} is currently closed.`);
    }

    return isOpenNow;
  }

  checkWeekendOperation(point) {
    // Pokud je explicitně nastaveno
    if (point.openOnWeekend !== undefined) {
      return point.openOnWeekend;
    }

    // Parcelboxy jsou obvykle 24/7
    if (point.type === 'parcelbox') {
      return true;
    }

    // Kontrola raw dat z API pro víkendové hodiny
    if (
      point.rawData &&
      point.rawData.openingHours &&
      Array.isArray(point.rawData.openingHours)
    ) {
      const hours = point.rawData.openingHours;

      // Hledej víkendové dny
      // weekDay: 1 = neděle, 7 = sobota (ověř si podle skutečných dat z API)
      const hasWeekendHours = hours.some((hour) => {
        const day = parseInt(hour.weekDay);
        return day === 1 || day === 7; // neděle nebo sobota
      });

      if (hasWeekendHours) {
        console.log(
          `Point ${point.name} has weekend hours:`,
          hours.filter((h) => h.weekDay === 1 || h.weekDay === 7)
        );
        return true;
      }
    }

    // Alternativní kontrola podle různých vlastností z API
    if (point.rawData) {
      const data = point.rawData;

      // Možné vlastnosti pro víkendový provoz
      if (
        data.weekendOpen ||
        data.openWeekend ||
        data.saturdayOpen ||
        data.sundayOpen
      ) {
        return true;
      }

      // Kontrola podle názvu - někdy obsahuje info o víkendu
      if (point.name && point.name.toLowerCase().includes('24')) {
        return true;
      }
    }

    console.log(`Point ${point.name} - no weekend operation detected`);
    return false;
  }

  initializeCountryFilter() {
    const countryCheckboxes = {
      CZ: this.container.querySelector('#country-cz-filter'),
      SK: this.container.querySelector('#country-sk-filter'),
      DE: this.container.querySelector('#country-de-filter'),
      PL: this.container.querySelector('#country-pl-filter'),
    };

    // Nastav jen výchozí zemi jako checked
    Object.entries(countryCheckboxes).forEach(([country, checkbox]) => {
      if (checkbox) {
        checkbox.checked = country === this.defaultCountry;
      }
    });

    // Selectedcountries obsahuje jen výchozí zemi
    this.selectedCountries.clear();
    this.selectedCountries.add(this.defaultCountry);

    console.log(`✅ Country filter initialized for: ${this.defaultCountry}`);
  }

  bindEvents() {
    this.container
      .querySelector('.ppl-search-input')
      .addEventListener('input', () => this.applyFilters());

    this.container.querySelectorAll('.ppl-filter-btn').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        const filter = e.currentTarget.dataset.filter;
        this.activeFilters.has(filter)
          ? this.activeFilters.delete(filter)
          : this.activeFilters.add(filter);
        this.applyFilters();
      });
    });

    this.container.querySelectorAll('.ppl-quick-filter').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.currentTarget.dataset.filter;

        if (filter === 'type') {
          this.toggleTypeDropdown();
          return;
        }

        if (filter === 'payment') {
          this.togglePaymentDropdown();
          return;
        }

        if (filter === 'all') {
          const bigFilter = this.container.querySelector('.ppl-big-filter');
          const isVisible = bigFilter && bigFilter.classList.contains('show');

          if (isVisible) {
            this.hideBigFilter();
          } else {
            this.showBigFilter();
          }
          return;
        } else {
          this.closeTypeDropdown();
          this.closePaymentDropdown();

          if (filter === 'weekend') {
            const weekendButton = e.currentTarget;
            const isCurrentlyActive =
              weekendButton.classList.contains('active');

            if (isCurrentlyActive) {
              weekendButton.classList.remove('active');
              this.activeFilters.delete('weekend');
              this.activeQuickFilters.delete('weekend');

              const weekendToggle =
                this.container.querySelector('#weekend-toggle');
              if (weekendToggle) {
                weekendToggle.checked = false;
              }

              if (this.activeQuickFilters.size === 0) {
                const allButton = this.container.querySelector(
                  '.ppl-quick-filter.all-filters'
                );
                if (allButton) {
                  allButton.classList.add('active');
                  this.activeQuickFilters.add('all');
                }
              }
            } else {
              this.container
                .querySelectorAll('.ppl-quick-filter')
                .forEach((f) => {
                  f.classList.remove('active');
                });

              weekendButton.classList.add('active');
              this.activeQuickFilters.clear();
              this.activeQuickFilters.add('weekend');
              this.activeFilters.add('weekend');

              const weekendToggle =
                this.container.querySelector('#weekend-toggle');
              if (weekendToggle) {
                weekendToggle.checked = true;
              }
            }
          } else {
            this.container
              .querySelectorAll('.ppl-quick-filter')
              .forEach((f) => {
                f.classList.remove('active');
              });

            e.currentTarget.classList.add('active');
            this.activeQuickFilters.clear();
            this.activeQuickFilters.add(filter);
          }
        }

        this.applyFilters();
      });
    });

    const languageButton = this.container.querySelector('#language-button');
    if (languageButton) {
      languageButton.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggleLanguageDropdown();
      });
    }

    // PŮVODNÍ LANGUAGE OPTION HANDLING (beze změny)
    this.container.addEventListener('click', (e) => {
      if (e.target.closest('.ppl-language-option')) {
        const languageOption = e.target.closest('.ppl-language-option');
        const selectedLang = languageOption.dataset.lang;

        this.closeLanguageDropdown();
        this.changeLanguage(selectedLang);
      }
    });

    this.container.addEventListener('change', (e) => {
      if (e.target.id === 'weekend-toggle') {
        if (e.target.checked) {
          this.activeFilters.add('weekend');
          const weekendQuickFilter = this.container.querySelector(
            '.ppl-quick-filter.weekend-filter'
          );
          if (weekendQuickFilter) {
            this.container
              .querySelectorAll('.ppl-quick-filter')
              .forEach((f) => f.classList.remove('active'));
            weekendQuickFilter.classList.add('active');
            this.activeQuickFilters.clear();
            this.activeQuickFilters.add('weekend');
          }
        } else {
          this.activeFilters.delete('weekend');
          this.activeQuickFilters.delete('weekend');

          const weekendQuickFilter = this.container.querySelector(
            '.ppl-quick-filter.weekend-filter'
          );
          if (weekendQuickFilter) {
            weekendQuickFilter.classList.remove('active');
          }

          const allButton = this.container.querySelector(
            '.ppl-quick-filter.all-filters'
          );
          if (allButton) {
            allButton.classList.add('active');
            this.activeQuickFilters.add('all');
          }
        }
        this.clearCache('viewport');
        this.applyFilters();
        this.updateFilterCountBadge();
      }

      if (e.target.id === 'capacity-toggle') {
        console.log('🔋 CAPACITY TOGGLE CLICKED:', e.target.checked);

        if (e.target.checked) {
          this.activeFilters.add('capacity');
          console.log('🔋 Added capacity to activeFilters');
        } else {
          this.activeFilters.delete('capacity');
          console.log('🔋 Removed capacity from activeFilters');
        }

        console.log(
          '🔋 Current activeFilters:',
          Array.from(this.activeFilters)
        );

        this.clearCache('viewport');
        this.applyFilters();
        this.updateFilterCountBadge();
      }

      if (e.target.id === 'open-toggle') {
        if (e.target.checked) {
          this.activeFilters.add('open');
        } else {
          this.activeFilters.delete('open');
        }
        this.clearCache('viewport');
        this.applyFilters();
        this.updateFilterCountBadge();
      }

      if (e.target.id === 'pickup-toggle') {
        if (e.target.checked) {
          this.activeFilters.add('pickup');
        } else {
          this.activeFilters.delete('pickup');
        }
        this.clearCache('viewport');
        this.applyFilters();
        this.updateFilterCountBadge();
      }

      if (e.target.type === 'checkbox' && e.target.dataset.type) {
        const type = e.target.dataset.type;
        if (e.target.checked) {
          this.selectedTypes.add(type);
        } else {
          this.selectedTypes.delete(type);
        }

        this.clearCache('viewport');
        this.applyFilters();
      }

      if (e.target.type === 'checkbox' && e.target.dataset.payment) {
        const payment = e.target.dataset.payment;
        if (e.target.checked) {
          this.selectedPayments.add(payment);
        } else {
          this.selectedPayments.delete(payment);
        }

        this.clearCache('viewport');
        this.applyFilters();
      }
    });

    document.addEventListener('click', (e) => {
      const typeFilter = this.container.querySelector(
        '.ppl-quick-filter.type-filter'
      );
      const typeDropdown = this.container.querySelector('.ppl-type-dropdown');
      const paymentFilter = this.container.querySelector(
        '.ppl-quick-filter.payment-filter'
      );
      const paymentDropdown = this.container.querySelector(
        '.ppl-payment-dropdown'
      );
      const languageButton = this.container.querySelector(
        '.ppl-language-button'
      );
      const languageDropdown = this.container.querySelector(
        '.ppl-language-dropdown'
      );

      if (
        languageButton &&
        languageDropdown &&
        !languageButton.contains(e.target) &&
        !languageDropdown.contains(e.target)
      ) {
        this.closeLanguageDropdown();
      }

      if (
        typeFilter &&
        typeDropdown &&
        !typeFilter.contains(e.target) &&
        !typeDropdown.contains(e.target)
      ) {
        this.closeTypeDropdown();
      }

      if (
        paymentFilter &&
        paymentDropdown &&
        !paymentFilter.contains(e.target) &&
        !paymentDropdown.contains(e.target)
      ) {
        this.closePaymentDropdown();
      }
    });

    // PŮVODNÍ RESULTS HANDLING (beze změny)
    this.container
      .querySelector('.ppl-results')
      .addEventListener('click', (e) => {
        const pointId = e.target.closest('[data-id]')?.dataset.id;
        if (pointId) this.selectPoint(pointId);
      });

    // PŮVODNÍ BIG FILTER HANDLING (beze změny)
    this.container.addEventListener('click', (e) => {
      if (e.target.closest('.ppl-back-button')) {
        this.hideBigFilter();

        this.container.querySelectorAll('.ppl-quick-filter').forEach((f) => {
          f.classList.remove('active');
        });

        const allButton = this.container.querySelector(
          '.ppl-quick-filter.all-filters'
        );
        if (allButton) {
          allButton.classList.add('active');
        }

        this.activeQuickFilters.clear();
        this.activeQuickFilters.add('all');

        this.selectedTypes.clear();
        this.selectedTypes.add('parcelshop');
        this.selectedTypes.add('parcelbox');
        this.updateTypeCheckboxes();

        this.selectedPayments.clear();
        this.selectedPayments.add('card');
        this.selectedPayments.add('cash');
        this.updatePaymentCheckboxes();

        this.activeFilters.delete('weekend');
        this.activeFilters.delete('capacity');
        this.activeFilters.delete('open');
        this.activeFilters.delete('pickup');

        const toggles = [
          'weekend-toggle',
          'capacity-toggle',
          'open-toggle',
          'pickup-toggle',
        ];
        toggles.forEach((toggleId) => {
          const toggle = this.container.querySelector(`#${toggleId}`);
          if (toggle) toggle.checked = false;
        });

        // PŘIDÁNO: Reset country filter
        this.selectedCountries.clear();
        this.selectedCountries.add(this.defaultCountry);

        const countryCheckboxes = this.container.querySelectorAll(
          '[id^="country-"][id$="-filter"]'
        );
        countryCheckboxes.forEach((checkbox) => {
          const countryCode = checkbox.id
            .replace('country-', '')
            .replace('-filter', '')
            .toUpperCase();
          checkbox.checked = this.selectedCountries.has(countryCode);
        });

        this.clearCache('viewport');
        this.applyFilters();
      }
    });

    // PŮVODNÍ DETAIL CLOSE HANDLING (beze změny)
    this.container.addEventListener('click', (e) => {
      if (e.target.closest('.zavrit')) {
        this.hidePointDetail();
      }
    });

    const searchInput = this.container.querySelector('.ppl-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearchInput(e.target.value);
      });

      // PŘIDÁNO: Focus handling
      searchInput.addEventListener('focus', () => {
        const value = searchInput.value.trim();
        if (value.length >= 2) {
          this.performLiveSearch(value);
        }
      });

      searchInput.addEventListener('blur', () => {
        setTimeout(() => {
          this.hideSearchSuggestions();
        }, 200);
      });

      // PŘIDÁNO: Keyboard navigation
      searchInput.addEventListener('keydown', (e) => {
        this.handleSearchKeydown(e);
      });
    }

    // SUGGESTIONS CLICK HANDLING
    this.container.addEventListener('click', (e) => {
      const suggestionItem = e.target.closest('.ppl-suggestion-item');
      if (suggestionItem) {
        const index = parseInt(suggestionItem.dataset.index);
        if (!isNaN(index)) {
          console.log('🎯 Suggestion clicked:', index);
          this.handleSuggestionClick(index);
        }
      }
    });

    // === NOVÉ: EVENT HANDLING PRO KATEGORIE FILTRŮ ===
    this.container.addEventListener('click', (e) => {
      const categoryHeader = e.target.closest('.ppl-filter-category-header');
      if (categoryHeader) {
        const category = categoryHeader.parentElement;
        const content = category.querySelector('.ppl-filter-category-content');
        const arrow = categoryHeader.querySelector('.filter-category-arrow');

        if (content && arrow) {
          const isExpanded = content.classList.contains('expanded');

          if (isExpanded) {
            // Sbal
            content.classList.remove('expanded');
            arrow.classList.remove('expanded');
          } else {
            // Rozbal
            content.classList.add('expanded');
            arrow.classList.add('expanded');
          }
        }
      }
    });

    // Event handling pro checkboxy zemí - POUZE JEDNA ZEMĚ
    this.container.addEventListener('change', (e) => {
      if (e.target.type === 'checkbox' && e.target.id.startsWith('country-')) {
        const selectedCountry = e.target.id
          .replace('country-', '')
          .replace('-filter', '')
          .toUpperCase();

        if (e.target.checked) {
          console.log(`🌍 Country selected: ${selectedCountry}`);

          // Odznač všechny ostatní země
          const allCountryCheckboxes = this.container.querySelectorAll(
            '[id^="country-"][id$="-filter"]'
          );
          allCountryCheckboxes.forEach((checkbox) => {
            if (checkbox !== e.target) {
              checkbox.checked = false;
            }
          });

          // Nastav novou zemi
          this.selectedCountries.clear();
          this.selectedCountries.add(selectedCountry);
          this.country = selectedCountry; // Aktualizuj hlavní country property

          // Načti data pro novou zemi
          this.loadCountryData(selectedCountry);
        } else {
          // Zabraň odškrtnutí - musí být vždy jedna země
          e.target.checked = true;
          console.warn('⚠️ Musí být vybrána alespoň jedna země');
        }
      }
    });

    // Event handling pro nové checkboxy v kategoriích
    this.container.addEventListener('change', (e) => {
      // Země filtry - POUZE JEDNA ZEMĚ (delegace na hlavní handler)
      if (e.target.matches('[id^="country-"][id$="-filter"]')) {
        return;
      }

      // Platba v kategoriích (synchronizace s hlavními)
      if (e.target.id === 'payment-card-filter') {
        const mainCardCheckbox = this.container.querySelector('#filter-card');
        if (mainCardCheckbox) {
          mainCardCheckbox.checked = e.target.checked;
          mainCardCheckbox.dispatchEvent(new Event('change'));
        }
      }

      if (e.target.id === 'payment-cash-filter') {
        // Najděte správný cash checkbox
        const mainCashCheckbox = this.container.querySelector(
          '[data-payment="cash"]'
        );
        if (mainCashCheckbox) {
          mainCashCheckbox.checked = e.target.checked;
          mainCashCheckbox.dispatchEvent(new Event('change'));
        }
      }

      // Typ v kategoriích (synchronizace s hlavními)
      if (e.target.id === 'type-parcelshop-filter') {
        const mainParcelshopCheckbox =
          this.container.querySelector('#filter-parcelshop');
        if (mainParcelshopCheckbox) {
          mainParcelshopCheckbox.checked = e.target.checked;
          mainParcelshopCheckbox.dispatchEvent(new Event('change'));
        }
      }

      if (e.target.id === 'type-parcelbox-filter') {
        const mainParcelboxCheckbox =
          this.container.querySelector('#filter-parcelbox');
        if (mainParcelboxCheckbox) {
          mainParcelboxCheckbox.checked = e.target.checked;
          mainParcelboxCheckbox.dispatchEvent(new Event('change'));
        }
      }

      // Hodiny filtry
      if (e.target.id === 'hours-weekend-filter') {
        const weekendToggle = this.container.querySelector('#weekend-toggle');
        if (weekendToggle) {
          weekendToggle.checked = e.target.checked;
          weekendToggle.dispatchEvent(new Event('change'));
        }
      }

      // Nové filtry otevírací doby
      if (e.target.id === 'hours-before-9am-filter') {
        if (e.target.checked) {
          this.activeFilters.add('before9am');
        } else {
          this.activeFilters.delete('before9am');
        }
        this.clearCache('viewport');
        this.applyFilters();
        this.updateFilterCountBadge();
      }

      if (e.target.id === 'hours-after-5pm-filter') {
        if (e.target.checked) {
          this.activeFilters.add('after5pm');
        } else {
          this.activeFilters.delete('after5pm');
        }
        this.clearCache('viewport');
        this.applyFilters();
        this.updateFilterCountBadge();
      }

      if (e.target.id === 'hours-saturday-filter') {
        if (e.target.checked) {
          this.activeFilters.add('saturday');
        } else {
          this.activeFilters.delete('saturday');
        }
        this.clearCache('viewport');
        this.applyFilters();
        this.updateFilterCountBadge();
      }

      if (e.target.id === 'hours-sunday-filter') {
        if (e.target.checked) {
          this.activeFilters.add('sunday');
        } else {
          this.activeFilters.delete('sunday');
        }
        this.clearCache('viewport');
        this.applyFilters();
        this.updateFilterCountBadge();
      }

      if (e.target.id === 'hours-open-now-filter') {
        const openToggle = this.container.querySelector('#open-toggle');
        if (openToggle) {
          openToggle.checked = e.target.checked;
          openToggle.dispatchEvent(new Event('change'));
        }
      }
    });

    // NOVÉ: Panel toggle handling - přidáno na konec bindEvents
    const panelToggle = this.container.querySelector('#panel-toggle');
    if (panelToggle) {
      panelToggle.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('🔘 Panel toggle clicked!');
        this.toggleSidebarPanel();
      });
      console.log('✅ Panel toggle event listener bound');
    } else {
      console.warn('⚠️ Panel toggle button not found!');
    }

    console.log('✅ All events bound successfully');
  }

  addSuggestionStyles() {
    // Styly jsou už v CSS souboru, nic nedělej
    console.log('✅ Suggestion styles loaded from CSS file');
  }

  toggleTypeDropdown() {
    const dropdown = this.container.querySelector('.ppl-type-dropdown');
    const typeButton = this.container.querySelector(
      '.ppl-quick-filter.type-filter'
    );

    if (dropdown && typeButton) {
      const isOpen = dropdown.classList.contains('open');
      if (isOpen) {
        this.closeTypeDropdown();
      } else {
        this.closePaymentDropdown();
        this.openTypeDropdown();
      }
    }
  }

  openTypeDropdown() {
    const dropdown = this.container.querySelector('.ppl-type-dropdown');
    const typeButton = this.container.querySelector(
      '.ppl-quick-filter.type-filter'
    );

    if (dropdown && typeButton) {
      dropdown.classList.add('open');
      typeButton.classList.add('open');

      const allButton = this.container.querySelector(
        '.ppl-quick-filter.all-filters'
      );
      if (allButton) {
        allButton.classList.remove('active');
      }

      typeButton.classList.add('active');
      this.activeQuickFilters.clear();
      this.activeQuickFilters.add('type');
    }
  }

  closeTypeDropdown() {
    const dropdown = this.container.querySelector('.ppl-type-dropdown');
    const typeButton = this.container.querySelector(
      '.ppl-quick-filter.type-filter'
    );

    if (dropdown && typeButton) {
      dropdown.classList.remove('open');
      typeButton.classList.remove('open');
      typeButton.classList.remove('active');
    }
  }

  updateTypeCheckboxes() {
    const parcelshopCheckbox =
      this.container.querySelector('#filter-parcelshop');
    const parcelboxCheckbox = this.container.querySelector('#filter-parcelbox');

    if (parcelshopCheckbox) {
      parcelshopCheckbox.checked = this.selectedTypes.has('parcelshop');
    }
    if (parcelboxCheckbox) {
      parcelboxCheckbox.checked = this.selectedTypes.has('parcelbox');
    }
  }

  togglePaymentDropdown() {
    const dropdown = this.container.querySelector('.ppl-payment-dropdown');
    const paymentButton = this.container.querySelector(
      '.ppl-quick-filter.payment-filter'
    );

    if (dropdown && paymentButton) {
      const isOpen = dropdown.classList.contains('open');
      if (isOpen) {
        this.closePaymentDropdown();
      } else {
        this.closeTypeDropdown();
        this.openPaymentDropdown();
      }
    }
  }

  openPaymentDropdown() {
    const dropdown = this.container.querySelector('.ppl-payment-dropdown');
    const paymentButton = this.container.querySelector(
      '.ppl-quick-filter.payment-filter'
    );

    if (dropdown && paymentButton) {
      dropdown.classList.add('open');
      paymentButton.classList.add('open');

      const allButton = this.container.querySelector(
        '.ppl-quick-filter.all-filters'
      );
      if (allButton) {
        allButton.classList.remove('active');
      }

      paymentButton.classList.add('active');
      this.activeQuickFilters.clear();
      this.activeQuickFilters.add('payment');
    }
  }

  closePaymentDropdown() {
    const dropdown = this.container.querySelector('.ppl-payment-dropdown');
    const paymentButton = this.container.querySelector(
      '.ppl-quick-filter.payment-filter'
    );

    if (dropdown && paymentButton) {
      dropdown.classList.remove('open');
      paymentButton.classList.remove('open');
      paymentButton.classList.remove('active');
    }
  }

  updatePaymentCheckboxes() {
    const cardCheckbox = this.container.querySelector('#filter-card');
    const cashCheckbox = this.container.querySelector('#filter-cash');

    if (cardCheckbox) {
      cardCheckbox.checked = this.selectedPayments.has('card');
    }
    if (cashCheckbox) {
      cashCheckbox.checked = this.selectedPayments.has('cash');
    }
  }

  toggleLanguageDropdown() {
    const dropdown = this.container.querySelector('.ppl-language-dropdown');
    const languageButton = this.container.querySelector('.ppl-language-button');

    if (dropdown && languageButton) {
      const isOpen = dropdown.classList.contains('open');
      if (isOpen) {
        this.closeLanguageDropdown();
      } else {
        this.closeTypeDropdown();
        this.closePaymentDropdown();
        this.openLanguageDropdown();
      }
    }
  }

  openLanguageDropdown() {
    const dropdown = this.container.querySelector('.ppl-language-dropdown');
    const languageButton = this.container.querySelector('.ppl-language-button');

    if (dropdown && languageButton) {
      dropdown.classList.add('open');
      languageButton.classList.add('open');
    }
  }

  closeLanguageDropdown() {
    const dropdown = this.container.querySelector('.ppl-language-dropdown');
    const languageButton = this.container.querySelector('.ppl-language-button');

    if (dropdown && languageButton) {
      dropdown.classList.remove('open');
      languageButton.classList.remove('open');
    }
  }

  changeLanguage(newLanguage) {
    const countryLanguageMap = {
      DE: 'EN', // Německo -> angličtina
      PL: 'EN', // Polsko -> angličtina
      CZ: 'CZ', // Česko -> čeština
      SK: 'CZ', // Slovensko -> čeština
    };

    if (!newLanguage) {
      newLanguage = countryLanguageMap[this.country] || 'CZ';
    }
    this.currentLanguage = newLanguage;
    console.log(
      `🌍 Language changed to ${newLanguage} for country ${this.country}`
    );
    this.renderWidgetHTML();
    this.init();

    // NOVÉ: Aktualizuj toggle button text po změně jazyka
    setTimeout(() => {
      this.updateToggleButtonText();
    }, 100);
  }

  // applyFilters() {
  //   // Vymaž viewport cache při změně filtrů
  //   this.clearCache('viewport');

  //   const searchTerm = this.container
  //     .querySelector('.ppl-search-input')
  //     .value.toLowerCase()
  //     .trim();
  //   let filtered = [...this.allAccessPoints];

  //   // Filtruj podle typu - aplikuj filtr vždy když nejsou vybrané všechny typy
  //   if (this.selectedTypes.size > 0 && this.selectedTypes.size < 2) {
  //     filtered = filtered.filter((p) => this.selectedTypes.has(p.type));
  //   }

  //   // Filtruj podle platby - aplikuj filtr vždy když nejsou vybrané všechny platby
  //   if (this.selectedPayments.size > 0 && this.selectedPayments.size < 2) {
  //     filtered = filtered.filter((p) => {
  //       if (
  //         this.selectedPayments.has('card') &&
  //         !this.selectedPayments.has('cash')
  //       ) {
  //         return p.activeCardPayment || p.canPayByCard;
  //       }
  //       if (
  //         this.selectedPayments.has('cash') &&
  //         !this.selectedPayments.has('card')
  //       ) {
  //         return p.activeCashPayment;
  //       }
  //       return true;
  //     });
  //   }

  //   // Filtr pro víkendový provoz
  //   if (
  //     this.activeFilters.has('weekend') ||
  //     this.activeFilters.has('openOnWeekend')
  //   ) {
  //     const beforeCount = filtered.length;
  //     filtered = filtered.filter((p) => this.checkWeekendOperation(p));
  //     const afterCount = filtered.length;
  //     console.log(
  //       `Weekend filter applied: ${beforeCount} → ${afterCount} points`
  //     );
  //   }

  //   // Filtr pro otevřená výdejní místa
  //   if (this.activeFilters.has('open')) {
  //     const beforeCount = filtered.length;
  //     filtered = filtered.filter((p) => this.checkCurrentlyOpen(p));
  //     const afterCount = filtered.length;
  //     console.log(`Open filter applied: ${beforeCount} → ${afterCount} points`);
  //   }

  //   // Filtr pro volná výdejní místa (kapacita)
  //   if (this.activeFilters.has('capacity')) {
  //     console.log('🔋 CAPACITY FILTER ACTIVATED');
  //     console.log('🔋 Active filters:', Array.from(this.activeFilters));

  //     const beforeCount = filtered.length;
  //     console.log(`🔋 Points before capacity filter: ${beforeCount}`);

  //     // Debug: Ukážeme prvních 5 bodů a jejich kapacitu
  //     filtered.slice(0, 5).forEach((point, index) => {
  //       console.log(`🔋 Point ${index + 1}: ${point.name}`);
  //       console.log(`   - Type: ${point.type}`);
  //       console.log(`   - CapacityStatus: ${point.capacityStatus || 'NONE'}`);
  //       console.log(
  //         `   - CapacityInfo: ${
  //           point.capacityInfo ? point.capacityInfo.text : 'NONE'
  //         }`
  //       );
  //       console.log(`   - DetailsLoaded: ${point.detailsLoaded}`);
  //     });

  //     filtered = filtered.filter((p) => this.checkFreeCapacity(p));
  //     const afterCount = filtered.length;

  //     console.log(
  //       `🔋 Capacity filter applied: ${beforeCount} → ${afterCount} points`
  //     );

  //     if (afterCount === 0) {
  //       console.warn('🔋 WARNING: No points passed capacity filter!');
  //     }
  //   }

  //   // Filtry pro otevírací dobu
  //   if (this.activeFilters.has('before9am')) {
  //     filtered = filtered.filter((p) => this.checkOpensBefore(p, 9 * 60)); // 9:00 v minutách
  //   }

  //   if (this.activeFilters.has('after5pm')) {
  //     filtered = filtered.filter((p) => this.checkClosesAfter(p, 17 * 60)); // 17:00 v minutách
  //   }

  //   if (this.activeFilters.has('saturday')) {
  //     filtered = filtered.filter((p) => this.checkOpenOnDay(p, 7)); // 7 pro sobotu (API formát)
  //   }

  //   if (this.activeFilters.has('sunday')) {
  //     filtered = filtered.filter((p) => this.checkOpenOnDay(p, 1)); // 1 pro neděli (API formát)
  //   }

  //   // Filtr pro podání zásilky
  //   if (this.activeFilters.has('pickup')) {
  //     const beforeCount = filtered.length;
  //     filtered = filtered.filter((p) => this.checkPickupEnabled(p));
  //     const afterCount = filtered.length;
  //     console.log(
  //       `Pickup filter applied: ${beforeCount} → ${afterCount} points`
  //     );
  //   }

  //   if (this.activeFilters.has('cardPayment')) {
  //     filtered = filtered.filter((p) => p.canPayByCard);
  //   }

  //   if (searchTerm) {
  //     filtered = filtered.filter(
  //       (p) =>
  //         (p.name && p.name.toLowerCase().includes(searchTerm)) ||
  //         (p.city && p.city.toLowerCase().includes(searchTerm))
  //     );
  //   }

  //   console.log(
  //     `Filter applied: ${this.allAccessPoints.length} → ${filtered.length} points`
  //   );
  //   console.log('Selected types:', Array.from(this.selectedTypes));
  //   console.log('Selected payments:', Array.from(this.selectedPayments));

  //   this.currentAccessPoints = filtered;
  //   this.renderAll();

  //   // PŘIDÁNO: Načti detaily pro nově filtrované body
  //   if (this.previewDataLoaded) {
  //     setTimeout(() => {
  //       this.loadDetailsForSidebar();
  //     }, 100);
  //   }
  // }

  renderAll() {
    this.renderResults();
    this.lastViewport = null;
    this.renderMarkers();
    this.fitMapToPoints();
  }

  createClusterIcon(count, size = 'medium') {
    let width, height, fontSize;

    if (count < 10) {
      width = height = 56;
      fontSize = '20px';
    } else if (count < 100) {
      width = height = 83;
      fontSize = '20px';
    } else {
      width = height = 99;
      fontSize = '24px';
    }

    return L.divIcon({
      html: `
        <div style="
          position: relative;
          width: ${width}px;
          height: ${height}px;
          background: linear-gradient(180deg, rgba(0, 75, 147, 0.8) 52.7%, rgba(51, 111, 169, 0.8) 100%);
          box-shadow: 1px 2px 2px rgba(33, 62, 91, 0.4), inset 1px 1px 0px #1A5D9E, inset 1px 2px 1px #F7FAFC;
          backdrop-filter: blur(2px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-family: 'Roboto';
          font-weight: 700;
          font-size: ${fontSize};
          line-height: 30px;
        ">${count}</div>
      `,
      className: 'cluster-marker',
      iconSize: [width, height],
      iconAnchor: [width / 2, height / 2],
    });
  }

  getClusterDistance(zoom) {
    const distances = {
      1: 500,
      2: 300,
      3: 200,
      4: 150,
      5: 100,
      6: 80,
      7: 60,
      8: 40,
      9: 30,
      10: 20,
      11: 15,
      12: 0,
    };
    return distances[Math.min(zoom, 12)] || 0;
  }

  calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  fitMapToPoints() {
    if (!this.map || this.currentAccessPoints.length === 0) {
      if (this.map) this.map.setView(this.config.center, this.config.zoom);
      return;
    }

    const bounds = L.latLngBounds();
    this.currentAccessPoints.forEach((point) => {
      bounds.extend([point.gps.latitude, point.gps.longitude]);
    });

    this.map.fitBounds(bounds.pad(0.1));
  }

  selectPoint(pointId) {
    this.selectedPointId = pointId;

    this.container
      .querySelectorAll('.ppl-result-item')
      .forEach((item) => item.classList.remove('selected'));
    const item = this.container.querySelector(`[data-id="${pointId}"]`);
    if (item) {
      item.classList.add('selected');
      item.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    const point = this.allAccessPoints.find((p) => String(p.id) === pointId);
    if (point) {
      if (this.map)
        this.map.setView([point.gps.latitude, point.gps.longitude], 15);
      document.dispatchEvent(
        new CustomEvent('pplPointSelected', { detail: point, bubbles: true })
      );
      // ZDE VOLÁME NOVOU METODU PRO ZOBRAZENÍ DETAILU
      this.showPointDetail(point);
    }
    this.renderMarkers(this.selectedPointId);
  }

  locateUser() {
    console.log('locateUser method called');
    if (!this.map) {
      console.log('Map not available for location');
      return;
    }

    if ('geolocation' in navigator) {
      console.log('Geolocation supported, requesting position...');
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Position obtained:', position.coords);
          const { latitude, longitude } = position.coords;
          this.map.setView([latitude, longitude], 15);

          if (this.userLocationMarker) {
            this.map.removeLayer(this.userLocationMarker);
          }

          this.userLocationMarker = L.marker([latitude, longitude], {
            icon: L.divIcon({
              className: 'user-location-marker',
              html: '<div style="background: #007bff; width: 12px; height: 12px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 10px rgba(0,123,255,0.5);"></div>',
              iconSize: [18, 18],
              iconAnchor: [9, 9],
            }),
          }).addTo(this.map);

          console.log('User location marker added');
        },
        (error) => {
          console.error('Chyba při získávání polohy:', error);
          let errorMessage = 'Nepodařilo se získat vaši polohu.';

          switch (error.code) {
            case error.PERMISSION_DENIED:
              errorMessage =
                'Přístup k poloze byl zamítnut. Povolte geolokaci v nastavení prohlížeče.';
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = 'Informace o poloze nejsou dostupné.';
              break;
            case error.TIMEOUT:
              errorMessage = 'Požadavek na polohu vypršel.';
              break;
          }

          alert(errorMessage);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000,
        }
      );
    } else {
      console.log('Geolocation not supported');
      alert('Váš prohlížeč nepodporuje geolokaci.');
    }
  }

  async showPointDetail(point) {
    console.log('📋 SHOW POINT DETAIL - START');
    console.log('📋 Point ID:', point.id);
    console.log('📋 Point has detailData:', !!point.detailData);
    console.log('📋 Point raw opening hours:', point.rawData?.openingHours);

    const detailPanel = this.container.querySelector('.detail-vm-panel');
    if (!detailPanel) {
      console.error('Detail VM panel nebyl nalezen.');
      return;
    }

    // Zobraz panel s loading stavem
    detailPanel.style.display = 'flex';
    setTimeout(() => {
      detailPanel.classList.add('show');
    }, 10);

    // Pokud už máme detailní data, použij je
    if (point.detailData) {
      console.log('📋 Using existing detail data:', point.detailData);
      this.renderPointDetailContent(point, detailPanel);
      return;
    }

    // Načti detailní data
    console.log('📋 Loading detail data from API...');
    try {
      const token = await this.getAccessToken();
      console.log('📋 Token obtained:', !!token);

      const detailData = await this.loadPointDetails(point.id, token);
      console.log('📋 Detail data received:', detailData);

      if (detailData) {
        // Ulož detailní data do bodu
        point.detailData = detailData;

        // KLÍČOVÉ: Použij mergeDetailIntoPoint pro správné zpracování
        this.mergeDetailIntoPoint(point, detailData);

        console.log(
          '📋 Point after merge - opening hours:',
          point.rawData?.openingHours
        );

        // Po načtení detailů znovu vykresli detail panel s aktualizovanými daty
        this.renderPointDetailContent(point, detailPanel);
      } else {
        console.warn('📋 No detail data received from API');
        this.renderPointDetailContent(point, detailPanel);
      }
    } catch (error) {
      console.error('📋 Error loading point details:', error);
      this.renderPointDetailContent(point, detailPanel);
    }
  }
  /**
   * Renderuje obsah detail panelu
   */
  renderPointDetailContent(point, detailPanel) {
    // Vyplnění dat do detail panelu
    const nazevVmElement = detailPanel.querySelector('.nazev-vm');
    const adresaElement = detailPanel.querySelector('.adresa p');
    const oteviraciDobaElement = detailPanel.querySelector('.oteviraci-doba p');
    const kapacitaElement = detailPanel.querySelector('.kapacita p');
    const typVmIconElement = detailPanel.querySelector(
      '.ikona-a-nazev .typ-vm'
    );
    const bezbarieroveElement = detailPanel.querySelector('.bezbarierove');
    const vzdalenostElement = detailPanel.querySelector('.vzdalenost p');
    const kapacitaIconElement = detailPanel.querySelector('.dhl-icon-box1');

    if (nazevVmElement) nazevVmElement.textContent = point.name;
    if (adresaElement)
      adresaElement.textContent = `${point.street}, ${point.zipCode} ${point.city}`;

    // Aktualizace ikony typu VM
    if (typVmIconElement) {
      typVmIconElement.innerHTML = this.getTypeIconSvg(point.type, 24);
    }

    // Aktualizace otevírací doby
    const hasDetailedData =
      point.detailData ||
      (point.rawData &&
        point.rawData.openingHours &&
        point.rawData.openingHours.length > 0);
    if (oteviraciDobaElement) {
      if (hasDetailedData) {
        const openingStatus = this.getOpeningStatus(point);
        if (openingStatus) {
          oteviraciDobaElement.textContent = openingStatus.text;
          const frame40 = oteviraciDobaElement.closest('.frame-40');
          if (frame40) {
            frame40.style.borderColor =
              openingStatus.status === 'open' ||
              openingStatus.status === 'closing'
                ? 'rgba(0, 186, 133, 0.5)'
                : 'rgba(239, 109, 27, 0.5)';
            oteviraciDobaElement.style.color =
              openingStatus.status === 'open' ||
              openingStatus.status === 'closing'
                ? '#017957'
                : '#92400B';
          }
        } else {
          // Máme detailní data, ale žádné hodiny (zavřeno permanent)
          oteviraciDobaElement.textContent = 'Trvale zavřeno';
          const frame40 = oteviraciDobaElement.closest('.frame-40');
          if (frame40) {
            frame40.style.borderColor = 'rgba(239, 109, 27, 0.5)';
            oteviraciDobaElement.style.color = '#92400B';
          }
        }
      } else {
        // Ještě nemáme detailní data - ukážeme loading
        oteviraciDobaElement.textContent = 'Načítám otevírací dobu...';
        const frame40 = oteviraciDobaElement.closest('.frame-40');
        if (frame40) {
          frame40.style.borderColor = 'rgba(200, 200, 200, 0.5)';
          oteviraciDobaElement.style.color = '#505E6C';
        }
      }
    }

    // Aktualizace kapacity
    if (kapacitaElement && kapacitaIconElement) {
      const isLoadingDetails = this.loadingDetails.has(point.id);
      const hasCapacityInfo =
        point.capacityInfo ||
        (point.capacityStatus && point.capacityStatus !== 'Unknown');

      if (isLoadingDetails) {
        // Loading stav
        kapacitaElement.textContent = 'Načítám kapacitu...';
        kapacitaIconElement.innerHTML = this.getCapacityIcon('unknown');

        const kapacitaContainer = kapacitaElement.closest('.kapacita');
        if (kapacitaContainer) {
          kapacitaContainer.classList.remove(
            'capacity-free',
            'capacity-partial',
            'capacity-full',
            'capacity-blocked',
            'capacity-maintenance',
            'capacity-unknown'
          );
          kapacitaContainer.classList.add('loading');
        }
      } else if (hasCapacityInfo) {
        // Máme data o kapacitě
        const capacityInfo =
          point.capacityInfo || this.getCapacityInfo(point.capacityStatus);

        console.log('🔋 Updating capacity display:', capacityInfo);

        // Aktualizuj text
        kapacitaElement.textContent = capacityInfo.text;

        // Aktualizuj CSS třídu kontejneru
        const kapacitaContainer = kapacitaElement.closest('.kapacita');
        if (kapacitaContainer) {
          // Odstraň všechny capacity třídy
          kapacitaContainer.classList.remove(
            'capacity-free',
            'capacity-partial',
            'capacity-full',
            'capacity-blocked',
            'capacity-maintenance',
            'capacity-unknown',
            'loading'
          );
          // Přidej správnou třídu
          kapacitaContainer.classList.add(capacityInfo.cssClass);
        }

        // Aktualizuj ikonu
        kapacitaIconElement.innerHTML = this.getCapacityIcon(capacityInfo.icon);

        console.log(
          '✅ Capacity updated:',
          point.capacityStatus,
          '→',
          capacityInfo.text
        );
      } else {
        // Fallback pro neznámou kapacitu
        kapacitaElement.textContent = 'Kapacita neznámá';
        kapacitaIconElement.innerHTML = this.getCapacityIcon('unknown');

        const kapacitaContainer = kapacitaElement.closest('.kapacita');
        if (kapacitaContainer) {
          kapacitaContainer.classList.remove(
            'capacity-free',
            'capacity-partial',
            'capacity-full',
            'capacity-blocked',
            'capacity-maintenance',
            'loading'
          );
          kapacitaContainer.classList.add('capacity-unknown');
        }

        console.log('⚠️ No capacity info available');
      }
    }

    // Vzdálenost
    if (vzdalenostElement) {
      vzdalenostElement.textContent = '320 m';
    }

    // Bezbariérový přístup
    if (bezbarieroveElement) {
      if (point.handicapAccessible) {
        bezbarieroveElement.style.display = 'flex';
      } else {
        bezbarieroveElement.style.display = 'none';
      }
    }

    // Aktualizace celé sekce otevírací doby
    const openingHoursSection = detailPanel.querySelector(
      '.opening-hours-section'
    );
    if (openingHoursSection) {
      const hasDetailedData =
        point.detailData ||
        (point.rawData &&
          point.rawData.openingHours &&
          point.rawData.openingHours.length > 0);

      console.log(
        '🕒 Updating opening hours section. HasDetailedData:',
        hasDetailedData
      );
      console.log('🕒 Point detail data:', point.detailData);
      console.log(
        '🕒 Point raw data opening hours:',
        point.rawData?.openingHours
      );

      if (hasDetailedData) {
        const openingHoursContent = this.generateOpeningHoursHtml(point);
        console.log('🕒 Generated opening hours content:', openingHoursContent);

        if (openingHoursContent) {
          // Máme validní HTML s otevírací dobou
          openingHoursSection.innerHTML = `
                      <p class="section-title">Otevírací doba</p>
                      ${openingHoursContent}
                      <div class="divider"></div>
                  `;
          openingHoursSection.style.display = 'flex';
          console.log('🕒 Opening hours section updated with real data');
        } else {
          // Máme detailní data, ale žádné validní hodiny
          openingHoursSection.innerHTML = `
                      <p class="section-title">Otevírací doba</p>
                      <div class="opening-hours-day-row">
                          <span class="closed-text">Otevírací doba není dostupná</span>
                      </div>
                      <div class="divider"></div>
                  `;
          openingHoursSection.style.display = 'flex';
          console.log('🕒 Opening hours section updated - no hours available');
        }
      } else {
        // Ještě nemáme detailní data - zobraz loading
        openingHoursSection.innerHTML = `
                  <p class="section-title">Otevírací doba</p>
                  <div class="opening-hours-day-row">
                      <span class="loading-text">Načítám otevírací dobu...</span>
                  </div>
                  <div class="divider"></div>
              `;
        openingHoursSection.style.display = 'flex';
        console.log('🕒 Opening hours section updated - loading state');
      }
    }
  }

  hidePointDetail() {
    const detailPanel = this.container.querySelector('.detail-vm-panel');
    if (!detailPanel) return;

    detailPanel.classList.remove('show');
    detailPanel.style.pointerEvents = 'none';

    setTimeout(() => {
      detailPanel.style.display = 'none';
      detailPanel.style.pointerEvents = 'auto';

      // Zobraz zpět sidebar a mapové ovládací prvky
      const sidebar = this.container.querySelector('.ppl-sidebar');
      const mapControls = this.container.querySelector('.ppl-map-controls');
      const quickFilters = this.container.querySelector(
        '.ppl-quick-filters-overlay'
      );
      const languageSelector = this.container.querySelector(
        '.ppl-language-selector'
      );
      const attribution = this.container.querySelector('.ppl-map-attribution');
      const debugContainer = document.querySelector('.debug-container');
      const mapContainer = this.container.querySelector('.ppl-map-container');

      // if (sidebar) sidebar.style.display = 'block'; // Nebo 'flex'
      if (mapContainer) mapContainer.style.display = 'block';
      if (quickFilters) quickFilters.style.display = 'flex';
      if (languageSelector) languageSelector.style.display = 'block'; // Nebo 'flex'
      if (attribution) attribution.style.display = 'block'; // Nebo 'flex'
      if (debugContainer) debugContainer.style.display = 'block'; // Znovu zobraz debug tlačítka

      // Deselectuj aktuálně vybraný bod na mapě a v listu
      this.selectedPointId = null;
      this.renderMarkers();
      this.container
        .querySelectorAll('.ppl-result-item')
        .forEach((item) => item.classList.remove('selected'));
    }, 300);
  }

  // === DODATEČNÉ UTILITY METODY ===

  /**
   * Nastaví konfiguraci cache
   */
  setCacheConfig(cacheConfig) {
    this.config.cache = {
      ...this.config.cache,
      ...cacheConfig,
    };

    // Pokud je cache vypnutá, vymaž existující cache
    if (!this.config.cache.enabled) {
      this.clearCache();
    }

    console.log('Cache configuration updated:', this.config.cache);
  }

  /**
   * Nastaví konfiguraci viewport optimalizace
   */
  setViewportConfig(viewportConfig) {
    this.config.viewport = {
      ...this.config.viewport,
      ...viewportConfig,
    };

    console.log('Viewport configuration updated:', this.config.viewport);

    // Při změně konfigurace vynucuj re-render
    this.lastViewport = null;
    this.scheduleViewportUpdate();
  }

  /**
   * Nastaví konfiguraci clustering
   */
  setClusteringConfig(clusteringConfig) {
    this.config.clustering = {
      ...this.config.clustering,
      ...clusteringConfig,
    };

    // Vymaž cluster cache při změně konfigurace
    if (!this.config.clustering.cacheEnabled) {
      this.clearCache('cluster');
    }

    console.log('Clustering configuration updated:', this.config.clustering);

    // Vynucuj re-clustering
    this.lastZoom = null;
    this.scheduleViewportUpdate();
  }

  /**
   * Získá statistiky cache
   */
  getCacheStats() {
    return {
      dataCache: {
        size: this.dataCache.size,
        maxSize: this.config.cache.maxSize,
        enabled: this.config.cache.enabled,
      },
      clusterCache: {
        size: this.clusterCache.size,
        maxSize: this.config.clustering.maxCacheSize,
        enabled: this.config.clustering.cacheEnabled,
      },
      viewportCache: {
        size: this.viewportCache.size,
        maxSize: this.config.cache.maxSize,
        enabled: this.config.viewport.enabled,
      },
    };
  }

  /**
   * Získá statistiky výkonu
   */
  getPerformanceStats() {
    const viewport = this.getCurrentViewport();
    const filteredCount = this.currentAccessPoints.length;
    const totalCount = this.allAccessPoints.length;
    const viewportCount = viewport
      ? this.filterPointsByViewport(this.currentAccessPoints, viewport).length
      : 0;

    return {
      totalPoints: totalCount,
      filteredPoints: filteredCount,
      viewportPoints: viewportCount,
      currentZoom: this.map ? this.map.getZoom() : null,
      viewport: viewport,
      cacheStats: this.getCacheStats(),
      loadingState: this.isLoading,
    };
  }

  /**
   * Debug metoda pro logování výkonu
   */
  logPerformance() {
    const stats = this.getPerformanceStats();
    console.group('PPL Widget Performance Stats');
    console.log(
      'Points:',
      stats.totalPoints,
      '→',
      stats.filteredPoints,
      '→',
      stats.viewportPoints
    );
    console.log('Zoom level:', stats.currentZoom);
    console.log('Loading:', stats.loadingState);
    console.log('Cache stats:', stats.cacheStats);
    console.groupEnd();
  }

  detectPointCountry(point) {
    // 1. Explicitní country field
    if (point.country) {
      return point.country.toUpperCase();
    }

    // 2. rawData.country
    if (point.rawData && point.rawData.country) {
      return point.rawData.country.toUpperCase();
    }

    // 3. countryCode
    if (point.countryCode) {
      return point.countryCode.toUpperCase();
    }

    // 4. Detekce z PSČ
    if (point.zipCode) {
      const zip = point.zipCode.replace(/\s/g, '');

      if (/^[1-7]\d{4}$/.test(zip)) return 'CZ'; // České PSČ
      if (/^[89]\d{4}$/.test(zip)) return 'SK'; // Slovenské PSČ
      if (/^\d{5}$/.test(zip)) return 'DE'; // Německé PSČ
      if (/^\d{2}-?\d{3}$/.test(zip)) return 'PL'; // Polské PSČ
    }

    // 5. Fallback
    return this.defaultCountry;
  }

  /**
   * Kontroluje, zda má výdejní místo volnou kapacitu
   */

  checkFreeCapacity(point) {
    // Všechna místa, včetně parcelboxů, musí mít kapacitu potvrzenou jako volnou nebo částečně plnou.
    // Logy ukazují, že capacityStatus je dostupný v detailních datech (např. Source 436)
    if (point.capacityStatus) {
      const isFree = point.capacityStatus === 'Free';
      const isPartiallyFull = point.capacityStatus === 'PartiallyFull';

      // Zobrazíme, pokud je kapacita volná nebo částečně plná
      if (isFree || isPartiallyFull) {
        console.log(
          `Capacity check for ${point.name}: ${point.capacityStatus} -> AVAILABLE`
        );
        return true;
      } else {
        console.log(
          `Capacity check for ${point.name}: ${point.capacityStatus} -> NOT AVAILABLE (filtered out)`
        );
        return false; // Jiné stavy (Full, Blocked, Maintenance) filtrujeme ven
      }
    }

    // Pokud nemáme data o kapacitě (např. ještě nejsou načteny detaily, nebo status je 'Unknown'),
    // pro účely filtru "Pouze volná" takové místo nezobrazujeme.
    console.log(
      `No definitive capacity data for ${point.name} (details not loaded or status unknown), filtering out for "Free Capacity" filter.`
    );
    return false;
  }

  /**
   * Kontroluje, zda je povoleno podání zásilky
   */
  checkPickupEnabled(point) {
    // Explicitní kontrola pickupEnabled
    if (point.pickupEnabled !== undefined) {
      return point.pickupEnabled;
    }

    // Parcelshop obvykle má podání povolené
    if (point.type === 'parcelshop') {
      return true;
    }

    // Parcelbox obvykle nemá podání
    if (point.type === 'parcelbox') {
      return false;
    }

    // Fallback
    return true;
  }

  updateFilterCountBadge() {
    const badge = this.container.querySelector('#filter-count-badge');
    if (!badge) return;

    // Spočítej aktivní filtry
    let activeFilterCount = 0;

    // Weekend toggle
    const weekendToggle = this.container.querySelector('#weekend-toggle');
    if (weekendToggle && weekendToggle.checked) {
      activeFilterCount++;
    }

    // Capacity toggle
    const capacityToggle = this.container.querySelector('#capacity-toggle');
    if (capacityToggle && capacityToggle.checked) {
      activeFilterCount++;
    }

    // Nové filtry otevírací doby
    const before9amFilter = this.container.querySelector(
      '#hours-before-9am-filter'
    );
    if (before9amFilter && before9amFilter.checked) {
      activeFilterCount++;
    }

    const after5pmFilter = this.container.querySelector(
      '#hours-after-5pm-filter'
    );
    if (after5pmFilter && after5pmFilter.checked) {
      activeFilterCount++;
    }

    const saturdayFilter = this.container.querySelector(
      '#hours-saturday-filter'
    );
    if (saturdayFilter && saturdayFilter.checked) {
      activeFilterCount++;
    }

    const sundayFilter = this.container.querySelector('#hours-sunday-filter');
    if (sundayFilter && sundayFilter.checked) {
      activeFilterCount++;
    }

    // Open toggle
    const openToggle = this.container.querySelector('#open-toggle');
    if (openToggle && openToggle.checked) {
      activeFilterCount++;
    }

    // Pickup toggle
    const pickupToggle = this.container.querySelector('#pickup-toggle');
    if (pickupToggle && pickupToggle.checked) {
      activeFilterCount++;
    }

    //  // NOVÉ: Kontrola kategorie filtrů
    //   // Země (pokud není jen CZ)
    //   const countryCheckboxes = this.container.querySelectorAll('[id^="country-"][id$="-filter"]:checked');
    //   if (countryCheckboxes.length !== 1 || !this.container.querySelector('#country-cz-filter')?.checked) {
    //     activeFilterCount++;
    //   }

    // Typ (pokud nejsou oba)
    const typeCheckboxes = this.container.querySelectorAll(
      '[id^="type-"][id$="-filter"]:checked'
    );
    if (typeCheckboxes.length !== 2) {
      activeFilterCount++;
    }

    // Platba (pokud nejsou obě)
    const paymentCheckboxes = this.container.querySelectorAll(
      '[id^="payment-"][id$="-filter"]:checked'
    );
    if (paymentCheckboxes.length !== 2) {
      activeFilterCount++;
    }

    // Aktualizuj zobrazení
    if (activeFilterCount > 0) {
      badge.textContent = activeFilterCount;
      badge.classList.add('show');
    } else {
      badge.classList.remove('show');
    }

    console.log(`Filter badge updated: ${activeFilterCount} active filters`);
  }

  // === NOVÁ METODA: Toggle sidebar panel ===

  toggleSidebarPanel() {
    console.log('🔄 toggleSidebarPanel called!');

    const sidebar = this.container.querySelector('.ppl-sidebar');
    const content = this.container.querySelector('.ppl-content');
    const toggleButton = this.container.querySelector('#panel-toggle');

    console.log('Elements found:', {
      sidebar: !!sidebar,
      content: !!content,
      toggleButton: !!toggleButton,
    });

    if (!sidebar || !content || !toggleButton) return;

    const isCollapsed = sidebar.classList.contains('collapsed');

    if (isCollapsed) {
      // Zobraz panel
      sidebar.classList.remove('collapsed');
      content.classList.remove('sidebar-collapsed');
      toggleButton.classList.remove('collapsed');
      toggleButton.title = 'Skrýt panel';

      console.log('📋 Sidebar panel shown');
    } else {
      // Skryj panel
      sidebar.classList.add('collapsed');
      content.classList.add('sidebar-collapsed');
      toggleButton.classList.add('collapsed');
      toggleButton.title = 'Zobrazit panel';

      console.log('📋 Sidebar panel hidden');
    }

    // Po změně velikosti nech mapu se přepočítat
    setTimeout(() => {
      if (this.map) {
        this.map.invalidateSize();
        console.log('🗺️ Map size recalculated after panel toggle');
      }
    }, 350); // Trochu déle než trvá animace (300ms)
  }

  // === POMOCNÁ METODA: Kontrola stavu panelu ===

  isSidebarCollapsed() {
    const sidebar = this.container.querySelector('.ppl-sidebar');
    return sidebar ? sidebar.classList.contains('collapsed') : false;
  }

  // === AKTUALIZACE LOKALIZACE ===

  updateToggleButtonText() {
    const toggleButton = this.container.querySelector('#panel-toggle');
    if (!toggleButton) return;

    const isCollapsed = this.isSidebarCollapsed();
    const translations = {
      CZ: {
        show: 'Zobrazit panel',
        hide: 'Skrýt panel',
      },
      EN: {
        show: 'Show panel',
        hide: 'Hide panel',
      },
    };

    const currentTranslations =
      translations[this.currentLanguage] || translations.CZ;
    toggleButton.title = isCollapsed
      ? currentTranslations.show
      : currentTranslations.hide;
  }

  // === NOVÉ POMOCNÉ FUNKCE PRO FILTRY OTEVÍRACÍ DOBY ===

  /**
   * Zkontroluje, zda se místo otevírá před daným časem (minuty od půlnoci).
   */
  checkOpensBefore(point, timeInMinutes) {
    if (
      !point.rawData ||
      !Array.isArray(point.rawData.openingHours) ||
      point.rawData.openingHours.length === 0
    ) {
      return false; // Pokud nemáme data, nemůžeme potvrdit, že se otevírá brzy.
    }

    // Najdeme nejčasnější otevírací dobu pro jakýkoli den
    let earliestOpen = 24 * 60; // Nastaveno na maximální čas

    point.rawData.openingHours.forEach((interval) => {
      const openTime = this.parseTime(interval.timeFrom);
      if (openTime !== null && openTime < earliestOpen) {
        earliestOpen = openTime;
      }
    });

    const result = earliestOpen < timeInMinutes;
    if (result) {
      console.log(
        `Point ${point.name} opens before ${this.formatTime(
          timeInMinutes / 60,
          timeInMinutes % 60
        )}: Yes (${this.formatTime(earliestOpen / 60, earliestOpen % 60)})`
      );
    } else {
      console.log(
        `Point ${point.name} opens before ${this.formatTime(
          timeInMinutes / 60,
          timeInMinutes % 60
        )}: No (${this.formatTime(earliestOpen / 60, earliestOpen % 60)})`
      );
    }
    return result;
  }

  /**
   * Zkontroluje, zda se místo zavírá po daném čase (minuty od půlnoci).
   */
  checkClosesAfter(point, timeInMinutes) {
    if (
      !point.rawData ||
      !Array.isArray(point.rawData.openingHours) ||
      point.rawData.openingHours.length === 0
    ) {
      return false; // Pokud nemáme data, nemůžeme potvrdit, že se zavírá pozdě.
    }

    // Najdeme nejpozdější zavírací dobu pro jakýkoli den
    let latestClose = 0; // Nastaveno na minimální čas

    point.rawData.openingHours.forEach((interval) => {
      const closeTime = this.parseTime(interval.timeTo);
      if (closeTime !== null && closeTime > latestClose) {
        latestClose = closeTime;
      }
    });

    const result = latestClose > timeInMinutes;
    if (result) {
      console.log(
        `Point ${point.name} closes after ${this.formatTime(
          timeInMinutes / 60,
          timeInMinutes % 60
        )}: Yes (${this.formatTime(latestClose / 60, latestClose % 60)})`
      );
    } else {
      console.log(
        `Point ${point.name} closes after ${this.formatTime(
          timeInMinutes / 60,
          timeInMinutes % 60
        )}: No (${this.formatTime(latestClose / 60, latestClose % 60)})`
      );
    }
    return result;
  }

  /**
   * Zkontroluje, zda je místo otevřené v daný den v týdnu (API formát: 1=Ne, 2=Po ... 7=So).
   */
  checkOpenOnDay(point, apiWeekDay) {
    if (
      !point.rawData ||
      !Array.isArray(point.rawData.openingHours) ||
      point.rawData.openingHours.length === 0
    ) {
      return false; // Pokud nemáme data, nemůžeme potvrdit, že je otevřeno v tento den.
    }

    const hasHoursForDay = point.rawData.openingHours.some(
      (interval) =>
        parseInt(interval.weekDay) === apiWeekDay &&
        this.parseTime(interval.timeFrom) !== this.parseTime(interval.timeTo) // Zajišťuje, že je skutečně otevřeno, ne 00:00-00:00
    );

    if (hasHoursForDay) {
      console.log(`Point ${point.name} is open on day ${apiWeekDay}: Yes`);
    } else {
      console.log(`Point ${point.name} is open on day ${apiWeekDay}: No`);
    }
    return hasHoursForDay;
  }
  // === GLOBÁLNÍ LOADING ===

  showGlobalLoading(country, message = 'Načítám data...') {
    const globalLoading = document.createElement('div');
    globalLoading.className = 'ppl-global-loading';
    globalLoading.id = 'ppl-global-loading';

    const countryNames = {
      DE: { name: 'Německo', flag: '🇩🇪' },
      PL: { name: 'Polsko', flag: '🇵🇱' },
      CZ: { name: 'Česko', flag: '🇨🇿' },
      SK: { name: 'Slovensko', flag: '🇸🇰' },
    };

    const countryInfo = countryNames[country] || { name: country, flag: '🌍' };

    globalLoading.innerHTML = `
      <div class="ppl-global-loading-content">
        <div class="ppl-global-loading-spinner"></div>
        <div class="ppl-global-loading-title">Načítám ${countryInfo.name}</div>
        <div class="ppl-global-loading-subtitle">${message}</div>
        <div class="ppl-global-loading-progress">
          <div class="ppl-global-loading-progress-bar" style="width: 0%"></div>
        </div>
        <div class="ppl-global-loading-percentage">0%</div>
      </div>
    `;

    this.container.appendChild(globalLoading);
    setTimeout(() => globalLoading.classList.add('show'), 10);
  }

  updateGlobalLoadingProgress(progress, message) {
    const progressBar = document.querySelector(
      '.ppl-global-loading-progress-bar'
    );
    const percentage = document.querySelector('.ppl-global-loading-percentage');
    const subtitle = document.querySelector('.ppl-global-loading-subtitle');

    if (progressBar) progressBar.style.width = `${progress}%`;
    if (percentage) percentage.textContent = `${progress}%`;
    if (subtitle && message) subtitle.textContent = message;
  }

  hideGlobalLoading() {
    const globalLoading = document.getElementById('ppl-global-loading');
    if (globalLoading) {
      globalLoading.classList.remove('show');
      setTimeout(() => {
        if (globalLoading.parentNode) {
          globalLoading.parentNode.removeChild(globalLoading);
        }
      }, 300);
    }
  }
 }
 
 
 // Export pro různá prostředí
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PPLWidget;
}
if (typeof window !== 'undefined') {
    window.PPLWidget = PPLWidget;
}
 // === UTILITY FUNKCE ===

// === KONFIGURACE PRO RŮZNÉ ZEMĚ ===
const COUNTRY_CONFIGS = {
  DE: {
    isLargeDataset: true,
    mapCenter: [51.1657, 10.4515],
    mapZoom: 6,
    initialLanguage: 'DE',
    cache: {
      enabled: true,
      ttl: 60 * 60 * 1000,
      maxSize: 2000,
    },
    viewport: {
      enabled: true,
      padding: 0.1,
      minZoomForViewport: 6,
    },
    clustering: {
      cacheEnabled: true,
      maxCacheSize: 200,
      updateThreshold: 0.2,
    },
    batchSize: 2000,
    concurrentRequests: 6,
    maxRetries: 5,
    retryDelay: 2000,
  },

  PL: {
    isLargeDataset: true,
    mapCenter: [51.9194, 19.1451],
    mapZoom: 6,
    initialLanguage: 'PL',
    cache: {
      enabled: true,
      ttl: 45 * 60 * 1000,
      maxSize: 1500,
    },
    viewport: {
      enabled: true,
      padding: 0.15,
      minZoomForViewport: 7,
    },
    clustering: {
      cacheEnabled: true,
      maxCacheSize: 150,
      updateThreshold: 0.25,
    },
    batchSize: 1500,
    concurrentRequests: 5,
    maxRetries: 4,
    retryDelay: 1500,
  },

  CZ: {
    isLargeDataset: false,
    mapCenter: [49.7437, 15.3386],
    mapZoom: 7,
    initialLanguage: 'CZ',
    cache: {
      enabled: true,
      ttl: 30 * 60 * 1000,
      maxSize: 500,
    },
    viewport: {
      enabled: true,
      padding: 0.3,
      minZoomForViewport: 9,
    },
    clustering: {
      cacheEnabled: true,
      maxCacheSize: 50,
      updateThreshold: 0.3,
    },
    batchSize: 1000,
    concurrentRequests: 4,
    maxRetries: 3,
    retryDelay: 1000,
  },

  SK: {
    isLargeDataset: false,
    mapCenter: [48.669, 19.699],
    mapZoom: 7,
    initialLanguage: 'CZ',
    cache: {
      enabled: true,
      ttl: 30 * 60 * 1000,
      maxSize: 300,
    },
    viewport: {
      enabled: true,
      padding: 0.4,
      minZoomForViewport: 10,
    },
    clustering: {
      cacheEnabled: true,
      maxCacheSize: 30,
      updateThreshold: 0.4,
    },
    batchSize: 500,
    concurrentRequests: 3,
    maxRetries: 3,
    retryDelay: 1000,
  },
};

/**
 * Detekce země z různých zdrojů
 */
function detectCountry() {
  // 1. Priorita: data-country atribut na kontejneru (pouze v browseru)
  if (typeof document !== 'undefined') {
    const container = document.getElementById('ppl-parcelshop-map');
    const dataCountry = container?.dataset.country;
    if (dataCountry && COUNTRY_CONFIGS[dataCountry.toUpperCase()]) {
      return dataCountry.toUpperCase();
    }
  }

  // 2. Priorita: URL parametr (pouze v browseru)
  if (typeof window !== 'undefined' && window.location) {
    const urlParams = new URLSearchParams(window.location.search);
    const countryParam = urlParams.get('country');
    if (countryParam && COUNTRY_CONFIGS[countryParam.toUpperCase()]) {
      return countryParam.toUpperCase();
    }
  }

  // 3. Priorita: jazyk prohlížeče
  if (typeof navigator !== 'undefined') {
    const lang = navigator.language || navigator.userLanguage;
    const languageCountryMap = {
      de: 'DE',
      'de-DE': 'DE',
      'de-AT': 'DE',
      cs: 'CZ',
      'cs-CZ': 'CZ',
      sk: 'SK',
      'sk-SK': 'SK',
      pl: 'PL',
      'pl-PL': 'PL',
    };

    const detectedCountry = languageCountryMap[lang];
    if (detectedCountry && COUNTRY_CONFIGS[detectedCountry]) {
      return detectedCountry;
    }
  }

  // 4. Fallback: CZ
  return 'CZ';
}

function applyCountryOptimizations(container, country) {
  let config = COUNTRY_CONFIGS[country];

  if (!config) {
    console.warn(
      `No configuration found for country: ${country}, using CZ defaults`
    );
    config = COUNTRY_CONFIGS.CZ;
    country = 'CZ';
  }

  // Nastav data atributy na kontejner (pouze v browseru)
  if (container && container.dataset) {
    container.dataset.country = country;

    // Nastav centrum mapy pokud není specifikováno
    if (!container.dataset.centerLat && config.mapCenter) {
      container.dataset.centerLat = config.mapCenter[0];
      container.dataset.centerLng = config.mapCenter[1];
      container.dataset.zoom = config.mapZoom;
    }

    if (config.isLargeDataset) {
      container.dataset.largeDataset = 'true';
      container.classList.add('large-dataset');
      console.log(`🔥 Large dataset mode enabled for ${country}`);
    }
  }

  return config;
}

function getWidgetConfig(country) {
  const countryConfig = COUNTRY_CONFIGS[country] || COUNTRY_CONFIGS.CZ;
  const { isLargeDataset, ...widgetConfig } = countryConfig;
  return widgetConfig;
}

/**
 * Debug log konfigurace
 */
function logCountryConfig(country, config) {
  console.group(`🌍 PPL Widget Configuration for ${country}`);
  console.log(
    '📊 Dataset size:',
    config.isLargeDataset ? 'LARGE (15k+ points)' : 'SMALL (< 5k points)'
  );
  console.log('🎯 Cache TTL:', `${config.cache.ttl / 60000} minutes`);
  console.log(
    '📱 Viewport threshold:',
    `zoom ${config.viewport.minZoomForViewport}+`
  );
  console.log('🔧 Batch size:', config.batchSize);
  console.log('⚡ Concurrent requests:', config.concurrentRequests);
  console.groupEnd();
}

// === HLAVNÍ INICIALIZACE ===
// Podmíněná inicializace - pouze v browser prostředí
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('ppl-parcelshop-map');
    if (!container) {
      console.warn('PPL Widget container not found');
      return;
    }

    // 1. Detekuj zemi
    const country = detectCountry();
    console.log(`🌍 Detected country: ${country}`);

    // 2. Aplikuj optimalizace
    const countryConfig = applyCountryOptimizations(container, country);

    const isDev = false; // nastav na true, pokud chceš vývojový mód

    if (isDev) {
      console.log('Development mode');
    }

    // 4. Vytvoř widget s country-specific konfigurací
    const widgetConfig = getWidgetConfig(country);
    const widget = new PPLWidget(container, widgetConfig);

    // 5. Přidej country info do widget instance
    widget.country = country;
    widget.countryConfig = countryConfig;

    // 6. Global reference pro debugging
    window.pplWidget = widget;

    console.log(`✅ PPL Widget initialized successfully for ${country}`);
  });
} else {
  // Node.js prostředí - pouze export
  console.log('PPL Widget loaded in Node.js environment - no auto-initialization');
}

// === EXPORT PRO DALŠÍ POUŽITÍ ===
if (typeof window !== 'undefined') {
  window.PPLCountryConfigs = COUNTRY_CONFIGS;
  window.detectPPLCountry = detectCountry;
} else {
  // Node.js export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      PPLWidget,
      COUNTRY_CONFIGS,
      detectCountry
    };
  }
}

