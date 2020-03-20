import Row from "@ele/row";
import { shallowMount } from "@vue/test-utils";

describe("Row.vue", () => {
  let wrapper;
  let rowEle;
  beforeEach(() => {
    wrapper = shallowMount(Row);
    rowEle = wrapper.vm.$el;
  });

  it("测试Row组件创建成功", () => {
    expect(rowEle.classList).toContain("el-row");
  });

  //   it("测试gutter", () => {
  //     wrapper.setProps({
  //       gutter: 20
  //     });
  //     expect(rowEle.style.marginLeft).toBe("-10px");
  //     expect(rowEle.style.marginRight).toBe("-10px");
  //   });

  //   it("测试type", () => {
  //     wrapper.setProps({
  //       type: "flex"
  //     });
  //     expect(rowEle.classList).toContain("el-col--flex");
  //   });

  // it("测试justify属性", () => {
  //   wrapper.setProps({
  //     justify: "space-around"
  //   });
  //   expect(rowEle.className).toContain("is-justify-space-around");
  // });

  // it('测试align属性', () => {
  //   wrapper.setProps({
  //     align:'bottom'
  //   })
  //   expect(rowEle.className).toContain('is-align-bottom')
  // })
});
