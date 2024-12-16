import productData from '../data/products.json';
export default (await import('vue')).defineComponent({
    data() {
        return {
            products: productData
        };
    },
    computed: {
        productsList() {
            return this.products.sort((produit_a, produit_b) => produit_a.name.localeCompare(produit_b.name));
        }
    }
});
; /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("container mt-5") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("d-flex justify-content-between align-items-center mb-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("fw-bold text-dark") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("produits-header") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), ...{ class: ("form-control w-25 search-input") }, placeholder: ("rechercher un produit"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("row") }, });
    for (const [product] of __VLS_getVForSourceType((__VLS_ctx.productsList))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((product.id)), ...{ class: ("col-12 col-sm-6 col-md-4 col-lg-3 mb-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card product-card border-0 shadow-sm h-100 position-relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("position-relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`/vuJS/${product.image}`)), ...{ class: ("card-img-top") }, alt: ((product.name)), });
        if (product.sale) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("badge sale-badge") }, });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ class: ("btn btn-primary buy-btn") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("card-body text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h6, __VLS_intrinsicElements.h6)({ ...{ class: ("card-title fw-bold") }, });
        (product.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("price mb-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("fw-bold text-primary") }, });
        (product.price);
        if (product.oldPrice) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-muted ms-1") }, });
            __VLS_elementAsFunction(__VLS_intrinsicElements.s, __VLS_intrinsicElements.s)({});
            (product.oldPrice);
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        for (const [star] of __VLS_getVForSourceType((5))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((star)), ...{ class: ("star-rating") }, ...{ class: (({ 'filled': star <= product.rating })) }, });
        }
    }
    __VLS_styleScopedClasses['container'];
    __VLS_styleScopedClasses['mt-5'];
    __VLS_styleScopedClasses['d-flex'];
    __VLS_styleScopedClasses['justify-content-between'];
    __VLS_styleScopedClasses['align-items-center'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['fw-bold'];
    __VLS_styleScopedClasses['text-dark'];
    __VLS_styleScopedClasses['produits-header'];
    __VLS_styleScopedClasses['form-control'];
    __VLS_styleScopedClasses['w-25'];
    __VLS_styleScopedClasses['search-input'];
    __VLS_styleScopedClasses['row'];
    __VLS_styleScopedClasses['col-12'];
    __VLS_styleScopedClasses['col-sm-6'];
    __VLS_styleScopedClasses['col-md-4'];
    __VLS_styleScopedClasses['col-lg-3'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['card'];
    __VLS_styleScopedClasses['product-card'];
    __VLS_styleScopedClasses['border-0'];
    __VLS_styleScopedClasses['shadow-sm'];
    __VLS_styleScopedClasses['h-100'];
    __VLS_styleScopedClasses['position-relative'];
    __VLS_styleScopedClasses['position-relative'];
    __VLS_styleScopedClasses['card-img-top'];
    __VLS_styleScopedClasses['badge'];
    __VLS_styleScopedClasses['sale-badge'];
    __VLS_styleScopedClasses['btn'];
    __VLS_styleScopedClasses['btn-primary'];
    __VLS_styleScopedClasses['buy-btn'];
    __VLS_styleScopedClasses['card-body'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['card-title'];
    __VLS_styleScopedClasses['fw-bold'];
    __VLS_styleScopedClasses['price'];
    __VLS_styleScopedClasses['mb-1'];
    __VLS_styleScopedClasses['fw-bold'];
    __VLS_styleScopedClasses['text-primary'];
    __VLS_styleScopedClasses['text-muted'];
    __VLS_styleScopedClasses['ms-1'];
    __VLS_styleScopedClasses['star-rating'];
    __VLS_styleScopedClasses['filled'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
