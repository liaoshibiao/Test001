          
	  
	  var twodata=[];
	var erji=[];
	 var abc = "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/params/queryOrgInfo/query";
     	var params = {
		"userId": '15975531236'
	};
    var cx_a=[];
    var cx_b=[];
    var cx_c=[];
    var cx_d=[]
    asser(params);
    function asser(params){
	$.ajax({
		type: 'POST',
		url: abc,
		dataType: 'json',
		data: params,
		success: function(obj) {
		for(var i=0;i<obj.data.list.length;i++){
				erji[i]=obj.data.list[i].areacode2;
			}
             twodata=obj.data.list;
			var list = obj.data.list;
			for (var i = 0; i < list.length; i++) {
				cx_a = cx_a.concat(list[i].areaname1)
				cx_b = cx_b.concat(list[i].areaname2)
				cx_d = cx_d.concat(list[i].areacode1)
			}	
			chaxun_one()
			arr=cx_a
			unique(arr)
			unique_r(cx_c)
				//管辖区域第一层
			    var gxq_one=cx_a.length;
			    //里面三角形属性
			    var aa=cx_d.length;
	
			    var str=1;
			//管辖区域第一层
			  $("#managementup div").bind("click",function(){
						let index = $(this).index();
						$(this).find('.qu_yu').css("background","url(./images/sjx_k.png)") 
			            $(this).siblings('div').find('.qu_yu').css("background","url(./images/sjx_s.png)")
			          if(index!=0){
									
							if($("#managementup .pinpai").eq(index).hasClass('mypinpai')){
								$("#managementup .pinpai").eq(index).removeClass('mypinpai');
								
						       $(this).find('.qu_yu').hide()
							}
							 else{
								 $("#managementup .pinpai").eq(index).addClass('mypinpai');
								  //盒子里面属性三角形
							     $(this).find('.qu_yu').show()
							        var str=0
								  $(".qu_yu").bind('click', function(event) {
											let index = $(this).index();
												 str+=1
												 if(str==1){
												 $(this).css("background","url(./images/sjx_k.png)")	
													str=1
												 }
												 if(str!=1){
												 	$(this).css("background","url(./images/sjx_s.png)")
													str=0
												 }	
												 event.stopPropagation();
									});
							 }
								
						}
						else{
							if($("#managementup .pinpai").eq(0).hasClass('mypinpai')){
							    $("#managementup .pinpai").removeClass('mypinpai');
							     $(this).siblings('div').find('.qu_yu').hide()
						     }
							 else{
								$("#managementup .pinpai").addClass('mypinpai');
								$(this).siblings('div').find('.qu_yu').show()
							 }
							
						}
						    var istrue=false;
							var isfalse=false;
							var j=1;
							for(j=1;j<gxq_one;j++){
								if(!($("#managementup .pinpai").eq(j).hasClass('mypinpai'))){
									istrue=true;
								}
							
							}
							if(istrue==false&&j==gxq_one){
								$("#managementup .pinpai").eq(0).addClass('mypinpai');
								}
			            
			             if(index!=0){
			             if($("#managementup .pinpai").eq(index).hasClass('mypinpai')&&$("#managementup .pinpai").eq(0).hasClass('mypinpai')){
			             		$("#managementup .pinpai").eq(0).addClass('mypinpai')
			             	}else{		
			             		$("#managementup .pinpai").eq(0).removeClass('mypinpai');
			             	}
						 }

						var twodatathis=[];	
						var k=0;
						if(index!=0&&$("#managementup .pinpai").eq(index).hasClass('mypinpai')){
							$('html #managementmiddle').html("");
							$('html #managementmiddle').append('<div class="pinpai"  onclick="clicks('+-1+')"><span>全选<p class="qu_yu"></p></span></div>')
							for(var i=0;i<twodata.length;i++){
								if($("#managementup .pinpai").eq(index).text()==twodata[i].areaname1){
								   twodatathis[k]=twodata[i].areaname2;
							       k++;
								}
							}
							unique_l(twodatathis);
						}
			        })
		}
	})
	}
