var Se, N, Un, se, Bt, jn, st, Ee = {}, Hn = [], Ar = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, vt = Array.isArray;
function ee(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Gn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function fe(e, t, n) {
  var r, d, o, i = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? d = t[o] : i[o] = t[o];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? Se.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      i[o] === void 0 && (i[o] = e.defaultProps[o]);
  return Oe(e, i, r, d, null);
}
function Oe(e, t, n, r, d) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: d ?? ++Un, __i: -1, __u: 0 };
  return d == null && N.vnode != null && N.vnode(o), o;
}
function he(e) {
  return e.children;
}
function Re(e, t) {
  this.props = e, this.context = t;
}
function pe(e, t) {
  if (t == null)
    return e.__ ? pe(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? pe(e) : null;
}
function Wn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Wn(e);
  }
}
function Ut(e) {
  (!e.__d && (e.__d = !0) && se.push(e) && !je.__r++ || Bt !== N.debounceRendering) && ((Bt = N.debounceRendering) || jn)(je);
}
function je() {
  var e, t, n, r, d, o, i, s, u;
  for (se.sort(st); e = se.shift(); )
    e.__d && (t = se.length, r = void 0, o = (d = (n = e).__v).__e, s = [], u = [], (i = n.__P) && ((r = ee({}, d)).__v = d.__v + 1, N.vnode && N.vnode(r), Ot(i, r, d, n.__n, i.ownerSVGElement !== void 0, 32 & d.__u ? [o] : null, s, o ?? pe(d), !!(32 & d.__u), u), r.__.__k[r.__i] = r, Kn(s, r, u), r.__e != o && Wn(r)), se.length > t && se.sort(st));
  je.__r = 0;
}
function Vn(e, t, n, r, d, o, i, s, u, $, l) {
  var a, g, h, p, f, v = r && r.__k || Hn, E = t.length;
  for (n.__d = u, Fr(n, t, v), u = n.__d, a = 0; a < E; a++)
    (h = n.__k[a]) != null && typeof h != "boolean" && typeof h != "function" && (g = h.__i === -1 ? Ee : v[h.__i] || Ee, h.__i = a, Ot(e, h, g, d, o, i, s, u, $, l), p = h.__e, h.ref && g.ref != h.ref && (g.ref && Et(g.ref, null, h), l.push(h.ref, h.__c || p, h)), f == null && p != null && (f = p), 65536 & h.__u || g.__k === h.__k ? u = Yn(h, u, e) : typeof h.type == "function" && h.__d !== void 0 ? u = h.__d : p && (u = p.nextSibling), h.__d = void 0, h.__u &= -196609);
  n.__d = u, n.__e = f;
}
function Fr(e, t, n) {
  var r, d, o, i, s, u = t.length, $ = n.length, l = $, a = 0;
  for (e.__k = [], r = 0; r < u; r++)
    (d = e.__k[r] = (d = t[r]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" || d.constructor == String ? Oe(null, d, null, null, d) : vt(d) ? Oe(he, { children: d }, null, null, null) : d.constructor === void 0 && d.__b > 0 ? Oe(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null ? (d.__ = e, d.__b = e.__b + 1, s = Rr(d, n, i = r + a, l), d.__i = s, o = null, s !== -1 && (l--, (o = n[s]) && (o.__u |= 131072)), o == null || o.__v === null ? (s == -1 && a--, typeof d.type != "function" && (d.__u |= 65536)) : s !== i && (s === i + 1 ? a++ : s > i ? l > u - i ? a += s - i : a-- : a = s < i && s == i - 1 ? s - i : 0, s !== r + a && (d.__u |= 65536))) : (o = n[r]) && o.key == null && o.__e && (o.__e == e.__d && (e.__d = pe(o)), at(o, o, !1), n[r] = null, l--);
  if (l)
    for (r = 0; r < $; r++)
      (o = n[r]) != null && !(131072 & o.__u) && (o.__e == e.__d && (e.__d = pe(o)), at(o, o));
}
function Yn(e, t, n) {
  var r, d;
  if (typeof e.type == "function") {
    for (r = e.__k, d = 0; r && d < r.length; d++)
      r[d] && (r[d].__ = e, t = Yn(r[d], t, n));
    return t;
  }
  return e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e), t && t.nextSibling;
}
function Rr(e, t, n, r) {
  var d = e.key, o = e.type, i = n - 1, s = n + 1, u = t[n];
  if (u === null || u && d == u.key && o === u.type)
    return n;
  if (r > (u != null && !(131072 & u.__u) ? 1 : 0))
    for (; i >= 0 || s < t.length; ) {
      if (i >= 0) {
        if ((u = t[i]) && !(131072 & u.__u) && d == u.key && o === u.type)
          return i;
        i--;
      }
      if (s < t.length) {
        if ((u = t[s]) && !(131072 & u.__u) && d == u.key && o === u.type)
          return s;
        s++;
      }
    }
  return -1;
}
function jt(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Ar.test(t) ? n : n + "px";
}
function Fe(e, t, n, r, d) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || jt(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || jt(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/(PointerCapture)$|Capture$/, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, o ? Gt : Ht, o)) : e.removeEventListener(t, o ? Gt : Ht, o);
    else {
      if (d)
        t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t !== "width" && t !== "height" && t !== "href" && t !== "list" && t !== "form" && t !== "tabIndex" && t !== "download" && t !== "rowSpan" && t !== "colSpan" && t !== "role" && t in e)
        try {
          e[t] = n ?? "";
          break e;
        } catch {
        }
      typeof n == "function" || (n == null || n === !1 && t[4] !== "-" ? e.removeAttribute(t) : e.setAttribute(t, n));
    }
}
function Ht(e) {
  var t = this.l[e.type + !1];
  if (e.t) {
    if (e.t <= t.u)
      return;
  } else
    e.t = Date.now();
  return t(N.event ? N.event(e) : e);
}
function Gt(e) {
  return this.l[e.type + !0](N.event ? N.event(e) : e);
}
function Ot(e, t, n, r, d, o, i, s, u, $) {
  var l, a, g, h, p, f, v, E, S, T, U, k, j, W, q, R = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (u = !!(32 & n.__u), o = [s = t.__e = n.__e]), (l = N.__b) && l(t);
  e:
    if (typeof R == "function")
      try {
        if (E = t.props, S = (l = R.contextType) && r[l.__c], T = l ? S ? S.props.value : l.__ : r, n.__c ? v = (a = t.__c = n.__c).__ = a.__E : ("prototype" in R && R.prototype.render ? t.__c = a = new R(E, T) : (t.__c = a = new Re(E, T), a.constructor = R, a.render = Dr), S && S.sub(a), a.props = E, a.state || (a.state = {}), a.context = T, a.__n = r, g = a.__d = !0, a.__h = [], a._sb = []), a.__s == null && (a.__s = a.state), R.getDerivedStateFromProps != null && (a.__s == a.state && (a.__s = ee({}, a.__s)), ee(a.__s, R.getDerivedStateFromProps(E, a.__s))), h = a.props, p = a.state, a.__v = t, g)
          R.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), a.componentDidMount != null && a.__h.push(a.componentDidMount);
        else {
          if (R.getDerivedStateFromProps == null && E !== h && a.componentWillReceiveProps != null && a.componentWillReceiveProps(E, T), !a.__e && (a.shouldComponentUpdate != null && a.shouldComponentUpdate(E, a.__s, T) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (a.props = E, a.state = a.__s, a.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(I) {
              I && (I.__ = t);
            }), U = 0; U < a._sb.length; U++)
              a.__h.push(a._sb[U]);
            a._sb = [], a.__h.length && i.push(a);
            break e;
          }
          a.componentWillUpdate != null && a.componentWillUpdate(E, a.__s, T), a.componentDidUpdate != null && a.__h.push(function() {
            a.componentDidUpdate(h, p, f);
          });
        }
        if (a.context = T, a.props = E, a.__P = e, a.__e = !1, k = N.__r, j = 0, "prototype" in R && R.prototype.render) {
          for (a.state = a.__s, a.__d = !1, k && k(t), l = a.render(a.props, a.state, a.context), W = 0; W < a._sb.length; W++)
            a.__h.push(a._sb[W]);
          a._sb = [];
        } else
          do
            a.__d = !1, k && k(t), l = a.render(a.props, a.state, a.context), a.state = a.__s;
          while (a.__d && ++j < 25);
        a.state = a.__s, a.getChildContext != null && (r = ee(ee({}, r), a.getChildContext())), g || a.getSnapshotBeforeUpdate == null || (f = a.getSnapshotBeforeUpdate(h, p)), Vn(e, vt(q = l != null && l.type === he && l.key == null ? l.props.children : l) ? q : [q], t, n, r, d, o, i, s, u, $), a.base = t.__e, t.__u &= -161, a.__h.length && i.push(a), v && (a.__E = a.__ = null);
      } catch (I) {
        t.__v = null, u || o != null ? (t.__e = s, t.__u |= u ? 160 : 32, o[o.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), N.__e(I, t, n);
      }
    else
      o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = Ir(n.__e, t, n, r, d, o, i, u, $);
  (l = N.diffed) && l(t);
}
function Kn(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    Et(n[r], n[++r], n[++r]);
  N.__c && N.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(o) {
        o.call(d);
      });
    } catch (o) {
      N.__e(o, d.__v);
    }
  });
}
function Ir(e, t, n, r, d, o, i, s, u) {
  var $, l, a, g, h, p, f, v = n.props, E = t.props, S = t.type;
  if (S === "svg" && (d = !0), o != null) {
    for ($ = 0; $ < o.length; $++)
      if ((h = o[$]) && "setAttribute" in h == !!S && (S ? h.localName === S : h.nodeType === 3)) {
        e = h, o[$] = null;
        break;
      }
  }
  if (e == null) {
    if (S === null)
      return document.createTextNode(E);
    e = d ? document.createElementNS("http://www.w3.org/2000/svg", S) : document.createElement(S, E.is && E), o = null, s = !1;
  }
  if (S === null)
    v === E || s && e.data === E || (e.data = E);
  else {
    if (o = o && Se.call(e.childNodes), v = n.props || Ee, !s && o != null)
      for (v = {}, $ = 0; $ < e.attributes.length; $++)
        v[(h = e.attributes[$]).name] = h.value;
    for ($ in v)
      h = v[$], $ == "children" || ($ == "dangerouslySetInnerHTML" ? a = h : $ === "key" || $ in E || Fe(e, $, null, h, d));
    for ($ in E)
      h = E[$], $ == "children" ? g = h : $ == "dangerouslySetInnerHTML" ? l = h : $ == "value" ? p = h : $ == "checked" ? f = h : $ === "key" || s && typeof h != "function" || v[$] === h || Fe(e, $, h, v[$], d);
    if (l)
      s || a && (l.__html === a.__html || l.__html === e.innerHTML) || (e.innerHTML = l.__html), t.__k = [];
    else if (a && (e.innerHTML = ""), Vn(e, vt(g) ? g : [g], t, n, r, d && S !== "foreignObject", o, i, o ? o[0] : n.__k && pe(n, 0), s, u), o != null)
      for ($ = o.length; $--; )
        o[$] != null && Gn(o[$]);
    s || ($ = "value", p !== void 0 && (p !== e[$] || S === "progress" && !p || S === "option" && p !== v[$]) && Fe(e, $, p, v[$], !1), $ = "checked", f !== void 0 && f !== e[$] && Fe(e, $, f, v[$], !1));
  }
  return e;
}
function Et(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    N.__e(r, n);
  }
}
function at(e, t, n) {
  var r, d;
  if (N.unmount && N.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Et(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        N.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (d = 0; d < r.length; d++)
      r[d] && at(r[d], t, n || typeof e.type != "function");
  n || e.__e == null || Gn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Dr(e, t, n) {
  return this.constructor(e, n);
}
function Ye(e, t, n) {
  var r, d, o, i;
  N.__ && N.__(e, t), d = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], i = [], Ot(t, e = (!r && n || t).__k = fe(he, null, [e]), d || Ee, Ee, t.ownerSVGElement !== void 0, !r && n ? [n] : d ? null : t.firstChild ? Se.call(t.childNodes) : null, o, !r && n ? n : d ? d.__e : t.firstChild, r, i), Kn(o, e, i);
}
function qn(e, t) {
  Ye(e, t, qn);
}
function zn(e, t, n) {
  var r, d, o, i, s = ee({}, e.props);
  for (o in e.type && e.type.defaultProps && (i = e.type.defaultProps), t)
    o == "key" ? r = t[o] : o == "ref" ? d = t[o] : s[o] = t[o] === void 0 && i !== void 0 ? i[o] : t[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? Se.call(arguments, 2) : n), Oe(e.type, s, r || e.key, d || e.ref, null);
}
Se = Hn.slice, N = { __e: function(e, t, n, r) {
  for (var d, o, i; t = t.__; )
    if ((d = t.__c) && !d.__)
      try {
        if ((o = d.constructor) && o.getDerivedStateFromError != null && (d.setState(o.getDerivedStateFromError(e)), i = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, r || {}), i = d.__d), i)
          return d.__E = d;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Un = 0, Re.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = ee({}, this.state), typeof e == "function" && (e = e(ee({}, n), this.props)), e && ee(n, e), e != null && this.__v && (t && this._sb.push(t), Ut(this));
}, Re.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ut(this));
}, Re.prototype.render = he, se = [], jn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, st = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, je.__r = 0;
function wt() {
  return (wt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Mr = ["context", "children"];
function Lr(e) {
  this.getChildContext = function() {
    return e.context;
  };
  var t = e.children, n = function(r, d) {
    if (r == null)
      return {};
    var o, i, s = {}, u = Object.keys(r);
    for (i = 0; i < u.length; i++)
      d.indexOf(o = u[i]) >= 0 || (s[o] = r[o]);
    return s;
  }(e, Mr);
  return zn(t, n);
}
function kr() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = fe(Lr, wt({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var d = [], o = {}, i = 0, s = n.attributes, u = n.childNodes;
    for (i = s.length; i--; )
      s[i].name !== "slot" && (o[s[i].name] = s[i].value, o[Jn(s[i].name)] = s[i].value);
    for (i = u.length; i--; ) {
      var $ = t(u[i], null), l = u[i].slot;
      l ? o[l] = fe(Wt, { name: l }, $) : d[i] = $;
    }
    var a = r ? fe(Wt, null, d) : d;
    return fe(r || n.nodeName.toLowerCase(), o, a);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? qn : Ye)(this._vdom, this._root);
}
function Jn(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Br(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Jn(e)] = n, this._vdom = zn(this._vdom, r), Ye(this._vdom, this._root);
  }
}
function Ur() {
  Ye(this._vdom = null, this._root);
}
function Wt(e, t) {
  var n = this;
  return fe("slot", wt({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(d) {
      d.stopPropagation(), d.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function jr(e, t, n, r) {
  function d() {
    var o = Reflect.construct(HTMLElement, [], d);
    return o._vdomComponent = e, o._root = r && r.shadow ? o.attachShadow({ mode: r.mode || "open" }) : o, o;
  }
  return (d.prototype = Object.create(HTMLElement.prototype)).constructor = d, d.prototype.connectedCallback = kr, d.prototype.attributeChangedCallback = Br, d.prototype.disconnectedCallback = Ur, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), d.observedAttributes = n, n.forEach(function(o) {
    Object.defineProperty(d.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var s = typeof i;
      i != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, d);
}
function Xn(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Hr } = Object.prototype, { getPrototypeOf: Pt } = Object, Ke = /* @__PURE__ */ ((e) => (t) => {
  const n = Hr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Z = (e) => (e = e.toLowerCase(), (t) => Ke(t) === e), qe = (e) => (t) => typeof t === e, { isArray: me } = Array, we = qe("undefined");
function Gr(e) {
  return e !== null && !we(e) && e.constructor !== null && !we(e.constructor) && K(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Zn = Z("ArrayBuffer");
function Wr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Zn(e.buffer), t;
}
const Vr = qe("string"), K = qe("function"), Qn = qe("number"), ze = (e) => e !== null && typeof e == "object", Yr = (e) => e === !0 || e === !1, Ie = (e) => {
  if (Ke(e) !== "object")
    return !1;
  const t = Pt(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Kr = Z("Date"), qr = Z("File"), zr = Z("Blob"), Jr = Z("FileList"), Xr = (e) => ze(e) && K(e.pipe), Zr = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || K(e.append) && ((t = Ke(e)) === "formdata" || // detect form-data instance
  t === "object" && K(e.toString) && e.toString() === "[object FormData]"));
}, Qr = Z("URLSearchParams"), ed = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, d;
  if (typeof e != "object" && (e = [e]), me(e))
    for (r = 0, d = e.length; r < d; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let s;
    for (r = 0; r < i; r++)
      s = o[r], t.call(null, e[s], s, e);
  }
}
function er(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, d;
  for (; r-- > 0; )
    if (d = n[r], t === d.toLowerCase())
      return d;
  return null;
}
const tr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, nr = (e) => !we(e) && e !== tr;
function ut() {
  const { caseless: e } = nr(this) && this || {}, t = {}, n = (r, d) => {
    const o = e && er(t, d) || d;
    Ie(t[o]) && Ie(r) ? t[o] = ut(t[o], r) : Ie(r) ? t[o] = ut({}, r) : me(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, d = arguments.length; r < d; r++)
    arguments[r] && Te(arguments[r], n);
  return t;
}
const td = (e, t, n, { allOwnKeys: r } = {}) => (Te(t, (d, o) => {
  n && K(d) ? e[o] = Xn(d, n) : e[o] = d;
}, { allOwnKeys: r }), e), nd = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), rd = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, dd = (e, t, n, r) => {
  let d, o, i;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (d = Object.getOwnPropertyNames(e), o = d.length; o-- > 0; )
      i = d[o], (!r || r(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = n !== !1 && Pt(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, id = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, od = (e) => {
  if (!e)
    return null;
  if (me(e))
    return e;
  let t = e.length;
  if (!Qn(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, sd = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Pt(Uint8Array)), ad = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let d;
  for (; (d = r.next()) && !d.done; ) {
    const o = d.value;
    t.call(e, o[0], o[1]);
  }
}, ud = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, $d = Z("HTMLFormElement"), ld = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, d) {
    return r.toUpperCase() + d;
  }
), Vt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), cd = Z("RegExp"), rr = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Te(n, (d, o) => {
    let i;
    (i = t(d, o, e)) !== !1 && (r[o] = i || d);
  }), Object.defineProperties(e, r);
}, fd = (e) => {
  rr(e, (t, n) => {
    if (K(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (K(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, hd = (e, t) => {
  const n = {}, r = (d) => {
    d.forEach((o) => {
      n[o] = !0;
    });
  };
  return me(e) ? r(e) : r(String(e).split(t)), n;
}, pd = () => {
}, _d = (e, t) => (e = +e, Number.isFinite(e) ? e : t), et = "abcdefghijklmnopqrstuvwxyz", Yt = "0123456789", dr = {
  DIGIT: Yt,
  ALPHA: et,
  ALPHA_DIGIT: et + et.toUpperCase() + Yt
}, md = (e = 16, t = dr.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function yd(e) {
  return !!(e && K(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const gd = (e) => {
  const t = new Array(10), n = (r, d) => {
    if (ze(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[d] = r;
        const o = me(r) ? [] : {};
        return Te(r, (i, s) => {
          const u = n(i, d + 1);
          !we(u) && (o[s] = u);
        }), t[d] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, bd = Z("AsyncFunction"), vd = (e) => e && (ze(e) || K(e)) && K(e.then) && K(e.catch), c = {
  isArray: me,
  isArrayBuffer: Zn,
  isBuffer: Gr,
  isFormData: Zr,
  isArrayBufferView: Wr,
  isString: Vr,
  isNumber: Qn,
  isBoolean: Yr,
  isObject: ze,
  isPlainObject: Ie,
  isUndefined: we,
  isDate: Kr,
  isFile: qr,
  isBlob: zr,
  isRegExp: cd,
  isFunction: K,
  isStream: Xr,
  isURLSearchParams: Qr,
  isTypedArray: sd,
  isFileList: Jr,
  forEach: Te,
  merge: ut,
  extend: td,
  trim: ed,
  stripBOM: nd,
  inherits: rd,
  toFlatObject: dd,
  kindOf: Ke,
  kindOfTest: Z,
  endsWith: id,
  toArray: od,
  forEachEntry: ad,
  matchAll: ud,
  isHTMLForm: $d,
  hasOwnProperty: Vt,
  hasOwnProp: Vt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: rr,
  freezeMethods: fd,
  toObjectSet: hd,
  toCamelCase: ld,
  noop: pd,
  toFiniteNumber: _d,
  findKey: er,
  global: tr,
  isContextDefined: nr,
  ALPHABET: dr,
  generateString: md,
  isSpecCompliantForm: yd,
  toJSONObject: gd,
  isAsyncFn: bd,
  isThenable: vd
};
function x(e, t, n, r, d) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), d && (this.response = d);
}
c.inherits(x, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: c.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ir = x.prototype, or = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  or[e] = { value: e };
});
Object.defineProperties(x, or);
Object.defineProperty(ir, "isAxiosError", { value: !0 });
x.from = (e, t, n, r, d, o) => {
  const i = Object.create(ir);
  return c.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), x.call(i, e.message, t, n, r, d), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Od = null;
function $t(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function sr(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Kt(e, t, n) {
  return e ? e.concat(t).map(function(d, o) {
    return d = sr(d), !n && o ? "[" + d + "]" : d;
  }).join(n ? "." : "") : t;
}
function Ed(e) {
  return c.isArray(e) && !e.some($t);
}
const wd = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Je(e, t, n) {
  if (!c.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = c.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(f, v) {
    return !c.isUndefined(v[f]);
  });
  const r = n.metaTokens, d = n.visitor || l, o = n.dots, i = n.indexes, u = (n.Blob || typeof Blob < "u" && Blob) && c.isSpecCompliantForm(t);
  if (!c.isFunction(d))
    throw new TypeError("visitor must be a function");
  function $(p) {
    if (p === null)
      return "";
    if (c.isDate(p))
      return p.toISOString();
    if (!u && c.isBlob(p))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(p) || c.isTypedArray(p) ? u && typeof Blob == "function" ? new Blob([p]) : Buffer.from(p) : p;
  }
  function l(p, f, v) {
    let E = p;
    if (p && !v && typeof p == "object") {
      if (c.endsWith(f, "{}"))
        f = r ? f : f.slice(0, -2), p = JSON.stringify(p);
      else if (c.isArray(p) && Ed(p) || (c.isFileList(p) || c.endsWith(f, "[]")) && (E = c.toArray(p)))
        return f = sr(f), E.forEach(function(T, U) {
          !(c.isUndefined(T) || T === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? Kt([f], U, o) : i === null ? f : f + "[]",
            $(T)
          );
        }), !1;
    }
    return $t(p) ? !0 : (t.append(Kt(v, f, o), $(p)), !1);
  }
  const a = [], g = Object.assign(wd, {
    defaultVisitor: l,
    convertValue: $,
    isVisitable: $t
  });
  function h(p, f) {
    if (!c.isUndefined(p)) {
      if (a.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      a.push(p), c.forEach(p, function(E, S) {
        (!(c.isUndefined(E) || E === null) && d.call(
          t,
          E,
          c.isString(S) ? S.trim() : S,
          f,
          g
        )) === !0 && h(E, f ? f.concat(S) : [S]);
      }), a.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function qt(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function Nt(e, t) {
  this._pairs = [], e && Je(e, this, t);
}
const ar = Nt.prototype;
ar.append = function(t, n) {
  this._pairs.push([t, n]);
};
ar.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, qt);
  } : qt;
  return this._pairs.map(function(d) {
    return n(d[0]) + "=" + n(d[1]);
  }, "").join("&");
};
function Pd(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ur(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Pd, d = n && n.serialize;
  let o;
  if (d ? o = d(t, n) : o = c.isURLSearchParams(t) ? t.toString() : new Nt(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class zt {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    c.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
const $r = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Nd = typeof URLSearchParams < "u" ? URLSearchParams : Nt, Cd = typeof FormData < "u" ? FormData : null, Sd = typeof Blob < "u" ? Blob : null, Td = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Nd,
    FormData: Cd,
    Blob: Sd
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, lr = typeof window < "u" && typeof document < "u", xd = ((e) => lr && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Ad = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Fd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: lr,
  hasStandardBrowserEnv: xd,
  hasStandardBrowserWebWorkerEnv: Ad
}, Symbol.toStringTag, { value: "Module" })), X = {
  ...Fd,
  ...Td
};
function Rd(e, t) {
  return Je(e, new X.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, d, o) {
      return X.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Id(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Dd(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const d = n.length;
  let o;
  for (r = 0; r < d; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function cr(e) {
  function t(n, r, d, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const s = Number.isFinite(+i), u = o >= n.length;
    return i = !i && c.isArray(d) ? d.length : i, u ? (c.hasOwnProp(d, i) ? d[i] = [d[i], r] : d[i] = r, !s) : ((!d[i] || !c.isObject(d[i])) && (d[i] = []), t(n, r, d[i], o) && c.isArray(d[i]) && (d[i] = Dd(d[i])), !s);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, d) => {
      t(Id(r), d, n, 0);
    }), n;
  }
  return null;
}
function Md(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const Ct = {
  transitional: $r,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", d = r.indexOf("application/json") > -1, o = c.isObject(t);
    if (o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return d ? JSON.stringify(cr(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Rd(t, this.formSerializer).toString();
      if ((s = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Je(
          s ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || d ? (n.setContentType("application/json", !1), Md(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Ct.transitional, r = n && n.forcedJSONParsing, d = this.responseType === "json";
    if (t && c.isString(t) && (r && !this.responseType || d)) {
      const i = !(n && n.silentJSONParsing) && d;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (i)
          throw s.name === "SyntaxError" ? x.from(s, x.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: X.classes.FormData,
    Blob: X.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
c.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ct.headers[e] = {};
});
const St = Ct, Ld = c.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), kd = (e) => {
  const t = {};
  let n, r, d;
  return e && e.split(`
`).forEach(function(i) {
    d = i.indexOf(":"), n = i.substring(0, d).trim().toLowerCase(), r = i.substring(d + 1).trim(), !(!n || t[n] && Ld[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Jt = Symbol("internals");
function be(e) {
  return e && String(e).trim().toLowerCase();
}
function De(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(De) : String(e);
}
function Bd(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Ud = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tt(e, t, n, r, d) {
  if (c.isFunction(r))
    return r.call(this, t, n);
  if (d && (t = n), !!c.isString(t)) {
    if (c.isString(r))
      return t.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(t);
  }
}
function jd(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Hd(e, t) {
  const n = c.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(d, o, i) {
        return this[r].call(this, t, d, o, i);
      },
      configurable: !0
    });
  });
}
class Xe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const d = this;
    function o(s, u, $) {
      const l = be(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const a = c.findKey(d, l);
      (!a || d[a] === void 0 || $ === !0 || $ === void 0 && d[a] !== !1) && (d[a || u] = De(s));
    }
    const i = (s, u) => c.forEach(s, ($, l) => o($, l, u));
    return c.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : c.isString(t) && (t = t.trim()) && !Ud(t) ? i(kd(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = be(t), t) {
      const r = c.findKey(this, t);
      if (r) {
        const d = this[r];
        if (!n)
          return d;
        if (n === !0)
          return Bd(d);
        if (c.isFunction(n))
          return n.call(this, d, r);
        if (c.isRegExp(n))
          return n.exec(d);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = be(t), t) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || tt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let d = !1;
    function o(i) {
      if (i = be(i), i) {
        const s = c.findKey(r, i);
        s && (!n || tt(r, r[s], s, n)) && (delete r[s], d = !0);
      }
    }
    return c.isArray(t) ? t.forEach(o) : o(t), d;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, d = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || tt(this, this[o], o, t, !0)) && (delete this[o], d = !0);
    }
    return d;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (d, o) => {
      const i = c.findKey(r, o);
      if (i) {
        n[i] = De(d), delete n[o];
        return;
      }
      const s = t ? jd(o) : String(o).trim();
      s !== o && delete n[o], n[s] = De(d), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return c.forEach(this, (r, d) => {
      r != null && r !== !1 && (n[d] = t && c.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((d) => r.set(d)), r;
  }
  static accessor(t) {
    const r = (this[Jt] = this[Jt] = {
      accessors: {}
    }).accessors, d = this.prototype;
    function o(i) {
      const s = be(i);
      r[s] || (Hd(d, i), r[s] = !0);
    }
    return c.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Xe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(Xe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(Xe);
const te = Xe;
function nt(e, t) {
  const n = this || St, r = t || n, d = te.from(r.headers);
  let o = r.data;
  return c.forEach(e, function(s) {
    o = s.call(n, o, d.normalize(), t ? t.status : void 0);
  }), d.normalize(), o;
}
function fr(e) {
  return !!(e && e.__CANCEL__);
}
function xe(e, t, n) {
  x.call(this, e ?? "canceled", x.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits(xe, x, {
  __CANCEL__: !0
});
function Gd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new x(
    "Request failed with status code " + n.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Wd = X.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, d, o) {
      const i = [e + "=" + encodeURIComponent(t)];
      c.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()), c.isString(r) && i.push("path=" + r), c.isString(d) && i.push("domain=" + d), o === !0 && i.push("secure"), document.cookie = i.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Vd(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Yd(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function hr(e, t) {
  return e && !Vd(t) ? Yd(e, t) : t;
}
const Kd = X.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function d(o) {
      let i = o;
      return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = d(window.location.href), function(i) {
      const s = c.isString(i) ? d(i) : i;
      return s.protocol === r.protocol && s.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function qd(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function zd(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let d = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const $ = Date.now(), l = r[o];
    i || (i = $), n[d] = u, r[d] = $;
    let a = o, g = 0;
    for (; a !== d; )
      g += n[a++], a = a % e;
    if (d = (d + 1) % e, d === o && (o = (o + 1) % e), $ - i < t)
      return;
    const h = l && $ - l;
    return h ? Math.round(g * 1e3 / h) : void 0;
  };
}
function Xt(e, t) {
  let n = 0;
  const r = zd(50, 250);
  return (d) => {
    const o = d.loaded, i = d.lengthComputable ? d.total : void 0, s = o - n, u = r(s), $ = o <= i;
    n = o;
    const l = {
      loaded: o,
      total: i,
      progress: i ? o / i : void 0,
      bytes: s,
      rate: u || void 0,
      estimated: u && i && $ ? (i - o) / u : void 0,
      event: d
    };
    l[t ? "download" : "upload"] = !0, e(l);
  };
}
const Jd = typeof XMLHttpRequest < "u", Xd = Jd && function(e) {
  return new Promise(function(n, r) {
    let d = e.data;
    const o = te.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: s } = e, u;
    function $() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let l;
    if (c.isFormData(d)) {
      if (X.hasStandardBrowserEnv || X.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((l = o.getContentType()) !== !1) {
        const [f, ...v] = l ? l.split(";").map((E) => E.trim()).filter(Boolean) : [];
        o.setContentType([f || "multipart/form-data", ...v].join("; "));
      }
    }
    let a = new XMLHttpRequest();
    if (e.auth) {
      const f = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(f + ":" + v));
    }
    const g = hr(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), ur(g, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function h() {
      if (!a)
        return;
      const f = te.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), E = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: f,
        config: e,
        request: a
      };
      Gd(function(T) {
        n(T), $();
      }, function(T) {
        r(T), $();
      }, E), a = null;
    }
    if ("onloadend" in a ? a.onloadend = h : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(h);
    }, a.onabort = function() {
      a && (r(new x("Request aborted", x.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      r(new x("Network Error", x.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || $r;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), r(new x(
        v,
        E.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        e,
        a
      )), a = null;
    }, X.hasStandardBrowserEnv && (s && c.isFunction(s) && (s = s(e)), s || s !== !1 && Kd(g))) {
      const f = e.xsrfHeaderName && e.xsrfCookieName && Wd.read(e.xsrfCookieName);
      f && o.set(e.xsrfHeaderName, f);
    }
    d === void 0 && o.setContentType(null), "setRequestHeader" in a && c.forEach(o.toJSON(), function(v, E) {
      a.setRequestHeader(E, v);
    }), c.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", Xt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", Xt(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (f) => {
      a && (r(!f || f.type ? new xe(null, e, a) : f), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const p = qd(g);
    if (p && X.protocols.indexOf(p) === -1) {
      r(new x("Unsupported protocol " + p + ":", x.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(d || null);
  });
}, lt = {
  http: Od,
  xhr: Xd
};
c.forEach(lt, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Zt = (e) => `- ${e}`, Zd = (e) => c.isFunction(e) || e === null || e === !1, pr = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const d = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !Zd(n) && (r = lt[(i = String(n)).toLowerCase()], r === void 0))
        throw new x(`Unknown adapter '${i}'`);
      if (r)
        break;
      d[i || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(d).map(
        ([s, u]) => `adapter ${s} ` + (u === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let i = t ? o.length > 1 ? `since :
` + o.map(Zt).join(`
`) : " " + Zt(o[0]) : "as no adapter specified";
      throw new x(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: lt
};
function rt(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new xe(null, e);
}
function Qt(e) {
  return rt(e), e.headers = te.from(e.headers), e.data = nt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), pr.getAdapter(e.adapter || St.adapter)(e).then(function(r) {
    return rt(e), r.data = nt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = te.from(r.headers), r;
  }, function(r) {
    return fr(r) || (rt(e), r && r.response && (r.response.data = nt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = te.from(r.response.headers))), Promise.reject(r);
  });
}
const en = (e) => e instanceof te ? e.toJSON() : e;
function _e(e, t) {
  t = t || {};
  const n = {};
  function r($, l, a) {
    return c.isPlainObject($) && c.isPlainObject(l) ? c.merge.call({ caseless: a }, $, l) : c.isPlainObject(l) ? c.merge({}, l) : c.isArray(l) ? l.slice() : l;
  }
  function d($, l, a) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined($))
        return r(void 0, $, a);
    } else
      return r($, l, a);
  }
  function o($, l) {
    if (!c.isUndefined(l))
      return r(void 0, l);
  }
  function i($, l) {
    if (c.isUndefined(l)) {
      if (!c.isUndefined($))
        return r(void 0, $);
    } else
      return r(void 0, l);
  }
  function s($, l, a) {
    if (a in t)
      return r($, l);
    if (a in e)
      return r(void 0, $);
  }
  const u = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: s,
    headers: ($, l) => d(en($), en(l), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const a = u[l] || d, g = a(e[l], t[l], l);
    c.isUndefined(g) && a !== s || (n[l] = g);
  }), n;
}
const _r = "1.6.7", Tt = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Tt[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const tn = {};
Tt.transitional = function(t, n, r) {
  function d(o, i) {
    return "[Axios v" + _r + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, s) => {
    if (t === !1)
      throw new x(
        d(i, " has been removed" + (n ? " in " + n : "")),
        x.ERR_DEPRECATED
      );
    return n && !tn[i] && (tn[i] = !0, console.warn(
      d(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, s) : !0;
  };
};
function Qd(e, t, n) {
  if (typeof e != "object")
    throw new x("options must be an object", x.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let d = r.length;
  for (; d-- > 0; ) {
    const o = r[d], i = t[o];
    if (i) {
      const s = e[o], u = s === void 0 || i(s, o, e);
      if (u !== !0)
        throw new x("option " + o + " must be " + u, x.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new x("Unknown option " + o, x.ERR_BAD_OPTION);
  }
}
const ct = {
  assertOptions: Qd,
  validators: Tt
}, de = ct.validators;
class He {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new zt(),
      response: new zt()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let d;
        Error.captureStackTrace ? Error.captureStackTrace(d = {}) : d = new Error();
        const o = d.stack ? d.stack.replace(/^.+\n/, "") : "";
        r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = _e(this.defaults, n);
    const { transitional: r, paramsSerializer: d, headers: o } = n;
    r !== void 0 && ct.assertOptions(r, {
      silentJSONParsing: de.transitional(de.boolean),
      forcedJSONParsing: de.transitional(de.boolean),
      clarifyTimeoutError: de.transitional(de.boolean)
    }, !1), d != null && (c.isFunction(d) ? n.paramsSerializer = {
      serialize: d
    } : ct.assertOptions(d, {
      encode: de.function,
      serialize: de.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && c.merge(
      o.common,
      o[n.method]
    );
    o && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (p) => {
        delete o[p];
      }
    ), n.headers = te.concat(i, o);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(n) === !1 || (u = u && f.synchronous, s.unshift(f.fulfilled, f.rejected));
    });
    const $ = [];
    this.interceptors.response.forEach(function(f) {
      $.push(f.fulfilled, f.rejected);
    });
    let l, a = 0, g;
    if (!u) {
      const p = [Qt.bind(this), void 0];
      for (p.unshift.apply(p, s), p.push.apply(p, $), g = p.length, l = Promise.resolve(n); a < g; )
        l = l.then(p[a++], p[a++]);
      return l;
    }
    g = s.length;
    let h = n;
    for (a = 0; a < g; ) {
      const p = s[a++], f = s[a++];
      try {
        h = p(h);
      } catch (v) {
        f.call(this, v);
        break;
      }
    }
    try {
      l = Qt.call(this, h);
    } catch (p) {
      return Promise.reject(p);
    }
    for (a = 0, g = $.length; a < g; )
      l = l.then($[a++], $[a++]);
    return l;
  }
  getUri(t) {
    t = _e(this.defaults, t);
    const n = hr(t.baseURL, t.url);
    return ur(n, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  He.prototype[t] = function(n, r) {
    return this.request(_e(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, s) {
      return this.request(_e(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  He.prototype[t] = n(), He.prototype[t + "Form"] = n(!0);
});
const Me = He;
class xt {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((d) => {
      if (!r._listeners)
        return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](d);
      r._listeners = null;
    }), this.promise.then = (d) => {
      let o;
      const i = new Promise((s) => {
        r.subscribe(s), o = s;
      }).then(d);
      return i.cancel = function() {
        r.unsubscribe(o);
      }, i;
    }, t(function(o, i, s) {
      r.reason || (r.reason = new xe(o, i, s), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new xt(function(d) {
        t = d;
      }),
      cancel: t
    };
  }
}
const ei = xt;
function ti(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ni(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const ft = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ft).forEach(([e, t]) => {
  ft[t] = e;
});
const ri = ft;
function mr(e) {
  const t = new Me(e), n = Xn(Me.prototype.request, t);
  return c.extend(n, Me.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(d) {
    return mr(_e(e, d));
  }, n;
}
const D = mr(St);
D.Axios = Me;
D.CanceledError = xe;
D.CancelToken = ei;
D.isCancel = fr;
D.VERSION = _r;
D.toFormData = Je;
D.AxiosError = x;
D.Cancel = D.CanceledError;
D.all = function(t) {
  return Promise.all(t);
};
D.spread = ti;
D.isAxiosError = ni;
D.mergeConfig = _e;
D.AxiosHeaders = te;
D.formToJSON = (e) => cr(c.isHTMLForm(e) ? new FormData(e) : e);
D.getAdapter = pr.getAdapter;
D.HttpStatusCode = ri;
D.default = D;
var At = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ft(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yr = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(At, function() {
    var n = 1e3, r = 6e4, d = 36e5, o = "millisecond", i = "second", s = "minute", u = "hour", $ = "day", l = "week", a = "month", g = "quarter", h = "year", p = "date", f = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, S = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(_) {
      var y = ["th", "st", "nd", "rd"], m = _ % 100;
      return "[" + _ + (y[(m - 20) % 10] || y[m] || y[0]) + "]";
    } }, T = function(_, y, m) {
      var O = String(_);
      return !O || O.length >= y ? _ : "" + Array(y + 1 - O.length).join(m) + _;
    }, U = { s: T, z: function(_) {
      var y = -_.utcOffset(), m = Math.abs(y), O = Math.floor(m / 60), b = m % 60;
      return (y <= 0 ? "+" : "-") + T(O, 2, "0") + ":" + T(b, 2, "0");
    }, m: function _(y, m) {
      if (y.date() < m.date())
        return -_(m, y);
      var O = 12 * (m.year() - y.year()) + (m.month() - y.month()), b = y.clone().add(O, a), w = m - b < 0, P = y.clone().add(O + (w ? -1 : 1), a);
      return +(-(O + (m - b) / (w ? b - P : P - b)) || 0);
    }, a: function(_) {
      return _ < 0 ? Math.ceil(_) || 0 : Math.floor(_);
    }, p: function(_) {
      return { M: a, y: h, w: l, d: $, D: p, h: u, m: s, s: i, ms: o, Q: g }[_] || String(_ || "").toLowerCase().replace(/s$/, "");
    }, u: function(_) {
      return _ === void 0;
    } }, k = "en", j = {};
    j[k] = S;
    var W = "$isDayjsObject", q = function(_) {
      return _ instanceof ue || !(!_ || !_[W]);
    }, R = function _(y, m, O) {
      var b;
      if (!y)
        return k;
      if (typeof y == "string") {
        var w = y.toLowerCase();
        j[w] && (b = w), m && (j[w] = m, b = w);
        var P = y.split("-");
        if (!b && P.length > 1)
          return _(P[0]);
      } else {
        var F = y.name;
        j[F] = y, b = F;
      }
      return !O && b && (k = b), b || !O && k;
    }, I = function(_, y) {
      if (q(_))
        return _.clone();
      var m = typeof y == "object" ? y : {};
      return m.date = _, m.args = arguments, new ue(m);
    }, A = U;
    A.l = R, A.i = q, A.w = function(_, y) {
      return I(_, { locale: y.$L, utc: y.$u, x: y.$x, $offset: y.$offset });
    };
    var ue = function() {
      function _(m) {
        this.$L = R(m.locale, null, !0), this.parse(m), this.$x = this.$x || m.x || {}, this[W] = !0;
      }
      var y = _.prototype;
      return y.parse = function(m) {
        this.$d = function(O) {
          var b = O.date, w = O.utc;
          if (b === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(b))
            return /* @__PURE__ */ new Date();
          if (b instanceof Date)
            return new Date(b);
          if (typeof b == "string" && !/Z$/i.test(b)) {
            var P = b.match(v);
            if (P) {
              var F = P[2] - 1 || 0, M = (P[7] || "0").substring(0, 3);
              return w ? new Date(Date.UTC(P[1], F, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, M)) : new Date(P[1], F, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, M);
            }
          }
          return new Date(b);
        }(m), this.init();
      }, y.init = function() {
        var m = this.$d;
        this.$y = m.getFullYear(), this.$M = m.getMonth(), this.$D = m.getDate(), this.$W = m.getDay(), this.$H = m.getHours(), this.$m = m.getMinutes(), this.$s = m.getSeconds(), this.$ms = m.getMilliseconds();
      }, y.$utils = function() {
        return A;
      }, y.isValid = function() {
        return this.$d.toString() !== f;
      }, y.isSame = function(m, O) {
        var b = I(m);
        return this.startOf(O) <= b && b <= this.endOf(O);
      }, y.isAfter = function(m, O) {
        return I(m) < this.startOf(O);
      }, y.isBefore = function(m, O) {
        return this.endOf(O) < I(m);
      }, y.$g = function(m, O, b) {
        return A.u(m) ? this[O] : this.set(b, m);
      }, y.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, y.valueOf = function() {
        return this.$d.getTime();
      }, y.startOf = function(m, O) {
        var b = this, w = !!A.u(O) || O, P = A.p(m), F = function(oe, V) {
          var re = A.w(b.$u ? Date.UTC(b.$y, V, oe) : new Date(b.$y, V, oe), b);
          return w ? re : re.endOf($);
        }, M = function(oe, V) {
          return A.w(b.toDate()[oe].apply(b.toDate("s"), (w ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), b);
        }, B = this.$W, H = this.$M, Y = this.$D, le = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case h:
            return w ? F(1, 0) : F(31, 11);
          case a:
            return w ? F(1, H) : F(0, H + 1);
          case l:
            var ie = this.$locale().weekStart || 0, ye = (B < ie ? B + 7 : B) - ie;
            return F(w ? Y - ye : Y + (6 - ye), H);
          case $:
          case p:
            return M(le + "Hours", 0);
          case u:
            return M(le + "Minutes", 1);
          case s:
            return M(le + "Seconds", 2);
          case i:
            return M(le + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, y.endOf = function(m) {
        return this.startOf(m, !1);
      }, y.$set = function(m, O) {
        var b, w = A.p(m), P = "set" + (this.$u ? "UTC" : ""), F = (b = {}, b[$] = P + "Date", b[p] = P + "Date", b[a] = P + "Month", b[h] = P + "FullYear", b[u] = P + "Hours", b[s] = P + "Minutes", b[i] = P + "Seconds", b[o] = P + "Milliseconds", b)[w], M = w === $ ? this.$D + (O - this.$W) : O;
        if (w === a || w === h) {
          var B = this.clone().set(p, 1);
          B.$d[F](M), B.init(), this.$d = B.set(p, Math.min(this.$D, B.daysInMonth())).$d;
        } else
          F && this.$d[F](M);
        return this.init(), this;
      }, y.set = function(m, O) {
        return this.clone().$set(m, O);
      }, y.get = function(m) {
        return this[A.p(m)]();
      }, y.add = function(m, O) {
        var b, w = this;
        m = Number(m);
        var P = A.p(O), F = function(H) {
          var Y = I(w);
          return A.w(Y.date(Y.date() + Math.round(H * m)), w);
        };
        if (P === a)
          return this.set(a, this.$M + m);
        if (P === h)
          return this.set(h, this.$y + m);
        if (P === $)
          return F(1);
        if (P === l)
          return F(7);
        var M = (b = {}, b[s] = r, b[u] = d, b[i] = n, b)[P] || 1, B = this.$d.getTime() + m * M;
        return A.w(B, this);
      }, y.subtract = function(m, O) {
        return this.add(-1 * m, O);
      }, y.format = function(m) {
        var O = this, b = this.$locale();
        if (!this.isValid())
          return b.invalidDate || f;
        var w = m || "YYYY-MM-DDTHH:mm:ssZ", P = A.z(this), F = this.$H, M = this.$m, B = this.$M, H = b.weekdays, Y = b.months, le = b.meridiem, ie = function(V, re, ge, Ae) {
          return V && (V[re] || V(O, w)) || ge[re].slice(0, Ae);
        }, ye = function(V) {
          return A.s(F % 12 || 12, V, "0");
        }, oe = le || function(V, re, ge) {
          var Ae = V < 12 ? "AM" : "PM";
          return ge ? Ae.toLowerCase() : Ae;
        };
        return w.replace(E, function(V, re) {
          return re || function(ge) {
            switch (ge) {
              case "YY":
                return String(O.$y).slice(-2);
              case "YYYY":
                return A.s(O.$y, 4, "0");
              case "M":
                return B + 1;
              case "MM":
                return A.s(B + 1, 2, "0");
              case "MMM":
                return ie(b.monthsShort, B, Y, 3);
              case "MMMM":
                return ie(Y, B);
              case "D":
                return O.$D;
              case "DD":
                return A.s(O.$D, 2, "0");
              case "d":
                return String(O.$W);
              case "dd":
                return ie(b.weekdaysMin, O.$W, H, 2);
              case "ddd":
                return ie(b.weekdaysShort, O.$W, H, 3);
              case "dddd":
                return H[O.$W];
              case "H":
                return String(F);
              case "HH":
                return A.s(F, 2, "0");
              case "h":
                return ye(1);
              case "hh":
                return ye(2);
              case "a":
                return oe(F, M, !0);
              case "A":
                return oe(F, M, !1);
              case "m":
                return String(M);
              case "mm":
                return A.s(M, 2, "0");
              case "s":
                return String(O.$s);
              case "ss":
                return A.s(O.$s, 2, "0");
              case "SSS":
                return A.s(O.$ms, 3, "0");
              case "Z":
                return P;
            }
            return null;
          }(V) || P.replace(":", "");
        });
      }, y.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, y.diff = function(m, O, b) {
        var w, P = this, F = A.p(O), M = I(m), B = (M.utcOffset() - this.utcOffset()) * r, H = this - M, Y = function() {
          return A.m(P, M);
        };
        switch (F) {
          case h:
            w = Y() / 12;
            break;
          case a:
            w = Y();
            break;
          case g:
            w = Y() / 3;
            break;
          case l:
            w = (H - B) / 6048e5;
            break;
          case $:
            w = (H - B) / 864e5;
            break;
          case u:
            w = H / d;
            break;
          case s:
            w = H / r;
            break;
          case i:
            w = H / n;
            break;
          default:
            w = H;
        }
        return b ? w : A.a(w);
      }, y.daysInMonth = function() {
        return this.endOf(a).$D;
      }, y.$locale = function() {
        return j[this.$L];
      }, y.locale = function(m, O) {
        if (!m)
          return this.$L;
        var b = this.clone(), w = R(m, O, !0);
        return w && (b.$L = w), b;
      }, y.clone = function() {
        return A.w(this.$d, this);
      }, y.toDate = function() {
        return new Date(this.valueOf());
      }, y.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, y.toISOString = function() {
        return this.$d.toISOString();
      }, y.toString = function() {
        return this.$d.toUTCString();
      }, _;
    }(), $e = ue.prototype;
    return I.prototype = $e, [["$ms", o], ["$s", i], ["$m", s], ["$H", u], ["$W", $], ["$M", a], ["$y", h], ["$D", p]].forEach(function(_) {
      $e[_[1]] = function(y) {
        return this.$g(y, _[0], _[1]);
      };
    }), I.extend = function(_, y) {
      return _.$i || (_(y, ue, I), _.$i = !0), I;
    }, I.locale = R, I.isDayjs = q, I.unix = function(_) {
      return I(1e3 * _);
    }, I.en = j[k], I.Ls = j, I.p = {}, I;
  });
})(yr);
var di = yr.exports;
const ae = /* @__PURE__ */ Ft(di);
var gr = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(At, function() {
    var n = "minute", r = /[+-]\d\d(?::?\d\d)?/g, d = /([+-]|\d\d)/g;
    return function(o, i, s) {
      var u = i.prototype;
      s.utc = function(f) {
        var v = { date: f, utc: !0, args: arguments };
        return new i(v);
      }, u.utc = function(f) {
        var v = s(this.toDate(), { locale: this.$L, utc: !0 });
        return f ? v.add(this.utcOffset(), n) : v;
      }, u.local = function() {
        return s(this.toDate(), { locale: this.$L, utc: !1 });
      };
      var $ = u.parse;
      u.parse = function(f) {
        f.utc && (this.$u = !0), this.$utils().u(f.$offset) || (this.$offset = f.$offset), $.call(this, f);
      };
      var l = u.init;
      u.init = function() {
        if (this.$u) {
          var f = this.$d;
          this.$y = f.getUTCFullYear(), this.$M = f.getUTCMonth(), this.$D = f.getUTCDate(), this.$W = f.getUTCDay(), this.$H = f.getUTCHours(), this.$m = f.getUTCMinutes(), this.$s = f.getUTCSeconds(), this.$ms = f.getUTCMilliseconds();
        } else
          l.call(this);
      };
      var a = u.utcOffset;
      u.utcOffset = function(f, v) {
        var E = this.$utils().u;
        if (E(f))
          return this.$u ? 0 : E(this.$offset) ? a.call(this) : this.$offset;
        if (typeof f == "string" && (f = function(k) {
          k === void 0 && (k = "");
          var j = k.match(r);
          if (!j)
            return null;
          var W = ("" + j[0]).match(d) || ["-", 0, 0], q = W[0], R = 60 * +W[1] + +W[2];
          return R === 0 ? 0 : q === "+" ? R : -R;
        }(f), f === null))
          return this;
        var S = Math.abs(f) <= 16 ? 60 * f : f, T = this;
        if (v)
          return T.$offset = S, T.$u = f === 0, T;
        if (f !== 0) {
          var U = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (T = this.local().add(S + U, n)).$offset = S, T.$x.$localOffset = U;
        } else
          T = this.utc();
        return T;
      };
      var g = u.format;
      u.format = function(f) {
        var v = f || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return g.call(this, v);
      }, u.valueOf = function() {
        var f = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
        return this.$d.valueOf() - 6e4 * f;
      }, u.isUTC = function() {
        return !!this.$u;
      }, u.toISOString = function() {
        return this.toDate().toISOString();
      }, u.toString = function() {
        return this.toDate().toUTCString();
      };
      var h = u.toDate;
      u.toDate = function(f) {
        return f === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : h.call(this);
      };
      var p = u.diff;
      u.diff = function(f, v, E) {
        if (f && this.$u === f.$u)
          return p.call(this, f, v, E);
        var S = this.local(), T = s(f).local();
        return p.call(S, T, v, E);
      };
    };
  });
})(gr);
var ii = gr.exports;
const oi = /* @__PURE__ */ Ft(ii), si = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:22|44|7[27]|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-689]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[0-689]|[1-79])|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:5056(?:[0-35-9]\\d|4[468])|7302[0-3]\\d)\\d{4}|(?:472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function ai(e, t) {
  var n = Array.prototype.slice.call(t);
  return n.push(si), e.apply(this, n);
}
function ht(e) {
  "@babel/helpers - typeof";
  return ht = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ht(e);
}
function nn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ui(e, t, n) {
  return t && nn(e.prototype, t), n && nn(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function $i(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function li(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Pe(e, t);
}
function ci(e) {
  var t = vr();
  return function() {
    var r = Ne(e), d;
    if (t) {
      var o = Ne(this).constructor;
      d = Reflect.construct(r, arguments, o);
    } else
      d = r.apply(this, arguments);
    return fi(this, d);
  };
}
function fi(e, t) {
  if (t && (ht(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return br(e);
}
function br(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function pt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return pt = function(r) {
    if (r === null || !hi(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, d);
    }
    function d() {
      return Le(r, arguments, Ne(this).constructor);
    }
    return d.prototype = Object.create(r.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), Pe(d, r);
  }, pt(e);
}
function Le(e, t, n) {
  return vr() ? Le = Reflect.construct : Le = function(d, o, i) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(d, s), $ = new u();
    return i && Pe($, i.prototype), $;
  }, Le.apply(null, arguments);
}
function vr() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function hi(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Pe(e, t) {
  return Pe = Object.setPrototypeOf || function(r, d) {
    return r.__proto__ = d, r;
  }, Pe(e, t);
}
function Ne(e) {
  return Ne = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ne(e);
}
var Q = /* @__PURE__ */ function(e) {
  li(n, e);
  var t = ci(n);
  function n(r) {
    var d;
    return $i(this, n), d = t.call(this, r), Object.setPrototypeOf(br(d), n.prototype), d.name = d.constructor.name, d;
  }
  return ui(n);
}(/* @__PURE__ */ pt(Error)), Rt = 2, pi = 17, _i = 3, z = "0-9０-９٠-٩۰-۹", mi = "-‐-―−ー－", yi = "／/", gi = "．.", bi = "  ­​⁠　", vi = "()（）［］\\[\\]", Oi = "~⁓∼～", Ge = "".concat(mi).concat(yi).concat(gi).concat(bi).concat(vi).concat(Oi), It = "+＋";
function rn(e, t) {
  e = e.split("-"), t = t.split("-");
  for (var n = e[0].split("."), r = t[0].split("."), d = 0; d < 3; d++) {
    var o = Number(n[d]), i = Number(r[d]);
    if (o > i)
      return 1;
    if (i > o)
      return -1;
    if (!isNaN(o) && isNaN(i))
      return 1;
    if (isNaN(o) && !isNaN(i))
      return -1;
  }
  return e[1] && t[1] ? e[1] > t[1] ? 1 : e[1] < t[1] ? -1 : 0 : !e[1] && t[1] ? 1 : e[1] && !t[1] ? -1 : 0;
}
var Ei = {}.constructor;
function ke(e) {
  return e != null && e.constructor === Ei;
}
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function Ze(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function dn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function Qe(e, t, n) {
  return t && dn(e.prototype, t), n && dn(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var wi = "1.2.0", Pi = "1.7.35", on = " ext. ", Ni = /^\d+$/, G = /* @__PURE__ */ function() {
  function e(t) {
    Ze(this, e), xi(t), this.metadata = t, Or.call(this, t);
  }
  return Qe(e, [{
    key: "getCountries",
    value: function() {
      return Object.keys(this.metadata.countries).filter(function(n) {
        return n !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function(n) {
      return this.metadata.countries[n];
    }
  }, {
    key: "nonGeographic",
    value: function() {
      if (!(this.v1 || this.v2 || this.v3))
        return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function(n) {
      return this.getCountryMetadata(n) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function(n) {
      if (this.getCountryCodesForCallingCode(n))
        return !0;
      if (this.nonGeographic()) {
        if (this.nonGeographic()[n])
          return !0;
      } else {
        var r = this.countryCallingCodes()[n];
        if (r && r.length === 1 && r[0] === "001")
          return !0;
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function(n) {
      return this.nonGeographic() ? !!this.nonGeographic()[n] : !this.getCountryCodesForCallingCode(n);
    }
    // Deprecated.
  }, {
    key: "country",
    value: function(n) {
      return this.selectNumberingPlan(n);
    }
  }, {
    key: "selectNumberingPlan",
    value: function(n, r) {
      if (n && Ni.test(n) && (r = n, n = null), n && n !== "001") {
        if (!this.hasCountry(n))
          throw new Error("Unknown country: ".concat(n));
        this.numberingPlan = new sn(this.getCountryMetadata(n), this);
      } else if (r) {
        if (!this.hasCallingCode(r))
          throw new Error("Unknown calling code: ".concat(r));
        this.numberingPlan = new sn(this.getNumberingPlanMetadata(r), this);
      } else
        this.numberingPlan = void 0;
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function(n) {
      var r = this.countryCallingCodes()[n];
      if (r)
        return r.length === 1 && r[0].length === 3 ? void 0 : r;
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function(n) {
      var r = this.getCountryCodesForCallingCode(n);
      if (r)
        return r[0];
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function(n) {
      var r = this.getCountryCodeForCallingCode(n);
      if (r)
        return this.getCountryMetadata(r);
      if (this.nonGeographic()) {
        var d = this.nonGeographic()[n];
        if (d)
          return d;
      } else {
        var o = this.countryCallingCodes()[n];
        if (o && o.length === 1 && o[0] === "001")
          return this.metadata.countries["001"];
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function(n) {
      return this.numberingPlan.type(n);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function() {
      return this.v1 ? this.metadata.country_phone_code_to_countries : this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function(n) {
      return this.selectNumberingPlan(n);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function() {
      return this.numberingPlan !== void 0;
    }
  }]), e;
}(), sn = /* @__PURE__ */ function() {
  function e(t, n) {
    Ze(this, e), this.globalMetadataObject = n, this.metadata = t, Or.call(this, n.metadata);
  }
  return Qe(e, [{
    key: "callingCode",
    value: function() {
      return this.metadata[0];
    }
    // Formatting information for regions which share
    // a country calling code is contained by only one region
    // for performance reasons. For example, for NANPA region
    // ("North American Numbering Plan Administration",
    //  which includes USA, Canada, Cayman Islands, Bahamas, etc)
    // it will be contained in the metadata for `US`.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function() {
      if (!(this.v1 || this.v2))
        return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function() {
      return this.v1 || this.v2 ? this.metadata[1] : this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.v1)
        return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function(n) {
      return n[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function() {
      var n = this, r = this._getFormats(this.metadata) || this._getFormats(this.getDefaultCountryMetadataForRegion()) || [];
      return r.map(function(d) {
        return new Ci(d, n);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function(n) {
      return n[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this.getDefaultCountryMetadataForRegion());
    }
  }, {
    key: "leadingDigits",
    value: function() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function() {
      return this.types() && this.types().length === 0 ? !1 : !!this.types();
    }
  }, {
    key: "type",
    value: function(n) {
      if (this.hasTypes() && an(this.types(), n))
        return new Ti(an(this.types(), n), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? on : this.metadata[13] || on;
    }
  }]), e;
}(), Ci = /* @__PURE__ */ function() {
  function e(t, n) {
    Ze(this, e), this._format = t, this.metadata = n;
  }
  return Qe(e, [{
    key: "pattern",
    value: function() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function() {
      return !!(this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !Si.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), e;
}(), Si = /^\(?\$1\)?$/, Ti = /* @__PURE__ */ function() {
  function e(t, n) {
    Ze(this, e), this.type = t, this.metadata = n;
  }
  return Qe(e, [{
    key: "pattern",
    value: function() {
      return this.metadata.v1 ? this.type : this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function() {
      if (!this.metadata.v1)
        return this.type[1] || this.metadata.possibleLengths();
    }
  }]), e;
}();
function an(e, t) {
  switch (t) {
    case "FIXED_LINE":
      return e[0];
    case "MOBILE":
      return e[1];
    case "TOLL_FREE":
      return e[2];
    case "PREMIUM_RATE":
      return e[3];
    case "PERSONAL_NUMBER":
      return e[4];
    case "VOICEMAIL":
      return e[5];
    case "UAN":
      return e[6];
    case "PAGER":
      return e[7];
    case "VOIP":
      return e[8];
    case "SHARED_COST":
      return e[9];
  }
}
function xi(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!ke(e) || !ke(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(ke(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Ai(e) + ": " + e, "."));
}
var Ai = function(t) {
  return _t(t);
};
function Dt(e, t) {
  if (t = new G(t), t.hasCountry(e))
    return t.country(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function Fi(e, t) {
  return t.countries.hasOwnProperty(e);
}
function Or(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? rn(t, wi) === -1 ? this.v2 = !0 : rn(t, Pi) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var Ri = ";ext=", ce = function(t) {
  return "([".concat(z, "]{1,").concat(t, "})");
};
function Er(e) {
  var t = "20", n = "15", r = "9", d = "6", o = "[  \\t,]*", i = "[:\\.．]?[  \\t,-]*", s = "#?", u = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", $ = "(?:[xｘ#＃~～]|int|ｉｎｔ)", l = "[- ]+", a = "[  \\t]*", g = "(?:,{2}|;)", h = Ri + ce(t), p = o + u + i + ce(t) + s, f = o + $ + i + ce(r) + s, v = l + ce(d) + "#", E = a + g + i + ce(n) + s, S = a + "(?:,)+" + i + ce(r) + s;
  return h + "|" + p + "|" + f + "|" + v + "|" + E + "|" + S;
}
var Ii = "[" + z + "]{" + Rt + "}", Di = "[" + It + "]{0,1}(?:[" + Ge + "]*[" + z + "]){3,}[" + Ge + z + "]*", Mi = new RegExp("^[" + It + "]{0,1}(?:[" + Ge + "]*[" + z + "]){1,2}$", "i"), Li = Di + // Phone number extensions
"(?:" + Er() + ")?", ki = new RegExp(
  // Either a short two-digit-only phone number
  "^" + Ii + "$|^" + Li + "$",
  "i"
);
function Bi(e) {
  return e.length >= Rt && ki.test(e);
}
function Ui(e) {
  return Mi.test(e);
}
var un = new RegExp("(?:" + Er() + ")$", "i");
function ji(e) {
  var t = e.search(un);
  if (t < 0)
    return {};
  for (var n = e.slice(0, t), r = e.match(un), d = 1; d < r.length; ) {
    if (r[d])
      return {
        number: n,
        ext: r[d]
      };
    d++;
  }
}
var Hi = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  "０": "0",
  // Fullwidth digit 0
  "１": "1",
  // Fullwidth digit 1
  "２": "2",
  // Fullwidth digit 2
  "３": "3",
  // Fullwidth digit 3
  "４": "4",
  // Fullwidth digit 4
  "５": "5",
  // Fullwidth digit 5
  "６": "6",
  // Fullwidth digit 6
  "７": "7",
  // Fullwidth digit 7
  "８": "8",
  // Fullwidth digit 8
  "９": "9",
  // Fullwidth digit 9
  "٠": "0",
  // Arabic-indic digit 0
  "١": "1",
  // Arabic-indic digit 1
  "٢": "2",
  // Arabic-indic digit 2
  "٣": "3",
  // Arabic-indic digit 3
  "٤": "4",
  // Arabic-indic digit 4
  "٥": "5",
  // Arabic-indic digit 5
  "٦": "6",
  // Arabic-indic digit 6
  "٧": "7",
  // Arabic-indic digit 7
  "٨": "8",
  // Arabic-indic digit 8
  "٩": "9",
  // Arabic-indic digit 9
  "۰": "0",
  // Eastern-Arabic digit 0
  "۱": "1",
  // Eastern-Arabic digit 1
  "۲": "2",
  // Eastern-Arabic digit 2
  "۳": "3",
  // Eastern-Arabic digit 3
  "۴": "4",
  // Eastern-Arabic digit 4
  "۵": "5",
  // Eastern-Arabic digit 5
  "۶": "6",
  // Eastern-Arabic digit 6
  "۷": "7",
  // Eastern-Arabic digit 7
  "۸": "8",
  // Eastern-Arabic digit 8
  "۹": "9"
  // Eastern-Arabic digit 9
};
function Gi(e) {
  return Hi[e];
}
function Wi(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Vi(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vi(e, t) {
  if (e) {
    if (typeof e == "string")
      return $n(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return $n(e, t);
  }
}
function $n(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ln(e) {
  for (var t = "", n = Wi(e.split("")), r; !(r = n()).done; ) {
    var d = r.value;
    t += Yi(d, t) || "";
  }
  return t;
}
function Yi(e, t, n) {
  if (e === "+") {
    if (t) {
      typeof n == "function" && n("end");
      return;
    }
    return "+";
  }
  return Gi(e);
}
function Ki(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = qi(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function qi(e, t) {
  if (e) {
    if (typeof e == "string")
      return cn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return cn(e, t);
  }
}
function cn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function zi(e, t) {
  for (var n = e.slice(), r = Ki(t), d; !(d = r()).done; ) {
    var o = d.value;
    e.indexOf(o) < 0 && n.push(o);
  }
  return n.sort(function(i, s) {
    return i - s;
  });
}
function Mt(e, t) {
  return wr(e, void 0, t);
}
function wr(e, t, n) {
  var r = n.type(t), d = r && r.possibleLengths() || n.possibleLengths();
  if (!d)
    return "IS_POSSIBLE";
  if (t === "FIXED_LINE_OR_MOBILE") {
    if (!n.type("FIXED_LINE"))
      return wr(e, "MOBILE", n);
    var o = n.type("MOBILE");
    o && (d = zi(d, o.possibleLengths()));
  } else if (t && !r)
    return "INVALID_LENGTH";
  var i = e.length, s = d[0];
  return s === i ? "IS_POSSIBLE" : s > i ? "TOO_SHORT" : d[d.length - 1] < i ? "TOO_LONG" : d.indexOf(i, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function Ji(e, t, n) {
  if (t === void 0 && (t = {}), n = new G(n), t.v2) {
    if (!e.countryCallingCode)
      throw new Error("Invalid phone number object passed");
    n.selectNumberingPlan(e.countryCallingCode);
  } else {
    if (!e.phone)
      return !1;
    if (e.country) {
      if (!n.hasCountry(e.country))
        throw new Error("Unknown country: ".concat(e.country));
      n.country(e.country);
    } else {
      if (!e.countryCallingCode)
        throw new Error("Invalid phone number object passed");
      n.selectNumberingPlan(e.countryCallingCode);
    }
  }
  if (n.possibleLengths())
    return Pr(e.phone || e.nationalNumber, n);
  if (e.countryCallingCode && n.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function Pr(e, t) {
  switch (Mt(e, t)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function ne(e, t) {
  return e = e || "", new RegExp("^(?:" + t + ")$").test(e);
}
function Xi(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Zi(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zi(e, t) {
  if (e) {
    if (typeof e == "string")
      return fn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return fn(e, t);
  }
}
function fn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var Qi = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function Lt(e, t, n) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    n = new G(n), n.selectNumberingPlan(e.country, e.countryCallingCode);
    var r = t.v2 ? e.nationalNumber : e.phone;
    if (ne(r, n.nationalNumberPattern())) {
      if (dt(r, "FIXED_LINE", n))
        return n.type("MOBILE") && n.type("MOBILE").pattern() === "" || !n.type("MOBILE") || dt(r, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var d = Xi(Qi), o; !(o = d()).done; ) {
        var i = o.value;
        if (dt(r, i, n))
          return i;
      }
    }
  }
}
function dt(e, t, n) {
  return t = n.type(t), !t || !t.pattern() || t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0 ? !1 : ne(e, t.pattern());
}
function e0(e, t, n) {
  if (t = t || {}, n = new G(n), n.selectNumberingPlan(e.country, e.countryCallingCode), n.hasTypes())
    return Lt(e, t, n.metadata) !== void 0;
  var r = t.v2 ? e.nationalNumber : e.phone;
  return ne(r, n.nationalNumberPattern());
}
function t0(e, t, n) {
  var r = new G(n), d = r.getCountryCodesForCallingCode(e);
  return d ? d.filter(function(o) {
    return n0(t, o, n);
  }) : [];
}
function n0(e, t, n) {
  var r = new G(n);
  return r.selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
function r0(e) {
  return e.replace(new RegExp("[".concat(Ge, "]+"), "g"), " ").trim();
}
var d0 = /(\$\d)/;
function i0(e, t, n) {
  var r = n.useInternationalFormat, d = n.withNationalPrefix;
  n.carrierCode, n.metadata;
  var o = e.replace(new RegExp(t.pattern()), r ? t.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    d && t.nationalPrefixFormattingRule() ? t.format().replace(d0, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return r ? r0(o) : o;
}
var o0 = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function s0(e, t, n) {
  var r = new G(n);
  if (r.selectNumberingPlan(e, t), r.defaultIDDPrefix())
    return r.defaultIDDPrefix();
  if (o0.test(r.IDDPrefix()))
    return r.IDDPrefix();
}
function a0(e) {
  var t = e.number, n = e.ext;
  if (!t)
    return "";
  if (t[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(t).concat(n ? ";ext=" + n : "");
}
function u0(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = $0(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $0(e, t) {
  if (e) {
    if (typeof e == "string")
      return hn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hn(e, t);
  }
}
function hn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function pn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function _n(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? pn(Object(n), !0).forEach(function(r) {
      l0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : pn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function l0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var mn = {
  formatExtension: function(t, n, r) {
    return "".concat(t).concat(r.ext()).concat(n);
  }
};
function c0(e, t, n, r) {
  if (n ? n = _n(_n({}, mn), n) : n = mn, r = new G(r), e.country && e.country !== "001") {
    if (!r.hasCountry(e.country))
      throw new Error("Unknown country: ".concat(e.country));
    r.country(e.country);
  } else if (e.countryCallingCode)
    r.selectNumberingPlan(e.countryCallingCode);
  else
    return e.phone || "";
  var d = r.countryCallingCode(), o = n.v2 ? e.nationalNumber : e.phone, i;
  switch (t) {
    case "NATIONAL":
      return o ? (i = We(o, e.carrierCode, "NATIONAL", r, n), it(i, e.ext, r, n.formatExtension)) : "";
    case "INTERNATIONAL":
      return o ? (i = We(o, null, "INTERNATIONAL", r, n), i = "+".concat(d, " ").concat(i), it(i, e.ext, r, n.formatExtension)) : "+".concat(d);
    case "E.164":
      return "+".concat(d).concat(o);
    case "RFC3966":
      return a0({
        number: "+".concat(d).concat(o),
        ext: e.ext
      });
    case "IDD":
      if (!n.fromCountry)
        return;
      var s = h0(o, e.carrierCode, d, n.fromCountry, r);
      return it(s, e.ext, r, n.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function We(e, t, n, r, d) {
  var o = f0(r.formats(), e);
  return o ? i0(e, o, {
    useInternationalFormat: n === "INTERNATIONAL",
    withNationalPrefix: !(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && d && d.nationalPrefix === !1),
    carrierCode: t,
    metadata: r
  }) : e;
}
function f0(e, t) {
  for (var n = u0(e), r; !(r = n()).done; ) {
    var d = r.value;
    if (d.leadingDigitsPatterns().length > 0) {
      var o = d.leadingDigitsPatterns()[d.leadingDigitsPatterns().length - 1];
      if (t.search(o) !== 0)
        continue;
    }
    if (ne(t, d.pattern()))
      return d;
  }
}
function it(e, t, n, r) {
  return t ? r(e, t, n) : e;
}
function h0(e, t, n, r, d) {
  var o = Dt(r, d.metadata);
  if (o === n) {
    var i = We(e, t, "NATIONAL", d);
    return n === "1" ? n + " " + i : i;
  }
  var s = s0(r, void 0, d.metadata);
  if (s)
    return "".concat(s, " ").concat(n, " ").concat(We(e, null, "INTERNATIONAL", d));
}
function yn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function gn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? yn(Object(n), !0).forEach(function(r) {
      p0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : yn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function p0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _0(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function bn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function m0(e, t, n) {
  return t && bn(e.prototype, t), n && bn(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var y0 = /* @__PURE__ */ function() {
  function e(t, n, r) {
    if (_0(this, e), !t)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!n)
      throw new TypeError("`nationalNumber` not passed");
    if (!r)
      throw new TypeError("`metadata` not passed");
    var d = b0(t, r), o = d.country, i = d.countryCallingCode;
    this.country = o, this.countryCallingCode = i, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return r;
    };
  }
  return m0(e, [{
    key: "setExt",
    value: function(n) {
      this.ext = n;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : t0(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return Ji(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return e0(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var n = new G(this.getMetadata());
      return n.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function(n) {
      return this.number === n.number && this.ext === n.ext;
    }
    // This function was originally meant to be an equivalent for `validatePhoneNumberLength()`,
    // but later it was found out that it doesn't include the possible `TOO_SHORT` result
    // returned from `parsePhoneNumberWithError()` in the original `validatePhoneNumberLength()`,
    // so eventually I simply commented out this method from the `PhoneNumber` class
    // and just left the `validatePhoneNumberLength()` function, even though that one would require
    // and additional step to also validate the actual country / calling code of the phone number.
    // validateLength() {
    // 	const metadata = new Metadata(this.getMetadata())
    // 	metadata.selectNumberingPlan(this.countryCallingCode)
    // 	const result = checkNumberLength(this.nationalNumber, metadata)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function() {
      return Lt(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(n, r) {
      return c0(this, n, r ? gn(gn({}, r), {}, {
        v2: !0
      }) : {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function(n) {
      return this.format("NATIONAL", n);
    }
  }, {
    key: "formatInternational",
    value: function(n) {
      return this.format("INTERNATIONAL", n);
    }
  }, {
    key: "getURI",
    value: function(n) {
      return this.format("RFC3966", n);
    }
  }]), e;
}(), g0 = function(t) {
  return /^[A-Z]{2}$/.test(t);
};
function b0(e, t) {
  var n, r, d = new G(t);
  return g0(e) ? (n = e, d.selectNumberingPlan(n), r = d.countryCallingCode()) : r = e, {
    country: n,
    countryCallingCode: r
  };
}
var v0 = new RegExp("([" + z + "])");
function O0(e, t, n, r) {
  if (t) {
    var d = new G(r);
    d.selectNumberingPlan(t, n);
    var o = new RegExp(d.IDDPrefix());
    if (e.search(o) === 0) {
      e = e.slice(e.match(o)[0].length);
      var i = e.match(v0);
      if (!(i && i[1] != null && i[1].length > 0 && i[1] === "0"))
        return e;
    }
  }
}
function E0(e, t) {
  if (e && t.numberingPlan.nationalPrefixForParsing()) {
    var n = new RegExp("^(?:" + t.numberingPlan.nationalPrefixForParsing() + ")"), r = n.exec(e);
    if (r) {
      var d, o, i = r.length - 1, s = i > 0 && r[i];
      if (t.nationalPrefixTransformRule() && s)
        d = e.replace(n, t.nationalPrefixTransformRule()), i > 1 && (o = r[1]);
      else {
        var u = r[0];
        d = e.slice(u.length), s && (o = r[1]);
      }
      var $;
      if (s) {
        var l = e.indexOf(r[1]), a = e.slice(0, l);
        a === t.numberingPlan.nationalPrefix() && ($ = t.numberingPlan.nationalPrefix());
      } else
        $ = r[0];
      return {
        nationalNumber: d,
        nationalPrefix: $,
        carrierCode: o
      };
    }
  }
  return {
    nationalNumber: e
  };
}
function mt(e, t) {
  var n = E0(e, t), r = n.carrierCode, d = n.nationalNumber;
  if (d !== e) {
    if (!w0(e, d, t))
      return {
        nationalNumber: e
      };
    if (t.possibleLengths() && !P0(d, t))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: d,
    carrierCode: r
  };
}
function w0(e, t, n) {
  return !(ne(e, n.nationalNumberPattern()) && !ne(t, n.nationalNumberPattern()));
}
function P0(e, t) {
  switch (Mt(e, t)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function N0(e, t, n, r) {
  var d = t ? Dt(t, r) : n;
  if (e.indexOf(d) === 0) {
    r = new G(r), r.selectNumberingPlan(t, n);
    var o = e.slice(d.length), i = mt(o, r), s = i.nationalNumber, u = mt(e, r), $ = u.nationalNumber;
    if (!ne($, r.nationalNumberPattern()) && ne(s, r.nationalNumberPattern()) || Mt($, r) === "TOO_LONG")
      return {
        countryCallingCode: d,
        number: o
      };
  }
  return {
    number: e
  };
}
function C0(e, t, n, r) {
  if (!e)
    return {};
  var d;
  if (e[0] !== "+") {
    var o = O0(e, t, n, r);
    if (o && o !== e)
      d = !0, e = "+" + o;
    else {
      if (t || n) {
        var i = N0(e, t, n, r), s = i.countryCallingCode, u = i.number;
        if (s)
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode: s,
            number: u
          };
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number: e
      };
    }
  }
  if (e[1] === "0")
    return {};
  r = new G(r);
  for (var $ = 2; $ - 1 <= _i && $ <= e.length; ) {
    var l = e.slice(1, $);
    if (r.hasCallingCode(l))
      return r.selectNumberingPlan(l), {
        countryCallingCodeSource: d ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: l,
        number: e.slice($)
      };
    $++;
  }
  return {};
}
function S0(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = T0(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function T0(e, t) {
  if (e) {
    if (typeof e == "string")
      return vn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return vn(e, t);
  }
}
function vn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function x0(e, t) {
  var n = t.countries, r = t.defaultCountry, d = t.metadata;
  d = new G(d);
  for (var o = [], i = S0(n), s; !(s = i()).done; ) {
    var u = s.value;
    if (d.country(u), d.leadingDigits()) {
      if (e && e.search(d.leadingDigits()) === 0)
        return u;
    } else if (Lt({
      phone: e,
      country: u
    }, void 0, d.metadata))
      if (r) {
        if (u === r)
          return u;
        o.push(u);
      } else
        return u;
  }
  if (o.length > 0)
    return o[0];
}
var A0 = !1;
function F0(e, t) {
  var n = t.nationalNumber, r = t.defaultCountry, d = t.metadata;
  if (A0 && d.isNonGeographicCallingCode(e))
    return "001";
  var o = d.getCountryCodesForCallingCode(e);
  if (o)
    return o.length === 1 ? o[0] : x0(n, {
      countries: o,
      defaultCountry: r,
      metadata: d.metadata
    });
}
var Nr = "+", R0 = "[\\-\\.\\(\\)]?", On = "([" + z + "]|" + R0 + ")", I0 = "^\\" + Nr + On + "*[" + z + "]" + On + "*$", D0 = new RegExp(I0, "g"), yt = z, M0 = "[" + yt + "]+((\\-)*[" + yt + "])*", L0 = "a-zA-Z", k0 = "[" + L0 + "]+((\\-)*[" + yt + "])*", B0 = "^(" + M0 + "\\.)*" + k0 + "\\.?$", U0 = new RegExp(B0, "g"), En = "tel:", gt = ";phone-context=", j0 = ";isub=";
function H0(e) {
  var t = e.indexOf(gt);
  if (t < 0)
    return null;
  var n = t + gt.length;
  if (n >= e.length)
    return "";
  var r = e.indexOf(";", n);
  return r >= 0 ? e.substring(n, r) : e.substring(n);
}
function G0(e) {
  return e === null ? !0 : e.length === 0 ? !1 : D0.test(e) || U0.test(e);
}
function W0(e, t) {
  var n = t.extractFormattedPhoneNumber, r = H0(e);
  if (!G0(r))
    throw new Q("NOT_A_NUMBER");
  var d;
  if (r === null)
    d = n(e) || "";
  else {
    d = "", r.charAt(0) === Nr && (d += r);
    var o = e.indexOf(En), i;
    o >= 0 ? i = o + En.length : i = 0;
    var s = e.indexOf(gt);
    d += e.substring(i, s);
  }
  var u = d.indexOf(j0);
  if (u > 0 && (d = d.substring(0, u)), d !== "")
    return d;
}
var V0 = 250, Y0 = new RegExp("[" + It + z + "]"), K0 = new RegExp("[^" + z + "#]+$");
function q0(e, t, n) {
  if (t = t || {}, n = new G(n), t.defaultCountry && !n.hasCountry(t.defaultCountry))
    throw t.v2 ? new Q("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var r = J0(e, t.v2, t.extract), d = r.number, o = r.ext, i = r.error;
  if (!d) {
    if (t.v2)
      throw i === "TOO_SHORT" ? new Q("TOO_SHORT") : new Q("NOT_A_NUMBER");
    return {};
  }
  var s = Z0(d, t.defaultCountry, t.defaultCallingCode, n), u = s.country, $ = s.nationalNumber, l = s.countryCallingCode, a = s.countryCallingCodeSource, g = s.carrierCode;
  if (!n.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new Q("INVALID_COUNTRY");
    return {};
  }
  if (!$ || $.length < Rt) {
    if (t.v2)
      throw new Q("TOO_SHORT");
    return {};
  }
  if ($.length > pi) {
    if (t.v2)
      throw new Q("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var h = new y0(l, $, n.metadata);
    return u && (h.country = u), g && (h.carrierCode = g), o && (h.ext = o), h.__countryCallingCodeSource = a, h;
  }
  var p = (t.extended ? n.hasSelectedNumberingPlan() : u) ? ne($, n.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: u,
    countryCallingCode: l,
    carrierCode: g,
    valid: p,
    possible: p ? !0 : !!(t.extended === !0 && n.possibleLengths() && Pr($, n)),
    phone: $,
    ext: o
  } : p ? X0(u, $, o) : {};
}
function z0(e, t, n) {
  if (e) {
    if (e.length > V0) {
      if (n)
        throw new Q("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var r = e.search(Y0);
    if (!(r < 0))
      return e.slice(r).replace(K0, "");
  }
}
function J0(e, t, n) {
  var r = W0(e, {
    extractFormattedPhoneNumber: function(i) {
      return z0(i, n, t);
    }
  });
  if (!r)
    return {};
  if (!Bi(r))
    return Ui(r) ? {
      error: "TOO_SHORT"
    } : {};
  var d = ji(r);
  return d.ext ? d : {
    number: r
  };
}
function X0(e, t, n) {
  var r = {
    country: e,
    phone: t
  };
  return n && (r.ext = n), r;
}
function Z0(e, t, n, r) {
  var d = C0(ln(e), t, n, r.metadata), o = d.countryCallingCodeSource, i = d.countryCallingCode, s = d.number, u;
  if (i)
    r.selectNumberingPlan(i);
  else if (s && (t || n))
    r.selectNumberingPlan(t, n), t && (u = t), i = n || Dt(t, r.metadata);
  else
    return {};
  if (!s)
    return {
      countryCallingCodeSource: o,
      countryCallingCode: i
    };
  var $ = mt(ln(s), r), l = $.nationalNumber, a = $.carrierCode, g = F0(i, {
    nationalNumber: l,
    defaultCountry: t,
    metadata: r
  });
  return g && (u = g, g === "001" || r.country(u)), {
    country: u,
    countryCallingCode: i,
    countryCallingCodeSource: o,
    nationalNumber: l,
    carrierCode: a
  };
}
function wn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Pn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wn(Object(n), !0).forEach(function(r) {
      Q0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Q0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function eo(e, t, n) {
  return q0(e, Pn(Pn({}, t), {}, {
    v2: !0
  }), n);
}
function Nn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function to(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nn(Object(n), !0).forEach(function(r) {
      no(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function no(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function ro(e, t) {
  return ao(e) || so(e, t) || oo(e, t) || io();
}
function io() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function oo(e, t) {
  if (e) {
    if (typeof e == "string")
      return Cn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Cn(e, t);
  }
}
function Cn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function so(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], d = !0, o = !1, i, s;
    try {
      for (n = n.call(e); !(d = (i = n.next()).done) && (r.push(i.value), !(t && r.length === t)); d = !0)
        ;
    } catch (u) {
      o = !0, s = u;
    } finally {
      try {
        !d && n.return != null && n.return();
      } finally {
        if (o)
          throw s;
      }
    }
    return r;
  }
}
function ao(e) {
  if (Array.isArray(e))
    return e;
}
function uo(e) {
  var t = Array.prototype.slice.call(e), n = ro(t, 4), r = n[0], d = n[1], o = n[2], i = n[3], s, u, $;
  if (typeof r == "string")
    s = r;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!d || typeof d == "string")
    i ? (u = o, $ = i) : (u = void 0, $ = o), d && (u = to({
      defaultCountry: d
    }, u));
  else if (ke(d))
    o ? (u = d, $ = o) : $ = d;
  else
    throw new Error("Invalid second argument: ".concat(d));
  return {
    text: s,
    options: u,
    metadata: $
  };
}
function Sn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Tn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sn(Object(n), !0).forEach(function(r) {
      $o(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function lo(e, t, n) {
  t && t.defaultCountry && !Fi(t.defaultCountry, n) && (t = Tn(Tn({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return eo(e, t, n);
  } catch (r) {
    if (!(r instanceof Q))
      throw r;
  }
}
function xn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function An(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? xn(Object(n), !0).forEach(function(r) {
      co(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function co(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function fo() {
  var e = uo(arguments), t = e.text, n = e.options, r = e.metadata;
  n = An(An({}, n), {}, {
    extract: !1
  });
  var d = lo(t, n, r);
  return d && d.isValid() || !1;
}
function ho() {
  return ai(fo, arguments);
}
var Ce, L, ot, Fn, Ve = 0, Cr = [], Be = [], Rn = N.__b, In = N.__r, Dn = N.diffed, Mn = N.__c, Ln = N.unmount;
function kt(e, t) {
  N.__h && N.__h(L, e, Ve || t), Ve = 0;
  var n = L.__H || (L.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: Be }), n.__[e];
}
function J(e) {
  return Ve = 1, po(Tr, e);
}
function po(e, t, n) {
  var r = kt(Ce++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Tr(void 0, t), function(s) {
    var u = r.__N ? r.__N[0] : r.__[0], $ = r.t(u, s);
    u !== $ && (r.__N = [$, r.__[1]], r.__c.setState({}));
  }], r.__c = L, !L.u)) {
    var d = function(s, u, $) {
      if (!r.__c.__H)
        return !0;
      var l = r.__c.__H.__.filter(function(g) {
        return g.__c;
      });
      if (l.every(function(g) {
        return !g.__N;
      }))
        return !o || o.call(this, s, u, $);
      var a = !1;
      return l.forEach(function(g) {
        if (g.__N) {
          var h = g.__[0];
          g.__ = g.__N, g.__N = void 0, h !== g.__[0] && (a = !0);
        }
      }), !(!a && r.__c.props === s) && (!o || o.call(this, s, u, $));
    };
    L.u = !0;
    var o = L.shouldComponentUpdate, i = L.componentWillUpdate;
    L.componentWillUpdate = function(s, u, $) {
      if (this.__e) {
        var l = o;
        o = void 0, d(s, u, $), o = l;
      }
      i && i.call(this, s, u, $);
    }, L.shouldComponentUpdate = d;
  }
  return r.__N || r.__;
}
function kn(e, t) {
  var n = kt(Ce++, 3);
  !N.__s && Sr(n.__H, t) && (n.__ = e, n.i = t, L.__H.__h.push(n));
}
function _o(e) {
  return Ve = 5, mo(function() {
    return { current: e };
  }, []);
}
function mo(e, t) {
  var n = kt(Ce++, 7);
  return Sr(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function yo() {
  for (var e; e = Cr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(Ue), e.__H.__h.forEach(bt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], N.__e(t, e.__v);
      }
}
N.__b = function(e) {
  L = null, Rn && Rn(e);
}, N.__r = function(e) {
  In && In(e), Ce = 0;
  var t = (L = e.__c).__H;
  t && (ot === L ? (t.__h = [], L.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = Be, n.__N = n.i = void 0;
  })) : (t.__h.forEach(Ue), t.__h.forEach(bt), t.__h = [], Ce = 0)), ot = L;
}, N.diffed = function(e) {
  Dn && Dn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Cr.push(t) !== 1 && Fn === N.requestAnimationFrame || ((Fn = N.requestAnimationFrame) || go)(yo)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== Be && (n.__ = n.__V), n.i = void 0, n.__V = Be;
  })), ot = L = null;
}, N.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(Ue), n.__h = n.__h.filter(function(r) {
        return !r.__ || bt(r);
      });
    } catch (r) {
      t.some(function(d) {
        d.__h && (d.__h = []);
      }), t = [], N.__e(r, n.__v);
    }
  }), Mn && Mn(e, t);
}, N.unmount = function(e) {
  Ln && Ln(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      Ue(r);
    } catch (d) {
      t = d;
    }
  }), n.__H = void 0, t && N.__e(t, n.__v));
};
var Bn = typeof requestAnimationFrame == "function";
function go(e) {
  var t, n = function() {
    clearTimeout(r), Bn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Bn && (t = requestAnimationFrame(n));
}
function Ue(e) {
  var t = L, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), L = t;
}
function bt(e) {
  var t = L;
  e.__c = e.__(), L = t;
}
function Sr(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var xr = { exports: {} };
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
(function(e) {
  (function(t, n) {
    e.exports ? e.exports = n() : t.Toastify = n();
  })(At, function(t) {
    var n = function(i) {
      return new n.lib.init(i);
    }, r = "1.12.0";
    n.defaults = {
      oldestFirst: !0,
      text: "Toastify is awesome!",
      node: void 0,
      duration: 3e3,
      selector: void 0,
      callback: function() {
      },
      destination: void 0,
      newWindow: !1,
      close: !1,
      gravity: "toastify-top",
      positionLeft: !1,
      position: "",
      backgroundColor: "",
      avatar: "",
      className: "",
      stopOnFocus: !0,
      onClick: function() {
      },
      offset: { x: 0, y: 0 },
      escapeMarkup: !0,
      ariaLive: "polite",
      style: { background: "" }
    }, n.lib = n.prototype = {
      toastify: r,
      constructor: n,
      // Initializing the object with required parameters
      init: function(i) {
        return i || (i = {}), this.options = {}, this.toastElement = null, this.options.text = i.text || n.defaults.text, this.options.node = i.node || n.defaults.node, this.options.duration = i.duration === 0 ? 0 : i.duration || n.defaults.duration, this.options.selector = i.selector || n.defaults.selector, this.options.callback = i.callback || n.defaults.callback, this.options.destination = i.destination || n.defaults.destination, this.options.newWindow = i.newWindow || n.defaults.newWindow, this.options.close = i.close || n.defaults.close, this.options.gravity = i.gravity === "bottom" ? "toastify-bottom" : n.defaults.gravity, this.options.positionLeft = i.positionLeft || n.defaults.positionLeft, this.options.position = i.position || n.defaults.position, this.options.backgroundColor = i.backgroundColor || n.defaults.backgroundColor, this.options.avatar = i.avatar || n.defaults.avatar, this.options.className = i.className || n.defaults.className, this.options.stopOnFocus = i.stopOnFocus === void 0 ? n.defaults.stopOnFocus : i.stopOnFocus, this.options.onClick = i.onClick || n.defaults.onClick, this.options.offset = i.offset || n.defaults.offset, this.options.escapeMarkup = i.escapeMarkup !== void 0 ? i.escapeMarkup : n.defaults.escapeMarkup, this.options.ariaLive = i.ariaLive || n.defaults.ariaLive, this.options.style = i.style || n.defaults.style, i.backgroundColor && (this.options.style.background = i.backgroundColor), this;
      },
      // Building the DOM element
      buildToast: function() {
        if (!this.options)
          throw "Toastify is not initialized";
        var i = document.createElement("div");
        i.className = "toastify on " + this.options.className, this.options.position ? i.className += " toastify-" + this.options.position : this.options.positionLeft === !0 ? (i.className += " toastify-left", console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")) : i.className += " toastify-right", i.className += " " + this.options.gravity, this.options.backgroundColor && console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');
        for (var s in this.options.style)
          i.style[s] = this.options.style[s];
        if (this.options.ariaLive && i.setAttribute("aria-live", this.options.ariaLive), this.options.node && this.options.node.nodeType === Node.ELEMENT_NODE)
          i.appendChild(this.options.node);
        else if (this.options.escapeMarkup ? i.innerText = this.options.text : i.innerHTML = this.options.text, this.options.avatar !== "") {
          var u = document.createElement("img");
          u.src = this.options.avatar, u.className = "toastify-avatar", this.options.position == "left" || this.options.positionLeft === !0 ? i.appendChild(u) : i.insertAdjacentElement("afterbegin", u);
        }
        if (this.options.close === !0) {
          var $ = document.createElement("button");
          $.type = "button", $.setAttribute("aria-label", "Close"), $.className = "toast-close", $.innerHTML = "&#10006;", $.addEventListener(
            "click",
            function(v) {
              v.stopPropagation(), this.removeElement(this.toastElement), window.clearTimeout(this.toastElement.timeOutValue);
            }.bind(this)
          );
          var l = window.innerWidth > 0 ? window.innerWidth : screen.width;
          (this.options.position == "left" || this.options.positionLeft === !0) && l > 360 ? i.insertAdjacentElement("afterbegin", $) : i.appendChild($);
        }
        if (this.options.stopOnFocus && this.options.duration > 0) {
          var a = this;
          i.addEventListener(
            "mouseover",
            function(v) {
              window.clearTimeout(i.timeOutValue);
            }
          ), i.addEventListener(
            "mouseleave",
            function() {
              i.timeOutValue = window.setTimeout(
                function() {
                  a.removeElement(i);
                },
                a.options.duration
              );
            }
          );
        }
        if (typeof this.options.destination < "u" && i.addEventListener(
          "click",
          function(v) {
            v.stopPropagation(), this.options.newWindow === !0 ? window.open(this.options.destination, "_blank") : window.location = this.options.destination;
          }.bind(this)
        ), typeof this.options.onClick == "function" && typeof this.options.destination > "u" && i.addEventListener(
          "click",
          function(v) {
            v.stopPropagation(), this.options.onClick();
          }.bind(this)
        ), typeof this.options.offset == "object") {
          var g = d("x", this.options), h = d("y", this.options), p = this.options.position == "left" ? g : "-" + g, f = this.options.gravity == "toastify-top" ? h : "-" + h;
          i.style.transform = "translate(" + p + "," + f + ")";
        }
        return i;
      },
      // Displaying the toast
      showToast: function() {
        this.toastElement = this.buildToast();
        var i;
        if (typeof this.options.selector == "string" ? i = document.getElementById(this.options.selector) : this.options.selector instanceof HTMLElement || typeof ShadowRoot < "u" && this.options.selector instanceof ShadowRoot ? i = this.options.selector : i = document.body, !i)
          throw "Root element is not defined";
        var s = n.defaults.oldestFirst ? i.firstChild : i.lastChild;
        return i.insertBefore(this.toastElement, s), n.reposition(), this.options.duration > 0 && (this.toastElement.timeOutValue = window.setTimeout(
          function() {
            this.removeElement(this.toastElement);
          }.bind(this),
          this.options.duration
        )), this;
      },
      hideToast: function() {
        this.toastElement.timeOutValue && clearTimeout(this.toastElement.timeOutValue), this.removeElement(this.toastElement);
      },
      // Removing the element from the DOM
      removeElement: function(i) {
        i.className = i.className.replace(" on", ""), window.setTimeout(
          function() {
            this.options.node && this.options.node.parentNode && this.options.node.parentNode.removeChild(this.options.node), i.parentNode && i.parentNode.removeChild(i), this.options.callback.call(i), n.reposition();
          }.bind(this),
          400
        );
      }
    }, n.reposition = function() {
      for (var i = {
        top: 15,
        bottom: 15
      }, s = {
        top: 15,
        bottom: 15
      }, u = {
        top: 15,
        bottom: 15
      }, $ = document.getElementsByClassName("toastify"), l, a = 0; a < $.length; a++) {
        o($[a], "toastify-top") === !0 ? l = "toastify-top" : l = "toastify-bottom";
        var g = $[a].offsetHeight;
        l = l.substr(9, l.length - 1);
        var h = 15, p = window.innerWidth > 0 ? window.innerWidth : screen.width;
        p <= 360 ? ($[a].style[l] = u[l] + "px", u[l] += g + h) : o($[a], "toastify-left") === !0 ? ($[a].style[l] = i[l] + "px", i[l] += g + h) : ($[a].style[l] = s[l] + "px", s[l] += g + h);
      }
      return this;
    };
    function d(i, s) {
      return s.offset[i] ? isNaN(s.offset[i]) ? s.offset[i] : s.offset[i] + "px" : "0px";
    }
    function o(i, s) {
      return !i || typeof s != "string" ? !1 : !!(i.className && i.className.trim().split(/\s+/gi).indexOf(s) > -1);
    }
    return n.lib.init.prototype = n.lib, n;
  });
})(xr);
var bo = xr.exports;
const vo = /* @__PURE__ */ Ft(bo);
var ve = /* @__PURE__ */ ((e) => (e.Text = "Text", e.Buttons = "Buttons", e))(ve || {}), Oo = 0;
function C(e, t, n, r, d, o) {
  var i, s, u = {};
  for (s in t)
    s == "ref" ? i = t[s] : u[s] = t[s];
  var $ = { type: e, props: u, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --Oo, __i: -1, __u: 0, __source: d, __self: o };
  if (typeof e == "function" && (i = e.defaultProps))
    for (s in i)
      u[s] === void 0 && (u[s] = i[s]);
  return N.vnode && N.vnode($), $;
}
ae.extend(oi);
const Eo = ({
  index: e,
  button: t,
  handlePress: n
}) => C("button", {
  type: "button",
  class: "text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-medium py-1 px-2 mx-1 rounded",
  onClick: () => n(t),
  children: ["Slot from -", C("br", {}), ae(t.startTime * 1e3).format("MM/DD/YYYY hh:mm:ss A Z"), C("br", {}), ae(t.endTime * 1e3).format("MM/DD/YYYY hh:mm:ss A Z")]
}, e), wo = ({
  email: e = ""
}) => {
  const t = "https://lookahead-cloud-run-api-z3eagzn34a-uw.a.run.app/embed", [n, r] = J(null);
  kn(() => {
    D.get(`${t}/business?businessEmail=${e}`).then((_) => {
      r(_.data);
    }).catch((_) => {
      console.error("Error: ", _);
    });
  }, []);
  const [d, o] = J([]), [i, s] = J(""), [u, $] = J(null), l = () => {
    if (i.trim() !== "") {
      const _ = {
        msg_text: i,
        buttons: [],
        msg_type: ve.Text,
        sender: !0,
        timestamp: Date.now()
      };
      o([...d, _]), s("");
      const y = ae().format("YYYY-MM-DDTHH:mm:ssZZ");
      D.post(`${t}/appointments/search`, {
        business: e,
        request: _.msg_text,
        currentTime: `${y.slice(0, -2)}:${y.slice(-2)}`
      }).then((m) => {
        if (m.data.success) {
          const O = [];
          for (const w of m.data.slots)
            for (const P of w.items) {
              const F = {
                calendarId: w.calendarId,
                calendarName: w.calendarName,
                timeZone: w.timeZone,
                opens: w.opens,
                closes: w.closes,
                startTime: P.startTime,
                endTime: P.endTime
              };
              O.push(F);
            }
          const b = {
            msg_text: "",
            buttons: O.slice(0, 2),
            msg_type: ve.Buttons,
            sender: !1,
            timestamp: Date.now()
          };
          o([...d, _, b]), $(m.data.query);
        }
      }).catch((m) => {
        console.error("Error: ", m);
      });
    }
  }, a = (_) => {
    _.key === "Enter" && !_.shiftKey && l();
  }, g = (_) => {
    vo({
      text: _,
      duration: 5e3,
      close: !0,
      gravity: "bottom",
      position: "center",
      stopOnFocus: !0,
      backgroundColor: "red"
    }).showToast();
  }, [h, p] = J(null), [f, v] = J(!1), E = (_) => {
    p(_), v(!0);
  }, [S, T] = J(""), [U, k] = J(""), j = U ? ho(U) : null, [W, q] = J(""), [R, I] = J(!1), A = () => {
    if (!S) {
      g("Please enter your name");
      return;
    }
    if (!j) {
      g("Please enter a valid phone number");
      return;
    }
    if (!R) {
      g("You must agree with storage and data handling policy to continue");
      return;
    }
    v(!1);
    const _ = {
      msg_text: "Appointment booking request submitted!",
      buttons: [],
      msg_type: ve.Text,
      sender: !0,
      timestamp: Date.now()
    };
    o([...d, _]), h != null && S.length > 0 && U.length > 0 && D.post(`${t}/appointments`, {
      business: e,
      calendarId: h.calendarId,
      startTime: h.startTime,
      endTime: h.endTime,
      query: u,
      userPhone: U,
      name: S
    }).then((y) => {
      y.data.success && y.data.result != null && (q(`Client name: ${S}
Phone number: ${y.data.result.customer}
Local Start time: ${ae(y.data.result.startTime * 1e3).local().format("MM/DD/YYYY hh:mm:ss A Z")}
Business email: ${n?.email}`), T(""), k(""));
    }).catch((y) => {
      console.error("Error: ", y);
    });
  }, ue = (_) => {
    s(i + _);
  }, $e = _o(null);
  return kn(() => {
    $e.current && $e.current.focus();
  }), C("div", {
    class: "w-1/2 mx-auto my-8",
    children: C("div", {
      class: "border-2 border-black",
      children: [C("div", {
        class: "bg-gray-200 p-4",
        children: n?.name
      }), C("div", {
        class: "p-6 flex flex-col space-y-4",
        children: [C("div", {
          class: "overflow-auto h-64",
          children: d.sort((_, y) => _.timestamp - y.timestamp).map((_, y) => C("div", {
            class: `${_.sender ? "text-right" : "text-left"}`,
            children: _.msg_type === ve.Text ? C("span", {
              class: `${_.sender ? "bg-blue-100" : "bg-gray-200"} rounded px-4 py-2 inline-block my-1`,
              children: _.msg_text
            }) : C("div", {
              children: _.buttons.map((m, O) => C(Eo, {
                index: O,
                button: m,
                handlePress: E
              }))
            })
          }, _.timestamp))
        }), C("div", {
          children: f ? C("div", {
            children: C("div", {
              class: "modal bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center",
              children: C("div", {
                class: "modal-content bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4",
                children: [h != null ? C("div", {
                  children: [C("h2", {
                    class: "text-2xl font-semibold text-gray-800 my-3",
                    children: "Book an Appointment"
                  }), C("h3", {
                    class: "text-1xl font-medium text-gray-700 my-2",
                    children: [n?.name, n?.address != null && n?.address !== "" ? `, ${n.address}` : ""]
                  }), ae(h.startTime * 1e3).format("MM/DD/YYYY hh:mm:ss A Z"), C("br", {}), ae(h.endTime * 1e3).format("MM/DD/YYYY hh:mm:ss A Z"), C("br", {})]
                }) : C(he, {}), C("input", {
                  type: "text",
                  placeholder: "Enter your name",
                  value: S,
                  onInput: (_) => T(_.target.value),
                  class: "border-2 border-gray-200 rounded-lg p-2"
                }), C("input", {
                  type: "text",
                  placeholder: "Enter your phone number",
                  value: U,
                  onInput: (_) => k(_.target.value),
                  class: `border-2 rounded-lg p-2 focus:outline-none ${j === null ? "border-gray-200" : j ? "border-green-500" : "border-red-500"}`
                }), C("div", {
                  children: C("label", {
                    class: "flex items-center space-x-3",
                    children: [C("input", {
                      type: "checkbox",
                      checked: R,
                      onChange: () => I(!R),
                      class: "form-checkbox h-5 w-5 text-green-600"
                    }), C("span", {
                      class: "text-gray-700",
                      children: ["I agree with the storage and", C("br", {}), "handling of my data by this website."]
                    })]
                  })
                }), C("div", {
                  class: "flex justify-end items-center space-x-2",
                  children: [C("button", {
                    type: "button",
                    class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                    onClick: A,
                    children: "Book an Appointment"
                  }), C("button", {
                    type: "button",
                    class: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                    onClick: () => v(!1),
                    children: "X"
                  })]
                })]
              })
            })
          }) : C("div", {
            children: W !== "" ? C("div", {
              class: "bg-green-500 text-white p-4 rounded",
              children: [C("h2", {
                class: "text-2xl font-semibold my-3",
                children: "Appointment is booked"
              }), C("h3", {
                class: "text-1xl font-medium my-2 whitespace-pre-line",
                children: W
              })]
            }) : C("div", {
              children: [i.length === 0 ? C("div", {
                class: "flex space-x-2 overflow-auto py-2 px-4",
                children: ["Find me the earliest appointment next week before 11am", "Book me an appointment on Thursday after 2pm"].map((_) => C("button", {
                  type: "button",
                  class: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
                  onClick: () => ue(_),
                  children: _
                }))
              }) : C(he, {}), C("div", {
                class: "flex items-center",
                children: [C("input", {
                  class: "border flex-1 p-2",
                  type: "text",
                  placeholder: "Type a message...",
                  value: i,
                  onInput: (_) => s(_.target.value),
                  ref: $e,
                  onKeyPress: a
                }), C("button", {
                  type: "button",
                  class: "ml-2 px-4 py-2 bg-blue-500 text-white",
                  onClick: l,
                  children: "Send"
                })]
              })]
            })
          })
        })]
      })]
    })
  });
}, Po = jr(wo, "lookahead-widget", ["email"]);
export {
  Po as default
};
