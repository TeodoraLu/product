package com.example.bean;

import java.math.BigDecimal;
import java.util.Date;

public class OrderInfo {
    private Integer id;

    private String customer;

    private Date createdate;

    private Date readydate;

    private Date update;

    private String goodsName;

    private Integer goodsQuantity;

    private BigDecimal goodsPrice;

    private BigDecimal goodsProfit;

    private String type;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCustomer() {
        return customer;
    }

    public void setCustomer(String customer) {
        this.customer = customer == null ? null : customer.trim();
    }

    public Date getCreatedate() {
        return createdate;
    }

    public void setCreatedate(Date createdate) {
        this.createdate = createdate;
    }

    public Date getReadydate() {
        return readydate;
    }

    public void setReadydate(Date readydate) {
        this.readydate = readydate;
    }

    public Date getUpdate() {
        return update;
    }

    public void setUpdate(Date update) {
        this.update = update;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName == null ? null : goodsName.trim();
    }

    public Integer getGoodsQuantity() {
        return goodsQuantity;
    }

    public void setGoodsQuantity(Integer goodsQuantity) {
        this.goodsQuantity = goodsQuantity;
    }

    public BigDecimal getGoodsPrice() {
        return goodsPrice;
    }

    public void setGoodsPrice(BigDecimal goodsPrice) {
        this.goodsPrice = goodsPrice;
    }

    public BigDecimal getGoodsProfit() {
        return goodsProfit;
    }

    public void setGoodsProfit(BigDecimal goodsProfit) {
        this.goodsProfit = goodsProfit;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type == null ? null : type.trim();
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(getClass().getSimpleName());
        sb.append(" [");
        sb.append("Hash = ").append(hashCode());
        sb.append(", id=").append(id);
        sb.append(", customer=").append(customer);
        sb.append(", createdate=").append(createdate);
        sb.append(", readydate=").append(readydate);
        sb.append(", update=").append(update);
        sb.append(", goodsName=").append(goodsName);
        sb.append(", goodsQuantity=").append(goodsQuantity);
        sb.append(", goodsPrice=").append(goodsPrice);
        sb.append(", goodsProfit=").append(goodsProfit);
        sb.append(", type=").append(type);
        sb.append("]");
        return sb.toString();
    }
}