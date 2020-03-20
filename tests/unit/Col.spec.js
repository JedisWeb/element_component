import Col from "@ele/col";
import { shallowMount } from "@vue/test-utils";

describe("Col.vue", () => {
  let wrapper = shallowMount(Col);
  let colEle = wrapper.vm.$el;

  it("测试Col组件创建成功", () => {
    expect(colEle.classList).toContain("el-col");
  });

  //   it("测试span属性", () => {
  //     wrapper.setProps({
  //       span: 6
  //     });
  //     expect(colEle.classList).toContain("el-col-6");
  //   });

  // it("测试offset属性", () => {
  //   wrapper.setProps({
  //     offset: 6
  //   });
  //   console.log(colEle.classList);
  //   expect(colEle.classList).toContain("el-col-offset-6");
  // });

  // it("测试push", () => {
  //   wrapper.setProps({
  //     push: 4
  //   });
  //   expect(colEle.className).toContain("el-col-push-4");
  // });
});