//侧滑
	 $('#CH').click(function(){
		$("#cehua").show(500)
		})
		$('.cz').click(function(){
			$("#managementmiddle .pinpai").removeClass('mypinpai');
			$("#managementup .pinpai").removeClass('mypinpai');
			$("#managementdown .pinpai").removeClass('mypinpai');
            $("#store .pinpai").removeClass('mypinpai');
			$("#brand .pinpai").removeClass('mypinpai');
		})
		$('.wc').click(function(){
			var brightness=0;
			var brightnessarray=[];
			var index=0;
			for(var s=1;s<$("#managementmiddle .pinpai").length;s++){
			if($("#managementmiddle .pinpai").eq(s).hasClass('mypinpai'))
			{
				brightnessarray[index]=erji[s];
				index++;
			}
		}
			$("#cehua").hide()
			var pra={
				"userId":"13812345678",
				"va_months":5,
				"local_send_flag":1,
				 "areacode1":brightnessarray,
				 "org_level_id":"",
				 "org_brd_id":"",
			}
			console.log(brightnessarray)
			$.ajax({ 
						url: "http://tel.runsa.cn:8177/bi_yhj/REALLY/bi/report/cross_sal/query",
						type: 'POST',
						contentType: "application/json; charset=utf-8",
						data:JSON.stringify( pra),
						dataType: 'json',
						success: function(obj){
								
                              console.log(obj)
							list = obj.data.list;
							sum = obj.data.summary;
							a_fh=[]; b_fh=[]; c_fh=[]; d_fh=[]; e_fh=[]; f_fh=[]; g_fh=[]; h_fh=[];
							i_fh=[]; j_fh=[]; k_fh=[]; l_fh=[]; m_fh=[]; n_fh=[]; o_fh=[];
							aa_fh=[];
							
							bb_fh=[]; cc_fh=[]; dd_fh=[]; ee_fh=[]; ff_fh=[]; gg_fh=[]; hh_fh=[];
							ii_fh=[]; jj_fh=[]; kk_fh=[]; ll_fh=[]; mm_fh=[]; nn_fh=[]; oo_fh=[];
							for (var i = 0; i < list.length; i++) {
								a_fh = a_fh.concat(list[i].cross_org_num)
								b_fh = b_fh.concat(list[i].cross_zero_org_nm)
								c_fh = c_fh.concat(list[i].cross_sal_amt)
								d_fh = d_fh.concat(list[i].cross_sal_amt_ratio)
								e_fh = e_fh.concat(list[i].cross_sal_qty)
								f_fh = f_fh.concat(list[i].wareh_send_qty)
								g_fh = g_fh.concat(list[i].store_send_qty)
								h_fh = h_fh.concat(list[i].sal_nos)
								i_fh = i_fh.concat(list[i].cross_upt)
								j_fh = j_fh.concat(list[i].cross_atv)
								k_fh = k_fh.concat(list[i].no_sku_sal_amt)
								l_fh = l_fh.concat(list[i].no_sku_sal_amt_ratio)
								m_fh = m_fh.concat(list[i].no_size_sal_amt)
								n_fh = n_fh.concat(list[i].no_size_sal_amt_ratio)
								o_fh = o_fh.concat(list[i].org_brd_id)
								}
							//合计值
								aa_fh = sum[0].cross_org_num
								bb_fh = sum[0].cross_zero_org_nm
								cc_fh = sum[0].cross_sal_amt
								dd_fh = sum[0].cross_sal_amt_ratio
								ee_fh = sum[0].cross_sal_qty
								ff_fh = sum[0].wareh_send_qty
								gg_fh = sum[0].store_send_qty
								hh_fh = sum[0].sal_nos
								ii_fh = sum[0].cross_upt
								jj_fh = sum[0].cross_atv
								kk_fh = sum[0].no_sku_sal_amt
								ll_fh = sum[0].no_sku_sal_amt_ratio
								mm_fh = sum[0].no_size_sal_amt
								nn_fh = sum[0].no_size_sal_amt_ratio
								oo_fh = sum[0].org_brd_id
	                          //合计值 千分位
	                            var sum_cc = cc_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_cc = sum_cc.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                var sum_hh = hh_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_hh = sum_hh.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                var sum_gg = gg_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_gg = sum_gg.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                var sum_ee = ee_fh.toFixed(0)+"";//保留两位小数
                                var text8_sum_ee= sum_ee.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
                                var sum_jj = jj_fh.toFixed(0)+"";//保留两位小数
                                var sum_ii = ii_fh.toFixed(1)+"";//保留两位小数
                             $('#area_rist').empty();
                                $('#area_rist').append('<tr class="oo"><th style="text-align: left;">指标</th><th>合计</th></tr>')
                                $('#area_rist').append('<tr class="aa"><td style="text-align: left;">已实施跨店零售店数</td><td class="aaa">合计</td></tr>')
                                $('#area_rist').append('<tr class="bb"><td style="text-align: left;">已实施但无零售店数</td><td class="bbb">合计</td></tr>')
                                $('#area_rist').append('<tr class="cc"><td style="text-align: left;">跨店零售金额</td><td class="ccc">合计</td></tr>')
                                $('#area_rist').append('<tr class="dd"><td style="text-align: left;">跨店零售额占比</td><td class="ddd">合计</td></tr>')
                                $('#area_rist').append('<tr class="ee"><td style="text-align: left;">跨店零售商品数量</td><td class="eee">合计</td></tr>')
                                $('#area_rist').append('<tr class="ff"><td style="text-align: left;">仓库发货件数</td><td class="fff">合计</td></tr>')
                                $('#area_rist').append('<tr class="gg"><td style="text-align: left;">店铺发货件数</td><td class="ggg">合计</td></tr>')
                                $('#area_rist').append('<tr class="hh"><td style="text-align: left;">跨店零售单数</td><td class="hhh">合计</td></tr>')
                                $('#area_rist').append('<tr class="ii"><td style="text-align: left;">跨店零售客单量</td><td class="iii">合计</td></tr>')
                                $('#area_rist').append('<tr class="jj"><td style="text-align: left;">跨店零售客单价</td><td class="jjj">合计</td></tr>')
                                $('#area_rist').append('<tr class="kk"><td style="text-align: left;">店无款的零售金额</td><td class="kkk">合计</td></tr>')
                                $('#area_rist').append('<tr class="ll"><td style="text-align: left;">店无款的零售金额占比</td><td class="lll">合计</td></tr>')
                                $('#area_rist').append('<tr class="mm"><td style="text-align: left;">店缺码的零售金额</td><td class="mmm">合计</td></tr>')
                                $('#area_rist').append('<tr class="nn"><td style="text-align: left;">店缺码的零售金额占比</td><td class="nnn">合计</td></tr>')
                             for(var i=0;i<a_fh.length;i++){
                         	 $('#area_rist .aa').append('<td>'+a_fh[i]+'</td>')
	                         }  
	                         for(var i=0;i<b_fh.length;i++){
	                         	 $('#area_rist .bb').append('<td>'+b_fh[i]+'</td>')
	                         
	                         }
	                         for(var i=0;i<c_fh.length;i++){
	                         	 var qw = c_fh[i].toFixed(0)+"";//保留两位小数
                                var qe = qw.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .cc').append('<td>'+qe+'</td>')
	                         }
	                         for(var i=0;i<d_fh.length;i++){
	                         	 $('#area_rist .dd').append('<td>'+d_fh[i]+'%</td>')
	                         }
	                         for(var i=0;i<e_fh.length;i++){
	                         	var qw_e = e_fh[i].toFixed(0)+"";//保留两位小数
                                var qe_e_l = qw_e.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .ee').append('<td>'+qe_e_l+'</td>')
	                         }
	                         for(var i=0;i<f_fh.length;i++){
	                         	 $('#area_rist .ff').append('<td>'+f_fh[i]+'</td>')
	                         }
	                         for(var i=0;i<g_fh.length;i++){
	                         	 var qw_g = g_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_l = qw_g.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .gg').append('<td>'+qe_g_l+'</td>')
	                         }
	                         for(var i=0;i<h_fh.length;i++){
	                         	 var qw_h = h_fh[i].toFixed(0)+"";//保留两位小数
                                 var qe_g_h = qw_h.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g,'$1,');
	                         	 $('#area_rist .hh').append('<td>'+qe_g_h+'</td>')
	                         }
	                         for(var i=0;i<i_fh.length;i++){
	                         	var qw_i = i_fh[i].toFixed(1)+"";//保留两位小数
	                         	 $('#area_rist .ii').append('<td>'+qw_i+'</td>')
	                         }
	                         for(var i=0;i<j_fh.length;i++){
	                         	 $('#area_rist .jj').append('<td>'+j_fh[i]+'</td>')
	                         }
	                         for(var i=0;i<k_fh.length;i++){
	                         	 $('#area_rist .kk').append('<td>'+k_fh[i]+'</td>')
	                         }
	                         for(var i=0;i<l_fh.length;i++){
	                         	 $('#area_rist .ll').append('<td>'+l_fh[i]+'%</td>')
	                         }
	                         for(var i=0;i<m_fh.length;i++){
	                         	 $('#area_rist .mm').append('<td>'+m_fh[i]+'</td>')
	                         }
	                         for(var i=0;i<n_fh.length;i++){
	                         	 $('#area_rist .nn').append('<td>'+n_fh[i]+'%</td>')
	                         }
	                         for(var i=0;i<o_fh.length;i++){
	                         	 $('#area_rist .oo').append('<th>'+o_fh[i]+'</th>')
	                         }
					         $('#area_rist .aaa').html(aa_fh)
					         $('#area_rist .bbb').html(bb_fh)
					         $('#area_rist .ccc').html(text8_sum_cc)
					         $('#area_rist .ddd').html(dd_fh+"%")
					         $('#area_rist .eee').html(text8_sum_ee)
					         $('#area_rist .fff').html(ff_fh)
					         $('#area_rist .ggg').html(text8_sum_gg)
					         $('#area_rist .hhh').html(text8_sum_hh)
					         $('#area_rist .iii').html(sum_ii)
					         $('#area_rist .jjj').html(sum_jj)
					         $('#area_rist .kkk').html(kk_fh)
					         $('#area_rist .lll').html(ll_fh+"%")
					         $('#area_rist .mmm').html(mm_fh)
					         $('#area_rist .nnn').html(nn_fh+"%")			         	
					
						}
			})
		})
	function clicks(index){
		         index=index+1;
				 //管辖区域第二层
				 var gxq_two=cx_b.length;
						  if(index!=0){
								  if($("#managementmiddle .pinpai").eq(index).hasClass('mypinpai')){
									  $("#managementmiddle .pinpai").eq(index).removeClass('mypinpai');
								   }
								   else{
										   $("#managementmiddle .pinpai").eq(index).addClass('mypinpai');
								   }
									  
							  }
							  else{
								  if($("#managementmiddle .pinpai").eq(0).hasClass('mypinpai')){
									  $("#managementmiddle .pinpai").removeClass('mypinpai');
								   }
								   else{
									  $("#managementmiddle .pinpai").addClass('mypinpai');
								   }
								  
							  }
								  var istrue=false;
								  var isfalse=false;
								  var j=1;
								  for(j=1;j<gxq_two;j++){
									  if(!($("#managementmiddle .pinpai").eq(j).hasClass('mypinpai'))){
										  istrue=true;
									  }
								  
								  }
								  if(istrue==false&&j==gxq_two){
									  $("#managementmiddle .pinpai").eq(0).addClass('mypinpai');
									  }
							  
							   if(index!=0){
								   if($("#managementmiddle .pinpai").eq(index).hasClass('mypinpai')&&$("#managementmiddle .pinpai").eq(0).hasClass('mypinpai')){
									   $("#managementmiddle .pinpai").eq(0).addClass('mypinpai')
								   }else{		
									   $("#managementmiddle .pinpai").eq(0).removeClass('mypinpai');
								   }
							   }
							           //将亮点储存
                 var threedata=[];  //将二级区域点亮保存
								 var k=0;
							 for(var i=1;i<$("#managementmiddle .pinpai").length;i++){
								 if($("#managementmiddle .pinpai").eq(i).hasClass('mypinpai')){
									threedata[k]=erji[i-1];
									 k++;
								 }
							 }
	}
	//增加全选
	function chaxun_one(){
		$('html #managementup').append('<div class="pinpai"><span>全选</span></div>')
		$('html #managementmiddle').append('<div class="pinpai"><span>全选</span></div>')
		$('html #managementdown').append('<div class="pinpai"><span>全选</span></div>')
    }

    //清除重复数据
	function unique(arr) {
	    if (!Array.isArray(arr)) {
	        return
	    }
	     var res=[];
         var ss=[];
	    for (let i = 0; i < arr.length; i++) {
	        if (res.indexOf(arr[i]) === -1) {
	            res.push(arr[i])
	        }
	    }
	    var ss=res;
	    for (var i = 0; i <ss.length; i++) {
		$('html #managementup').append('<div class="pinpai"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	    }
	    return res
	    
	}
	function unique_l(arr) {
	    if (!Array.isArray(arr)) {
	        return
	    }
	     var res=[];
         var ss=[];
	    for (let i = 0; i < arr.length; i++) {
	        if (res.indexOf(arr[i]) === -1) {
	            res.push(arr[i])
	        }
	    }
	   var ss=res;
	    	for (var i = 0; i <ss.length; i++) {
				$('html #managementmiddle').append('<div class="pinpai" onclick="clicks('+i+')"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
			}
	    return res
	    
	}
	function unique_r(arr) {
	    if (!Array.isArray(arr)) {
	        return
	    }
	     var res=[];
         var ss=[];
	    for (let i = 0; i < arr.length; i++) {
	        if (res.indexOf(arr[i]) === -1) {
	            res.push(arr[i])
	        }
	    }
	    var ss=res;
	for (var i = 0; i < ss.length; i++) {
		$('html #managementdown').append('<div class="pinpai"><span>' + ss[i] + '<p class="qu_yu"></p></span></div>')//门店的代号
	}
	    return res
	    
	}
