export type GeocodingApiRequest =
  | {
      /** City name, state code (only for the US) and country code divided by comma. Please use ISO 3166 country codes. */
      q: string

      /** Your unique API key (you can always find it on your account page under the {@link https://home.openweathermap.org/api_keys "API key" tab}) */
      appid: string

      /** Number of the locations in the API response (up to 5 results can be returned in the API response) */
      limit?: number
    }
  | {
      /** Zip/post code and country code divided by comma. Please use ISO 3166 country codes. */
      zip: string

      /** Your unique API key (you can always find it on your account page under the {@link https://home.openweathermap.org/api_keys "API key" tab}) */
      appid: string
    }

export type GeocodingApiResponse = Array<{
  /** Name of the found location */
  name: string

  local_names: {
    /** Name of the found location in Abkhazian. */
    ab?: string

    /** Name of the found location in Afar. */
    aa?: string

    /** Name of the found location in Afrikaans. */
    af?: string

    /** Name of the found location in Akan. */
    ak?: string

    /** Name of the found location in Albanian. */
    sq?: string

    /** Name of the found location in Amharic. */
    am?: string

    /** Name of the found location in Arabic. */
    ar?: string

    /** Name of the found location in Aragonese. */
    an?: string

    /** Name of the found location in Armenian. */
    hy?: string

    /** Name of the found location in Assamese. */
    as?: string

    /** Name of the found location in Avaric. */
    av?: string

    /** Name of the found location in Avestan. */
    ae?: string

    /** Name of the found location in Aymara. */
    ay?: string

    /** Name of the found location in Azerbaijani. */
    az?: string

    /** Name of the found location in Bambara. */
    bm?: string

    /** Name of the found location in Bashkir. */
    ba?: string

    /** Name of the found location in Basque. */
    eu?: string

    /** Name of the found location in Belarusian. */
    be?: string

    /** Name of the found location in Bengali. */
    bn?: string

    /** Name of the found location in Bislama. */
    bi?: string

    /** Name of the found location in Bosnian. */
    bs?: string

    /** Name of the found location in Breton. */
    br?: string

    /** Name of the found location in Bulgarian. */
    bg?: string

    /** Name of the found location in Burmese. */
    my?: string

    /** Name of the found location in Catalan. */
    ca?: string

    /** Name of the found location in Chamorro. */
    ch?: string

    /** Name of the found location in Chechen. */
    ce?: string

    /** Name of the found location in Chewa. */
    ny?: string

    /** Name of the found location in Chinese. */
    zh?: string

    /** Name of the found location in Chuvash. */
    cv?: string

    /** Name of the found location in Cornish. */
    kw?: string

    /** Name of the found location in Corsican. */
    co?: string

    /** Name of the found location in Cree. */
    cr?: string

    /** Name of the found location in Croatian. */
    hr?: string

    /** Name of the found location in Czech. */
    cs?: string

    /** Name of the found location in Danish. */
    da?: string

    /** Name of the found location in Maldivian. */
    dv?: string

    /** Name of the found location in Dutch. */
    nl?: string

    /** Name of the found location in Dzongkha. */
    dz?: string

    /** Name of the found location in English. */
    en?: string

    /** Name of the found location in Esperanto. */
    eo?: string

    /** Name of the found location in Estonian. */
    et?: string

    /** Name of the found location in Ewe. */
    ee?: string

    /** Name of the found location in Faroese. */
    fo?: string

    /** Name of the found location in Fijian. */
    fj?: string

    /** Name of the found location in Finnish. */
    fi?: string

    /** Name of the found location in French. */
    fr?: string

    /** Name of the found location in Fulah. */
    ff?: string

    /** Name of the found location in Galician. */
    gl?: string

    /** Name of the found location in Georgian. */
    ka?: string

    /** Name of the found location in German. */
    de?: string

    /** Name of the found location in Greek. */
    el?: string

    /** Name of the found location in Guarani. */
    gn?: string

    /** Name of the found location in Gujarati. */
    gu?: string

    /** Name of the found location in Haitian Creole. */
    ht?: string

    /** Name of the found location in Hausa. */
    ha?: string

    /** Name of the found location in Hebrew. */
    he?: string

    /** Name of the found location in Herero. */
    hz?: string

    /** Name of the found location in Hindi. */
    hi?: string

    /** Name of the found location in Hiri Motu. */
    ho?: string

    /** Name of the found location in Hungarian. */
    hu?: string

    /** Name of the found location in Interlingua. */
    ia?: string

    /** Name of the found location in Indonesian. */
    id?: string

    /** Name of the found location in Interlingue. */
    ie?: string

    /** Name of the found location in Irish. */
    ga?: string

    /** Name of the found location in Igbo. */
    ig?: string

    /** Name of the found location in Inupiaq. */
    ik?: string

    /** Name of the found location in Ido. */
    io?: string

    /** Name of the found location in Icelandic. */
    is?: string

    /** Name of the found location in Italian. */
    it?: string

    /** Name of the found location in Inuktitut. */
    iu?: string

    /** Name of the found location in Japanese. */
    ja?: string

    /** Name of the found location in Javanese. */
    jv?: string

    /** Name of the found location in Greenlandic. */
    kl?: string

    /** Name of the found location in Kannada. */
    kn?: string

    /** Name of the found location in Kanuri. */
    kr?: string

    /** Name of the found location in Kashmiri. */
    ks?: string

    /** Name of the found location in Kazakh. */
    kk?: string

    /** Name of the found location in Khmer. */
    km?: string

    /** Name of the found location in Kikuyu. */
    ki?: string

    /** Name of the found location in Kinyarwanda. */
    rw?: string

    /** Name of the found location in Kyrgyz. */
    ky?: string

    /** Name of the found location in Komi. */
    kv?: string

    /** Name of the found location in Kongo. */
    kg?: string

    /** Name of the found location in Korean. */
    ko?: string

    /** Name of the found location in Kurdish. */
    ku?: string

    /** Name of the found location in Kwanyama. */
    kj?: string

    /** Name of the found location in Latin. */
    la?: string

    /** Name of the found location in Luxembourgish. */
    lb?: string

    /** Name of the found location in Ganda. */
    lg?: string

    /** Name of the found location in Limburgish. */
    li?: string

    /** Name of the found location in Lingala. */
    ln?: string

    /** Name of the found location in Lao. */
    lo?: string

    /** Name of the found location in Lithuanian. */
    lt?: string

    /** Name of the found location in Luba-Katanga. */
    lu?: string

    /** Name of the found location in Latvian. */
    lv?: string

    /** Name of the found location in Manx. */
    gv?: string

    /** Name of the found location in Macedonian. */
    mk?: string

    /** Name of the found location in Malagasy. */
    mg?: string

    /** Name of the found location in Malay. */
    ms?: string

    /** Name of the found location in Malayalam. */
    ml?: string

    /** Name of the found location in Maltese. */
    mt?: string

    /** Name of the found location in Maori. */
    mi?: string

    /** Name of the found location in Marathi. */
    mr?: string

    /** Name of the found location in Marshallese. */
    mh?: string

    /** Name of the found location in Mongolian. */
    mn?: string

    /** Name of the found location in Nauru. */
    na?: string

    /** Name of the found location in Navajo. */
    nv?: string

    /** Name of the found location in Northern Ndebele. */
    nd?: string

    /** Name of the found location in Nepali. */
    ne?: string

    /** Name of the found location in Ndonga. */
    ng?: string

    /** Name of the found location in Bokmål. */
    nb?: string

    /** Name of the found location in Nynorsk. */
    nn?: string

    /** Name of the found location in Norwegian. */
    no?: string

    /** Name of the found location in Nuosu. */
    ii?: string

    /** Name of the found location in Southern Ndebele. */
    nr?: string

    /** Name of the found location in Occitan. */
    oc?: string

    /** Name of the found location in Ojibwa. */
    oj?: string

    /** Name of the found location in Church Slavonic. */
    cu?: string

    /** Name of the found location in Oromo. */
    om?: string

    /** Name of the found location in Oriya. */
    or?: string

    /** Name of the found location in Ossetian. */
    os?: string

    /** Name of the found location in Punjabi. */
    pa?: string

    /** Name of the found location in Pali. */
    pi?: string

    /** Name of the found location in Persian. */
    fa?: string

    /** Name of the found location in Polish. */
    pl?: string

    /** Name of the found location in Pashto. */
    ps?: string

    /** Name of the found location in Portuguese. */
    pt?: string

    /** Name of the found location in Quechua. */
    qu?: string

    /** Name of the found location in Romansh. */
    rm?: string

    /** Name of the found location in Rundi. */
    rn?: string

    /** Name of the found location in Romanian. */
    ro?: string

    /** Name of the found location in Russian. */
    ru?: string

    /** Name of the found location in Sanskrit. */
    sa?: string

    /** Name of the found location in Sardinian. */
    sc?: string

    /** Name of the found location in Sindhi. */
    sd?: string

    /** Name of the found location in Northern Sami. */
    se?: string

    /** Name of the found location in Samoan. */
    sm?: string

    /** Name of the found location in Sango. */
    sg?: string

    /** Name of the found location in Serbian. */
    sr?: string

    /** Name of the found location in Scottish Gaelic. */
    gd?: string

    /** Name of the found location in Shona. */
    sn?: string

    /** Name of the found location in Sinhala. */
    si?: string

    /** Name of the found location in Slovak. */
    sk?: string

    /** Name of the found location in Slovenian. */
    sl?: string

    /** Name of the found location in Somali. */
    so?: string

    /** Name of the found location in Sotho. */
    st?: string

    /** Name of the found location in Spanish. */
    es?: string

    /** Name of the found location in Sundanese. */
    su?: string

    /** Name of the found location in Swahili. */
    sw?: string

    /** Name of the found location in Swati. */
    ss?: string

    /** Name of the found location in Swedish. */
    sv?: string

    /** Name of the found location in Tamil. */
    ta?: string

    /** Name of the found location in Telugu. */
    te?: string

    /** Name of the found location in Tajik. */
    tg?: string

    /** Name of the found location in Thai. */
    th?: string

    /** Name of the found location in Tigrinya. */
    ti?: string

    /** Name of the found location in Tibetan. */
    bo?: string

    /** Name of the found location in Turkmen. */
    tk?: string

    /** Name of the found location in Tagalog. */
    tl?: string

    /** Name of the found location in Tswana. */
    tn?: string

    /** Name of the found location in Tonga. */
    to?: string

    /** Name of the found location in Turkish. */
    tr?: string

    /** Name of the found location in Tsonga. */
    ts?: string

    /** Name of the found location in Tatar. */
    tt?: string

    /** Name of the found location in Twi. */
    tw?: string

    /** Name of the found location in Tahitian. */
    ty?: string

    /** Name of the found location in Uyghur. */
    ug?: string

    /** Name of the found location in Ukrainian. */
    uk?: string

    /** Name of the found location in Urdu. */
    ur?: string

    /** Name of the found location in Uzbek. */
    uz?: string

    /** Name of the found location in Venda. */
    ve?: string

    /** Name of the found location in Vietnamese. */
    vi?: string

    /** Name of the found location in Volapük. */
    vo?: string

    /** Name of the found location in Walloon. */
    wa?: string

    /** Name of the found location in Welsh. */
    cy?: string

    /** Name of the found location in Wolof. */
    wo?: string

    /** Name of the found location in West Frisian. */
    fy?: string

    /** Name of the found location in Xhosa. */
    xh?: string

    /** Name of the found location in Yiddish. */
    yi?: string

    /** Name of the found location in Yoruba. */
    yo?: string

    /** Name of the found location in the Zhuang languages. */
    za?: string

    /** Name of the found location in Zulu. */
    zu?: string

    /** Internal field */
    ascii: string

    /** Internal field */
    feature_name: string
  }

  /** Geographical coordinates of the found location (latitude) */
  lat: number

  /** Geographical coordinates of the found location (longitude) */
  lon: number

  /** Country of the found location */
  country: string

  /** State of the found location */
  state?: string
}>
