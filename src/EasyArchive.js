/* eslint-disable no-template-curly-in-string */
'use strict';
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
/* <nowiki> */
/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source <zh.wikipedia.org/wiki/MediaWiki:Gadget-easy-archive.js>
 * @source <meta.wikimedia.org/w/index.php?oldid=18915644>
 */
(function (mw) {
    if (!('external_config' in window)) {
        window.external_config = {};
    }
    if (!('easy_archive' in window.external_config)) {
        window.external_config.easy_archive = {};
    }
    window.external_config.easy_archive.never_enable_on_these_pages_regex = [];
    window.external_config.easy_archive.never_enable_on_these_namespaces_int = [0];
    if (!window.easy_archive) {
        window.easy_archive = {};
        (function (object) {
            var x = 2019;
            var y = 3;
            var z = 2;
            var more = 0;
            var status = 'se';
            var build = 89;
            var version_delim = '.';
            var version = x.toString(10) + version_delim + y.toString(10) + version_delim + z.toString(10) + (more ? version_delim + more.toString(10) : '');
            var iteration = status + build.toString(10);
            var ver = "".concat(version, " / ").concat(iteration);
            object.version = version;
            object.iteration = iteration;
            object.build = build;
            object.ver = ver;
            object.version_parsed = {
                x: x,
                y: y,
                z: z,
                more: more,
                status: status,
                build: build
            };
        })(window.easy_archive);
        (function (ele, txt, time, condition) {
            if (!condition) {
                return;
            }
            ele.innerHTML = '';
            (function (ele, txt, time) {
                txt = txt.split('');
                var len = txt.length;
                var rate = time / len;
                for (var i = 0; i < len; i++) {
                    setTimeout(function () {
                        ele.innerHTML += txt.shift();
                    }, i * rate);
                }
            })(ele, txt, time);
        })(document.getElementById('easy_archive'), window.easy_archive.ver, 400, document.getElementById('8c23b4144bd58c689e192c6ab912a3b75c76f6849977518b8bedefd5e347d67f'));
        (function (easy) {
            // Go repo
            var Go = (function () {
                var Go;
                try {
                    Go = (function () {
                        var chain = function (go, fn) {
                            // eslint-disable-next-line no-unused-vars
                            var f2 = function (_x) { return 0; };
                            var promise = new Promise(function (reso, reje) {
                                // eslint-disable-next-line no-unused-vars
                                f2 = function (_x) { return fn(reso, reje); };
                            });
                            go.task.then(f2);
                            go.task = promise;
                        };
                        var Go = /** @class */ (function () {
                            function Go() {
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                this.task = new Promise(function (resolve) { return resolve(); });
                                this.chain.apply(this, __spreadArray([], __read(args), false));
                            }
                            Go.prototype.chain = function () {
                                var e_1, _c;
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                var _len = args.length;
                                var fns = Array.from({ length: _len });
                                for (var _key = 0; _key < _len; _key++) {
                                    fns[_key] = args[_key];
                                }
                                try {
                                    for (var fns_1 = __values(fns), fns_1_1 = fns_1.next(); !fns_1_1.done; fns_1_1 = fns_1.next()) {
                                        var fn = fns_1_1.value;
                                        if (typeof fn === 'function') {
                                            chain(this, fn);
                                        }
                                        else if (typeof fn === 'object' && fn !== null && fn.constructor === Array) {
                                            this.chain.apply(this, __spreadArray([], __read(fn), false));
                                        }
                                        else {
                                            throw new TypeError('Cannot chain non-function and non-arrays to a Go instance.');
                                        }
                                    }
                                }
                                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                finally {
                                    try {
                                        if (fns_1_1 && !fns_1_1.done && (_c = fns_1["return"])) _c.call(fns_1);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                }
                                return this;
                            };
                            return Go;
                        }());
                        return Go;
                    })();
                }
                catch (_c) {
                    Go = function () { };
                    Go.prototype.chain = function (f) {
                        f();
                    };
                }
                return Go;
            })();
            var go = new Go();
            if (!('mw' in window)) {
                throw new Error('Easy Archive cannot function without mw object.');
            }
            // minified code dependency functions
            var Pare_str = (function () {
                var intep = function (celldata) {
                    if (/^\$[Ff]alse$/.test(celldata)) {
                        return false;
                    }
                    else if (/^\$[Tt]rue$/.test(celldata)) {
                        return true;
                    }
                    else if (/^\$-?(0*|[1-9]\d*)(|.\d+)(|[Ee](|\+|-)\d*)$/.test(celldata)) {
                        return Number.parseFloat(celldata.slice(1));
                    }
                    else if (/^\$[Nn](ull|one|il)$/.test(celldata)) {
                        return null;
                    }
                    return celldata;
                };
                var Pare_str = /** @class */ (function () {
                    function Pare_str(pare_string, config) {
                        this.str = pare_string;
                        this.left = '(';
                        this.delim = ':';
                        this.right = ')';
                        if (typeof config !== 'string') {
                            config = String(config);
                        }
                        if (pare_string.length > 6 && /[#%@][Ss][Ee][Tt]/.test(pare_string.slice(0, 4)) && !config.includes('ignore-set')) {
                            this.left = pare_string[4];
                            this.delim = pare_string[5];
                            this.right = pare_string[6];
                            if (this.left === this.right || this.left === this.delim || this.right === this.delim) {
                                throw new SyntaxError("Pound set statement has repetitive characters. E.g. '#set|:|' is illegal.");
                            }
                        }
                    }
                    Pare_str.prototype.find = function (lookup_key) {
                        lookup_key = this.left + lookup_key + this.delim;
                        if (!this.str.includes(lookup_key)) {
                            return null;
                        }
                        return this.str.split(lookup_key)[1].split(this.right)[0];
                    };
                    Pare_str.prototype["new"] = function (new_key, new_value) {
                        if (new_key.includes(this.left) || new_key.includes(this.right) || new_key.includes(this.delim) || new_value.includes(this.left) || new_value.includes(this.right)) {
                            throw new Error("Pare_str: Illegal key or value. Key mustn't have any bound or delimiter, value mustn't have any bound.");
                        }
                        this.str = this.left + new_key + this.delim + new_value + this.right + this.str;
                        return this;
                    };
                    Pare_str.prototype.update = function (lookup_key, new_value) {
                        if (this.find(lookup_key) === null) {
                            this["new"](lookup_key, new_value);
                        }
                        else {
                            var new_str = this.str.split(this.left + lookup_key + this.delim);
                            new_str[1] = new_str[1].split(this.right);
                            new_str[1][0] = new_value;
                            new_str[1] = new_str[1].join(this.right);
                            new_str = new_str.join(this.left + lookup_key + this.delim);
                            this.str = new_str;
                        }
                        return this;
                    };
                    Pare_str.prototype.intep = function (lookup_key) {
                        return intep(this.find(lookup_key));
                    };
                    return Pare_str;
                }());
                return Pare_str;
            })();
            // common repo.
            var expose = (function () {
                var glb = {
                    url: mw.config.values.wgServer,
                    p: mw.config.values.wgPageName,
                    un: mw.config.values.wgUserName,
                    u: "User:".concat(mw.config.values.wgUserName),
                    ut: "User_talk:".concat(mw.config.values.wgUserName),
                    t: null
                };
                glb.a = "".concat(glb.url).concat(mw.config.get('wgScriptPath'), "/api.php");
                var asyncPost = function (url, body, fn) {
                    var z1 = 'Content-Type';
                    var z2 = 'application/x-www-form-urlencoded';
                    var a = new XMLHttpRequest();
                    a.onreadystatechange = fn;
                    a.open('POST', url, true);
                    a.setRequestHeader(z1, z2);
                    a.send(body);
                };
                var loadTokenSilently = function () {
                    var f = function () {
                        if (this.readyState === 4) {
                            glb.t = JSON.parse(this.responseText).query.tokens.csrftoken;
                        }
                    };
                    var z = 'action=query&meta=tokens&format=json';
                    asyncPost(glb.a, z, f);
                    setTimeout(loadTokenSilently, 1800000);
                };
                loadTokenSilently();
                // eslint-disable-next-line no-unused-vars
                var ding = function (_a, _b) { };
                var eur = encodeURIComponent;
                var takeToken = function () {
                    if (glb.t) {
                        return glb.t;
                    }
                    loadTokenSilently();
                    return false;
                };
                var getPage = function (a, fn) {
                    // ding("Requesting page: "+a, 1);
                    var z = 'action=query&prop=revisions&rvprop=ids|flags|timestamp|user|userid|size|comment|tags|content&format=json&titles=';
                    asyncPost(glb.a, z + eur(a), fn);
                };
                var getPageSection = function (a, b, fn) {
                    ding("Requesting page: ".concat(a, " in section: ").concat(b), 1);
                    var z = 'action=query&prop=revisions&rvprop=content&format=json&titles=';
                    asyncPost(glb.a, "".concat(z + eur(a), "&rvsection=").concat(eur(b)), fn);
                };
                var pickPageContent = function (a) {
                    if (typeof a === 'string') {
                        var b = JSON.parse(a);
                        if (typeof b === 'object') {
                            for (var x in b.query.pages) {
                                var c = b.query.pages[x];
                                return c.revisions[0]['*'];
                            }
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        // from now on pick functions will only work with string inputs. DO NOT parse pages before passing them into pick functions.
                        return false;
                    }
                };
                var tellPageExist = function (a) {
                    try {
                        a = JSON.parse(a);
                    }
                    catch (_c) {
                        return false;
                    }
                    if (typeof a !== 'object') {
                        return false;
                    }
                    if (!('query' in a)) {
                        return false;
                    }
                    if (!('pages' in a.query)) {
                        return false;
                    }
                    if (-1 in a.query.pages) {
                        return false;
                    }
                    return true;
                };
                var edit = function (a, b, c, d, f) {
                    // ding("Requesting page edit for: "+a+" Summary: "+c,1);
                    var fn = typeof f === 'function'
                        ? function () {
                            if (this.readyState === 4) {
                                f();
                            }
                        }
                        : function () {
                            if (this.readyState === 4) {
                                ding("Following page edited: ".concat(a, " Detail: ").concat(this.responseText));
                            }
                        }; // from now on, f is definable.
                    if (!d) {
                        d = takeToken();
                    }
                    var z = 'action=edit&format=json&title=';
                    asyncPost(glb.a, "".concat(z + eur(a), "&text=").concat(eur(b), "&summary=").concat(eur(c), "&token=").concat(eur(d)), fn);
                };
                var editPro = function (a, b, c, d, e, f) {
                    // ding("Requesting page edit for: "+a+" in section: "+b+" Summary: "+d,1);
                    var fn = typeof f === 'function'
                        ? function () {
                            if (this.readyState === 4) {
                                f();
                            }
                        }
                        : function () {
                            if (this.readyState === 4) {
                                ding("Following page edited: ".concat(a, " Section: ").concat(b, " Detail: ").concat(this.responseText));
                            }
                        };
                    var z = 'action=edit&format=json&title=';
                    asyncPost(glb.a, "".concat(z + eur(a), "&section=").concat(eur(b), "&text=").concat(eur(c), "&summary=").concat(eur(d), "&token=").concat(eur(e)), fn);
                };
                var editAppend = function (a, b, c, d, fn) {
                    var f = function () {
                        if (this.readyState === 4) {
                            var original_content = void 0;
                            if (tellPageExist(this.responseText) === false) {
                                original_content = '';
                            }
                            else {
                                original_content = pickPageContent(this.responseText);
                            }
                            edit(a, String(original_content) + b, c, d, fn);
                        }
                    };
                    getPage(a, f);
                };
                var archive_section = function (page_name, section, to, callback, summary) {
                    getPageSection(page_name, section, function () {
                        var doneness = 0;
                        var done = function () {
                            doneness++;
                            if (doneness === 2) {
                                callback();
                            }
                        };
                        if (this.readyState === 4) {
                            editAppend(to, "\n\n".concat(pickPageContent(this.responseText)), summary, takeToken(), done);
                            editPro(page_name, section.toString(), '', summary, takeToken(), done);
                        }
                    });
                };
                var delete_section = function (page_name, section, callback, summary) {
                    editPro(page_name, section.toString(), '', summary, takeToken(), callback);
                };
                return {
                    a: archive_section,
                    d: delete_section
                };
            })();
            // default settings:
            easy.settings_string =
                '#set%|?									\n' +
                    'display section delete link	%sec-del|1?	\n' +
                    'display section archive line	%sec-arc|1?	\n' +
                    'display control bar at top	%top-bar|0?	\n' +
                    'archive location				%arc-loc|?	\n' +
                    'subsection effectiveness		%sub-sec|2?	\n' +
                    'confirm action				%confirm|0?	\n' +
                    'is this data initialized		%data-init|0? \n';
            easy.settings = new Pare_str(easy.settings_string);
            easy.my_user_talk = null;
            try {
                easy.never_enable_on_these_pages_regex = window.external_config.easy_archive.never_enable_on_these_pages_regex;
            }
            catch (_c) {
                easy.never_enable_on_these_pages_regex = [];
            }
            easy.dis_support_these_pages_regex = [
                /^File:.*$/,
                /^MediaWiki:.*$/,
                /^Module:.*$/,
                /^Category:.*$/,
                /^Template:.*$/,
                /^Special:.*$/,
                /^User:.*\/?.*\.js$/,
                /^User:.*\/?.*\.css$/,
                /^User:.*\/?.*\.json$/
            ];
            var settings_span_collection = document.querySelectorAll('.easy_archive_data_point_collection');
            var settings_span = settings_span_collection[0];
            var settings = settings_span ? new Pare_str(settings_span.innerHTML) : new Pare_str('');
            if (settings.find('data-init') === '1') {
                easy.settings_string = settings_span.innerHTML;
                easy.settings = new Pare_str(easy.settings_string);
            }
            // language selection logic
            var accepted_language = (function () {
                var PREVENT_INFINITE_LOOP = 1000;
                var accepted_languages_dict = {
                    // lang_code
                    de: 'de_de',
                    dech: 'de_ch',
                    dede: 'de_de',
                    deli: 'de_li',
                    en: 'en_us',
                    enau: 'en_au',
                    enca: 'en_ca',
                    enhk: 'en_hk',
                    ennz: 'en_nz',
                    enuk: 'en_uk',
                    enus: 'en_us',
                    fi: 'fi_fi',
                    fr: 'fr_fr',
                    frch: 'fr_ch',
                    frfr: 'fr_fr',
                    sv: 'sv_se',
                    svse: 'sv_se',
                    svfi: 'sv_fi',
                    zh: 'zh_cn',
                    zhcn: 'zh_cn',
                    zhhk: 'zh_hk',
                    zhtw: 'zh_tw',
                    zhsg: 'zh_cn',
                    // country code
                    au: 'en_au',
                    // english of commonwealth of australia
                    ca: 'en_ca',
                    // english of canada
                    ch: 'de_ch',
                    // deutsch of swiss confederation
                    cn: 'zh_cn',
                    // zhongwen of chinese mainland
                    hk: 'zh_hk',
                    // zhongwen of hong kong s.a.r.
                    li: 'de_li',
                    // deutsch of principality of liechtenstein
                    nz: 'en_us',
                    // english of new-zealand
                    tw: 'zh_tw',
                    // zhongwen of taiwan, the province of china
                    sg: 'zh_cn',
                    // zhongwen of singapore
                    se: 'sv_se',
                    // svenska of sweden
                    uk: 'en_uk',
                    // english of the united kingdom of g.b. and n.i.
                    us: 'en_us',
                    // english of the u.s. of a.
                    // non-standard raw lang code
                    'zh-hans': 'zh_cn',
                    'zh-hant': 'zh_hk'
                };
                var Language_proximity_group = /** @class */ (function () {
                    function Language_proximity_group(desc) {
                        this.parent = null;
                        this.desc = desc;
                        this.sub_groups = [];
                        this.languages = [];
                    }
                    Language_proximity_group.prototype.all = function () {
                        var all_codes = [];
                        for (var i = 0; i < this.languages.length; i++) {
                            all_codes = all_codes.concat(this.languages[i]);
                        }
                        for (var i = 0; i < this.sub_groups.length; i++) {
                            all_codes = all_codes.concat(this.sub_groups[i].all());
                        }
                        return all_codes;
                    };
                    Language_proximity_group.prototype.add_one = function (item) {
                        if (typeof item === 'string' && !this.languages.includes(item)) {
                            this.languages.push(item);
                        }
                        else if (typeof item === 'object' && item !== null && item.constructor === Language_proximity_group && !this.sub_groups.includes(item)) {
                            item.parent = this, this.sub_groups.push(item);
                        }
                        else {
                            throw new TypeError("cannot add this item ".concat(typeof item, ". add only language code and proximity groups."));
                        }
                        return this;
                    };
                    Language_proximity_group.prototype.add = function () {
                        var e_2, _c;
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        try {
                            for (var args_1 = __values(args), args_1_1 = args_1.next(); !args_1_1.done; args_1_1 = args_1.next()) {
                                var arg = args_1_1.value;
                                this.add_one(arg);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (args_1_1 && !args_1_1.done && (_c = args_1["return"])) _c.call(args_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return this;
                    };
                    // return the group in which the language code resides.
                    Language_proximity_group.prototype.group_of = function (code_or_desc, include_desc) {
                        if (this.languages.includes(code_or_desc)) {
                            // desired language is in this group
                            return this;
                        }
                        else if (this.all().includes(code_or_desc)) {
                            // desired language is not in this group, but in a sub group of this group
                            for (var i = 0; i < this.sub_groups.length; i++) {
                                var search_result = this.sub_groups[i].group_of(code_or_desc);
                                if (search_result !== null) {
                                    return search_result;
                                }
                            }
                            return null;
                        }
                        else if (this.desc === code_or_desc && include_desc !== false) {
                            // this is the desired group
                            // also, caller did not specified group label exclusion
                            return this;
                        }
                        // desired language is not in this group
                        return null;
                    };
                    return Language_proximity_group;
                }());
                // define friends
                var group_north_am_eng = new Language_proximity_group('en_north_american').add('en_us', 'en_ca');
                var group_australian_eng = new Language_proximity_group('en_au_nz').add('en_nz', 'en_au');
                var group_dominant_english = new Language_proximity_group('en_native').add('en_uk', group_north_am_eng, group_australian_eng);
                var group_english = new Language_proximity_group('en').add(group_dominant_english, 'en_sg', 'en_hk');
                var group_french = new Language_proximity_group('fr').add('fr_fr', 'fr_ch');
                var group_german = new Language_proximity_group('de').add('de_de', 'de_ch', 'de_li');
                var group_swedish = new Language_proximity_group('sv').add('sv_se', 'sv_fi');
                var group_finnish = new Language_proximity_group('fi').add('fi_fi');
                var group_north_eu = new Language_proximity_group('european_northern').add(group_swedish, group_finnish);
                var group_european = new Language_proximity_group('european').add(group_english, group_french, group_german, group_north_eu);
                var group_zh_hans = new Language_proximity_group('zh_hans').add('zh_cn', 'zh_sg', 'zh_mo');
                var group_zh_hant = new Language_proximity_group('zh_hant').add('zh_hk', 'zh_tw');
                var group_zh = new Language_proximity_group('zh').add(group_zh_hans, group_zh_hant);
                var group_cjk = new Language_proximity_group('cjk').add(group_zh);
                var group_asian = new Language_proximity_group('asian').add(group_cjk);
                var group_world = new Language_proximity_group('world').add(group_asian, group_european);
                var accepted_languages = function (raw_lang_code) {
                    var e_3, _c;
                    var all_acceptable_codes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
                    var processed_lang_code = String(raw_lang_code)
                        .toLowerCase()
                        .replace(/[^a-z]/g, '')
                        .slice(0, 4);
                    var processed_lang_code_short = processed_lang_code.slice(0, 2);
                    var best_match = accepted_languages_dict[raw_lang_code] || accepted_languages_dict[processed_lang_code] || accepted_languages_dict[processed_lang_code_short] || null;
                    if (all_acceptable_codes === null ||
                        typeof all_acceptable_codes !== 'object' ||
                        Array.isArray(!all_acceptable_codes) ||
                        all_acceptable_codes.length === 0 ||
                        all_acceptable_codes.includes(best_match)) {
                        return best_match;
                    }
                    // assert all_acceptable_codes:
                    // - instanceof Array
                    // - does not contain best match
                    // - has at least 1 entry
                    var current_group = group_world.group_of(best_match);
                    if (current_group === null) {
                        return all_acceptable_codes[0];
                    }
                    // equivalent to a while(true).
                    for (var i = 0; i < PREVENT_INFINITE_LOOP; i++) {
                        var close_match_group = current_group.all();
                        try {
                            for (var close_match_group_1 = (e_3 = void 0, __values(close_match_group)), close_match_group_1_1 = close_match_group_1.next(); !close_match_group_1_1.done; close_match_group_1_1 = close_match_group_1.next()) {
                                var element = close_match_group_1_1.value;
                                if (all_acceptable_codes.includes(element)) {
                                    return element;
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (close_match_group_1_1 && !close_match_group_1_1.done && (_c = close_match_group_1["return"])) _c.call(close_match_group_1);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        if (current_group.parent) {
                            current_group = current_group.parent;
                        }
                        else {
                            return all_acceptable_codes[0];
                        }
                    }
                    return all_acceptable_codes[0];
                };
                return accepted_languages;
            })();
            var raw_lang_code = mw.config.values.wgUserLanguage || window.wgUserLanguage || navigator.language;
            easy.lang_code = accepted_language(raw_lang_code, ['en_us', 'zh_cn', 'zh_hk', 'zh_tw']);
            // ... lang done
            // identify if Easy Archive can be used on the page - compatibility
            easy.on_user_talk = mw.config.values.wgNamespaceNumber === 3;
            easy.my_user_talk =
                easy.on_user_talk &&
                    (function () {
                        var page_name = mw.config.values.wgPageName.split(':');
                        page_name[0] = '';
                        page_name = page_name.join('');
                        page_name = page_name.split('/')[0];
                        var user_name = mw.config.values.wgUserName;
                        return user_name.split('_').join('').split(' ').join('') === page_name.split('_').join('').split(' ').join('');
                    })();
            easy.has_template = settings.find('data-init') === '1';
            easy.others_user_talk = easy.my_user_talk === false && easy.on_user_talk === true;
            easy.on_article = mw.config.values.wgNamespaceNumber === 0;
            easy.on_hist_version = mw.config.values.wgCurRevisionId - mw.config.values.wgRevisionId !== 0;
            // this nested IEFE is unnecessary. but it doesn't hurt to keep the scope clean.
            (function () {
                if (!easy.lang) {
                    easy.lang = {};
                }
                easy.lang["delete"] = {
                    en_us: 'delete',
                    zh_cn: '删除',
                    zh_hk: '刪除',
                    zh_tw: '刪除'
                };
                easy.lang.archive = {
                    en_us: 'archive',
                    zh_cn: '存档',
                    zh_hk: '存檔',
                    zh_tw: '存檔'
                };
                easy.lang.supports = {
                    en_us: 'Easy Archive is enabled on this talk page',
                    zh_cn: '本讨论页面使用 Easy Archive 快速存档',
                    zh_hk: '本頁使用 Easy Archive',
                    zh_tw: '本頁使用 Easy Archive'
                };
                easy.lang.others_page = {
                    en_us: 'Easy Archive is not enabled.',
                    zh_cn: '本页面是他人的用户讨论页面，因此不支持 Easy Archive 快速存档。',
                    zh_hk: '本頁為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。',
                    zh_tw: '本頁為他人用戶討論頁面，故不支援 Easy Archive 快速存檔。'
                };
                easy.lang.to_enable = {
                    en_us: 'This page is not using Easy Archive.',
                    zh_cn: '本页面没有启用 Easy Archive。',
                    zh_hk: '本頁没有啟用 Easy Archive。',
                    zh_tw: '本頁没有啟用 Easy Archive。'
                };
                easy.lang.enable_on_generic_page = {
                    en_us: '<div>This page is not your user talk page. However Easy Archive still can be used if needed.</div><div>To enable it, add {{Easy Archive|to=[Archive location]}} to this page.</div>',
                    zh_cn: '<div>本页面不是您的用户讨论页面。不过，如果需要，本页面是可以使用 Easy Archive 的。</div><div>如果要在本页面使用 Easy Archive，请加入 {{Easy Archive|to=存档位置}}。</div>',
                    zh_hk: '<div>本頁面不是您的用戶討論頁面。不過，如果需要，本頁面是可以使用 Easy Archive 的。</div><div>如果要在本頁面使用 Easy Archive，請加入 {{Easy Archive|to=存檔位置}}。</div>',
                    zh_tw: '<div>本頁面不是您的用戶討論頁面。不過，如果需要，本頁面是可以使用 Easy Archive 的。</div><div>如果要在本頁面使用 Easy Archive，請加入 {{Easy Archive|to=存檔位置}}。</div>'
                };
                easy.lang.please_enable = {
                    en_us: '<div>Add {{Easy Archive|to=[Archive location]}} to this page to start using Easy Archive.</div>',
                    zh_cn: '<div>请在本页面加入 {{Easy Archive|to=存档地址}} 来启用 Easy Archive。</div>',
                    zh_hk: '<div>請在本頁加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。</div>',
                    zh_tw: '<div>請在本頁加入 {{Easy Archive|to=存檔位置}} 來啟用 Easy Archive。</div>'
                };
                easy.lang.please_enable_elaborate = {
                    en_us: "<div>You have the Easy Archive functionality enabled but your talk page hasn't been configured yet. </div><div>To take advantage of Easy Archive, add {{Easy Archive|to=[Archive location]}} template to this page.</div>",
                    zh_cn: '<div>您的帐户已经支持 Easy Archive，但是，为了开始使用该功能，您还需要在自己的用户讨论页面上添加模板 {{Easy Archive|to=存档位置}}。</div>',
                    zh_hk: '<div>您的帳戶已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。</div>',
                    zh_tw: '<div>您的帳戶已經支持 Easy Archive，但是，為了開始使用該功能，您還需要在自己的用戶討論頁面上添加模板 {{Easy Archive|to=存檔位置}}。</div>'
                };
                easy.lang.arc_all = {
                    en_us: 'Archive all topics',
                    zh_cn: '存档全部讨论',
                    zh_hk: '全部討論存檔',
                    zh_tw: '全部討論存檔'
                };
                easy.lang.arc_old_percent = {
                    en_us: 'Archive oldest ${1}',
                    zh_cn: '存档最旧${1}',
                    zh_hk: '存檔最舊${1}',
                    zh_tw: '存檔最舊${1}'
                };
                easy.lang.arc_old = {
                    en_us: 'Archive oldest ${1} topic${2}',
                    // ${2} = 's' if plural
                    zh_cn: '存档最旧${1}个',
                    zh_hk: '存檔最舊${1}個',
                    zh_tw: '存檔最舊${1}個'
                };
                easy.lang.arc_all_but = {
                    en_us: 'Archive all but ${1} topic${2}',
                    // ${2} = 's' if plural
                    zh_cn: '只留下${1}个最新',
                    zh_hk: '只留最新${1}個',
                    zh_tw: '只留最新${1}個'
                };
                easy.lang.settings = {
                    en_us: 'Preference',
                    zh_cn: '设置',
                    zh_hk: '設定',
                    zh_tw: '設定'
                };
                easy.lang.stop_using = {
                    en_us: 'Turn off',
                    zh_cn: '停用',
                    zh_hk: '停用',
                    zh_tw: '停用'
                };
                easy.lang.change = {
                    en_us: 'Change',
                    zh_cn: '更改',
                    zh_hk: '更改',
                    zh_tw: '更改'
                };
                easy.lang.left_par_split = {
                    en_us: ' (',
                    zh_cn: '（',
                    zh_hk: '（',
                    zh_tw: '（'
                };
                easy.lang.right_par = {
                    en_us: ')',
                    zh_cn: '）',
                    zh_hk: '）',
                    zh_tw: '）'
                };
                easy.lang.full_stop_split = {
                    en_us: '. ',
                    zh_cn: '。',
                    zh_hk: '。',
                    zh_tw: '。'
                };
                easy.lang.archive_path_colon_split = {
                    en_us: 'Archive location: ',
                    zh_cn: '存档地址：',
                    zh_hk: '存檔至：',
                    zh_tw: '存檔至：'
                };
                easy.lang.warning_stop_using = {
                    en_us: '<div>Once Easy Archive is turned off, and you want it back on, you\'ll have to turn it on manually.</div><div>Do you want to turn it off? <div style="height:.5em"></div><button onclick="window.easy_archive.turn_off(1)">Yes</button><button onclick="window.easy_archive.elaborate_notice(3163);">No</button></div>',
                    zh_cn: '<div>停用 Easy Archive 后，如要再次启用，只能手工操作。</div><div>要现在停用 Easy Archive 吗？<div style="height:.5em"></div><button onclick=onclick="window.easy_archive.turn_off(1)">是</button><button onclick="window.easy_archive.elaborate_notice(3163);">否</button></div>',
                    zh_hk: '<div>停用 Easy Archive 後，如要再次啟用，則必須手動重啟。</div><div>要現在停用 Easy Archive 嗎？<div style="height:.5em"></div><button onclick=onclick="window.easy_archive.turn_off(1)">是</button><button onclick="window.easy_archive.elaborate_notice(3163);">否</button></div>',
                    zh_tw: '<div>停用 Easy Archive 後，如要再次啟用，則必須手動重啟。</div><div>要現在停用 Easy Archive 嗎？<div style="height:.5em"></div><button onclick=onclick="window.easy_archive.turn_off(1)">是</button><button onclick="window.easy_archive.elaborate_notice(3163);">否</button></div>'
                };
                easy.lang.stop_manually = {
                    en_us: '<div>Cannot turn off Easy Archive automatically. </div><div>To manually discontinue use, delete the template {{Easy Archive|to=[Archive location]}} from this page.</div>',
                    zh_cn: '<div>经过尝试，无法自动停用 Easy Archive。请手动停用。</div><div>请从本页面删除如下模版：{{Easy Archive|to=存档位置}}。</div>',
                    zh_hk: '<div>經過嘗試，恕無法自動停用 Easy Archive。請手動停用。</div><div>請從本頁刪除以下模板︰{{Easy Archive|to=存檔位置}}。</div>',
                    zh_tw: '<div>經過嘗試，恕無法自動停用 Easy Archive。請手動停用。</div><div>請從本頁刪除以下模板︰{{Easy Archive|to=存檔位置}}。</div>'
                };
                easy.lang.change_location_to = {
                    en_us: '<div>Change archive location to: <input type="text"/></div>',
                    zh_cn: '<div>将存档地址更改为：<input type="text"/></div>',
                    zh_hk: '<div>将存檔地址更改為：<input type="text"/></div>',
                    zh_tw: '<div>将存檔地址更改為：<input type="text"/></div>'
                };
                easy.lang.change_manually = {
                    en_us: '<div>Cannot update Easy Archive location automatically. </div><div>To update manually, find the template {{Easy Archive|to=[Archive location]}} and update the location.</div>',
                    zh_cn: '<div>无法自动更改 Easy Archive 存档地址。请手动更改。</div><div>请在本页面找到如下模版：{{Easy Archive|to=存档位置}}，并更改存档位置。</div>',
                    zh_hk: '<div>恕無法自動更改 Easy Archive 存檔地址。請手動更改。</div><div>請在本頁找到以下模板︰{{Easy Archive|to=存檔位置}}，并更改存檔位置。</div>',
                    zh_tw: '<div>恕無法自動更改 Easy Archive 存檔地址。請手動更改。</div><div>請在本頁找到以下模板︰{{Easy Archive|to=存檔位置}}，并更改存檔位置。</div>'
                };
                easy.lang.loading_section_i = {
                    en_us: '<div>Loading section ${1}</div>',
                    zh_cn: '<div>正在读取第 ${1} 节的内容</div>',
                    zh_hk: '<div>正在讀取第 ${1} 節的內容</div>',
                    zh_tw: '<div>正在讀取第 ${1} 節的內容</div>'
                };
                easy.lang.deleting_section_i = {
                    en_us: '<div>Deleting section ${1}</div>',
                    zh_cn: '<div>正在删除第 ${1} 节的内容</div>',
                    zh_hk: '<div>正在刪除第 ${1} 節的內容</div>',
                    zh_tw: '<div>正在刪除第 ${1} 節的內容</div>'
                };
                easy.lang.done_section_i = {
                    en_us: '<div>Section ${1} has been archived to ${2}</div>',
                    zh_cn: '<div>已经将第 ${1} 节存档到 ${2}</div>',
                    zh_hk: '<div>已經將第 ${1} 節存檔到 ${2}</div>',
                    zh_tw: '<div>已經將第 ${1} 節存檔到 ${2}</div>'
                };
                easy.lang.done_sections_i_thru_j = {
                    en_us: '<div>Sections ${1} through ${2} has been archived to ${3}</div>',
                    zh_cn: '<div>已经将第 ${1} 至 ${2} 节存档到 ${3}</div>',
                    zh_hk: '<div>已經將第 ${1} 至 ${2} 節存檔到 ${3}</div>',
                    zh_tw: '<div>已經將第 ${1} 至 ${2} 節存檔到 ${3}</div>'
                };
                easy.lang.done_deleting_section_i = {
                    en_us: '<div>Section ${1} has been deleted</div>',
                    zh_cn: '<div>已经将第 ${1} 节删除</div>',
                    zh_hk: '<div>已經將第 ${1} 節刪除</div>',
                    zh_tw: '<div>已經將第 ${1} 節刪除</div>'
                };
                easy.lang.done_deleting_sections_i_thru_j = {
                    en_us: '<div>Sections ${1} through ${2} has been deleted</div>',
                    zh_cn: '<div>已经将第 ${1} 至 ${2} 节删除</div>',
                    zh_hk: '<div>已經將第 ${1} 至 ${2} 節刪除</div>',
                    zh_tw: '<div>已經將第 ${1} 至 ${2} 節刪除</div>'
                };
                easy.lang.being_archived = {
                    en_us: 'being archived',
                    zh_cn: '存档中',
                    zh_hk: '存檔中',
                    zh_tw: '存檔中'
                };
                easy.lang.being_deleted = {
                    en_us: 'being deleted',
                    zh_cn: '删除中',
                    zh_hk: '刪除中',
                    zh_tw: '刪除中'
                };
                easy.lang.already_archived = {
                    en_us: 'archived',
                    zh_cn: '已存档',
                    zh_hk: '已存檔',
                    zh_tw: '已存檔'
                };
                easy.lang.already_deleted = {
                    en_us: 'deleted',
                    zh_cn: '已删除',
                    zh_hk: '已刪除',
                    zh_tw: '已刪除'
                };
                easy.lang.others_talk_elaborate = {
                    en_us: "This page is another user's talk page. You cannot archive the topics on this page for him/her",
                    zh_cn: '这是另一名用户的讨论页面，您不能代替另一名用户存档。',
                    zh_hk: '這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。',
                    zh_tw: '這是另一名用戶的討論頁面，您不能代替另一名用戶存檔。'
                };
                easy.lang.page_not_supported = {
                    en_us: 'This page is not supported by Easy Archive.',
                    zh_cn: '本页面不支持 Easy Archive。',
                    zh_hk: '本頁面不支持 Easy Archive。',
                    zh_tw: '本頁面不支持 Easy Archive。'
                };
                easy.lang.page_not_supported_elaborate = {
                    en_us: '<div>These pages are not supported by Easy Archive: </div><div>File, Template, Module, MediaWiki, Category, Special, JavaScript, CSS, JSON.</div>',
                    zh_cn: '<div>这些页面不受 Easy Archive 支持：</div><div>File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。</div>',
                    zh_hk: '<div>這些頁面不受 Easy Archive 支持：</div><div>File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。</div>',
                    zh_tw: '<div>這些頁面不受 Easy Archive 支持：</div><div>File、Template、Module、MediaWiki、Category、Special、JavaScript、CSS、JSON。</div>'
                };
                easy.lang.cancelled = {
                    en_us: '<div>Cancelled</div>',
                    zh_cn: '<div>已取消</div>',
                    zh_hk: '<div>已取消</div>',
                    zh_tw: '<div>已取消</div>'
                };
                easy.lang.easy_archive_has_been_stopped = {
                    en_us: '<div>Easy Archive has been stopped.</div>',
                    zh_cn: '<div>已在此页面停用 Easy Archive。</div>',
                    zh_hk: '<div>已在此頁面停用 Easy Archive。</div>',
                    zh_tw: '<div>已在此頁面停用 Easy Archive。</div>'
                };
                easy.lang.clickable_questionmark_split_before = {
                    en_us: " (<a href='${1}'>?</a>)",
                    zh_cn: "（<a href='${1}'>？</a>）",
                    zh_hk: "（<a href='${1}'>？</a>）",
                    zh_tw: "（<a href='${1}'>？</a>）"
                };
                easy.lang.problem_with_archive_location_main_space = {
                    en_us: '<div>Currently the archive location of this page, "${1}", is under the article namespace, where archives should not be normally directed to. </div><div>Please check if you have the correct archive location.</div>',
                    zh_cn: '<div>本页面目前的存档地址是“${1}”，在条目名称空间之下。</div><div>一般而言不应向条目名称空间进行存档，请检查存档地址。</div>',
                    zh_hk: '<div>本頁面當前的存檔地址是「${1}」，在條目名稱空間之下。</div><div>一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。</div>',
                    zh_tw: '<div>本頁面當前的存檔地址是「${1}」，在條目名稱空間之下。</div><div>一般而言不應向條目名稱空間進行存檔，請檢查存檔地址。</div>'
                };
                easy.lang.problem_with_archive_location_same_page = {
                    en_us: '<div>Currently the archive location of this page, "${1}", is this page itself, Easy archive cannot operate like this. </div>',
                    zh_cn: '<div>本页面目前的存档地址是“${1}”，和本页面名称相同。Easy Archive 无法按此地址存档。</div>',
                    zh_hk: '<div>本頁面當前的存檔地址是「${1}」，和本頁面名稱相同。Easy Archive 無法按此地址存檔。</div>',
                    zh_tw: '<div>本頁面當前的存檔地址是「${1}」，和本頁面名稱相同。Easy Archive 無法按此地址存檔。</div>'
                };
                easy.lang.archive_summary = {
                    en_us: 'archive section',
                    zh_cn: '存档段落',
                    zh_hk: '存檔段落',
                    zh_tw: '存檔段落'
                };
                easy.lang.delete_summary = {
                    en_us: 'delete section',
                    zh_cn: '删除段落',
                    zh_hk: '刪除段落',
                    zh_tw: '刪除段落'
                };
                easy.lang.turn_off_summary = {
                    en_us: 'Disable Easy Archive on this page.',
                    zh_cn: '在本页面停用 Easy Archive。',
                    zh_hk: '在本頁停用 Easy Archive。',
                    zh_tw: '在本頁停用 Easy Archive。'
                };
            })();
            (function () {
                var looker_upper = function (object, namelist) {
                    var e_4, _c;
                    try {
                        for (var namelist_1 = __values(namelist), namelist_1_1 = namelist_1.next(); !namelist_1_1.done; namelist_1_1 = namelist_1.next()) {
                            var element = namelist_1_1.value;
                            if (element in object) {
                                object = object[element];
                            }
                            else {
                                return null;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (namelist_1_1 && !namelist_1_1.done && (_c = namelist_1["return"])) _c.call(namelist_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                    return object;
                };
                var arc_sum = looker_upper(window, ['external_config.easy_archive.user_custom_archive_summary']);
                var del_sum = looker_upper(window, ['external_config.easy_archive.user_custom_delete_summary']);
                var sanitize_html = function (string) { return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/'/g, '&apos;').replace(/"/g, '&quot;'); };
                // multi language selector definition
                var ml = function (tag, para_list, lang_code) {
                    if (window.language_code_overwrite) {
                        lang_code = window.language_code_overwrite;
                    }
                    if (!lang_code) {
                        lang_code = easy.lang_code;
                    }
                    if (!para_list) {
                        para_list = [];
                    }
                    try {
                        var lang_content = easy.lang[tag][lang_code];
                        for (var has_unfulfilled_para = true, i_1 = 0; has_unfulfilled_para; i_1++) {
                            var search = "${".concat(i_1 + 1, "}");
                            if (!lang_content.includes(search)) {
                                has_unfulfilled_para = false;
                            }
                            else {
                                if (para_list[i_1]) {
                                    lang_content = lang_content.split(search).join(para_list[i_1]);
                                }
                                else {
                                    lang_content = lang_content.split(search).join('');
                                }
                            }
                        }
                        return lang_content;
                    }
                    catch (_c) {
                        return '(!) undefined language content';
                    }
                };
                var nominal_sections = (function (count) {
                    var arr = Array.from({ length: count });
                    for (var i_2 = 0; i_2 < count; i_2++) {
                        arr[i_2] = false;
                    }
                    return arr;
                })(easy.section_count);
                var actual_section = function (nominal_section_number) {
                    var less = 0;
                    for (var i_3 = 0; i_3 < nominal_section_number; i_3++) {
                        if (nominal_sections[i_3] === true) {
                            less++;
                        }
                    }
                    return nominal_section_number - less;
                };
                // ... interface done
                // archiving logic injection
                var report_doneness_ui = function (section_number, doneness_type, to, ongoing_or_done) {
                    var tag_ding;
                    var tag_section;
                    var ding_type;
                    var ding_ttl;
                    if (ongoing_or_done === 'ongoing') {
                        ding_type = 'info';
                        ding_ttl = 'long';
                        if (doneness_type === 'delete') {
                            tag_ding = 'deleting_section_i';
                            tag_section = 'being_deleted';
                        }
                        else if (doneness_type === 'archive') {
                            tag_ding = 'loading_section_i';
                            tag_section = 'being_archived';
                        }
                    }
                    else if (ongoing_or_done === 'done') {
                        ding_type = 'success';
                        ding_ttl = false;
                        if (doneness_type === 'delete') {
                            tag_ding = 'done_deleting_section_i';
                            tag_section = 'already_deleted';
                        }
                        else if (doneness_type === 'archive') {
                            tag_ding = 'done_section_i';
                            tag_section = 'already_archived';
                        }
                    }
                    easy.ding = window.DingExposedInterface;
                    var ding = easy.ding;
                    var actions = {
                        ding: function () {
                            ding(ml(tag_ding, [section_number.toString(), to]), ding_type, ding_ttl, false, false);
                        },
                        section_link: function () {
                            var node = document.querySelectorAll(".easy-archive-section-id-span-order-".concat(section_number))[0];
                            var pnode = node.parentNode;
                            for (var i_4 = 1; i_4 < pnode.childNodes.length - 2; i_4++) {
                                pnode.childNodes[i_4].style.display = 'none';
                            }
                            node.innerHTML = ml(tag_section);
                            node.style.display = 'inline';
                            node.style.color = 'rgba(0,0,0,0.5)';
                        }
                    };
                    return actions;
                };
                var delete_section_core = function (section_number, nominal, callback) {
                    var actual_section_number = actual_section(section_number);
                    report_doneness_ui(nominal, 'delete', '', 'ongoing').ding();
                    expose.d(mw.config.values.wgPageName, actual_section_number, function () {
                        report_doneness_ui(nominal, 'delete', '', 'done').ding();
                        report_doneness_ui(nominal, 'delete', '', 'done').section_link();
                        nominal_sections[section_number] = true;
                        typeof callback === 'function' ? callback() : undefined;
                    }, del_sum || ml('delete_summary'));
                };
                easy.delete_section = function (section_number, nominal) {
                    report_doneness_ui(nominal, 'delete', '', 'ongoing').section_link();
                    go.chain(function (reso) {
                        delete_section_core(section_number, nominal, reso);
                    });
                };
                var archive_section_core = function (section_number, nominal, callback) {
                    var actual_section_number = actual_section(section_number);
                    var to = easy.settings.find('arc-loc');
                    report_doneness_ui(nominal, 'archive', to, 'ongoing').ding();
                    expose.a(mw.config.values.wgPageName, actual_section_number, to, function () {
                        report_doneness_ui(nominal, 'archive', to, 'done').ding();
                        report_doneness_ui(nominal, 'archive', to, 'done').section_link();
                        nominal_sections[section_number] = true;
                        typeof callback === 'function' ? callback() : undefined;
                    }, arc_sum || ml('archive_summary'));
                };
                easy.archive_section = function (section_number, nominal) {
                    var to = easy.settings.find('arc-loc');
                    report_doneness_ui(nominal, 'archive', to, 'ongoing').section_link();
                    go.chain(function (reso) {
                        archive_section_core(section_number, nominal, reso);
                    });
                };
                easy.archive_sections = function (starting_section_number, count) {
                    if (starting_section_number < 1) {
                        return;
                    } // cannot allow section 0 archiving. much less anything negative.
                    for (var i_5 = starting_section_number; i_5 < count + starting_section_number; i_5++) {
                        easy.ding(ml('loading_section_i', [i_5]), 'info');
                    }
                    setTimeout(function () {
                        easy.ding(ml('done_section_i', [starting_section_number, sanitize_html(settings.find('arc-loc'))]), 'success');
                    }, 1000);
                };
                easy.mass_archive_all = function () {
                    easy.mass_archive_percentage(1);
                };
                easy.mass_archive_percentage = function (percentage) {
                    easy.mass_archive_oldest(Math.ceil(easy.section_count * percentage));
                };
                easy.mass_archive_leave_latest = function (amount_to_leave_behind) {
                    easy.mass_archive_oldest(easy.section_count - amount_to_leave_behind);
                };
                easy.mass_archive_oldest = function (amount_to_archive) {
                    if (amount_to_archive > easy.section_count) {
                        amount_to_archive = easy.section_count;
                    }
                    else if (amount_to_archive < 0) {
                        amount_to_archive = 0;
                    }
                    easy.archive_sections(1, amount_to_archive);
                };
                easy.turn_off = function (stage) {
                    if (stage === 0) {
                        easy.elaborate_notice(227);
                    }
                    else if (stage === 1) {
                        easy.elaborate_notice(27);
                    }
                };
                easy.change_location = function (para) {
                    if (para === 0) {
                        easy.elaborate_notice(395);
                    }
                    else {
                        easy.elaborate_notice(37);
                    }
                };
                easy.elaborate_notice = function (notice_tag_acronym) {
                    // acronym scheme: refer to qwerty keyboard layout. (p=9)
                    var notice_tag_dictionary = {
                        27: ['stop_manually', 'warning'],
                        37: ['change_manually', 'warning'],
                        227: ['warning_stop_using', 'warning', 'long', false, true],
                        395: ['change_location_to', 'info', 'long', false, true],
                        933: ['please_enable_elaborate'],
                        953: ['others_talk_elaborate'],
                        3163: ['cancelled', 'warning', 1000],
                        3165: ['easy_archive_has_been_stopped', 'warning', 3000],
                        3959: ['enable_on_generic_page'],
                        9219: ['problem_with_archive_location_main_space', 'warning', 'long', false, false, [sanitize_html(easy.settings.find('arc-loc'))]],
                        9220: ['problem_with_archive_location_same_page', 'warning', 'long', false, false, [sanitize_html(easy.settings.find('arc-loc'))]],
                        9623: ['page_not_supported_elaborate']
                    };
                    var notice_set = notice_tag_dictionary[notice_tag_acronym] ? notice_tag_dictionary[notice_tag_acronym] : false;
                    if (notice_set !== false) {
                        var ntag = notice_set[0];
                        var ntype = notice_set[1];
                        var nttl = notice_set[2] ? notice_set[2] : 9000;
                        var nhist = notice_set[3];
                        var npersist = notice_set[4];
                        var nsubst = notice_set[5];
                        easy.ding(ml(ntag, nsubst), ntype, nttl, nhist, npersist);
                    }
                };
                // ding and its prerequisites.
                if (!document.querySelector('#ding')) {
                    document
                        .querySelectorAll('body')[0]
                        .insertAdjacentHTML('afterbegin', '<style>#ding button{margin:0 .2em;background:0 0;border:.2em solid #fff;border-radius:9em;padding:0 .7em;box-sizing:border-box;color:inherit;font-weight:inherit}#ding button:active{background:rgba(255,255,255,.6)}</style>');
                    document.querySelectorAll('body')[0].insertAdjacentHTML('afterbegin', '<div id="ding"></div>');
                }
                if (!document.querySelector('#ding_history')) {
                    document.querySelectorAll('body')[0].insertAdjacentHTML('afterbegin', '<div id="ding_history"></div>');
                }
                // real deal here
                // interface injection - prepare
                var i = 0;
                var j = 0;
                var ele;
                var nominal;
                var actual;
                var pipe_html = '<span class="mw-editsection-divider"> | </span>';
                var section_delete_interface_inhibit = easy.settings.find('sec-del') === '0' || easy.settings.find('data-init') === '0';
                var section_archive_interface_inhibit = easy.settings.find('sec-arc') === '0' || easy.settings.find('data-init') === '0';
                var section_delete_interface_html;
                var section_archive_interface_html;
                var section_id_span_html = '<span class="easy-archive-section-id-span easy-archive-section-id-span-order-@@" style="display: none;">section</span>';
                var footer_info_ele;
                var position_of_insertion;
                if (document.querySelector('#footer-info')) {
                    footer_info_ele = document.querySelector('#footer-info');
                    position_of_insertion = 'afterbegin';
                }
                else {
                    footer_info_ele = {
                        insertAdjacentHTML: function () { }
                    };
                    position_of_insertion = '';
                }
                // ... interface injection - logic
                if (easy.on_article || easy.on_hist_version) {
                    // insert no interface on an article page or a history version.
                }
                else if ((function (black_list) {
                    var e_5, _c;
                    try {
                        for (var black_list_1 = __values(black_list), black_list_1_1 = black_list_1.next(); !black_list_1_1.done; black_list_1_1 = black_list_1.next()) {
                            var element = black_list_1_1.value;
                            if (element.test(mw.config.values.wgPageName)) {
                                return true;
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (black_list_1_1 && !black_list_1_1.done && (_c = black_list_1["return"])) _c.call(black_list_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    return false;
                })(easy.never_enable_on_these_pages_regex)) {
                    // insert no interface if the page name is blacklisted.
                }
                else if ((function (black_list) {
                    var e_6, _c;
                    try {
                        for (var black_list_2 = __values(black_list), black_list_2_1 = black_list_2.next(); !black_list_2_1.done; black_list_2_1 = black_list_2.next()) {
                            var element = black_list_2_1.value;
                            if (element.test(mw.config.values.wgPageName)) {
                                return true;
                            }
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (black_list_2_1 && !black_list_2_1.done && (_c = black_list_2["return"])) _c.call(black_list_2);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                    return false;
                })(easy.dis_support_these_pages_regex)) {
                    // insert not supported notice if the page name indicates that it is not supported.
                    footer_info_ele.insertAdjacentHTML(position_of_insertion, "<li id='easy_archive_enable_notice'><a style='color:inherit' href='javascript:window.easy_archive.elaborate_notice(9623)'>".concat(ml('page_not_supported'), "</a></li>"));
                }
                else if (mw.config.values.wgPageName === easy.settings.find('arc-loc')) {
                    easy.elaborate_notice(9220);
                }
                else if (easy.has_template && !easy.others_user_talk) {
                    // any page that has template that's not others' talk page. function normally.
                    // !! the archive location in main space and needs attention !!
                    if (/.+:.+/.test(easy.settings.find('arc-loc')) !== true) {
                        easy.elaborate_notice(9219);
                    }
                    var normal_function_inject_interface = function () {
                        var editSectionCollection = document.querySelectorAll('.mw-editsection');
                        for (i = 0; i < editSectionCollection.length; i++) {
                            ele = editSectionCollection[i];
                            var ve = /[&?]veaction=edit/.test(ele.childNodes[1].href);
                            var child_node_number = ve ? 3 : 1;
                            if (ele.parentNode.tagName.toLowerCase() === 'h2' &&
                                ele.parentNode.id !== 'firstHeading' &&
                                decodeURIComponent(ele.childNodes[child_node_number].href.split(/[&?]title=/)[1].split('&')[0]) === mw.config.values.wgPageName) {
                                actual = Number.parseInt(ele.childNodes[child_node_number].href.split(/[&?]section=/)[1].split('&')[0]);
                                nominal = i - j + 1;
                                section_delete_interface_html = section_delete_interface_inhibit
                                    ? ''
                                    : "".concat(pipe_html, "<a href=\"javascript:window.easy_archive.delete_section(").concat(actual, ", ").concat(nominal, ")\">").concat(ml('delete'), "</a>");
                                section_archive_interface_html = section_archive_interface_inhibit
                                    ? ''
                                    : "".concat(pipe_html, "<a href=\"javascript:window.easy_archive.archive_section(").concat(actual, ", ").concat(nominal, ")\">").concat(ml('archive'), "</a>");
                                ele.childNodes[child_node_number].insertAdjacentHTML('afterend', section_delete_interface_html + section_archive_interface_html + section_id_span_html.replace('@@', nominal.toString()));
                            }
                            else {
                                j++;
                            }
                        }
                        easy.section_count = i - j + 1;
                        footer_info_ele.insertAdjacentHTML(position_of_insertion, "<li>".concat(ml('supports')).concat(ml('left_par_split'), "<a href='javascript:window.easy_archive.turn_off(0)'>").concat(ml('stop_using'), "</a>").concat(ml('right_par')).concat(ml('full_stop_split'), "</li>") +
                            "<li>".concat(ml('archive_path_colon_split'), "<a href='/wiki/").concat(sanitize_html(easy.settings.find('arc-loc')), "'") +
                            ">".concat(sanitize_html(easy.settings.find('arc-loc'))));
                    };
                    normal_function_inject_interface();
                }
                else if (easy.others_user_talk === true) {
                    // others user talk.
                    footer_info_ele.insertAdjacentHTML(position_of_insertion, "<li id='easy_archive_enable_notice'><a style='color:inherit' href='javascript:window.easy_archive.elaborate_notice(953)'>".concat(ml('others_page'), "</a></li>"));
                }
                else if (easy.my_user_talk === false) {
                    // a generic page that did not enable easy archive.
                    footer_info_ele.insertAdjacentHTML(position_of_insertion, "<li id='easy_archive_enable_notice'><a style='color:inherit' href='javascript:window.easy_archive.elaborate_notice(3959)'>".concat(ml('to_enable'), "</a></li>"));
                }
                else {
                    // then assert: (easy.my_user_talk === true), (easy.has_template === false).
                    // my user talk -- installed easy archive but lacking template.
                    footer_info_ele.insertAdjacentHTML(position_of_insertion, "<li id='easy_archive_enable_notice'><a style='color:inherit' href='javascript:window.easy_archive.elaborate_notice(933)'>".concat(ml('please_enable'), "</a></li>"));
                }
            })();
        })(window.easy_archive);
    }
})(mediaWiki);