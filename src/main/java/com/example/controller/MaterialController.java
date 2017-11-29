package com.example.controller;

import com.example.bean.Expenditure;
import com.example.bean.MaterialStock;
import com.example.bean.MaterialStockBuy;
import com.example.bean.User;
import com.example.service.MaterialService;
import com.example.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping(value = "/material")
public class MaterialController extends GenericController{
    private static final Logger logger = LoggerFactory.getLogger(MaterialController.class);

    @Autowired
    private MaterialService materialService;
    //添加原材料
    @RequestMapping(value = "/query",method = RequestMethod.POST)
    public void query(HttpServletRequest request, HttpServletResponse response) {
        //调用service方法得到用户列表
        List<MaterialStock> materialStockList = materialService.query();
        renderSuccessString(response,materialStockList,"获取成功");
    }

    //添加原材料
    @RequestMapping(value = "/save",method = RequestMethod.POST)
    public void save(@RequestBody MaterialStock materialStock, HttpServletRequest request, HttpServletResponse response) {
        //调用service方法得到用户列表
        int num = materialService.save(materialStock);
        if(num==1){
            renderSuccessString(response,materialStock,"保存成功");
        }else {
            renderErrorString(response, "保存失败");
        }
    }
    //添加原材料采购
    @RequestMapping(value = "/BuyMaterialStock",method = RequestMethod.POST)
    public void BuyMaterialStock(@RequestBody MaterialStockBuy materialStockBuy, HttpServletRequest request, HttpServletResponse response) {
        if(materialStockBuy==null||"".equals(materialStockBuy)){
            renderErrorString(response, "参数为空");
        }
        MaterialStock materialStock = materialService.queryById(materialStockBuy.getId());

        //保存购买流水记录
        Expenditure expenditure = new Expenditure();
        expenditure.setAmount(materialStockBuy.getPrice());
        expenditure.setMaterialName(materialStock.getMaterialName());
        expenditure.setDate(new Date());
        materialService.saveExpenditure(expenditure);

        //计算原材料库存总量 新数量 = 原数量 + 采购数量
        Integer materialQuantity = materialStockBuy.getMaterialQuantity()+materialStock.getMaterialQuantity();

        //计算单价  新单价 = （原库存数量 x 原单价 + 采购总价）÷ （原数量 + 采购数量）
        BigDecimal price = materialStock.getMaterialPrice().multiply(new BigDecimal(materialStock.getMaterialQuantity())).add(materialStockBuy.getPrice()).divide(new BigDecimal(materialQuantity));

       // (materialStock.getMaterialQuantity()*materialStock.getMaterialPrice()+materialStockBuy.getPrice())/materialQuantity;
        materialStock.setMaterialQuantity(materialQuantity);
        materialStock.setMaterialPrice(price);
        materialService.update(materialStock);
        renderSuccessString(response,materialStock,"保存成功");
    }
}