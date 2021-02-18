import { shallowMount, createLocalVue } from '@vue/test-utils';
import TodoItem from '@/components/TodoItem.vue';
import HelloWorld from "@/components/HelloWorld.vue";
import Vuex from 'vuex';
const localVue = createLocalVue();
localVue.use(Vuex);
let mutations;
let store;
beforeEach(() => {
    mutations = {
        changeParent: jest.fn(),
    };
    store = new Vuex.Store({
        state: {
            parents: '哈哈哈'
        },
        mutations,
    });
});
describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'new message';
        const collapsed = true;
        const name = '何致贤';
        const wrapper = shallowMount(HelloWorld, {
            store,
            localVue,
            propsData: { msg, collapsed },
            data() {
                return {
                    name
                };
            }
        });
        expect(wrapper.find('.msgs').text()).toMatch(msg);
        expect(wrapper.find('.names').text()).toMatch(name);
        expect(wrapper.find('.collapsed')).toBeTruthy();
        const hellobutton = wrapper.find('.hello');
        hellobutton.trigger('click');
        expect(mutations.changeParent).toHaveBeenCalled();
    });
    it('render item when passed', async () => {
        const wrapper = shallowMount(HelloWorld, {});
        const input = wrapper.find('.inputmsg');
        await input.setValue('宝贝去哪里呀');
        expect(wrapper.find('.inputmsg').element).toBeTruthy();
        const editButton = wrapper.find('.save');
        expect(editButton.text()).toBe('保存');
        editButton.trigger('click');
    });
    it('renders action-container content  when passed', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: { empty: false },
        });
        expect(wrapper.contains('.action-container')).toBe(true);
        expect(wrapper.contains('.content')).toBe(true);
        expect(wrapper.contains('.empty')).toBe(false);
    });
    it('renders title,time when passed', () => {
        const title = 'new message';
        const time = '2019-01-04';
        const wrapper = shallowMount(TodoItem, {
            propsData: { title, empty: false, time },
        });
        expect(wrapper.find('.title').text()).toMatch(title);
        expect(wrapper.find('.time').text()).toMatch(`创建时间: ${time}`);
    });
    it('renders item with title equal details when passed', () => {
        const details = 'detailssss';
        const wrapper = shallowMount(TodoItem, {
            propsData: { details, empty: false },
        });
        expect(wrapper.find('.todoitem').attributes('title')).toMatch(details);
    });
    it('renders label text equal 完成 when passed', () => {
        const finished = true;
        const wrapper = shallowMount(TodoItem, {
            propsData: { finished, empty: false },
        });
        expect(wrapper.find('label').text()).toMatch('完成');
    });
    it('render label text equal 未完成 when passed', () => {
        const finished = false;
        const wrapper = shallowMount(TodoItem, {
            propsData: { finished, empty: false },
        });
        expect(wrapper.find('label').text()).toMatch('未完成');
    });
    it('render addbutton when passed', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: { empty: true },
        });
        const addButton = wrapper.find('.empty');
        expect(wrapper.contains('.action-container')).toBe(false);
        expect(wrapper.contains('.content')).toBe(false);
        expect(wrapper.contains('.empty')).toBe(true);
        expect(addButton.text()).toBe('+');
    });
    it('emitted emptyClick when passed', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: { empty: true },
        });
        const addButton = wrapper.find('.empty');
        addButton.trigger('click');
        expect(wrapper.emitted().emptyClick).toBeTruthy();
    });
    it('emitted click when passed', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: { empty: false },
        });
        const content = wrapper.find('.content');
        content.trigger('click');
        expect(wrapper.emitted().click).toBeTruthy();
    });
    it('emitted deleteClick when passed', () => {
        const wrapper = shallowMount(TodoItem, {
            propsData: { empty: false },
        });
        const close = wrapper.find('.close');
        close.trigger('click');
        expect(wrapper.emitted().deleteClick).toBeTruthy();
    });
    it('emitted change and args equal {finished: true, id: 0} when passed', () => {
        const id = 0;
        const finished = false;
        const wrapper = shallowMount(TodoItem, {
            propsData: { empty: false, id, finished },
        });
        const label = wrapper.find('label');
        label.trigger('click');
        // @ts-ignore
        expect(wrapper.emitted('change')[0][0]).toEqual({ finished: true, id: 0 });
    });
    it('emitted change and args equal {finished: false, id: 2} when passed', () => {
        const id = 2;
        const finished = true;
        const wrapper = shallowMount(TodoItem, {
            propsData: { empty: false, id, finished },
        });
        const label = wrapper.find('label');
        label.trigger('click');
        // @ts-ignore
        expect(wrapper.emitted('change')[0][0]).toEqual({ finished: false, id: 2 });
    });
});
//# sourceMappingURL=example.spec.js.map