var xe, R, Gn, ae, jt, Vn, ut, Ee = {}, Wn = [], Ir = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Ot = Array.isArray;
function te(e, t) {
  for (var n in t)
    e[n] = t[n];
  return e;
}
function Kn(e) {
  var t = e.parentNode;
  t && t.removeChild(e);
}
function pe(e, t, n) {
  var r, d, o, i = {};
  for (o in t)
    o == "key" ? r = t[o] : o == "ref" ? d = t[o] : i[o] = t[o];
  if (arguments.length > 2 && (i.children = arguments.length > 3 ? xe.call(arguments, 2) : n), typeof e == "function" && e.defaultProps != null)
    for (o in e.defaultProps)
      i[o] === void 0 && (i[o] = e.defaultProps[o]);
  return we(e, i, r, d, null);
}
function we(e, t, n, r, d) {
  var o = { type: e, props: t, key: n, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: d ?? ++Gn, __i: -1, __u: 0 };
  return d == null && R.vnode != null && R.vnode(o), o;
}
function _e(e) {
  return e.children;
}
function De(e, t) {
  this.props = e, this.context = t;
}
function $e(e, t) {
  if (t == null)
    return e.__ ? $e(e.__, e.__i + 1) : null;
  for (var n; t < e.__k.length; t++)
    if ((n = e.__k[t]) != null && n.__e != null)
      return n.__e;
  return typeof e.type == "function" ? $e(e) : null;
}
function Yn(e) {
  var t, n;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
      if ((n = e.__k[t]) != null && n.__e != null) {
        e.__e = e.__c.base = n.__e;
        break;
      }
    return Yn(e);
  }
}
function Ht(e) {
  (!e.__d && (e.__d = !0) && ae.push(e) && !Ge.__r++ || jt !== R.debounceRendering) && ((jt = R.debounceRendering) || Vn)(Ge);
}
function Ge() {
  var e, t, n, r, d, o, i, s, u;
  for (ae.sort(ut); e = ae.shift(); )
    e.__d && (t = ae.length, r = void 0, o = (d = (n = e).__v).__e, s = [], u = [], (i = n.__P) && ((r = te({}, d)).__v = d.__v + 1, R.vnode && R.vnode(r), Et(i, r, d, n.__n, i.ownerSVGElement !== void 0, 32 & d.__u ? [o] : null, s, o ?? $e(d), !!(32 & d.__u), u), r.__v = d.__v, r.__.__k[r.__i] = r, Jn(s, r, u), r.__e != o && Yn(r)), ae.length > t && ae.sort(ut));
  Ge.__r = 0;
}
function qn(e, t, n, r, d, o, i, s, u, $, l) {
  var a, y, p, _, f, v = r && r.__k || Wn, E = t.length;
  for (n.__d = u, Dr(n, t, v), u = n.__d, a = 0; a < E; a++)
    (p = n.__k[a]) != null && typeof p != "boolean" && typeof p != "function" && (y = p.__i === -1 ? Ee : v[p.__i] || Ee, p.__i = a, Et(e, p, y, d, o, i, s, u, $, l), _ = p.__e, p.ref && y.ref != p.ref && (y.ref && Pt(y.ref, null, p), l.push(p.ref, p.__c || _, p)), f == null && _ != null && (f = _), 65536 & p.__u || y.__k === p.__k ? (_ || y.__e != u || (u = $e(y)), u = zn(p, u, e)) : typeof p.type == "function" && p.__d !== void 0 ? u = p.__d : _ && (u = _.nextSibling), p.__d = void 0, p.__u &= -196609);
  n.__d = u, n.__e = f;
}
function Dr(e, t, n) {
  var r, d, o, i, s, u = t.length, $ = n.length, l = $, a = 0;
  for (e.__k = [], r = 0; r < u; r++)
    i = r + a, (d = e.__k[r] = (d = t[r]) == null || typeof d == "boolean" || typeof d == "function" ? null : typeof d == "string" || typeof d == "number" || typeof d == "bigint" || d.constructor == String ? we(null, d, null, null, null) : Ot(d) ? we(_e, { children: d }, null, null, null) : d.constructor === void 0 && d.__b > 0 ? we(d.type, d.props, d.key, d.ref ? d.ref : null, d.__v) : d) != null ? (d.__ = e, d.__b = e.__b + 1, s = Lr(d, n, i, l), d.__i = s, o = null, s !== -1 && (l--, (o = n[s]) && (o.__u |= 131072)), o == null || o.__v === null ? (s == -1 && a--, typeof d.type != "function" && (d.__u |= 65536)) : s !== i && (s === i + 1 ? a++ : s > i ? l > u - i ? a += s - i : a-- : s < i ? s == i - 1 && (a = s - i) : a = 0, s !== r + a && (d.__u |= 65536))) : (o = n[i]) && o.key == null && o.__e && !(131072 & o.__u) && (o.__e == e.__d && (e.__d = $e(o)), $t(o, o, !1), n[i] = null, l--);
  if (l)
    for (r = 0; r < $; r++)
      (o = n[r]) != null && !(131072 & o.__u) && (o.__e == e.__d && (e.__d = $e(o)), $t(o, o));
}
function zn(e, t, n) {
  var r, d;
  if (typeof e.type == "function") {
    for (r = e.__k, d = 0; r && d < r.length; d++)
      r[d] && (r[d].__ = e, t = zn(r[d], t, n));
    return t;
  }
  e.__e != t && (n.insertBefore(e.__e, t || null), t = e.__e);
  do
    t = t && t.nextSibling;
  while (t != null && t.nodeType === 8);
  return t;
}
function Lr(e, t, n, r) {
  var d = e.key, o = e.type, i = n - 1, s = n + 1, u = t[n];
  if (u === null || u && d == u.key && o === u.type && !(131072 & u.__u))
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
function Gt(e, t, n) {
  t[0] === "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || Ir.test(t) ? n : n + "px";
}
function Ie(e, t, n, r, d) {
  var o;
  e:
    if (t === "style")
      if (typeof n == "string")
        e.style.cssText = n;
      else {
        if (typeof r == "string" && (e.style.cssText = r = ""), r)
          for (t in r)
            n && t in n || Gt(e.style, t, "");
        if (n)
          for (t in n)
            r && n[t] === r[t] || Gt(e.style, t, n[t]);
      }
    else if (t[0] === "o" && t[1] === "n")
      o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + o] = n, n ? r ? n.u = r.u : (n.u = Date.now(), e.addEventListener(t, o ? Wt : Vt, o)) : e.removeEventListener(t, o ? Wt : Vt, o);
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
function Vt(e) {
  if (this.l) {
    var t = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= t.u)
        return;
    } else
      e.t = Date.now();
    return t(R.event ? R.event(e) : e);
  }
}
function Wt(e) {
  if (this.l)
    return this.l[e.type + !0](R.event ? R.event(e) : e);
}
function Et(e, t, n, r, d, o, i, s, u, $) {
  var l, a, y, p, _, f, v, E, C, S, G, H, B, W, Y, D = t.type;
  if (t.constructor !== void 0)
    return null;
  128 & n.__u && (u = !!(32 & n.__u), o = [s = t.__e = n.__e]), (l = R.__b) && l(t);
  e:
    if (typeof D == "function")
      try {
        if (E = t.props, C = (l = D.contextType) && r[l.__c], S = l ? C ? C.props.value : l.__ : r, n.__c ? v = (a = t.__c = n.__c).__ = a.__E : ("prototype" in D && D.prototype.render ? t.__c = a = new D(E, S) : (t.__c = a = new De(E, S), a.constructor = D, a.render = Mr), C && C.sub(a), a.props = E, a.state || (a.state = {}), a.context = S, a.__n = r, y = a.__d = !0, a.__h = [], a._sb = []), a.__s == null && (a.__s = a.state), D.getDerivedStateFromProps != null && (a.__s == a.state && (a.__s = te({}, a.__s)), te(a.__s, D.getDerivedStateFromProps(E, a.__s))), p = a.props, _ = a.state, a.__v = t, y)
          D.getDerivedStateFromProps == null && a.componentWillMount != null && a.componentWillMount(), a.componentDidMount != null && a.__h.push(a.componentDidMount);
        else {
          if (D.getDerivedStateFromProps == null && E !== p && a.componentWillReceiveProps != null && a.componentWillReceiveProps(E, S), !a.__e && (a.shouldComponentUpdate != null && a.shouldComponentUpdate(E, a.__s, S) === !1 || t.__v === n.__v)) {
            for (t.__v !== n.__v && (a.props = E, a.state = a.__s, a.__d = !1), t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function(I) {
              I && (I.__ = t);
            }), G = 0; G < a._sb.length; G++)
              a.__h.push(a._sb[G]);
            a._sb = [], a.__h.length && i.push(a);
            break e;
          }
          a.componentWillUpdate != null && a.componentWillUpdate(E, a.__s, S), a.componentDidUpdate != null && a.__h.push(function() {
            a.componentDidUpdate(p, _, f);
          });
        }
        if (a.context = S, a.props = E, a.__P = e, a.__e = !1, H = R.__r, B = 0, "prototype" in D && D.prototype.render) {
          for (a.state = a.__s, a.__d = !1, H && H(t), l = a.render(a.props, a.state, a.context), W = 0; W < a._sb.length; W++)
            a.__h.push(a._sb[W]);
          a._sb = [];
        } else
          do
            a.__d = !1, H && H(t), l = a.render(a.props, a.state, a.context), a.state = a.__s;
          while (a.__d && ++B < 25);
        a.state = a.__s, a.getChildContext != null && (r = te(te({}, r), a.getChildContext())), y || a.getSnapshotBeforeUpdate == null || (f = a.getSnapshotBeforeUpdate(p, _)), qn(e, Ot(Y = l != null && l.type === _e && l.key == null ? l.props.children : l) ? Y : [Y], t, n, r, d, o, i, s, u, $), a.base = t.__e, t.__u &= -161, a.__h.length && i.push(a), v && (a.__E = a.__ = null);
      } catch (I) {
        t.__v = null, u || o != null ? (t.__e = s, t.__u |= u ? 160 : 32, o[o.indexOf(s)] = null) : (t.__e = n.__e, t.__k = n.__k), R.__e(I, t, n);
      }
    else
      o == null && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = kr(n.__e, t, n, r, d, o, i, u, $);
  (l = R.diffed) && l(t);
}
function Jn(e, t, n) {
  t.__d = void 0;
  for (var r = 0; r < n.length; r++)
    Pt(n[r], n[++r], n[++r]);
  R.__c && R.__c(t, e), e.some(function(d) {
    try {
      e = d.__h, d.__h = [], e.some(function(o) {
        o.call(d);
      });
    } catch (o) {
      R.__e(o, d.__v);
    }
  });
}
function kr(e, t, n, r, d, o, i, s, u) {
  var $, l, a, y, p, _, f, v = n.props, E = t.props, C = t.type;
  if (C === "svg" && (d = !0), o != null) {
    for ($ = 0; $ < o.length; $++)
      if ((p = o[$]) && "setAttribute" in p == !!C && (C ? p.localName === C : p.nodeType === 3)) {
        e = p, o[$] = null;
        break;
      }
  }
  if (e == null) {
    if (C === null)
      return document.createTextNode(E);
    e = d ? document.createElementNS("http://www.w3.org/2000/svg", C) : document.createElement(C, E.is && E), o = null, s = !1;
  }
  if (C === null)
    v === E || s && e.data === E || (e.data = E);
  else {
    if (o = o && xe.call(e.childNodes), v = n.props || Ee, !s && o != null)
      for (v = {}, $ = 0; $ < e.attributes.length; $++)
        v[(p = e.attributes[$]).name] = p.value;
    for ($ in v)
      p = v[$], $ == "children" || ($ == "dangerouslySetInnerHTML" ? a = p : $ === "key" || $ in E || Ie(e, $, null, p, d));
    for ($ in E)
      p = E[$], $ == "children" ? y = p : $ == "dangerouslySetInnerHTML" ? l = p : $ == "value" ? _ = p : $ == "checked" ? f = p : $ === "key" || s && typeof p != "function" || v[$] === p || Ie(e, $, p, v[$], d);
    if (l)
      s || a && (l.__html === a.__html || l.__html === e.innerHTML) || (e.innerHTML = l.__html), t.__k = [];
    else if (a && (e.innerHTML = ""), qn(e, Ot(y) ? y : [y], t, n, r, d && C !== "foreignObject", o, i, o ? o[0] : n.__k && $e(n, 0), s, u), o != null)
      for ($ = o.length; $--; )
        o[$] != null && Kn(o[$]);
    s || ($ = "value", _ !== void 0 && (_ !== e[$] || C === "progress" && !_ || C === "option" && _ !== v[$]) && Ie(e, $, _, v[$], !1), $ = "checked", f !== void 0 && f !== e[$] && Ie(e, $, f, v[$], !1));
  }
  return e;
}
function Pt(e, t, n) {
  try {
    typeof e == "function" ? e(t) : e.current = t;
  } catch (r) {
    R.__e(r, n);
  }
}
function $t(e, t, n) {
  var r, d;
  if (R.unmount && R.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || Pt(r, null, t)), (r = e.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o) {
        R.__e(o, t);
      }
    r.base = r.__P = null, e.__c = void 0;
  }
  if (r = e.__k)
    for (d = 0; d < r.length; d++)
      r[d] && $t(r[d], t, n || typeof e.type != "function");
  n || e.__e == null || Kn(e.__e), e.__ = e.__e = e.__d = void 0;
}
function Mr(e, t, n) {
  return this.constructor(e, n);
}
function qe(e, t, n) {
  var r, d, o, i;
  R.__ && R.__(e, t), d = (r = typeof n == "function") ? null : n && n.__k || t.__k, o = [], i = [], Et(t, e = (!r && n || t).__k = pe(_e, null, [e]), d || Ee, Ee, t.ownerSVGElement !== void 0, !r && n ? [n] : d ? null : t.firstChild ? xe.call(t.childNodes) : null, o, !r && n ? n : d ? d.__e : t.firstChild, r, i), Jn(o, e, i);
}
function Xn(e, t) {
  qe(e, t, Xn);
}
function Zn(e, t, n) {
  var r, d, o, i, s = te({}, e.props);
  for (o in e.type && e.type.defaultProps && (i = e.type.defaultProps), t)
    o == "key" ? r = t[o] : o == "ref" ? d = t[o] : s[o] = t[o] === void 0 && i !== void 0 ? i[o] : t[o];
  return arguments.length > 2 && (s.children = arguments.length > 3 ? xe.call(arguments, 2) : n), we(e.type, s, r || e.key, d || e.ref, null);
}
xe = Wn.slice, R = { __e: function(e, t, n, r) {
  for (var d, o, i; t = t.__; )
    if ((d = t.__c) && !d.__)
      try {
        if ((o = d.constructor) && o.getDerivedStateFromError != null && (d.setState(o.getDerivedStateFromError(e)), i = d.__d), d.componentDidCatch != null && (d.componentDidCatch(e, r || {}), i = d.__d), i)
          return d.__E = d;
      } catch (s) {
        e = s;
      }
  throw e;
} }, Gn = 0, De.prototype.setState = function(e, t) {
  var n;
  n = this.__s != null && this.__s !== this.state ? this.__s : this.__s = te({}, this.state), typeof e == "function" && (e = e(te({}, n), this.props)), e && te(n, e), e != null && this.__v && (t && this._sb.push(t), Ht(this));
}, De.prototype.forceUpdate = function(e) {
  this.__v && (this.__e = !0, e && this.__h.push(e), Ht(this));
}, De.prototype.render = _e, ae = [], Vn = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, ut = function(e, t) {
  return e.__v.__b - t.__v.__b;
}, Ge.__r = 0;
function Nt() {
  return (Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }).apply(this, arguments);
}
var Ur = ["context", "children"];
function Br(e) {
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
  }(e, Ur);
  return Zn(t, n);
}
function jr() {
  var e = new CustomEvent("_preact", { detail: {}, bubbles: !0, cancelable: !0 });
  this.dispatchEvent(e), this._vdom = pe(Br, Nt({}, this._props, { context: e.detail.context }), function t(n, r) {
    if (n.nodeType === 3)
      return n.data;
    if (n.nodeType !== 1)
      return null;
    var d = [], o = {}, i = 0, s = n.attributes, u = n.childNodes;
    for (i = s.length; i--; )
      s[i].name !== "slot" && (o[s[i].name] = s[i].value, o[Qn(s[i].name)] = s[i].value);
    for (i = u.length; i--; ) {
      var $ = t(u[i], null), l = u[i].slot;
      l ? o[l] = pe(Kt, { name: l }, $) : d[i] = $;
    }
    var a = r ? pe(Kt, null, d) : d;
    return pe(r || n.nodeName.toLowerCase(), o, a);
  }(this, this._vdomComponent)), (this.hasAttribute("hydrate") ? Xn : qe)(this._vdom, this._root);
}
function Qn(e) {
  return e.replace(/-(\w)/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  });
}
function Hr(e, t, n) {
  if (this._vdom) {
    var r = {};
    r[e] = n = n ?? void 0, r[Qn(e)] = n, this._vdom = Zn(this._vdom, r), qe(this._vdom, this._root);
  }
}
function Gr() {
  qe(this._vdom = null, this._root);
}
function Kt(e, t) {
  var n = this;
  return pe("slot", Nt({}, e, { ref: function(r) {
    r ? (n.ref = r, n._listener || (n._listener = function(d) {
      d.stopPropagation(), d.detail.context = t;
    }, r.addEventListener("_preact", n._listener))) : n.ref.removeEventListener("_preact", n._listener);
  } }));
}
function Vr(e, t, n, r) {
  function d() {
    var o = Reflect.construct(HTMLElement, [], d);
    return o._vdomComponent = e, o._root = r && r.shadow ? o.attachShadow({ mode: r.mode || "open" }) : o, o;
  }
  return (d.prototype = Object.create(HTMLElement.prototype)).constructor = d, d.prototype.connectedCallback = jr, d.prototype.attributeChangedCallback = Hr, d.prototype.disconnectedCallback = Gr, n = n || e.observedAttributes || Object.keys(e.propTypes || {}), d.observedAttributes = n, n.forEach(function(o) {
    Object.defineProperty(d.prototype, o, { get: function() {
      return this._vdom.props[o];
    }, set: function(i) {
      this._vdom ? this.attributeChangedCallback(o, null, i) : (this._props || (this._props = {}), this._props[o] = i, this.connectedCallback());
      var s = typeof i;
      i != null && s !== "string" && s !== "boolean" && s !== "number" || this.setAttribute(o, i);
    } });
  }), customElements.define(t || e.tagName || e.displayName || e.name, d);
}
function er(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Wr } = Object.prototype, { getPrototypeOf: Ct } = Object, ze = /* @__PURE__ */ ((e) => (t) => {
  const n = Wr.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Q = (e) => (e = e.toLowerCase(), (t) => ze(t) === e), Je = (e) => (t) => typeof t === e, { isArray: ye } = Array, Pe = Je("undefined");
function Kr(e) {
  return e !== null && !Pe(e) && e.constructor !== null && !Pe(e.constructor) && z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const tr = Q("ArrayBuffer");
function Yr(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && tr(e.buffer), t;
}
const qr = Je("string"), z = Je("function"), nr = Je("number"), Xe = (e) => e !== null && typeof e == "object", zr = (e) => e === !0 || e === !1, Le = (e) => {
  if (ze(e) !== "object")
    return !1;
  const t = Ct(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Jr = Q("Date"), Xr = Q("File"), Zr = Q("Blob"), Qr = Q("FileList"), ed = (e) => Xe(e) && z(e.pipe), td = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || z(e.append) && ((t = ze(e)) === "formdata" || // detect form-data instance
  t === "object" && z(e.toString) && e.toString() === "[object FormData]"));
}, nd = Q("URLSearchParams"), rd = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Te(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, d;
  if (typeof e != "object" && (e = [e]), ye(e))
    for (r = 0, d = e.length; r < d; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), i = o.length;
    let s;
    for (r = 0; r < i; r++)
      s = o[r], t.call(null, e[s], s, e);
  }
}
function rr(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, d;
  for (; r-- > 0; )
    if (d = n[r], t === d.toLowerCase())
      return d;
  return null;
}
const dr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ir = (e) => !Pe(e) && e !== dr;
function lt() {
  const { caseless: e } = ir(this) && this || {}, t = {}, n = (r, d) => {
    const o = e && rr(t, d) || d;
    Le(t[o]) && Le(r) ? t[o] = lt(t[o], r) : Le(r) ? t[o] = lt({}, r) : ye(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, d = arguments.length; r < d; r++)
    arguments[r] && Te(arguments[r], n);
  return t;
}
const dd = (e, t, n, { allOwnKeys: r } = {}) => (Te(t, (d, o) => {
  n && z(d) ? e[o] = er(d, n) : e[o] = d;
}, { allOwnKeys: r }), e), id = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), od = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, sd = (e, t, n, r) => {
  let d, o, i;
  const s = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (d = Object.getOwnPropertyNames(e), o = d.length; o-- > 0; )
      i = d[o], (!r || r(i, e, t)) && !s[i] && (t[i] = e[i], s[i] = !0);
    e = n !== !1 && Ct(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ad = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, ud = (e) => {
  if (!e)
    return null;
  if (ye(e))
    return e;
  let t = e.length;
  if (!nr(t))
    return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, $d = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ct(Uint8Array)), ld = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let d;
  for (; (d = r.next()) && !d.done; ) {
    const o = d.value;
    t.call(e, o[0], o[1]);
  }
}, cd = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, fd = Q("HTMLFormElement"), hd = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, d) {
    return r.toUpperCase() + d;
  }
), Yt = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), pd = Q("RegExp"), or = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Te(n, (d, o) => {
    let i;
    (i = t(d, o, e)) !== !1 && (r[o] = i || d);
  }), Object.defineProperties(e, r);
}, _d = (e) => {
  or(e, (t, n) => {
    if (z(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (z(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, md = (e, t) => {
  const n = {}, r = (d) => {
    d.forEach((o) => {
      n[o] = !0;
    });
  };
  return ye(e) ? r(e) : r(String(e).split(t)), n;
}, yd = () => {
}, gd = (e, t) => (e = +e, Number.isFinite(e) ? e : t), nt = "abcdefghijklmnopqrstuvwxyz", qt = "0123456789", sr = {
  DIGIT: qt,
  ALPHA: nt,
  ALPHA_DIGIT: nt + nt.toUpperCase() + qt
}, bd = (e = 16, t = sr.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function vd(e) {
  return !!(e && z(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const wd = (e) => {
  const t = new Array(10), n = (r, d) => {
    if (Xe(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[d] = r;
        const o = ye(r) ? [] : {};
        return Te(r, (i, s) => {
          const u = n(i, d + 1);
          !Pe(u) && (o[s] = u);
        }), t[d] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Od = Q("AsyncFunction"), Ed = (e) => e && (Xe(e) || z(e)) && z(e.then) && z(e.catch), c = {
  isArray: ye,
  isArrayBuffer: tr,
  isBuffer: Kr,
  isFormData: td,
  isArrayBufferView: Yr,
  isString: qr,
  isNumber: nr,
  isBoolean: zr,
  isObject: Xe,
  isPlainObject: Le,
  isUndefined: Pe,
  isDate: Jr,
  isFile: Xr,
  isBlob: Zr,
  isRegExp: pd,
  isFunction: z,
  isStream: ed,
  isURLSearchParams: nd,
  isTypedArray: $d,
  isFileList: Qr,
  forEach: Te,
  merge: lt,
  extend: dd,
  trim: rd,
  stripBOM: id,
  inherits: od,
  toFlatObject: sd,
  kindOf: ze,
  kindOfTest: Q,
  endsWith: ad,
  toArray: ud,
  forEachEntry: ld,
  matchAll: cd,
  isHTMLForm: fd,
  hasOwnProperty: Yt,
  hasOwnProp: Yt,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: or,
  freezeMethods: _d,
  toObjectSet: md,
  toCamelCase: hd,
  noop: yd,
  toFiniteNumber: gd,
  findKey: rr,
  global: dr,
  isContextDefined: ir,
  ALPHABET: sr,
  generateString: bd,
  isSpecCompliantForm: vd,
  toJSONObject: wd,
  isAsyncFn: Od,
  isThenable: Ed
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
const ar = x.prototype, ur = {};
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
  ur[e] = { value: e };
});
Object.defineProperties(x, ur);
Object.defineProperty(ar, "isAxiosError", { value: !0 });
x.from = (e, t, n, r, d, o) => {
  const i = Object.create(ar);
  return c.toFlatObject(e, i, function(u) {
    return u !== Error.prototype;
  }, (s) => s !== "isAxiosError"), x.call(i, e.message, t, n, r, d), i.cause = e, i.name = e.name, o && Object.assign(i, o), i;
};
const Pd = null;
function ct(e) {
  return c.isPlainObject(e) || c.isArray(e);
}
function $r(e) {
  return c.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zt(e, t, n) {
  return e ? e.concat(t).map(function(d, o) {
    return d = $r(d), !n && o ? "[" + d + "]" : d;
  }).join(n ? "." : "") : t;
}
function Nd(e) {
  return c.isArray(e) && !e.some(ct);
}
const Cd = c.toFlatObject(c, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ze(e, t, n) {
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
  function $(_) {
    if (_ === null)
      return "";
    if (c.isDate(_))
      return _.toISOString();
    if (!u && c.isBlob(_))
      throw new x("Blob is not supported. Use a Buffer instead.");
    return c.isArrayBuffer(_) || c.isTypedArray(_) ? u && typeof Blob == "function" ? new Blob([_]) : Buffer.from(_) : _;
  }
  function l(_, f, v) {
    let E = _;
    if (_ && !v && typeof _ == "object") {
      if (c.endsWith(f, "{}"))
        f = r ? f : f.slice(0, -2), _ = JSON.stringify(_);
      else if (c.isArray(_) && Nd(_) || (c.isFileList(_) || c.endsWith(f, "[]")) && (E = c.toArray(_)))
        return f = $r(f), E.forEach(function(S, G) {
          !(c.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            i === !0 ? zt([f], G, o) : i === null ? f : f + "[]",
            $(S)
          );
        }), !1;
    }
    return ct(_) ? !0 : (t.append(zt(v, f, o), $(_)), !1);
  }
  const a = [], y = Object.assign(Cd, {
    defaultVisitor: l,
    convertValue: $,
    isVisitable: ct
  });
  function p(_, f) {
    if (!c.isUndefined(_)) {
      if (a.indexOf(_) !== -1)
        throw Error("Circular reference detected in " + f.join("."));
      a.push(_), c.forEach(_, function(E, C) {
        (!(c.isUndefined(E) || E === null) && d.call(
          t,
          E,
          c.isString(C) ? C.trim() : C,
          f,
          y
        )) === !0 && p(E, f ? f.concat(C) : [C]);
      }), a.pop();
    }
  }
  if (!c.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Jt(e) {
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
function St(e, t) {
  this._pairs = [], e && Ze(e, this, t);
}
const lr = St.prototype;
lr.append = function(t, n) {
  this._pairs.push([t, n]);
};
lr.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Jt);
  } : Jt;
  return this._pairs.map(function(d) {
    return n(d[0]) + "=" + n(d[1]);
  }, "").join("&");
};
function Sd(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function cr(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Sd, d = n && n.serialize;
  let o;
  if (d ? o = d(t, n) : o = c.isURLSearchParams(t) ? t.toString() : new St(t, n).toString(r), o) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class Xt {
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
const fr = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, xd = typeof URLSearchParams < "u" ? URLSearchParams : St, Td = typeof FormData < "u" ? FormData : null, Ad = typeof Blob < "u" ? Blob : null, Fd = {
  isBrowser: !0,
  classes: {
    URLSearchParams: xd,
    FormData: Td,
    Blob: Ad
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, hr = typeof window < "u" && typeof document < "u", Rd = ((e) => hr && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Id = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Dd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: hr,
  hasStandardBrowserEnv: Rd,
  hasStandardBrowserWebWorkerEnv: Id
}, Symbol.toStringTag, { value: "Module" })), Z = {
  ...Dd,
  ...Fd
};
function Ld(e, t) {
  return Ze(e, new Z.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, d, o) {
      return Z.isNode && c.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function kd(e) {
  return c.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Md(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const d = n.length;
  let o;
  for (r = 0; r < d; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function pr(e) {
  function t(n, r, d, o) {
    let i = n[o++];
    if (i === "__proto__")
      return !0;
    const s = Number.isFinite(+i), u = o >= n.length;
    return i = !i && c.isArray(d) ? d.length : i, u ? (c.hasOwnProp(d, i) ? d[i] = [d[i], r] : d[i] = r, !s) : ((!d[i] || !c.isObject(d[i])) && (d[i] = []), t(n, r, d[i], o) && c.isArray(d[i]) && (d[i] = Md(d[i])), !s);
  }
  if (c.isFormData(e) && c.isFunction(e.entries)) {
    const n = {};
    return c.forEachEntry(e, (r, d) => {
      t(kd(r), d, n, 0);
    }), n;
  }
  return null;
}
function Ud(e, t, n) {
  if (c.isString(e))
    try {
      return (t || JSON.parse)(e), c.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (n || JSON.stringify)(e);
}
const xt = {
  transitional: fr,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", d = r.indexOf("application/json") > -1, o = c.isObject(t);
    if (o && c.isHTMLForm(t) && (t = new FormData(t)), c.isFormData(t))
      return d ? JSON.stringify(pr(t)) : t;
    if (c.isArrayBuffer(t) || c.isBuffer(t) || c.isStream(t) || c.isFile(t) || c.isBlob(t))
      return t;
    if (c.isArrayBufferView(t))
      return t.buffer;
    if (c.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Ld(t, this.formSerializer).toString();
      if ((s = c.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const u = this.env && this.env.FormData;
        return Ze(
          s ? { "files[]": t } : t,
          u && new u(),
          this.formSerializer
        );
      }
    }
    return o || d ? (n.setContentType("application/json", !1), Ud(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || xt.transitional, r = n && n.forcedJSONParsing, d = this.responseType === "json";
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
    FormData: Z.classes.FormData,
    Blob: Z.classes.Blob
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
  xt.headers[e] = {};
});
const Tt = xt, Bd = c.toObjectSet([
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
]), jd = (e) => {
  const t = {};
  let n, r, d;
  return e && e.split(`
`).forEach(function(i) {
    d = i.indexOf(":"), n = i.substring(0, d).trim().toLowerCase(), r = i.substring(d + 1).trim(), !(!n || t[n] && Bd[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
}, Zt = Symbol("internals");
function ve(e) {
  return e && String(e).trim().toLowerCase();
}
function ke(e) {
  return e === !1 || e == null ? e : c.isArray(e) ? e.map(ke) : String(e);
}
function Hd(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Gd = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function rt(e, t, n, r, d) {
  if (c.isFunction(r))
    return r.call(this, t, n);
  if (d && (t = n), !!c.isString(t)) {
    if (c.isString(r))
      return t.indexOf(r) !== -1;
    if (c.isRegExp(r))
      return r.test(t);
  }
}
function Vd(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Wd(e, t) {
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
class Qe {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const d = this;
    function o(s, u, $) {
      const l = ve(u);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const a = c.findKey(d, l);
      (!a || d[a] === void 0 || $ === !0 || $ === void 0 && d[a] !== !1) && (d[a || u] = ke(s));
    }
    const i = (s, u) => c.forEach(s, ($, l) => o($, l, u));
    return c.isPlainObject(t) || t instanceof this.constructor ? i(t, n) : c.isString(t) && (t = t.trim()) && !Gd(t) ? i(jd(t), n) : t != null && o(n, t, r), this;
  }
  get(t, n) {
    if (t = ve(t), t) {
      const r = c.findKey(this, t);
      if (r) {
        const d = this[r];
        if (!n)
          return d;
        if (n === !0)
          return Hd(d);
        if (c.isFunction(n))
          return n.call(this, d, r);
        if (c.isRegExp(n))
          return n.exec(d);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = ve(t), t) {
      const r = c.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || rt(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let d = !1;
    function o(i) {
      if (i = ve(i), i) {
        const s = c.findKey(r, i);
        s && (!n || rt(r, r[s], s, n)) && (delete r[s], d = !0);
      }
    }
    return c.isArray(t) ? t.forEach(o) : o(t), d;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, d = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || rt(this, this[o], o, t, !0)) && (delete this[o], d = !0);
    }
    return d;
  }
  normalize(t) {
    const n = this, r = {};
    return c.forEach(this, (d, o) => {
      const i = c.findKey(r, o);
      if (i) {
        n[i] = ke(d), delete n[o];
        return;
      }
      const s = t ? Vd(o) : String(o).trim();
      s !== o && delete n[o], n[s] = ke(d), r[s] = !0;
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
    const r = (this[Zt] = this[Zt] = {
      accessors: {}
    }).accessors, d = this.prototype;
    function o(i) {
      const s = ve(i);
      r[s] || (Wd(d, i), r[s] = !0);
    }
    return c.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
c.reduceDescriptors(Qe.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
c.freezeMethods(Qe);
const ne = Qe;
function dt(e, t) {
  const n = this || Tt, r = t || n, d = ne.from(r.headers);
  let o = r.data;
  return c.forEach(e, function(s) {
    o = s.call(n, o, d.normalize(), t ? t.status : void 0);
  }), d.normalize(), o;
}
function _r(e) {
  return !!(e && e.__CANCEL__);
}
function Ae(e, t, n) {
  x.call(this, e ?? "canceled", x.ERR_CANCELED, t, n), this.name = "CanceledError";
}
c.inherits(Ae, x, {
  __CANCEL__: !0
});
function Kd(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new x(
    "Request failed with status code " + n.status,
    [x.ERR_BAD_REQUEST, x.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
const Yd = Z.hasStandardBrowserEnv ? (
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
function qd(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function zd(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function mr(e, t) {
  return e && !qd(t) ? zd(e, t) : t;
}
const Jd = Z.hasStandardBrowserEnv ? (
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
function Xd(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Zd(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let d = 0, o = 0, i;
  return t = t !== void 0 ? t : 1e3, function(u) {
    const $ = Date.now(), l = r[o];
    i || (i = $), n[d] = u, r[d] = $;
    let a = o, y = 0;
    for (; a !== d; )
      y += n[a++], a = a % e;
    if (d = (d + 1) % e, d === o && (o = (o + 1) % e), $ - i < t)
      return;
    const p = l && $ - l;
    return p ? Math.round(y * 1e3 / p) : void 0;
  };
}
function Qt(e, t) {
  let n = 0;
  const r = Zd(50, 250);
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
const Qd = typeof XMLHttpRequest < "u", ei = Qd && function(e) {
  return new Promise(function(n, r) {
    let d = e.data;
    const o = ne.from(e.headers).normalize();
    let { responseType: i, withXSRFToken: s } = e, u;
    function $() {
      e.cancelToken && e.cancelToken.unsubscribe(u), e.signal && e.signal.removeEventListener("abort", u);
    }
    let l;
    if (c.isFormData(d)) {
      if (Z.hasStandardBrowserEnv || Z.hasStandardBrowserWebWorkerEnv)
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
    const y = mr(e.baseURL, e.url);
    a.open(e.method.toUpperCase(), cr(y, e.params, e.paramsSerializer), !0), a.timeout = e.timeout;
    function p() {
      if (!a)
        return;
      const f = ne.from(
        "getAllResponseHeaders" in a && a.getAllResponseHeaders()
      ), E = {
        data: !i || i === "text" || i === "json" ? a.responseText : a.response,
        status: a.status,
        statusText: a.statusText,
        headers: f,
        config: e,
        request: a
      };
      Kd(function(S) {
        n(S), $();
      }, function(S) {
        r(S), $();
      }, E), a = null;
    }
    if ("onloadend" in a ? a.onloadend = p : a.onreadystatechange = function() {
      !a || a.readyState !== 4 || a.status === 0 && !(a.responseURL && a.responseURL.indexOf("file:") === 0) || setTimeout(p);
    }, a.onabort = function() {
      a && (r(new x("Request aborted", x.ECONNABORTED, e, a)), a = null);
    }, a.onerror = function() {
      r(new x("Network Error", x.ERR_NETWORK, e, a)), a = null;
    }, a.ontimeout = function() {
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const E = e.transitional || fr;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), r(new x(
        v,
        E.clarifyTimeoutError ? x.ETIMEDOUT : x.ECONNABORTED,
        e,
        a
      )), a = null;
    }, Z.hasStandardBrowserEnv && (s && c.isFunction(s) && (s = s(e)), s || s !== !1 && Jd(y))) {
      const f = e.xsrfHeaderName && e.xsrfCookieName && Yd.read(e.xsrfCookieName);
      f && o.set(e.xsrfHeaderName, f);
    }
    d === void 0 && o.setContentType(null), "setRequestHeader" in a && c.forEach(o.toJSON(), function(v, E) {
      a.setRequestHeader(E, v);
    }), c.isUndefined(e.withCredentials) || (a.withCredentials = !!e.withCredentials), i && i !== "json" && (a.responseType = e.responseType), typeof e.onDownloadProgress == "function" && a.addEventListener("progress", Qt(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && a.upload && a.upload.addEventListener("progress", Qt(e.onUploadProgress)), (e.cancelToken || e.signal) && (u = (f) => {
      a && (r(!f || f.type ? new Ae(null, e, a) : f), a.abort(), a = null);
    }, e.cancelToken && e.cancelToken.subscribe(u), e.signal && (e.signal.aborted ? u() : e.signal.addEventListener("abort", u)));
    const _ = Xd(y);
    if (_ && Z.protocols.indexOf(_) === -1) {
      r(new x("Unsupported protocol " + _ + ":", x.ERR_BAD_REQUEST, e));
      return;
    }
    a.send(d || null);
  });
}, ft = {
  http: Pd,
  xhr: ei
};
c.forEach(ft, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const en = (e) => `- ${e}`, ti = (e) => c.isFunction(e) || e === null || e === !1, yr = {
  getAdapter: (e) => {
    e = c.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const d = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let i;
      if (r = n, !ti(n) && (r = ft[(i = String(n)).toLowerCase()], r === void 0))
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
` + o.map(en).join(`
`) : " " + en(o[0]) : "as no adapter specified";
      throw new x(
        "There is no suitable adapter to dispatch the request " + i,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ft
};
function it(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ae(null, e);
}
function tn(e) {
  return it(e), e.headers = ne.from(e.headers), e.data = dt.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yr.getAdapter(e.adapter || Tt.adapter)(e).then(function(r) {
    return it(e), r.data = dt.call(
      e,
      e.transformResponse,
      r
    ), r.headers = ne.from(r.headers), r;
  }, function(r) {
    return _r(r) || (it(e), r && r.response && (r.response.data = dt.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = ne.from(r.response.headers))), Promise.reject(r);
  });
}
const nn = (e) => e instanceof ne ? { ...e } : e;
function me(e, t) {
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
    headers: ($, l) => d(nn($), nn(l), !0)
  };
  return c.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const a = u[l] || d, y = a(e[l], t[l], l);
    c.isUndefined(y) && a !== s || (n[l] = y);
  }), n;
}
const gr = "1.6.8", At = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  At[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const rn = {};
At.transitional = function(t, n, r) {
  function d(o, i) {
    return "[Axios v" + gr + "] Transitional option '" + o + "'" + i + (r ? ". " + r : "");
  }
  return (o, i, s) => {
    if (t === !1)
      throw new x(
        d(i, " has been removed" + (n ? " in " + n : "")),
        x.ERR_DEPRECATED
      );
    return n && !rn[i] && (rn[i] = !0, console.warn(
      d(
        i,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, i, s) : !0;
  };
};
function ni(e, t, n) {
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
const ht = {
  assertOptions: ni,
  validators: At
}, ie = ht.validators;
class Ve {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Xt(),
      response: new Xt()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = me(this.defaults, n);
    const { transitional: r, paramsSerializer: d, headers: o } = n;
    r !== void 0 && ht.assertOptions(r, {
      silentJSONParsing: ie.transitional(ie.boolean),
      forcedJSONParsing: ie.transitional(ie.boolean),
      clarifyTimeoutError: ie.transitional(ie.boolean)
    }, !1), d != null && (c.isFunction(d) ? n.paramsSerializer = {
      serialize: d
    } : ht.assertOptions(d, {
      encode: ie.function,
      serialize: ie.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let i = o && c.merge(
      o.common,
      o[n.method]
    );
    o && c.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (_) => {
        delete o[_];
      }
    ), n.headers = ne.concat(i, o);
    const s = [];
    let u = !0;
    this.interceptors.request.forEach(function(f) {
      typeof f.runWhen == "function" && f.runWhen(n) === !1 || (u = u && f.synchronous, s.unshift(f.fulfilled, f.rejected));
    });
    const $ = [];
    this.interceptors.response.forEach(function(f) {
      $.push(f.fulfilled, f.rejected);
    });
    let l, a = 0, y;
    if (!u) {
      const _ = [tn.bind(this), void 0];
      for (_.unshift.apply(_, s), _.push.apply(_, $), y = _.length, l = Promise.resolve(n); a < y; )
        l = l.then(_[a++], _[a++]);
      return l;
    }
    y = s.length;
    let p = n;
    for (a = 0; a < y; ) {
      const _ = s[a++], f = s[a++];
      try {
        p = _(p);
      } catch (v) {
        f.call(this, v);
        break;
      }
    }
    try {
      l = tn.call(this, p);
    } catch (_) {
      return Promise.reject(_);
    }
    for (a = 0, y = $.length; a < y; )
      l = l.then($[a++], $[a++]);
    return l;
  }
  getUri(t) {
    t = me(this.defaults, t);
    const n = mr(t.baseURL, t.url);
    return cr(n, t.params, t.paramsSerializer);
  }
}
c.forEach(["delete", "get", "head", "options"], function(t) {
  Ve.prototype[t] = function(n, r) {
    return this.request(me(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
c.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, i, s) {
      return this.request(me(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: i
      }));
    };
  }
  Ve.prototype[t] = n(), Ve.prototype[t + "Form"] = n(!0);
});
const Me = Ve;
class Ft {
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
      r.reason || (r.reason = new Ae(o, i, s), n(r.reason));
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
      token: new Ft(function(d) {
        t = d;
      }),
      cancel: t
    };
  }
}
const ri = Ft;
function di(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function ii(e) {
  return c.isObject(e) && e.isAxiosError === !0;
}
const pt = {
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
Object.entries(pt).forEach(([e, t]) => {
  pt[t] = e;
});
const oi = pt;
function br(e) {
  const t = new Me(e), n = er(Me.prototype.request, t);
  return c.extend(n, Me.prototype, t, { allOwnKeys: !0 }), c.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(d) {
    return br(me(e, d));
  }, n;
}
const L = br(Tt);
L.Axios = Me;
L.CanceledError = Ae;
L.CancelToken = ri;
L.isCancel = _r;
L.VERSION = gr;
L.toFormData = Ze;
L.AxiosError = x;
L.Cancel = L.CanceledError;
L.all = function(t) {
  return Promise.all(t);
};
L.spread = di;
L.isAxiosError = ii;
L.mergeConfig = me;
L.AxiosHeaders = ne;
L.formToJSON = (e) => pr(c.isHTMLForm(e) ? new FormData(e) : e);
L.getAdapter = yr.getAdapter;
L.HttpStatusCode = oi;
L.default = L;
var Rt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function It(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vr = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Rt, function() {
    var n = 1e3, r = 6e4, d = 36e5, o = "millisecond", i = "second", s = "minute", u = "hour", $ = "day", l = "week", a = "month", y = "quarter", p = "year", _ = "date", f = "Invalid Date", v = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, E = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(N) {
      var b = ["th", "st", "nd", "rd"], g = N % 100;
      return "[" + N + (b[(g - 20) % 10] || b[g] || b[0]) + "]";
    } }, S = function(N, b, g) {
      var h = String(N);
      return !h || h.length >= b ? N : "" + Array(b + 1 - h.length).join(g) + N;
    }, G = { s: S, z: function(N) {
      var b = -N.utcOffset(), g = Math.abs(b), h = Math.floor(g / 60), m = g % 60;
      return (b <= 0 ? "+" : "-") + S(h, 2, "0") + ":" + S(m, 2, "0");
    }, m: function N(b, g) {
      if (b.date() < g.date())
        return -N(g, b);
      var h = 12 * (g.year() - b.year()) + (g.month() - b.month()), m = b.clone().add(h, a), w = g - m < 0, P = b.clone().add(h + (w ? -1 : 1), a);
      return +(-(h + (g - m) / (w ? m - P : P - m)) || 0);
    }, a: function(N) {
      return N < 0 ? Math.ceil(N) || 0 : Math.floor(N);
    }, p: function(N) {
      return { M: a, y: p, w: l, d: $, D: _, h: u, m: s, s: i, ms: o, Q: y }[N] || String(N || "").toLowerCase().replace(/s$/, "");
    }, u: function(N) {
      return N === void 0;
    } }, H = "en", B = {};
    B[H] = C;
    var W = "$isDayjsObject", Y = function(N) {
      return N instanceof le || !(!N || !N[W]);
    }, D = function N(b, g, h) {
      var m;
      if (!b)
        return H;
      if (typeof b == "string") {
        var w = b.toLowerCase();
        B[w] && (m = w), g && (B[w] = g, m = w);
        var P = b.split("-");
        if (!m && P.length > 1)
          return N(P[0]);
      } else {
        var A = b.name;
        B[A] = b, m = A;
      }
      return !h && m && (H = m), m || !h && H;
    }, I = function(N, b) {
      if (Y(N))
        return N.clone();
      var g = typeof b == "object" ? b : {};
      return g.date = N, g.args = arguments, new le(g);
    }, T = G;
    T.l = D, T.i = Y, T.w = function(N, b) {
      return I(N, { locale: b.$L, utc: b.$u, x: b.$x, $offset: b.$offset });
    };
    var le = function() {
      function N(g) {
        this.$L = D(g.locale, null, !0), this.parse(g), this.$x = this.$x || g.x || {}, this[W] = !0;
      }
      var b = N.prototype;
      return b.parse = function(g) {
        this.$d = function(h) {
          var m = h.date, w = h.utc;
          if (m === null)
            return /* @__PURE__ */ new Date(NaN);
          if (T.u(m))
            return /* @__PURE__ */ new Date();
          if (m instanceof Date)
            return new Date(m);
          if (typeof m == "string" && !/Z$/i.test(m)) {
            var P = m.match(v);
            if (P) {
              var A = P[2] - 1 || 0, F = (P[7] || "0").substring(0, 3);
              return w ? new Date(Date.UTC(P[1], A, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, F)) : new Date(P[1], A, P[3] || 1, P[4] || 0, P[5] || 0, P[6] || 0, F);
            }
          }
          return new Date(m);
        }(g), this.init();
      }, b.init = function() {
        var g = this.$d;
        this.$y = g.getFullYear(), this.$M = g.getMonth(), this.$D = g.getDate(), this.$W = g.getDay(), this.$H = g.getHours(), this.$m = g.getMinutes(), this.$s = g.getSeconds(), this.$ms = g.getMilliseconds();
      }, b.$utils = function() {
        return T;
      }, b.isValid = function() {
        return this.$d.toString() !== f;
      }, b.isSame = function(g, h) {
        var m = I(g);
        return this.startOf(h) <= m && m <= this.endOf(h);
      }, b.isAfter = function(g, h) {
        return I(g) < this.startOf(h);
      }, b.isBefore = function(g, h) {
        return this.endOf(h) < I(g);
      }, b.$g = function(g, h, m) {
        return T.u(g) ? this[h] : this.set(m, g);
      }, b.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, b.valueOf = function() {
        return this.$d.getTime();
      }, b.startOf = function(g, h) {
        var m = this, w = !!T.u(h) || h, P = T.p(g), A = function(se, K) {
          var de = T.w(m.$u ? Date.UTC(m.$y, K, se) : new Date(m.$y, K, se), m);
          return w ? de : de.endOf($);
        }, F = function(se, K) {
          return T.w(m.toDate()[se].apply(m.toDate("s"), (w ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(K)), m);
        }, k = this.$W, j = this.$M, q = this.$D, ce = "set" + (this.$u ? "UTC" : "");
        switch (P) {
          case p:
            return w ? A(1, 0) : A(31, 11);
          case a:
            return w ? A(1, j) : A(0, j + 1);
          case l:
            var oe = this.$locale().weekStart || 0, ge = (k < oe ? k + 7 : k) - oe;
            return A(w ? q - ge : q + (6 - ge), j);
          case $:
          case _:
            return F(ce + "Hours", 0);
          case u:
            return F(ce + "Minutes", 1);
          case s:
            return F(ce + "Seconds", 2);
          case i:
            return F(ce + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, b.endOf = function(g) {
        return this.startOf(g, !1);
      }, b.$set = function(g, h) {
        var m, w = T.p(g), P = "set" + (this.$u ? "UTC" : ""), A = (m = {}, m[$] = P + "Date", m[_] = P + "Date", m[a] = P + "Month", m[p] = P + "FullYear", m[u] = P + "Hours", m[s] = P + "Minutes", m[i] = P + "Seconds", m[o] = P + "Milliseconds", m)[w], F = w === $ ? this.$D + (h - this.$W) : h;
        if (w === a || w === p) {
          var k = this.clone().set(_, 1);
          k.$d[A](F), k.init(), this.$d = k.set(_, Math.min(this.$D, k.daysInMonth())).$d;
        } else
          A && this.$d[A](F);
        return this.init(), this;
      }, b.set = function(g, h) {
        return this.clone().$set(g, h);
      }, b.get = function(g) {
        return this[T.p(g)]();
      }, b.add = function(g, h) {
        var m, w = this;
        g = Number(g);
        var P = T.p(h), A = function(j) {
          var q = I(w);
          return T.w(q.date(q.date() + Math.round(j * g)), w);
        };
        if (P === a)
          return this.set(a, this.$M + g);
        if (P === p)
          return this.set(p, this.$y + g);
        if (P === $)
          return A(1);
        if (P === l)
          return A(7);
        var F = (m = {}, m[s] = r, m[u] = d, m[i] = n, m)[P] || 1, k = this.$d.getTime() + g * F;
        return T.w(k, this);
      }, b.subtract = function(g, h) {
        return this.add(-1 * g, h);
      }, b.format = function(g) {
        var h = this, m = this.$locale();
        if (!this.isValid())
          return m.invalidDate || f;
        var w = g || "YYYY-MM-DDTHH:mm:ssZ", P = T.z(this), A = this.$H, F = this.$m, k = this.$M, j = m.weekdays, q = m.months, ce = m.meridiem, oe = function(K, de, be, Re) {
          return K && (K[de] || K(h, w)) || be[de].slice(0, Re);
        }, ge = function(K) {
          return T.s(A % 12 || 12, K, "0");
        }, se = ce || function(K, de, be) {
          var Re = K < 12 ? "AM" : "PM";
          return be ? Re.toLowerCase() : Re;
        };
        return w.replace(E, function(K, de) {
          return de || function(be) {
            switch (be) {
              case "YY":
                return String(h.$y).slice(-2);
              case "YYYY":
                return T.s(h.$y, 4, "0");
              case "M":
                return k + 1;
              case "MM":
                return T.s(k + 1, 2, "0");
              case "MMM":
                return oe(m.monthsShort, k, q, 3);
              case "MMMM":
                return oe(q, k);
              case "D":
                return h.$D;
              case "DD":
                return T.s(h.$D, 2, "0");
              case "d":
                return String(h.$W);
              case "dd":
                return oe(m.weekdaysMin, h.$W, j, 2);
              case "ddd":
                return oe(m.weekdaysShort, h.$W, j, 3);
              case "dddd":
                return j[h.$W];
              case "H":
                return String(A);
              case "HH":
                return T.s(A, 2, "0");
              case "h":
                return ge(1);
              case "hh":
                return ge(2);
              case "a":
                return se(A, F, !0);
              case "A":
                return se(A, F, !1);
              case "m":
                return String(F);
              case "mm":
                return T.s(F, 2, "0");
              case "s":
                return String(h.$s);
              case "ss":
                return T.s(h.$s, 2, "0");
              case "SSS":
                return T.s(h.$ms, 3, "0");
              case "Z":
                return P;
            }
            return null;
          }(K) || P.replace(":", "");
        });
      }, b.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, b.diff = function(g, h, m) {
        var w, P = this, A = T.p(h), F = I(g), k = (F.utcOffset() - this.utcOffset()) * r, j = this - F, q = function() {
          return T.m(P, F);
        };
        switch (A) {
          case p:
            w = q() / 12;
            break;
          case a:
            w = q();
            break;
          case y:
            w = q() / 3;
            break;
          case l:
            w = (j - k) / 6048e5;
            break;
          case $:
            w = (j - k) / 864e5;
            break;
          case u:
            w = j / d;
            break;
          case s:
            w = j / r;
            break;
          case i:
            w = j / n;
            break;
          default:
            w = j;
        }
        return m ? w : T.a(w);
      }, b.daysInMonth = function() {
        return this.endOf(a).$D;
      }, b.$locale = function() {
        return B[this.$L];
      }, b.locale = function(g, h) {
        if (!g)
          return this.$L;
        var m = this.clone(), w = D(g, h, !0);
        return w && (m.$L = w), m;
      }, b.clone = function() {
        return T.w(this.$d, this);
      }, b.toDate = function() {
        return new Date(this.valueOf());
      }, b.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, b.toISOString = function() {
        return this.$d.toISOString();
      }, b.toString = function() {
        return this.$d.toUTCString();
      }, N;
    }(), Fe = le.prototype;
    return I.prototype = Fe, [["$ms", o], ["$s", i], ["$m", s], ["$H", u], ["$W", $], ["$M", a], ["$y", p], ["$D", _]].forEach(function(N) {
      Fe[N[1]] = function(b) {
        return this.$g(b, N[0], N[1]);
      };
    }), I.extend = function(N, b) {
      return N.$i || (N(b, le, I), N.$i = !0), I;
    }, I.locale = D, I.isDayjs = Y, I.unix = function(N) {
      return I(1e3 * N);
    }, I.en = B[H], I.Ls = B, I.p = {}, I;
  });
})(vr);
var si = vr.exports;
const ue = /* @__PURE__ */ It(si);
var wr = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Rt, function() {
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
        if (typeof f == "string" && (f = function(H) {
          H === void 0 && (H = "");
          var B = H.match(r);
          if (!B)
            return null;
          var W = ("" + B[0]).match(d) || ["-", 0, 0], Y = W[0], D = 60 * +W[1] + +W[2];
          return D === 0 ? 0 : Y === "+" ? D : -D;
        }(f), f === null))
          return this;
        var C = Math.abs(f) <= 16 ? 60 * f : f, S = this;
        if (v)
          return S.$offset = C, S.$u = f === 0, S;
        if (f !== 0) {
          var G = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
          (S = this.local().add(C + G, n)).$offset = C, S.$x.$localOffset = G;
        } else
          S = this.utc();
        return S;
      };
      var y = u.format;
      u.format = function(f) {
        var v = f || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
        return y.call(this, v);
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
      var p = u.toDate;
      u.toDate = function(f) {
        return f === "s" && this.$offset ? s(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : p.call(this);
      };
      var _ = u.diff;
      u.diff = function(f, v, E) {
        if (f && this.$u === f.$u)
          return _.call(this, f, v, E);
        var C = this.local(), S = s(f).local();
        return _.call(C, S, v, E);
      };
    };
  });
})(wr);
var ai = wr.exports;
const ui = /* @__PURE__ */ It(ai), $i = { version: 4, country_calling_codes: { 1: ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], 7: ["RU", "KZ"], 20: ["EG"], 27: ["ZA"], 30: ["GR"], 31: ["NL"], 32: ["BE"], 33: ["FR"], 34: ["ES"], 36: ["HU"], 39: ["IT", "VA"], 40: ["RO"], 41: ["CH"], 43: ["AT"], 44: ["GB", "GG", "IM", "JE"], 45: ["DK"], 46: ["SE"], 47: ["NO", "SJ"], 48: ["PL"], 49: ["DE"], 51: ["PE"], 52: ["MX"], 53: ["CU"], 54: ["AR"], 55: ["BR"], 56: ["CL"], 57: ["CO"], 58: ["VE"], 60: ["MY"], 61: ["AU", "CC", "CX"], 62: ["ID"], 63: ["PH"], 64: ["NZ"], 65: ["SG"], 66: ["TH"], 81: ["JP"], 82: ["KR"], 84: ["VN"], 86: ["CN"], 90: ["TR"], 91: ["IN"], 92: ["PK"], 93: ["AF"], 94: ["LK"], 95: ["MM"], 98: ["IR"], 211: ["SS"], 212: ["MA", "EH"], 213: ["DZ"], 216: ["TN"], 218: ["LY"], 220: ["GM"], 221: ["SN"], 222: ["MR"], 223: ["ML"], 224: ["GN"], 225: ["CI"], 226: ["BF"], 227: ["NE"], 228: ["TG"], 229: ["BJ"], 230: ["MU"], 231: ["LR"], 232: ["SL"], 233: ["GH"], 234: ["NG"], 235: ["TD"], 236: ["CF"], 237: ["CM"], 238: ["CV"], 239: ["ST"], 240: ["GQ"], 241: ["GA"], 242: ["CG"], 243: ["CD"], 244: ["AO"], 245: ["GW"], 246: ["IO"], 247: ["AC"], 248: ["SC"], 249: ["SD"], 250: ["RW"], 251: ["ET"], 252: ["SO"], 253: ["DJ"], 254: ["KE"], 255: ["TZ"], 256: ["UG"], 257: ["BI"], 258: ["MZ"], 260: ["ZM"], 261: ["MG"], 262: ["RE", "YT"], 263: ["ZW"], 264: ["NA"], 265: ["MW"], 266: ["LS"], 267: ["BW"], 268: ["SZ"], 269: ["KM"], 290: ["SH", "TA"], 291: ["ER"], 297: ["AW"], 298: ["FO"], 299: ["GL"], 350: ["GI"], 351: ["PT"], 352: ["LU"], 353: ["IE"], 354: ["IS"], 355: ["AL"], 356: ["MT"], 357: ["CY"], 358: ["FI", "AX"], 359: ["BG"], 370: ["LT"], 371: ["LV"], 372: ["EE"], 373: ["MD"], 374: ["AM"], 375: ["BY"], 376: ["AD"], 377: ["MC"], 378: ["SM"], 380: ["UA"], 381: ["RS"], 382: ["ME"], 383: ["XK"], 385: ["HR"], 386: ["SI"], 387: ["BA"], 389: ["MK"], 420: ["CZ"], 421: ["SK"], 423: ["LI"], 500: ["FK"], 501: ["BZ"], 502: ["GT"], 503: ["SV"], 504: ["HN"], 505: ["NI"], 506: ["CR"], 507: ["PA"], 508: ["PM"], 509: ["HT"], 590: ["GP", "BL", "MF"], 591: ["BO"], 592: ["GY"], 593: ["EC"], 594: ["GF"], 595: ["PY"], 596: ["MQ"], 597: ["SR"], 598: ["UY"], 599: ["CW", "BQ"], 670: ["TL"], 672: ["NF"], 673: ["BN"], 674: ["NR"], 675: ["PG"], 676: ["TO"], 677: ["SB"], 678: ["VU"], 679: ["FJ"], 680: ["PW"], 681: ["WF"], 682: ["CK"], 683: ["NU"], 685: ["WS"], 686: ["KI"], 687: ["NC"], 688: ["TV"], 689: ["PF"], 690: ["TK"], 691: ["FM"], 692: ["MH"], 850: ["KP"], 852: ["HK"], 853: ["MO"], 855: ["KH"], 856: ["LA"], 880: ["BD"], 886: ["TW"], 960: ["MV"], 961: ["LB"], 962: ["JO"], 963: ["SY"], 964: ["IQ"], 965: ["KW"], 966: ["SA"], 967: ["YE"], 968: ["OM"], 970: ["PS"], 971: ["AE"], 972: ["IL"], 973: ["BH"], 974: ["QA"], 975: ["BT"], 976: ["MN"], 977: ["NP"], 992: ["TJ"], 993: ["TM"], 994: ["AZ"], 995: ["GE"], 996: ["KG"], 998: ["UZ"] }, countries: { AC: ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], AD: ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], AE: ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], AF: ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], AG: ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], AI: ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], AL: ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], AM: ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], AO: ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], AR: ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], AS: ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], AT: ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], AU: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|7(?:[013-57-9]\\d|2[0-8]))\\d|3(?:(?:[0-3589]\\d|6[1-9]|7[0-35-9])\\d|4(?:[0-578]\\d|90)))\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|3\\d\\d)|(?:6[0-8]|[78]\\d)\\d{3}|9(?:[02-9]\\d{3}|1(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79])))))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], AW: ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], AX: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], AZ: ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], BA: ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], BB: ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], BD: ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|22"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], BE: ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], BF: ["226", "00", "[025-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[025-7]"]]]], BG: ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], BH: ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], BI: ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], BJ: ["229", "00", "[24-689]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-689]"]]]], BL: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:2[7-9]|3[3-7]|5[12]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], BM: ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], BN: ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], BO: ["591", "00(?:1\\d)?", "(?:[2-467]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]"]], ["(\\d{8})", "$1", ["[67]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], BQ: ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], BR: ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "(?:[1-46-9]\\d\\d|5(?:[0-46-9]\\d|5[0-46-9]))\\d{8}|[1-9]\\d{9}|[3589]\\d{8}|[34]\\d{7}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37)", "4(?:02|37)0|[34]00"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], BS: ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], BT: ["975", "00", "[17]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-68]|7[246]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|7"]]]], BW: ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], BY: ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], BZ: ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], CA: ["1", "011", "(?:[2-8]\\d|90)\\d{8}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|50|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|73)|90[25])[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:00|2[125-9]|33|44|66|77|88)|622)[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], CC: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CD: ["243", "00", "[189]\\d{8}|[1-68]\\d{6}", [7, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], CF: ["236", "00", "(?:[27]\\d{3}|8776)\\d{4}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[278]"]]]], CG: ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], CH: ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], CI: ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], CK: ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], CL: ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9[2-9]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-9]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], CM: ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], CN: ["86", "00|1(?:[12]\\d|79)\\d\\d00", "1[127]\\d{8,9}|2\\d{9}(?:\\d{2})?|[12]\\d{6,7}|86\\d{6}|(?:1[03-689]\\d|6)\\d{7,9}|(?:[3-579]\\d|8[0-57-9])\\d{6,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]", "(?:10|2[0-57-9])(?:10|9[56])", "10(?:10|9[56])|2[0-57-9](?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], CO: ["57", "00(?:4(?:[14]4|56)|[579])", "(?:60\\d\\d|9101)\\d{6}|(?:1\\d|3)\\d{9}", [10, 11], [["(\\d{3})(\\d{7})", "$1 $2", ["6"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|91"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], CR: ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], CU: ["53", "119", "[27]\\d{6,7}|[34]\\d{5,7}|63\\d{6}|(?:5|8\\d\\d)\\d{7}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], CV: ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], CW: ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], CX: ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:(?:79|94)[01]|83[0-389])\\d{5}|4(?:[0-3]\\d|4[047-9]|5[0-25-9]|6[0-36-9]|7[02-8]|8[0-24-9]|9[0-37-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], CY: ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], CZ: ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], DE: ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|31)"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], DJ: ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], DK: ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], DM: ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], DO: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], DZ: ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], EC: ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], EE: ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], EG: ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], EH: ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, "528[89]"], ER: ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], ES: ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], ET: ["251", "00", "(?:11|[2-579]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-579]"], "0$1"]], "0"], FI: ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:1[3-79]|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], FJ: ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], FK: ["500", "00", "[2-7]\\d{4}", [5]], FM: ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], FO: ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], FR: ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], GA: ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], GB: ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0235])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|50))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-2]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], GD: ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], GE: ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], GF: ["594", "00", "[56]94\\d{6}|(?:80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[56]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], GG: ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], GH: ["233", "00", "(?:[235]\\d{3}|800)\\d{5}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[235]"], "0$1"]], "0"], GI: ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], GL: ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], GM: ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], GN: ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], GP: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["590(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], GQ: ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], GR: ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], GT: ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], GU: ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], GW: ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], GY: ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], HK: ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], HN: ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], HR: ["385", "00", "(?:[24-69]\\d|3[0-79])\\d{7}|80\\d{5,7}|[1-79]\\d{7}|6\\d{5,6}", [6, 7, 8, 9], [["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], HT: ["509", "00", "(?:[2-489]\\d|55)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], HU: ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], ID: ["62", "00[89]", "(?:(?:00[1-9]|8\\d)\\d{4}|[1-36])\\d{6}|00\\d{10}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], IE: ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], IL: ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], IM: ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0", "1624$1", 0, "74576|(?:16|7[56])24"], IN: ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|4[47]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67|72)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:2[14]|3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31|4[47])|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:(?:2[14]|5[15])[2-6]|3171|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|(?:74[47]|8(?:16|2[014]|3[126]|6[136]|7[78]|83))(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|28|3[129]|4[1-35689]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1(?:[013-8]|9[6-9])|28[6-8]|3(?:17|2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|83)|73179|807(?:1|9[1-3])|(?:1552|6(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[124-6])\\d|7(?:1(?:[013-8]\\d|9[6-9])|28[6-8]|3(?:2[0-49]|9[2-57])|4(?:1[2-4]|[29][0-7]|3[0-8]|[56]\\d|8[0-24-7])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["1(?:6|8[06])", "1(?:6|8[06]0)"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], IO: ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], IQ: ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], IR: ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], IS: ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], IT: ["39", "00", "0\\d{5,10}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, [["0669[0-79]\\d{1,6}|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[1-356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], 0, 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], JE: ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], JM: ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], JO: ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], JP: ["81", "010", "00[1-9]\\d{6,14}|[257-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["[36]|4(?:2[09]|7[01])", "[36]|4(?:2(?:0|9[02-69])|7(?:0[019]|1))"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[257-9]"], "0$1"]], "0", 0, "(000[259]\\d{6})$|(?:(?:003768)0?)|0", "$1"], KE: ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], KG: ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], KH: ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], KI: ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], KM: ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], KN: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], KP: ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], KR: ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], KW: ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], KY: ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], KZ: ["7", "810", "(?:33622|8\\d{8})\\d{5}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "33|7", 0, "8~10"], LA: ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["30[013-9]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], LB: ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-7]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], LC: ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], LI: ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], LK: ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], LR: ["231", "00", "(?:[245]\\d|33|77|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], LS: ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], LT: ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(8-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "8 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(8-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(8-$1)", 1]], "8", 0, "[08]"], LU: ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["2(?:[0367]|4[3-8])"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["2(?:[0367]|4[3-8])"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], LV: ["371", "00", "(?:[268]\\d|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[269]|8[01]"]]]], LY: ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], MA: ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[45]"], "0$1"], ["(\\d{4})(\\d{5})", "$1-$2", ["5(?:2[2-46-9]|3[3-9]|9)|8(?:0[89]|92)"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8"], "0$1"], ["(\\d{3})(\\d{6})", "$1-$2", ["[5-7]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["5(?:2(?:[0-25-79]\\d|3[1-578]|4[02-46-8]|8[0235-7])|3(?:[0-47]\\d|5[02-9]|6[02-8]|8[014-9]|9[3-9])|(?:4[067]|5[03])\\d)\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[0167]\\d|2[0-4]|5[01]|8[0-3]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], MC: ["377", "00", "(?:[3489]|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["6"], "0$1"]], "0"], MD: ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], ME: ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], MF: ["590", "00", "590\\d{6}|(?:69|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["590(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)\\d{4}"], ["69(?:0\\d\\d|1(?:2[2-9]|3[0-5])|4(?:0[89]|1[2-6]|9\\d)|6(?:1[016-9]|5[0-4]|[67]\\d))\\d{4}"], ["80[0-5]\\d{6}"], 0, 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-5])\\d{4}"]]], MG: ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], MH: ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], MK: ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], ML: ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], MM: ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["[45]|6(?:0[23]|[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-6]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], MN: ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[12]1"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], MO: ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], MP: ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], MQ: ["596", "00", "596\\d{6}|(?:69|80|9\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[569]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], MR: ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], MS: ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], MT: ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], MU: ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], MV: ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], MW: ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], MX: ["52", "0[09]", "1(?:(?:22|44|7[27]|87|99)[1-9]|65[0-689])\\d{7}|(?:1(?:[01]\\d|2[13-9]|[35][1-9]|4[0-35-9]|6[0-46-9]|7[013-689]|8[1-69]|9[1-8])|[2-9]\\d)\\d{8}", [10, 11], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"], 0, 1], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 $3 $4", ["1(?:33|5[56]|81)"], 0, 1], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 $3 $4", ["1"], 0, 1]], "01", 0, "0(?:[12]|4[45])|1", 0, 0, 0, 0, "00"], MY: ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], MZ: ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], NA: ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], NC: ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], NE: ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[047]"]]]], NF: ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], NG: ["234", "009", "2[0-24-9]\\d{8}|[78]\\d{10,13}|[7-9]\\d{9}|[1-9]\\d{7}|[124-7]\\d{6}", [7, 8, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["78"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|9(?:0[3-9]|[1-9])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[3-6]|7(?:0[0-689]|[1-79])|8[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], NI: ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], NL: ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], NO: ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], NP: ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], NR: ["674", "00", "(?:444|(?:55|8\\d)\\d|666)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-68]"]]]], NU: ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], NZ: ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], OM: ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], PA: ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], PE: ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], PF: ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], PG: ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], PH: ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], PK: ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], PL: ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], PM: ["508", "00", "[45]\\d{5}|(?:708|80\\d)\\d{6}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[45]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], PR: ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], PS: ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], PT: ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], PW: ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], PY: ["595", "00", "59\\d{4,6}|9\\d{5,10}|(?:[2-46-8]\\d|5[0-8])\\d{4,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[26]1|3[289]|4[1246-8]|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], QA: ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[16]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], RE: ["262", "00", "(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2689]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["26(?:2\\d\\d|3(?:0\\d|1[0-6]))\\d{4}"], ["69(?:2\\d\\d|3(?:[06][0-6]|1[013]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-5]|76(?:2[27]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], RO: ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], RS: ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], RU: ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "3[04-689]|[489]", 0, "8~10"], RW: ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], SA: ["966", "00", "92\\d{7}|(?:[15]|8\\d)\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["81"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], SB: ["677", "0[01]", "(?:[1-6]|[7-9]\\d\\d)\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], SC: ["248", "010|0[0-2]", "800\\d{4}|(?:[249]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], SD: ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], SE: ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], SG: ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], SH: ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], SI: ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], SJ: ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], SK: ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1/$2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1/$2 $3 $4", ["[3-5]"], "0$1"]], "0"], SL: ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], SM: ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], SN: ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], SO: ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d)(\\d{7})", "$1 $2", ["(?:2|90)4|[67]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[348]|64|79|90"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|6[0-35-9]|77|9[2-9]"]]], "0"], SR: ["597", "00", "(?:[2-5]|68|[78]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-8]"]]]], SS: ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], ST: ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], SV: ["503", "00", "[267]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[267]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], SX: ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], SY: ["963", "00", "[1-39]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-5]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1", 1]], "0"], SZ: ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], TA: ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], TC: ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], TD: ["235", "00|16", "(?:22|[69]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2679]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], TG: ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], TH: ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], TJ: ["992", "810", "[0-57-9]\\d{8}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3[1-5]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[0-57-9]"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], TK: ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], TL: ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], TM: ["993", "810", "[1-6]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["6"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], TN: ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], TO: ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], TR: ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5(?:[0-59]|61)", "5(?:[0-59]|61[06])", "5(?:[0-59]|61[06]1)"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], TT: ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], TV: ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], TW: ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[258]0"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-47-9])|7[1-9]", "[23568]|4(?:0[2-48]|[1-47-9])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], TZ: ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], UA: ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], UG: ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], US: ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:5056(?:[0-35-9]\\d|4[468])|7302[0-3]\\d)\\d{4}|(?:472[24]|505[2-57-9]|7306|983[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[149]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013569]|3[0-24679]|4[167]|5[0-2]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-47-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-29])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[1247]|4[037]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[068]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-389]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|33|44|66|77|88)[2-9]\\d{6}"]]], UY: ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|(?:[49]\\d|80)\\d{5}", [6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], UZ: ["998", "810", "(?:20|33|[5-79]\\d|88)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], VA: ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11], 0, 0, 0, 0, 0, 0, "06698"], VC: ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], VE: ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], VG: ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], VI: ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], VN: ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], VU: ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], WF: ["681", "00", "(?:40|72)\\d{4}|8\\d{5}(?:\\d{3})?", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[478]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], WS: ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], XK: ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], YE: ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], YT: ["262", "00", "(?:80|9\\d)\\d{7}|(?:26|63)9\\d{6}", [9], 0, "0", 0, 0, 0, 0, 0, [["269(?:0[0-467]|15|5[0-4]|6\\d|[78]0)\\d{4}"], ["639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], ZA: ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], ZM: ["260", "00", "800\\d{6}|(?:21|63|[79]\\d)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[79]"], "0$1"]], "0"], ZW: ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, nonGeographic: { 800: ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], 808: ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], 870: ["870", 0, "7\\d{11}|[35-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[35-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"]]], 878: ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], 881: ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], 882: ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|51"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|50\\d{3})\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, 0, 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], 883: ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], 888: ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], 979: ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };
function li(e, t) {
  var n = Array.prototype.slice.call(t);
  return n.push($i), e.apply(this, n);
}
function _t(e) {
  "@babel/helpers - typeof";
  return _t = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, _t(e);
}
function dn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function ci(e, t, n) {
  return t && dn(e.prototype, t), n && dn(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
function fi(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function hi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), t && Ne(e, t);
}
function pi(e) {
  var t = Er();
  return function() {
    var r = Ce(e), d;
    if (t) {
      var o = Ce(this).constructor;
      d = Reflect.construct(r, arguments, o);
    } else
      d = r.apply(this, arguments);
    return _i(this, d);
  };
}
function _i(e, t) {
  if (t && (_t(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Or(e);
}
function Or(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function mt(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return mt = function(r) {
    if (r === null || !mi(r))
      return r;
    if (typeof r != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(r))
        return t.get(r);
      t.set(r, d);
    }
    function d() {
      return Ue(r, arguments, Ce(this).constructor);
    }
    return d.prototype = Object.create(r.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), Ne(d, r);
  }, mt(e);
}
function Ue(e, t, n) {
  return Er() ? Ue = Reflect.construct : Ue = function(d, o, i) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(d, s), $ = new u();
    return i && Ne($, i.prototype), $;
  }, Ue.apply(null, arguments);
}
function Er() {
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
function mi(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ne(e, t) {
  return Ne = Object.setPrototypeOf || function(r, d) {
    return r.__proto__ = d, r;
  }, Ne(e, t);
}
function Ce(e) {
  return Ce = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ce(e);
}
var ee = /* @__PURE__ */ function(e) {
  hi(n, e);
  var t = pi(n);
  function n(r) {
    var d;
    return fi(this, n), d = t.call(this, r), Object.setPrototypeOf(Or(d), n.prototype), d.name = d.constructor.name, d;
  }
  return ci(n);
}(/* @__PURE__ */ mt(Error)), Dt = 2, yi = 17, gi = 3, X = "0-9０-９٠-٩۰-۹", bi = "-‐-―−ー－", vi = "／/", wi = "．.", Oi = "  ­​⁠　", Ei = "()（）［］\\[\\]", Pi = "~⁓∼～", We = "".concat(bi).concat(vi).concat(wi).concat(Oi).concat(Ei).concat(Pi), Lt = "+＋";
function on(e, t) {
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
var Ni = {}.constructor;
function Be(e) {
  return e != null && e.constructor === Ni;
}
function yt(e) {
  "@babel/helpers - typeof";
  return yt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, yt(e);
}
function et(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function sn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function tt(e, t, n) {
  return t && sn(e.prototype, t), n && sn(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var Ci = "1.2.0", Si = "1.7.35", an = " ext. ", xi = /^\d+$/, V = /* @__PURE__ */ function() {
  function e(t) {
    et(this, e), Ri(t), this.metadata = t, Pr.call(this, t);
  }
  return tt(e, [{
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
      if (n && xi.test(n) && (r = n, n = null), n && n !== "001") {
        if (!this.hasCountry(n))
          throw new Error("Unknown country: ".concat(n));
        this.numberingPlan = new un(this.getCountryMetadata(n), this);
      } else if (r) {
        if (!this.hasCallingCode(r))
          throw new Error("Unknown calling code: ".concat(r));
        this.numberingPlan = new un(this.getNumberingPlanMetadata(r), this);
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
}(), un = /* @__PURE__ */ function() {
  function e(t, n) {
    et(this, e), this.globalMetadataObject = n, this.metadata = t, Pr.call(this, n.metadata);
  }
  return tt(e, [{
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
        return new Ti(d, n);
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
      if (this.hasTypes() && $n(this.types(), n))
        return new Fi($n(this.types(), n), this);
    }
  }, {
    key: "ext",
    value: function() {
      return this.v1 || this.v2 ? an : this.metadata[13] || an;
    }
  }]), e;
}(), Ti = /* @__PURE__ */ function() {
  function e(t, n) {
    et(this, e), this._format = t, this.metadata = n;
  }
  return tt(e, [{
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
      !Ai.test(this.nationalPrefixFormattingRule()));
    }
  }, {
    key: "internationalFormat",
    value: function() {
      return this._format[5] || this.format();
    }
  }]), e;
}(), Ai = /^\(?\$1\)?$/, Fi = /* @__PURE__ */ function() {
  function e(t, n) {
    et(this, e), this.type = t, this.metadata = n;
  }
  return tt(e, [{
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
function $n(e, t) {
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
function Ri(e) {
  if (!e)
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  if (!Be(e) || !Be(e.countries))
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(Be(e) ? "an object of shape: { " + Object.keys(e).join(", ") + " }" : "a " + Ii(e) + ": " + e, "."));
}
var Ii = function(t) {
  return yt(t);
};
function kt(e, t) {
  if (t = new V(t), t.hasCountry(e))
    return t.country(e).countryCallingCode();
  throw new Error("Unknown country: ".concat(e));
}
function Di(e, t) {
  return t.countries.hasOwnProperty(e);
}
function Pr(e) {
  var t = e.version;
  typeof t == "number" ? (this.v1 = t === 1, this.v2 = t === 2, this.v3 = t === 3, this.v4 = t === 4) : t ? on(t, Ci) === -1 ? this.v2 = !0 : on(t, Si) === -1 ? this.v3 = !0 : this.v4 = !0 : this.v1 = !0;
}
var Li = ";ext=", fe = function(t) {
  return "([".concat(X, "]{1,").concat(t, "})");
};
function Nr(e) {
  var t = "20", n = "15", r = "9", d = "6", o = "[  \\t,]*", i = "[:\\.．]?[  \\t,-]*", s = "#?", u = "(?:e?xt(?:ensi(?:ó?|ó))?n?|ｅ?ｘｔｎ?|доб|anexo)", $ = "(?:[xｘ#＃~～]|int|ｉｎｔ)", l = "[- ]+", a = "[  \\t]*", y = "(?:,{2}|;)", p = Li + fe(t), _ = o + u + i + fe(t) + s, f = o + $ + i + fe(r) + s, v = l + fe(d) + "#", E = a + y + i + fe(n) + s, C = a + "(?:,)+" + i + fe(r) + s;
  return p + "|" + _ + "|" + f + "|" + v + "|" + E + "|" + C;
}
var ki = "[" + X + "]{" + Dt + "}", Mi = "[" + Lt + "]{0,1}(?:[" + We + "]*[" + X + "]){3,}[" + We + X + "]*", Ui = new RegExp("^[" + Lt + "]{0,1}(?:[" + We + "]*[" + X + "]){1,2}$", "i"), Bi = Mi + // Phone number extensions
"(?:" + Nr() + ")?", ji = new RegExp(
  // Either a short two-digit-only phone number
  "^" + ki + "$|^" + Bi + "$",
  "i"
);
function Hi(e) {
  return e.length >= Dt && ji.test(e);
}
function Gi(e) {
  return Ui.test(e);
}
var ln = new RegExp("(?:" + Nr() + ")$", "i");
function Vi(e) {
  var t = e.search(ln);
  if (t < 0)
    return {};
  for (var n = e.slice(0, t), r = e.match(ln), d = 1; d < r.length; ) {
    if (r[d])
      return {
        number: n,
        ext: r[d]
      };
    d++;
  }
}
var Wi = {
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
function Ki(e) {
  return Wi[e];
}
function Yi(e, t) {
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
function fn(e) {
  for (var t = "", n = Yi(e.split("")), r; !(r = n()).done; ) {
    var d = r.value;
    t += zi(d, t) || "";
  }
  return t;
}
function zi(e, t, n) {
  if (e === "+") {
    if (t) {
      typeof n == "function" && n("end");
      return;
    }
    return "+";
  }
  return Ki(e);
}
function Ji(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Xi(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Xi(e, t) {
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
function Zi(e, t) {
  for (var n = e.slice(), r = Ji(t), d; !(d = r()).done; ) {
    var o = d.value;
    e.indexOf(o) < 0 && n.push(o);
  }
  return n.sort(function(i, s) {
    return i - s;
  });
}
function Mt(e, t) {
  return Cr(e, void 0, t);
}
function Cr(e, t, n) {
  var r = n.type(t), d = r && r.possibleLengths() || n.possibleLengths();
  if (!d)
    return "IS_POSSIBLE";
  if (t === "FIXED_LINE_OR_MOBILE") {
    if (!n.type("FIXED_LINE"))
      return Cr(e, "MOBILE", n);
    var o = n.type("MOBILE");
    o && (d = Zi(d, o.possibleLengths()));
  } else if (t && !r)
    return "INVALID_LENGTH";
  var i = e.length, s = d[0];
  return s === i ? "IS_POSSIBLE" : s > i ? "TOO_SHORT" : d[d.length - 1] < i ? "TOO_LONG" : d.indexOf(i, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}
function Qi(e, t, n) {
  if (t === void 0 && (t = {}), n = new V(n), t.v2) {
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
    return Sr(e.phone || e.nationalNumber, n);
  if (e.countryCallingCode && n.isNonGeographicCallingCode(e.countryCallingCode))
    return !0;
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function Sr(e, t) {
  switch (Mt(e, t)) {
    case "IS_POSSIBLE":
      return !0;
    default:
      return !1;
  }
}
function re(e, t) {
  return e = e || "", new RegExp("^(?:" + t + ")$").test(e);
}
function eo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = to(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function to(e, t) {
  if (e) {
    if (typeof e == "string")
      return pn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return pn(e, t);
  }
}
function pn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var no = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function Ut(e, t, n) {
  if (t = t || {}, !(!e.country && !e.countryCallingCode)) {
    n = new V(n), n.selectNumberingPlan(e.country, e.countryCallingCode);
    var r = t.v2 ? e.nationalNumber : e.phone;
    if (re(r, n.nationalNumberPattern())) {
      if (ot(r, "FIXED_LINE", n))
        return n.type("MOBILE") && n.type("MOBILE").pattern() === "" || !n.type("MOBILE") || ot(r, "MOBILE", n) ? "FIXED_LINE_OR_MOBILE" : "FIXED_LINE";
      for (var d = eo(no), o; !(o = d()).done; ) {
        var i = o.value;
        if (ot(r, i, n))
          return i;
      }
    }
  }
}
function ot(e, t, n) {
  return t = n.type(t), !t || !t.pattern() || t.possibleLengths() && t.possibleLengths().indexOf(e.length) < 0 ? !1 : re(e, t.pattern());
}
function ro(e, t, n) {
  if (t = t || {}, n = new V(n), n.selectNumberingPlan(e.country, e.countryCallingCode), n.hasTypes())
    return Ut(e, t, n.metadata) !== void 0;
  var r = t.v2 ? e.nationalNumber : e.phone;
  return re(r, n.nationalNumberPattern());
}
function io(e, t, n) {
  var r = new V(n), d = r.getCountryCodesForCallingCode(e);
  return d ? d.filter(function(o) {
    return oo(t, o, n);
  }) : [];
}
function oo(e, t, n) {
  var r = new V(n);
  return r.selectNumberingPlan(t), r.numberingPlan.possibleLengths().indexOf(e.length) >= 0;
}
function so(e) {
  return e.replace(new RegExp("[".concat(We, "]+"), "g"), " ").trim();
}
var ao = /(\$\d)/;
function uo(e, t, n) {
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
    d && t.nationalPrefixFormattingRule() ? t.format().replace(ao, t.nationalPrefixFormattingRule()) : t.format()
  ));
  return r ? so(o) : o;
}
var $o = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function lo(e, t, n) {
  var r = new V(n);
  if (r.selectNumberingPlan(e, t), r.defaultIDDPrefix())
    return r.defaultIDDPrefix();
  if ($o.test(r.IDDPrefix()))
    return r.IDDPrefix();
}
function co(e) {
  var t = e.number, n = e.ext;
  if (!t)
    return "";
  if (t[0] !== "+")
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  return "tel:".concat(t).concat(n ? ";ext=" + n : "");
}
function fo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = ho(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ho(e, t) {
  if (e) {
    if (typeof e == "string")
      return _n(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return _n(e, t);
  }
}
function _n(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function mn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function yn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? mn(Object(n), !0).forEach(function(r) {
      po(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : mn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function po(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var gn = {
  formatExtension: function(t, n, r) {
    return "".concat(t).concat(r.ext()).concat(n);
  }
};
function _o(e, t, n, r) {
  if (n ? n = yn(yn({}, gn), n) : n = gn, r = new V(r), e.country && e.country !== "001") {
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
      return o ? (i = Ke(o, e.carrierCode, "NATIONAL", r, n), st(i, e.ext, r, n.formatExtension)) : "";
    case "INTERNATIONAL":
      return o ? (i = Ke(o, null, "INTERNATIONAL", r, n), i = "+".concat(d, " ").concat(i), st(i, e.ext, r, n.formatExtension)) : "+".concat(d);
    case "E.164":
      return "+".concat(d).concat(o);
    case "RFC3966":
      return co({
        number: "+".concat(d).concat(o),
        ext: e.ext
      });
    case "IDD":
      if (!n.fromCountry)
        return;
      var s = yo(o, e.carrierCode, d, n.fromCountry, r);
      return st(s, e.ext, r, n.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(t, '"'));
  }
}
function Ke(e, t, n, r, d) {
  var o = mo(r.formats(), e);
  return o ? uo(e, o, {
    useInternationalFormat: n === "INTERNATIONAL",
    withNationalPrefix: !(o.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && d && d.nationalPrefix === !1),
    carrierCode: t,
    metadata: r
  }) : e;
}
function mo(e, t) {
  for (var n = fo(e), r; !(r = n()).done; ) {
    var d = r.value;
    if (d.leadingDigitsPatterns().length > 0) {
      var o = d.leadingDigitsPatterns()[d.leadingDigitsPatterns().length - 1];
      if (t.search(o) !== 0)
        continue;
    }
    if (re(t, d.pattern()))
      return d;
  }
}
function st(e, t, n, r) {
  return t ? r(e, t, n) : e;
}
function yo(e, t, n, r, d) {
  var o = kt(r, d.metadata);
  if (o === n) {
    var i = Ke(e, t, "NATIONAL", d);
    return n === "1" ? n + " " + i : i;
  }
  var s = lo(r, void 0, d.metadata);
  if (s)
    return "".concat(s, " ").concat(n, " ").concat(Ke(e, null, "INTERNATIONAL", d));
}
function bn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function vn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? bn(Object(n), !0).forEach(function(r) {
      go(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : bn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function go(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function bo(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function wn(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function vo(e, t, n) {
  return t && wn(e.prototype, t), n && wn(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
}
var wo = /* @__PURE__ */ function() {
  function e(t, n, r) {
    if (bo(this, e), !t)
      throw new TypeError("`country` or `countryCallingCode` not passed");
    if (!n)
      throw new TypeError("`nationalNumber` not passed");
    if (!r)
      throw new TypeError("`metadata` not passed");
    var d = Eo(t, r), o = d.country, i = d.countryCallingCode;
    this.country = o, this.countryCallingCode = i, this.nationalNumber = n, this.number = "+" + this.countryCallingCode + this.nationalNumber, this.getMetadata = function() {
      return r;
    };
  }
  return vo(e, [{
    key: "setExt",
    value: function(n) {
      this.ext = n;
    }
  }, {
    key: "getPossibleCountries",
    value: function() {
      return this.country ? [this.country] : io(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function() {
      return Qi(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function() {
      return ro(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function() {
      var n = new V(this.getMetadata());
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
      return Ut(this, {
        v2: !0
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function(n, r) {
      return _o(this, n, r ? vn(vn({}, r), {}, {
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
}(), Oo = function(t) {
  return /^[A-Z]{2}$/.test(t);
};
function Eo(e, t) {
  var n, r, d = new V(t);
  return Oo(e) ? (n = e, d.selectNumberingPlan(n), r = d.countryCallingCode()) : r = e, {
    country: n,
    countryCallingCode: r
  };
}
var Po = new RegExp("([" + X + "])");
function No(e, t, n, r) {
  if (t) {
    var d = new V(r);
    d.selectNumberingPlan(t, n);
    var o = new RegExp(d.IDDPrefix());
    if (e.search(o) === 0) {
      e = e.slice(e.match(o)[0].length);
      var i = e.match(Po);
      if (!(i && i[1] != null && i[1].length > 0 && i[1] === "0"))
        return e;
    }
  }
}
function Co(e, t) {
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
function gt(e, t) {
  var n = Co(e, t), r = n.carrierCode, d = n.nationalNumber;
  if (d !== e) {
    if (!So(e, d, t))
      return {
        nationalNumber: e
      };
    if (t.possibleLengths() && !xo(d, t))
      return {
        nationalNumber: e
      };
  }
  return {
    nationalNumber: d,
    carrierCode: r
  };
}
function So(e, t, n) {
  return !(re(e, n.nationalNumberPattern()) && !re(t, n.nationalNumberPattern()));
}
function xo(e, t) {
  switch (Mt(e, t)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return !1;
    default:
      return !0;
  }
}
function To(e, t, n, r) {
  var d = t ? kt(t, r) : n;
  if (e.indexOf(d) === 0) {
    r = new V(r), r.selectNumberingPlan(t, n);
    var o = e.slice(d.length), i = gt(o, r), s = i.nationalNumber, u = gt(e, r), $ = u.nationalNumber;
    if (!re($, r.nationalNumberPattern()) && re(s, r.nationalNumberPattern()) || Mt($, r) === "TOO_LONG")
      return {
        countryCallingCode: d,
        number: o
      };
  }
  return {
    number: e
  };
}
function Ao(e, t, n, r) {
  if (!e)
    return {};
  var d;
  if (e[0] !== "+") {
    var o = No(e, t, n, r);
    if (o && o !== e)
      d = !0, e = "+" + o;
    else {
      if (t || n) {
        var i = To(e, t, n, r), s = i.countryCallingCode, u = i.number;
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
  r = new V(r);
  for (var $ = 2; $ - 1 <= gi && $ <= e.length; ) {
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
function Fo(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n)
    return (n = n.call(e)).next.bind(n);
  if (Array.isArray(e) || (n = Ro(e)) || t && e && typeof e.length == "number") {
    n && (e = n);
    var r = 0;
    return function() {
      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ro(e, t) {
  if (e) {
    if (typeof e == "string")
      return On(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return On(e, t);
  }
}
function On(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Io(e, t) {
  var n = t.countries, r = t.defaultCountry, d = t.metadata;
  d = new V(d);
  for (var o = [], i = Fo(n), s; !(s = i()).done; ) {
    var u = s.value;
    if (d.country(u), d.leadingDigits()) {
      if (e && e.search(d.leadingDigits()) === 0)
        return u;
    } else if (Ut({
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
var Do = !1;
function Lo(e, t) {
  var n = t.nationalNumber, r = t.defaultCountry, d = t.metadata;
  if (Do && d.isNonGeographicCallingCode(e))
    return "001";
  var o = d.getCountryCodesForCallingCode(e);
  if (o)
    return o.length === 1 ? o[0] : Io(n, {
      countries: o,
      defaultCountry: r,
      metadata: d.metadata
    });
}
var xr = "+", ko = "[\\-\\.\\(\\)]?", En = "([" + X + "]|" + ko + ")", Mo = "^\\" + xr + En + "*[" + X + "]" + En + "*$", Uo = new RegExp(Mo, "g"), bt = X, Bo = "[" + bt + "]+((\\-)*[" + bt + "])*", jo = "a-zA-Z", Ho = "[" + jo + "]+((\\-)*[" + bt + "])*", Go = "^(" + Bo + "\\.)*" + Ho + "\\.?$", Vo = new RegExp(Go, "g"), Pn = "tel:", vt = ";phone-context=", Wo = ";isub=";
function Ko(e) {
  var t = e.indexOf(vt);
  if (t < 0)
    return null;
  var n = t + vt.length;
  if (n >= e.length)
    return "";
  var r = e.indexOf(";", n);
  return r >= 0 ? e.substring(n, r) : e.substring(n);
}
function Yo(e) {
  return e === null ? !0 : e.length === 0 ? !1 : Uo.test(e) || Vo.test(e);
}
function qo(e, t) {
  var n = t.extractFormattedPhoneNumber, r = Ko(e);
  if (!Yo(r))
    throw new ee("NOT_A_NUMBER");
  var d;
  if (r === null)
    d = n(e) || "";
  else {
    d = "", r.charAt(0) === xr && (d += r);
    var o = e.indexOf(Pn), i;
    o >= 0 ? i = o + Pn.length : i = 0;
    var s = e.indexOf(vt);
    d += e.substring(i, s);
  }
  var u = d.indexOf(Wo);
  if (u > 0 && (d = d.substring(0, u)), d !== "")
    return d;
}
var zo = 250, Jo = new RegExp("[" + Lt + X + "]"), Xo = new RegExp("[^" + X + "#]+$");
function Zo(e, t, n) {
  if (t = t || {}, n = new V(n), t.defaultCountry && !n.hasCountry(t.defaultCountry))
    throw t.v2 ? new ee("INVALID_COUNTRY") : new Error("Unknown country: ".concat(t.defaultCountry));
  var r = e0(e, t.v2, t.extract), d = r.number, o = r.ext, i = r.error;
  if (!d) {
    if (t.v2)
      throw i === "TOO_SHORT" ? new ee("TOO_SHORT") : new ee("NOT_A_NUMBER");
    return {};
  }
  var s = n0(d, t.defaultCountry, t.defaultCallingCode, n), u = s.country, $ = s.nationalNumber, l = s.countryCallingCode, a = s.countryCallingCodeSource, y = s.carrierCode;
  if (!n.hasSelectedNumberingPlan()) {
    if (t.v2)
      throw new ee("INVALID_COUNTRY");
    return {};
  }
  if (!$ || $.length < Dt) {
    if (t.v2)
      throw new ee("TOO_SHORT");
    return {};
  }
  if ($.length > yi) {
    if (t.v2)
      throw new ee("TOO_LONG");
    return {};
  }
  if (t.v2) {
    var p = new wo(l, $, n.metadata);
    return u && (p.country = u), y && (p.carrierCode = y), o && (p.ext = o), p.__countryCallingCodeSource = a, p;
  }
  var _ = (t.extended ? n.hasSelectedNumberingPlan() : u) ? re($, n.nationalNumberPattern()) : !1;
  return t.extended ? {
    country: u,
    countryCallingCode: l,
    carrierCode: y,
    valid: _,
    possible: _ ? !0 : !!(t.extended === !0 && n.possibleLengths() && Sr($, n)),
    phone: $,
    ext: o
  } : _ ? t0(u, $, o) : {};
}
function Qo(e, t, n) {
  if (e) {
    if (e.length > zo) {
      if (n)
        throw new ee("TOO_LONG");
      return;
    }
    if (t === !1)
      return e;
    var r = e.search(Jo);
    if (!(r < 0))
      return e.slice(r).replace(Xo, "");
  }
}
function e0(e, t, n) {
  var r = qo(e, {
    extractFormattedPhoneNumber: function(i) {
      return Qo(i, n, t);
    }
  });
  if (!r)
    return {};
  if (!Hi(r))
    return Gi(r) ? {
      error: "TOO_SHORT"
    } : {};
  var d = Vi(r);
  return d.ext ? d : {
    number: r
  };
}
function t0(e, t, n) {
  var r = {
    country: e,
    phone: t
  };
  return n && (r.ext = n), r;
}
function n0(e, t, n, r) {
  var d = Ao(fn(e), t, n, r.metadata), o = d.countryCallingCodeSource, i = d.countryCallingCode, s = d.number, u;
  if (i)
    r.selectNumberingPlan(i);
  else if (s && (t || n))
    r.selectNumberingPlan(t, n), t && (u = t), i = n || kt(t, r.metadata);
  else
    return {};
  if (!s)
    return {
      countryCallingCodeSource: o,
      countryCallingCode: i
    };
  var $ = gt(fn(s), r), l = $.nationalNumber, a = $.carrierCode, y = Lo(i, {
    nationalNumber: l,
    defaultCountry: t,
    metadata: r
  });
  return y && (u = y, y === "001" || r.country(u)), {
    country: u,
    countryCallingCode: i,
    countryCallingCodeSource: o,
    nationalNumber: l,
    carrierCode: a
  };
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
function Cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Nn(Object(n), !0).forEach(function(r) {
      r0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Nn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function r0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function d0(e, t, n) {
  return Zo(e, Cn(Cn({}, t), {}, {
    v2: !0
  }), n);
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
function i0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Sn(Object(n), !0).forEach(function(r) {
      o0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Sn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function o0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function s0(e, t) {
  return l0(e) || $0(e, t) || u0(e, t) || a0();
}
function a0() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function u0(e, t) {
  if (e) {
    if (typeof e == "string")
      return xn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return xn(e, t);
  }
}
function xn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function $0(e, t) {
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
function l0(e) {
  if (Array.isArray(e))
    return e;
}
function c0(e) {
  var t = Array.prototype.slice.call(e), n = s0(t, 4), r = n[0], d = n[1], o = n[2], i = n[3], s, u, $;
  if (typeof r == "string")
    s = r;
  else
    throw new TypeError("A text for parsing must be a string.");
  if (!d || typeof d == "string")
    i ? (u = o, $ = i) : (u = void 0, $ = o), d && (u = i0({
      defaultCountry: d
    }, u));
  else if (Be(d))
    o ? (u = d, $ = o) : $ = d;
  else
    throw new Error("Invalid second argument: ".concat(d));
  return {
    text: s,
    options: u,
    metadata: $
  };
}
function Tn(e, t) {
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
    t % 2 ? Tn(Object(n), !0).forEach(function(r) {
      f0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Tn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function f0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function h0(e, t, n) {
  t && t.defaultCountry && !Di(t.defaultCountry, n) && (t = An(An({}, t), {}, {
    defaultCountry: void 0
  }));
  try {
    return d0(e, t, n);
  } catch (r) {
    if (!(r instanceof ee))
      throw r;
  }
}
function Fn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(d) {
      return Object.getOwnPropertyDescriptor(e, d).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Rn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fn(Object(n), !0).forEach(function(r) {
      p0(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Fn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function p0(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function _0() {
  var e = c0(arguments), t = e.text, n = e.options, r = e.metadata;
  n = Rn(Rn({}, n), {}, {
    extract: !1
  });
  var d = h0(t, n, r);
  return d && d.isValid() || !1;
}
function m0() {
  return li(_0, arguments);
}
var Se, M, at, In, Ye = 0, Tr = [], je = [], U = R, Dn = U.__b, Ln = U.__r, kn = U.diffed, Mn = U.__c, Un = U.unmount, Bn = U.__;
function Bt(e, t) {
  U.__h && U.__h(M, e, Ye || t), Ye = 0;
  var n = M.__H || (M.__H = { __: [], __h: [] });
  return e >= n.__.length && n.__.push({ __V: je }), n.__[e];
}
function J(e) {
  return Ye = 1, y0(Fr, e);
}
function y0(e, t, n) {
  var r = Bt(Se++, 2);
  if (r.t = e, !r.__c && (r.__ = [n ? n(t) : Fr(void 0, t), function(s) {
    var u = r.__N ? r.__N[0] : r.__[0], $ = r.t(u, s);
    u !== $ && (r.__N = [$, r.__[1]], r.__c.setState({}));
  }], r.__c = M, !M.u)) {
    var d = function(s, u, $) {
      if (!r.__c.__H)
        return !0;
      var l = r.__c.__H.__.filter(function(y) {
        return !!y.__c;
      });
      if (l.every(function(y) {
        return !y.__N;
      }))
        return !o || o.call(this, s, u, $);
      var a = !1;
      return l.forEach(function(y) {
        if (y.__N) {
          var p = y.__[0];
          y.__ = y.__N, y.__N = void 0, p !== y.__[0] && (a = !0);
        }
      }), !(!a && r.__c.props === s) && (!o || o.call(this, s, u, $));
    };
    M.u = !0;
    var o = M.shouldComponentUpdate, i = M.componentWillUpdate;
    M.componentWillUpdate = function(s, u, $) {
      if (this.__e) {
        var l = o;
        o = void 0, d(s, u, $), o = l;
      }
      i && i.call(this, s, u, $);
    }, M.shouldComponentUpdate = d;
  }
  return r.__N || r.__;
}
function jn(e, t) {
  var n = Bt(Se++, 3);
  !U.__s && Ar(n.__H, t) && (n.__ = e, n.i = t, M.__H.__h.push(n));
}
function g0(e) {
  return Ye = 5, b0(function() {
    return { current: e };
  }, []);
}
function b0(e, t) {
  var n = Bt(Se++, 7);
  return Ar(n.__H, t) ? (n.__V = e(), n.i = t, n.__h = e, n.__V) : n.__;
}
function v0() {
  for (var e; e = Tr.shift(); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(He), e.__H.__h.forEach(wt), e.__H.__h = [];
      } catch (t) {
        e.__H.__h = [], U.__e(t, e.__v);
      }
}
U.__b = function(e) {
  M = null, Dn && Dn(e);
}, U.__ = function(e, t) {
  e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Bn && Bn(e, t);
}, U.__r = function(e) {
  Ln && Ln(e), Se = 0;
  var t = (M = e.__c).__H;
  t && (at === M ? (t.__h = [], M.__h = [], t.__.forEach(function(n) {
    n.__N && (n.__ = n.__N), n.__V = je, n.__N = n.i = void 0;
  })) : (t.__h.forEach(He), t.__h.forEach(wt), t.__h = [], Se = 0)), at = M;
}, U.diffed = function(e) {
  kn && kn(e);
  var t = e.__c;
  t && t.__H && (t.__H.__h.length && (Tr.push(t) !== 1 && In === U.requestAnimationFrame || ((In = U.requestAnimationFrame) || w0)(v0)), t.__H.__.forEach(function(n) {
    n.i && (n.__H = n.i), n.__V !== je && (n.__ = n.__V), n.i = void 0, n.__V = je;
  })), at = M = null;
}, U.__c = function(e, t) {
  t.some(function(n) {
    try {
      n.__h.forEach(He), n.__h = n.__h.filter(function(r) {
        return !r.__ || wt(r);
      });
    } catch (r) {
      t.some(function(d) {
        d.__h && (d.__h = []);
      }), t = [], U.__e(r, n.__v);
    }
  }), Mn && Mn(e, t);
}, U.unmount = function(e) {
  Un && Un(e);
  var t, n = e.__c;
  n && n.__H && (n.__H.__.forEach(function(r) {
    try {
      He(r);
    } catch (d) {
      t = d;
    }
  }), n.__H = void 0, t && U.__e(t, n.__v));
};
var Hn = typeof requestAnimationFrame == "function";
function w0(e) {
  var t, n = function() {
    clearTimeout(r), Hn && cancelAnimationFrame(t), setTimeout(e);
  }, r = setTimeout(n, 100);
  Hn && (t = requestAnimationFrame(n));
}
function He(e) {
  var t = M, n = e.__c;
  typeof n == "function" && (e.__c = void 0, n()), M = t;
}
function wt(e) {
  var t = M;
  e.__c = e.__(), M = t;
}
function Ar(e, t) {
  return !e || e.length !== t.length || t.some(function(n, r) {
    return n !== e[r];
  });
}
function Fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
var Rr = { exports: {} };
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
  })(Rt, function(t) {
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
          var y = d("x", this.options), p = d("y", this.options), _ = this.options.position == "left" ? y : "-" + y, f = this.options.gravity == "toastify-top" ? p : "-" + p;
          i.style.transform = "translate(" + _ + "," + f + ")";
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
        var y = $[a].offsetHeight;
        l = l.substr(9, l.length - 1);
        var p = 15, _ = window.innerWidth > 0 ? window.innerWidth : screen.width;
        _ <= 360 ? ($[a].style[l] = u[l] + "px", u[l] += y + p) : o($[a], "toastify-left") === !0 ? ($[a].style[l] = i[l] + "px", i[l] += y + p) : ($[a].style[l] = s[l] + "px", s[l] += y + p);
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
})(Rr);
var O0 = Rr.exports;
const E0 = /* @__PURE__ */ It(O0), P0 = ["+1", "+1242", "+1246", "+1264", "+1268", "+1284", "+1340", "+1441", "+1473", "+1649", "+1664", "+1670", "+1671", "+1684", "+1758", "+1767", "+1784", "+1849", "+1868", "+1869", "+1876", "+1939", "+20", "+212", "+213", "+216", "+218", "+220", "+221", "+222", "+223", "+224", "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232", "+233", "+234", "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242", "+243", "+244", "+245", "+246", "+248", "+249", "+250", "+251", "+252", "+253", "+254", "+255", "+256", "+257", "+258", "+260", "+261", "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+27", "+290", "+291", "+297", "+298", "+299", "+30", "+31", "+32", "+33", "+34", "+345", "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+358", "+359", "+36", "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377", "+378", "+379", "+380", "+381", "+382", "+385", "+386", "+387", "+389", "+39", "+40", "+41", "+420", "+421", "+423", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+500", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+508", "+509", "+51", "+52", "+53", "+537", "+54", "+55", "+56", "+57", "+58", "+590", "+591", "+593", "+594", "+595", "+596", "+597", "+598", "+599", "+60", "+61", "+62", "+63", "+64", "+65", "+66", "+670", "+672", "+673", "+674", "+675", "+676", "+677", "+678", "+679", "+680", "+681", "+682", "+683", "+685", "+686", "+687", "+688", "+689", "+690", "+691", "+692", "+7", "+77", "+81", "+82", "+84", "+850", "+852", "+853", "+855", "+856", "+86", "+872", "+880", "+886", "+90", "+91", "+92", "+93", "+94", "+95", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+967", "+968", "+970", "+971", "+972", "+973", "+974", "+975", "+976", "+977", "+98", "+992", "+993", "+994", "+995", "+996", "+998"];
var he = /* @__PURE__ */ ((e) => (e.Text = "Text", e.Buttons = "Buttons", e))(he || {}), N0 = 0;
function O(e, t, n, r, d, o) {
  var i, s, u = {};
  for (s in t)
    s == "ref" ? i = t[s] : u[s] = t[s];
  var $ = { type: e, props: u, key: n, ref: i, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, constructor: void 0, __v: --N0, __i: -1, __u: 0, __source: d, __self: o };
  if (typeof e == "function" && (i = e.defaultProps))
    for (s in i)
      u[s] === void 0 && (u[s] = i[s]);
  return R.vnode && R.vnode($), $;
}
ue.extend(ui);
const Oe = "MM/DD/YYYY hh:mm A", C0 = ({
  index: e,
  button: t,
  handlePress: n
}) => O("button", {
  type: "button",
  class: "text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white font-medium py-1 px-2 mx-1 rounded",
  onClick: () => n(t),
  children: ["Slot from -", O("br", {}), ue(t.startTime * 1e3).format(Oe), O("br", {}), ue(t.endTime * 1e3).format(Oe)]
}, e), S0 = ({
  email: e = ""
}) => {
  const t = "https://lookahead-cloud-run-api-z3eagzn34a-uw.a.run.app/embed", [n, r] = J(null);
  jn(() => {
    L.get(`${t}/business?businessEmail=${e}`).then((h) => {
      r(h.data);
    }).catch((h) => {
      console.error("Error: ", h);
    });
  }, []);
  const [d, o] = J([]), [i, s] = J(""), [u, $] = J(null), l = () => {
    if (i.trim() !== "") {
      const h = {
        msg_text: i,
        buttons: [],
        msg_type: he.Text,
        sender: !0,
        timestamp: Date.now()
      };
      o([...d, h]), s("");
      const m = ue().format("YYYY-MM-DDTHH:mm:ssZZ");
      L.post(`${t}/appointments/search`, {
        business: e,
        request: h.msg_text,
        currentTime: `${m.slice(0, -2)}:${m.slice(-2)}`
      }).then((w) => {
        if (w.data.success) {
          if (w.data.wkoq === "appointment") {
            const P = [];
            for (const F of w.data.slots)
              for (const k of F.items) {
                const j = {
                  calendarId: F.calendarId,
                  calendarName: F.calendarName,
                  timeZone: F.timeZone,
                  opens: F.opens,
                  closes: F.closes,
                  startTime: k.startTime,
                  endTime: k.endTime
                };
                P.push(j);
              }
            const A = {
              msg_text: "",
              buttons: P.slice(0, 2),
              msg_type: he.Buttons,
              sender: !1,
              timestamp: Date.now()
            };
            o([...d, h, A]), $(w.data.query);
          } else if (w.data.wkoq === "faq" && w.data.output != null) {
            const P = {
              msg_text: w.data.output.answer,
              buttons: [],
              msg_type: he.Text,
              sender: !1,
              timestamp: Date.now()
            };
            o([...d, h, P]);
          }
        }
      }).catch((w) => {
        console.error("Error: ", w);
      });
    }
  }, a = (h) => {
    h.key === "Enter" && !h.shiftKey && l();
  }, y = (h) => {
    E0({
      text: h,
      duration: 5e3,
      close: !0,
      gravity: "bottom",
      position: "center",
      stopOnFocus: !0,
      backgroundColor: "red"
    }).showToast();
  }, [p, _] = J(null), [f, v] = J(!1), E = (h) => {
    _(h), v(!0);
  }, [C, S] = J(""), [G, H] = J("+1"), [B, W] = J(""), Y = B ? m0(`${G}${B}`) : null, [D, I] = J(""), [T, le] = J(!1), Fe = () => {
    if (!C) {
      y("Please enter your name");
      return;
    }
    if (!Y) {
      y("Please enter a valid phone number");
      return;
    }
    if (!T) {
      y("You must agree with storage and data handling policy to continue");
      return;
    }
    v(!1);
    const h = {
      msg_text: "Appointment booking request submitted!",
      buttons: [],
      msg_type: he.Text,
      sender: !0,
      timestamp: Date.now()
    };
    o([...d, h]), p != null && C.length > 0 && B.length > 0 && L.post(`${t}/appointments`, {
      business: e,
      calendarId: p.calendarId,
      startTime: p.startTime,
      endTime: p.endTime,
      query: u,
      userPhone: `${G}${B}`,
      name: C
    }).then((m) => {
      m.data.success && m.data.result != null && (I(`Client name: ${C}
Phone number: ${m.data.result.customer}
Local Start time: ${ue(m.data.result.startTime * 1e3).local().format(Oe)}
Business email: ${n?.email}`), S(""), W(""));
    }).catch((m) => {
      console.error("Error: ", m);
    });
  }, N = (h) => {
    s(i + h);
  }, b = g0(null);
  jn(() => {
    b.current && b.current.focus();
  });
  const g = (h) => {
    let m;
    try {
      m = new URL(h);
    } catch {
      return !1;
    }
    return m.protocol === "http:" || m.protocol === "https:";
  };
  return O("div", {
    class: "w-1/2 mx-auto my-8",
    children: O("div", {
      class: "border-2 border-black",
      children: [O("div", {
        class: "bg-gray-200 p-4 flex items-center",
        children: [" ", O("img", {
          src: n?.imageURL && g(n.imageURL) ? n?.imageURL : "https://firebasestorage.googleapis.com/v0/b/lookahead-ef698.appspot.com/o/assets%2Fperson.png?alt=media&token=2247683b-c0d8-4d04-ac6e-ef2114caeebc",
          alt: n?.name,
          class: "mr-4 max-h-10 max-w-10 h-10 w-10 object-cover rounded-full"
        }), O("div", {
          children: n?.name
        })]
      }), O("div", {
        class: "p-6 flex flex-col space-y-4",
        children: [O("div", {
          class: "overflow-auto h-64",
          children: d.sort((h, m) => h.timestamp - m.timestamp).map((h, m) => O("div", {
            class: `${h.sender ? "text-right" : "text-left"}`,
            children: h.msg_type === he.Text ? O("span", {
              class: `${h.sender ? "bg-blue-100" : "bg-gray-200"} rounded px-4 py-2 inline-block my-1`,
              children: h.msg_text
            }) : O("div", {
              children: h.buttons.map((w, P) => O(C0, {
                index: P,
                button: w,
                handlePress: E
              }, `${P}-${w.startTime}`))
            })
          }, h.timestamp))
        }), O("div", {
          children: [f ? O("div", {
            children: O("div", {
              class: "modal bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center",
              children: O("div", {
                class: "modal-content bg-white p-6 rounded-lg shadow-lg flex flex-col space-y-4",
                children: [p != null ? O("div", {
                  children: [O("h2", {
                    class: "text-2xl font-semibold text-gray-800 my-3",
                    children: "Book an Appointment"
                  }), O("h3", {
                    class: "text-1xl font-medium text-gray-700 my-2",
                    children: [n?.name, n?.address != null && n?.address !== "" ? `, ${n.address}` : ""]
                  }), ue(p.startTime * 1e3).format(Oe), O("br", {}), ue(p.endTime * 1e3).format(Oe), O("br", {})]
                }) : O(_e, {}), O("input", {
                  type: "text",
                  placeholder: "Enter your name",
                  value: C,
                  onInput: (h) => S(h.target.value),
                  class: "border-2 border-gray-200 rounded-lg p-2"
                }), O("div", {
                  class: "flex items-center space-x-2",
                  children: [O("div", {
                    class: "relative",
                    children: O("select", {
                      value: G,
                      onChange: (h) => {
                        H(h.target.value);
                      },
                      class: "appearance-none border-2 rounded-lg p-2 focus:outline-none focus:border-blue-500 bg-white",
                      children: P0.map((h, m) => O("option", {
                        value: h,
                        children: h
                      }, `${m}-${h}`))
                    })
                  }), O("div", {
                    class: "flex-grow",
                    children: O("input", {
                      type: "text",
                      placeholder: "Enter your phone number",
                      value: B,
                      onInput: (h) => W(h.target.value),
                      class: `border-2 rounded-lg p-2 focus:outline-none ${Y === null ? "border-gray-200" : Y ? "border-green-500" : "border-red-500"}`
                    })
                  })]
                }), O("div", {
                  children: O("label", {
                    class: "flex items-center space-x-3",
                    children: [O("input", {
                      type: "checkbox",
                      checked: T,
                      onChange: () => le(!T),
                      class: "form-checkbox h-5 w-5 text-green-600"
                    }), O("span", {
                      class: "text-gray-700",
                      children: ["I agree with the storage and", O("br", {}), "handling of my data by this website."]
                    })]
                  })
                }), O("div", {
                  class: "flex justify-end items-center space-x-2",
                  children: [O("button", {
                    type: "button",
                    class: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                    onClick: Fe,
                    children: "Book an Appointment"
                  }), O("button", {
                    type: "button",
                    class: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
                    onClick: () => v(!1),
                    children: "X"
                  })]
                })]
              })
            })
          }) : O("div", {
            children: D !== "" ? O("div", {
              class: "bg-green-500 text-white p-4 rounded",
              children: [O("h2", {
                class: "text-2xl font-semibold my-3",
                children: "Appointment is booked"
              }), O("h3", {
                class: "text-1xl font-medium my-2 whitespace-pre-line",
                children: D
              })]
            }) : O("div", {
              children: [i.length === 0 ? O("div", {
                class: "flex space-x-2 overflow-auto py-2 px-4",
                children: ["Find me the earliest appointment next week before 11am", "Book me an appointment on Thursday after 2pm"].map((h) => O("button", {
                  type: "button",
                  class: "bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded",
                  onClick: () => N(h),
                  children: h
                }, h))
              }) : O(_e, {}), O("div", {
                class: "flex items-center",
                children: [O("input", {
                  class: "border flex-1 p-2",
                  type: "text",
                  placeholder: "Type a message...",
                  value: i,
                  onInput: (h) => s(h.target.value),
                  ref: b,
                  onKeyPress: a
                }), O("button", {
                  type: "button",
                  class: "ml-2 px-4 py-2 bg-blue-500 text-white",
                  onClick: l,
                  children: "Send"
                })]
              })]
            })
          }), O("a", {
            href: "https://github.com/Lookaheadai/appointment-widget-public?tab=readme-ov-file#how-to-add-to-your-website",
            target: "_blank",
            rel: "noreferrer",
            class: "flex items-center justify-center mt-4 transform scale-90 hover:scale-95",
            children: O("div", {
              class: "flex items-center justify-center w-100 h-12 px-4 bg-gray-200 hover:bg-gray-300 rounded-full shadow-lg cursor-pointer",
              children: [O("img", {
                src: "https://firebasestorage.googleapis.com/v0/b/lookahead-ef698.appspot.com/o/assets%2Flogo.png?alt=media&token=d42c0343-f4bb-4187-b26e-8741fbb647fa",
                alt: "Lookahead Logo",
                class: "h-6 w-6 max-h-6 max-w-6 object-cover rounded-full mr-4"
              }), O("span", {
                class: "text-black",
                children: "Add free live chat to your site"
              })]
            })
          })]
        })]
      })]
    })
  });
}, x0 = Vr(S0, "lookahead-widget", ["email"]);
export {
  x0 as default
};
