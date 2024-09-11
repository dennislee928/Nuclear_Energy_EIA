import eiaService from '@/api/eiaService';
export default (await import('vue')).defineComponent({
    data() {
        return {
            stateId: '',
            sectorId: '',
            frequency: 'monthly',
            data: null,
            sectors: [
                { id: 'COM', name: 'commercial', alias: '(COM) commercial' },
                { id: 'RES', name: 'residential', alias: '(RES) residential' },
                { id: 'ALL', name: 'all sectors', alias: '(ALL) all sectors' },
                { id: 'OTH', name: 'other', alias: '(OTH) other' },
                { id: 'TRA', name: 'transportation', alias: '(TRA) transportation' },
                { id: 'IND', name: 'industrial', alias: '(IND) industrial' }
            ],
            states: [
                { id: 'AL', name: 'Alabama' },
                { id: 'AK', name: 'Alaska' },
                { id: 'AZ', name: 'Arizona' },
                { id: 'AR', name: 'Arkansas' },
                { id: 'CA', name: 'California' },
                { id: 'CO', name: 'Colorado' },
                { id: 'CT', name: 'Connecticut' },
                { id: 'DE', name: 'Delaware' },
                { id: 'DC', name: 'District of Columbia' },
                { id: 'FL', name: 'Florida' },
                { id: 'GA', name: 'Georgia' },
                { id: 'HI', name: 'Hawaii' },
                { id: 'ID', name: 'Idaho' },
                { id: 'IL', name: 'Illinois' },
                { id: 'IN', name: 'Indiana' },
                { id: 'IA', name: 'Iowa' },
                { id: 'KS', name: 'Kansas' },
                { id: 'KY', name: 'Kentucky' },
                { id: 'LA', name: 'Louisiana' },
                { id: 'ME', name: 'Maine' },
                { id: 'MD', name: 'Maryland' },
                { id: 'MA', name: 'Massachusetts' },
                { id: 'MI', name: 'Michigan' },
                { id: 'MN', name: 'Minnesota' },
                { id: 'MS', name: 'Mississippi' },
                { id: 'MO', name: 'Missouri' },
                { id: 'MT', name: 'Montana' },
                { id: 'NE', name: 'Nebraska' },
                { id: 'NV', name: 'Nevada' },
                { id: 'NH', name: 'New Hampshire' },
                { id: 'NJ', name: 'New Jersey' },
                { id: 'NM', name: 'New Mexico' },
                { id: 'NY', name: 'New York' },
                { id: 'NC', name: 'North Carolina' },
                { id: 'ND', name: 'North Dakota' },
                { id: 'OH', name: 'Ohio' },
                { id: 'OK', name: 'Oklahoma' },
                { id: 'OR', name: 'Oregon' },
                { id: 'PA', name: 'Pennsylvania' },
                { id: 'RI', name: 'Rhode Island' },
                { id: 'SC', name: 'South Carolina' },
                { id: 'SD', name: 'South Dakota' },
                { id: 'TN', name: 'Tennessee' },
                { id: 'TX', name: 'Texas' },
                { id: 'UT', name: 'Utah' },
                { id: 'VT', name: 'Vermont' },
                { id: 'VA', name: 'Virginia' },
                { id: 'WA', name: 'Washington' },
                { id: 'WV', name: 'West Virginia' },
                { id: 'WI', name: 'Wisconsin' },
                { id: 'WY', name: 'Wyoming' }
            ]
        };
    },
    methods: {
        async fetchData() {
            console.log('api_key=' + import.meta.env.API_KEY);
            try {
                const response = await eiaService.getRetailSales(this.stateId, this.sectorId, this.frequency);
                this.data = response.data;
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.fetchData) }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("state"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.stateId)), id: ("state"), required: (true), });
    for (const [state] of __VLS_getVForSourceType((__VLS_ctx.states))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((state.id)), value: ((state.id)), });
        (state.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("sector"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.sectorId)), id: ("sector"), required: (true), });
    for (const [sector] of __VLS_getVForSourceType((__VLS_ctx.sectors))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ key: ((sector.id)), value: ((sector.id)), });
        (sector.alias);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("frequency"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.select, __VLS_intrinsicElements.select)({ value: ((__VLS_ctx.frequency)), id: ("frequency"), required: (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("monthly"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("quarterly"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.option, __VLS_intrinsicElements.option)({ value: ("annual"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
    if (__VLS_ctx.data) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.table, __VLS_intrinsicElements.table)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.thead, __VLS_intrinsicElements.thead)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.th, __VLS_intrinsicElements.th)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.tbody, __VLS_intrinsicElements.tbody)({});
        for (const [item] of __VLS_getVForSourceType((__VLS_ctx.data.response.data))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.tr, __VLS_intrinsicElements.tr)({ key: ((item.period + item.stateid + item.sectorid)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.period);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.stateid);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.stateDescription);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.sectorid);
            __VLS_elementAsFunction(__VLS_intrinsicElements.td, __VLS_intrinsicElements.td)({});
            (item.sectorName);
        }
    }
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    return {
        slots: __VLS_slots,
        refs: $refs,
        attrs: {},
    };
}
;
let __VLS_self;
