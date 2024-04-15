/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1.0, "series": [{"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-69", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-68", "isController": false}, {"data": [[4500.0, 1.0]], "isOverall": false, "label": "About Us", "isController": true}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-61", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-60", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-63", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-62", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-65", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-64", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-67", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-66", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-420", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-300", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-menu-421", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-menu-424", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-menu-425", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-menu-422", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "Hom", "isController": true}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-menu-423", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-menu-428", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-507", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-79", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-167", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Courses-506", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "Home-menu-426", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Courses-505", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-menu-427", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Courses-504", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Courses-503", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-502", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-501", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-165", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-500", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-72", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-71", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-170", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-74", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "Home-294", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-73", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-293", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-76", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-75", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-78", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-77", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-70", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-138", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-47", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-49", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-48", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-321", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-322", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-325", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-323", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-324", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-58", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-329", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-57", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-327", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-59", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-328", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-50", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-52", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-51", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-54", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-56", "isController": false}, {"data": [[1900.0, 1.0]], "isOverall": false, "label": "Home-55", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-352", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-353", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-119", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-356", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-118", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-357", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-113", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-112", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-115", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-114", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-110", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-350", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-351", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-343", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-344", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-341", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-342", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-128", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-347", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-348", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-345", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-346", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-126", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-349", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-120", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-122", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-121", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-menu-340", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-374", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-83", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-82", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-85", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-84", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-86", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-89", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-88", "isController": false}, {"data": [[10900.0, 1.0], [200.0, 1.0]], "isOverall": false, "label": "Home", "isController": true}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-81", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-80", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-109", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-106", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-105", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-108", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-107", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-102", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-101", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-104", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-103", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-100", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Courses-471-1", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-93", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "Courses-471-0", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-96", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Courses-471-3", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-95", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Courses-471-2", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-98", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-99", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-90", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-92", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-91", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-398", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-436", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-435", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-434", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-433", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "About Us-439", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "About Us-438", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-437", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "About Us-432", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "About Us-431", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Courses-469", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-468", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Courses-467", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-447", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-446", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Ho-6", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "About Us-445", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-444", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-474", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-473", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Courses-472", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-449", "isController": false}, {"data": [[1500.0, 1.0]], "isOverall": false, "label": "Courses-471", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-448", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-470", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "About Us-443", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-384", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "About Us-442", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "About Us-441", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "About Us-440", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-458", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Courses-466", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-457", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-465", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-456", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-455", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "About Us-459", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-450", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-454", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-453", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-452", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-451", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-461", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "About Us-460", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "About Us-462", "isController": false}, {"data": [[2700.0, 1.0], [3400.0, 1.0]], "isOverall": false, "label": "Home-menu", "isController": true}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "-5", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-38", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-7", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-menu-414", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-8", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-9", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-179", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-178", "isController": false}, {"data": [[300.0, 1.0], [3100.0, 1.0], [500.0, 1.0]], "isOverall": false, "label": "Courses", "isController": true}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-295", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-177", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-298", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-419", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-176", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-181", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-184", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-183", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-180", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-402", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-403", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-400", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-401", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-14", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-13", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-16", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-404", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "Home-15", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "Home-menu-405", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-18", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-17", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Home-185", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-19", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-10", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "Courses-495", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-12", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "Home-11", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 10900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 184.0, "series": [{"data": [[0.0, 184.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 1.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 2.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 17.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.70749404E12, "maxY": 1.0, "series": [{"data": [[1.7074941E12, 1.0], [1.70749404E12, 1.0]], "isOverall": false, "label": "ictthread", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7074941E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 31.0, "minX": 1.0, "maxY": 5639.0, "series": [{"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-69", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-69-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-68", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-68-Aggregated", "isController": false}, {"data": [[1.0, 4596.0]], "isOverall": false, "label": "About Us", "isController": true}, {"data": [[1.0, 4596.0]], "isOverall": false, "label": "About Us-Aggregated", "isController": true}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "Home-61", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "Home-61-Aggregated", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "Home-60", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "Home-60-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-63", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-63-Aggregated", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-62", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-62-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-65", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-65-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "Home-64", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "Home-64-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-67", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-67-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-66", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-66-Aggregated", "isController": false}, {"data": [[1.0, 120.0]], "isOverall": false, "label": "Home-menu-420", "isController": false}, {"data": [[1.0, 120.0]], "isOverall": false, "label": "Home-menu-420-Aggregated", "isController": false}, {"data": [[1.0, 108.0]], "isOverall": false, "label": "Home-menu-300", "isController": false}, {"data": [[1.0, 108.0]], "isOverall": false, "label": "Home-menu-300-Aggregated", "isController": false}, {"data": [[1.0, 394.0]], "isOverall": false, "label": "Home-menu-421", "isController": false}, {"data": [[1.0, 394.0]], "isOverall": false, "label": "Home-menu-421-Aggregated", "isController": false}, {"data": [[1.0, 387.0]], "isOverall": false, "label": "Home-menu-424", "isController": false}, {"data": [[1.0, 387.0]], "isOverall": false, "label": "Home-menu-424-Aggregated", "isController": false}, {"data": [[1.0, 332.0]], "isOverall": false, "label": "Home-menu-425", "isController": false}, {"data": [[1.0, 332.0]], "isOverall": false, "label": "Home-menu-425-Aggregated", "isController": false}, {"data": [[1.0, 393.0]], "isOverall": false, "label": "Home-menu-422", "isController": false}, {"data": [[1.0, 393.0]], "isOverall": false, "label": "Home-menu-422-Aggregated", "isController": false}, {"data": [[1.0, 898.0]], "isOverall": false, "label": "Hom", "isController": true}, {"data": [[1.0, 898.0]], "isOverall": false, "label": "Hom-Aggregated", "isController": true}, {"data": [[1.0, 328.0]], "isOverall": false, "label": "Home-menu-423", "isController": false}, {"data": [[1.0, 328.0]], "isOverall": false, "label": "Home-menu-423-Aggregated", "isController": false}, {"data": [[1.0, 392.0]], "isOverall": false, "label": "Home-menu-428", "isController": false}, {"data": [[1.0, 392.0]], "isOverall": false, "label": "Home-menu-428-Aggregated", "isController": false}, {"data": [[1.0, 62.0]], "isOverall": false, "label": "Courses-507", "isController": false}, {"data": [[1.0, 62.0]], "isOverall": false, "label": "Courses-507-Aggregated", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-79", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-79-Aggregated", "isController": false}, {"data": [[1.0, 64.0]], "isOverall": false, "label": "Home-167", "isController": false}, {"data": [[1.0, 64.0]], "isOverall": false, "label": "Home-167-Aggregated", "isController": false}, {"data": [[1.0, 255.0]], "isOverall": false, "label": "Courses-506", "isController": false}, {"data": [[1.0, 255.0]], "isOverall": false, "label": "Courses-506-Aggregated", "isController": false}, {"data": [[1.0, 532.0]], "isOverall": false, "label": "Home-menu-426", "isController": false}, {"data": [[1.0, 532.0]], "isOverall": false, "label": "Home-menu-426-Aggregated", "isController": false}, {"data": [[1.0, 260.0]], "isOverall": false, "label": "Courses-505", "isController": false}, {"data": [[1.0, 260.0]], "isOverall": false, "label": "Courses-505-Aggregated", "isController": false}, {"data": [[1.0, 392.0]], "isOverall": false, "label": "Home-menu-427", "isController": false}, {"data": [[1.0, 392.0]], "isOverall": false, "label": "Home-menu-427-Aggregated", "isController": false}, {"data": [[1.0, 124.0]], "isOverall": false, "label": "Courses-504", "isController": false}, {"data": [[1.0, 124.0]], "isOverall": false, "label": "Courses-504-Aggregated", "isController": false}, {"data": [[1.0, 239.0]], "isOverall": false, "label": "Courses-503", "isController": false}, {"data": [[1.0, 239.0]], "isOverall": false, "label": "Courses-503-Aggregated", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "Courses-502", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "Courses-502-Aggregated", "isController": false}, {"data": [[1.0, 69.0]], "isOverall": false, "label": "Courses-501", "isController": false}, {"data": [[1.0, 69.0]], "isOverall": false, "label": "Courses-501-Aggregated", "isController": false}, {"data": [[1.0, 70.0]], "isOverall": false, "label": "Home-165", "isController": false}, {"data": [[1.0, 70.0]], "isOverall": false, "label": "Home-165-Aggregated", "isController": false}, {"data": [[1.0, 72.0]], "isOverall": false, "label": "Courses-500", "isController": false}, {"data": [[1.0, 72.0]], "isOverall": false, "label": "Courses-500-Aggregated", "isController": false}, {"data": [[1.0, 62.0]], "isOverall": false, "label": "Home-72", "isController": false}, {"data": [[1.0, 62.0]], "isOverall": false, "label": "Home-72-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-71", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-71-Aggregated", "isController": false}, {"data": [[1.0, 70.0]], "isOverall": false, "label": "Home-170", "isController": false}, {"data": [[1.0, 70.0]], "isOverall": false, "label": "Home-170-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-74", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-74-Aggregated", "isController": false}, {"data": [[1.0, 412.0]], "isOverall": false, "label": "Home-294", "isController": false}, {"data": [[1.0, 412.0]], "isOverall": false, "label": "Home-294-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-73", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-73-Aggregated", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "Home-293", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "Home-293-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-76", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-76-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-75", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-75-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-78", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-78-Aggregated", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "Home-77", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "Home-77-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-70", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-70-Aggregated", "isController": false}, {"data": [[1.0, 81.0]], "isOverall": false, "label": "Home-138", "isController": false}, {"data": [[1.0, 81.0]], "isOverall": false, "label": "Home-138-Aggregated", "isController": false}, {"data": [[1.0, 170.0]], "isOverall": false, "label": "Home-47", "isController": false}, {"data": [[1.0, 170.0]], "isOverall": false, "label": "Home-47-Aggregated", "isController": false}, {"data": [[1.0, 107.0]], "isOverall": false, "label": "Home-49", "isController": false}, {"data": [[1.0, 107.0]], "isOverall": false, "label": "Home-49-Aggregated", "isController": false}, {"data": [[1.0, 280.0]], "isOverall": false, "label": "Home-48", "isController": false}, {"data": [[1.0, 280.0]], "isOverall": false, "label": "Home-48-Aggregated", "isController": false}, {"data": [[1.0, 179.0]], "isOverall": false, "label": "Home-menu-321", "isController": false}, {"data": [[1.0, 179.0]], "isOverall": false, "label": "Home-menu-321-Aggregated", "isController": false}, {"data": [[1.0, 122.0]], "isOverall": false, "label": "Home-menu-322", "isController": false}, {"data": [[1.0, 122.0]], "isOverall": false, "label": "Home-menu-322-Aggregated", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "Home-menu-325", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "Home-menu-325-Aggregated", "isController": false}, {"data": [[1.0, 68.0]], "isOverall": false, "label": "Home-menu-323", "isController": false}, {"data": [[1.0, 68.0]], "isOverall": false, "label": "Home-menu-323-Aggregated", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "Home-menu-324", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "Home-menu-324-Aggregated", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "Home-58", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "Home-58-Aggregated", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "Home-menu-329", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "Home-menu-329-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-57", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-57-Aggregated", "isController": false}, {"data": [[1.0, 63.0]], "isOverall": false, "label": "Home-menu-327", "isController": false}, {"data": [[1.0, 63.0]], "isOverall": false, "label": "Home-menu-327-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-59", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-59-Aggregated", "isController": false}, {"data": [[1.0, 100.0]], "isOverall": false, "label": "Home-menu-328", "isController": false}, {"data": [[1.0, 100.0]], "isOverall": false, "label": "Home-menu-328-Aggregated", "isController": false}, {"data": [[1.0, 135.0]], "isOverall": false, "label": "Home-50", "isController": false}, {"data": [[1.0, 135.0]], "isOverall": false, "label": "Home-50-Aggregated", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "Home-52", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "Home-52-Aggregated", "isController": false}, {"data": [[1.0, 106.0]], "isOverall": false, "label": "Home-51", "isController": false}, {"data": [[1.0, 106.0]], "isOverall": false, "label": "Home-51-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-54", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-54-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-56", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-56-Aggregated", "isController": false}, {"data": [[1.0, 1973.0]], "isOverall": false, "label": "Home-55", "isController": false}, {"data": [[1.0, 1973.0]], "isOverall": false, "label": "Home-55-Aggregated", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "Home-menu-352", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "Home-menu-352-Aggregated", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "Home-menu-353", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "Home-menu-353-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-119", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-119-Aggregated", "isController": false}, {"data": [[1.0, 38.0]], "isOverall": false, "label": "Home-menu-356", "isController": false}, {"data": [[1.0, 38.0]], "isOverall": false, "label": "Home-menu-356-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-118", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-118-Aggregated", "isController": false}, {"data": [[1.0, 65.0]], "isOverall": false, "label": "Home-menu-357", "isController": false}, {"data": [[1.0, 65.0]], "isOverall": false, "label": "Home-menu-357-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-113", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-113-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-112", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-112-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-115", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-115-Aggregated", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-114", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-114-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-110", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-110-Aggregated", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "Home-menu-350", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "Home-menu-350-Aggregated", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-menu-351", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-menu-351-Aggregated", "isController": false}, {"data": [[1.0, 38.0]], "isOverall": false, "label": "Home-menu-343", "isController": false}, {"data": [[1.0, 38.0]], "isOverall": false, "label": "Home-menu-343-Aggregated", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-menu-344", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-menu-344-Aggregated", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "Home-menu-341", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "Home-menu-341-Aggregated", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "Home-menu-342", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "Home-menu-342-Aggregated", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-128", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-128-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "Home-menu-347", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "Home-menu-347-Aggregated", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "Home-menu-348", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "Home-menu-348-Aggregated", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-menu-345", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-menu-345-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-menu-346", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-menu-346-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-126", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-126-Aggregated", "isController": false}, {"data": [[1.0, 40.0]], "isOverall": false, "label": "Home-menu-349", "isController": false}, {"data": [[1.0, 40.0]], "isOverall": false, "label": "Home-menu-349-Aggregated", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-120", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-120-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-122", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-122-Aggregated", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "Home-121", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "Home-121-Aggregated", "isController": false}, {"data": [[1.0, 297.0]], "isOverall": false, "label": "Home-menu-340", "isController": false}, {"data": [[1.0, 297.0]], "isOverall": false, "label": "Home-menu-340-Aggregated", "isController": false}, {"data": [[1.0, 31.0]], "isOverall": false, "label": "Home-menu-374", "isController": false}, {"data": [[1.0, 31.0]], "isOverall": false, "label": "Home-menu-374-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-83", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-83-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-82", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-82-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "Home-85", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "Home-85-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-84", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-84-Aggregated", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-86", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-86-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-89", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-89-Aggregated", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-88", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-88-Aggregated", "isController": false}, {"data": [[1.0, 5639.0]], "isOverall": false, "label": "Home", "isController": true}, {"data": [[1.0, 5639.0]], "isOverall": false, "label": "Home-Aggregated", "isController": true}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-81", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-81-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-80", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-80-Aggregated", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "Home-109", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "Home-109-Aggregated", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "Home-106", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "Home-106-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-105", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-105-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-108", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-108-Aggregated", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "Home-107", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "Home-107-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-102", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-102-Aggregated", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "Home-101", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "Home-101-Aggregated", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-104", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-104-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-103", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "Home-103-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-100", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-100-Aggregated", "isController": false}, {"data": [[1.0, 255.0]], "isOverall": false, "label": "Courses-471-1", "isController": false}, {"data": [[1.0, 255.0]], "isOverall": false, "label": "Courses-471-1-Aggregated", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-93", "isController": false}, {"data": [[1.0, 45.0]], "isOverall": false, "label": "Home-93-Aggregated", "isController": false}, {"data": [[1.0, 481.0]], "isOverall": false, "label": "Courses-471-0", "isController": false}, {"data": [[1.0, 481.0]], "isOverall": false, "label": "Courses-471-0-Aggregated", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "Home-96", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "Home-96-Aggregated", "isController": false}, {"data": [[1.0, 391.0]], "isOverall": false, "label": "Courses-471-3", "isController": false}, {"data": [[1.0, 391.0]], "isOverall": false, "label": "Courses-471-3-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-95", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-95-Aggregated", "isController": false}, {"data": [[1.0, 398.0]], "isOverall": false, "label": "Courses-471-2", "isController": false}, {"data": [[1.0, 398.0]], "isOverall": false, "label": "Courses-471-2-Aggregated", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "Home-98", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "Home-98-Aggregated", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-99", "isController": false}, {"data": [[1.0, 44.0]], "isOverall": false, "label": "Home-99-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-90", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-90-Aggregated", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-92", "isController": false}, {"data": [[1.0, 43.0]], "isOverall": false, "label": "Home-92-Aggregated", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "Home-91", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "Home-91-Aggregated", "isController": false}, {"data": [[1.0, 117.0]], "isOverall": false, "label": "Home-menu-398", "isController": false}, {"data": [[1.0, 117.0]], "isOverall": false, "label": "Home-menu-398-Aggregated", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "About Us-436", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "About Us-436-Aggregated", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "About Us-435", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "About Us-435-Aggregated", "isController": false}, {"data": [[1.0, 60.0]], "isOverall": false, "label": "About Us-434", "isController": false}, {"data": [[1.0, 60.0]], "isOverall": false, "label": "About Us-434-Aggregated", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "About Us-433", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "About Us-433-Aggregated", "isController": false}, {"data": [[1.0, 386.0]], "isOverall": false, "label": "About Us-439", "isController": false}, {"data": [[1.0, 386.0]], "isOverall": false, "label": "About Us-439-Aggregated", "isController": false}, {"data": [[1.0, 344.0]], "isOverall": false, "label": "About Us-438", "isController": false}, {"data": [[1.0, 344.0]], "isOverall": false, "label": "About Us-438-Aggregated", "isController": false}, {"data": [[1.0, 63.0]], "isOverall": false, "label": "About Us-437", "isController": false}, {"data": [[1.0, 63.0]], "isOverall": false, "label": "About Us-437-Aggregated", "isController": false}, {"data": [[1.0, 193.0]], "isOverall": false, "label": "About Us-432", "isController": false}, {"data": [[1.0, 193.0]], "isOverall": false, "label": "About Us-432-Aggregated", "isController": false}, {"data": [[1.0, 177.0]], "isOverall": false, "label": "About Us-431", "isController": false}, {"data": [[1.0, 177.0]], "isOverall": false, "label": "About Us-431-Aggregated", "isController": false}, {"data": [[1.0, 290.0]], "isOverall": false, "label": "Courses-469", "isController": false}, {"data": [[1.0, 290.0]], "isOverall": false, "label": "Courses-469-Aggregated", "isController": false}, {"data": [[1.0, 62.0]], "isOverall": false, "label": "Courses-468", "isController": false}, {"data": [[1.0, 62.0]], "isOverall": false, "label": "Courses-468-Aggregated", "isController": false}, {"data": [[1.0, 224.0]], "isOverall": false, "label": "Courses-467", "isController": false}, {"data": [[1.0, 224.0]], "isOverall": false, "label": "Courses-467-Aggregated", "isController": false}, {"data": [[1.0, 71.0]], "isOverall": false, "label": "About Us-447", "isController": false}, {"data": [[1.0, 71.0]], "isOverall": false, "label": "About Us-447-Aggregated", "isController": false}, {"data": [[1.0, 38.0]], "isOverall": false, "label": "About Us-446", "isController": false}, {"data": [[1.0, 38.0]], "isOverall": false, "label": "About Us-446-Aggregated", "isController": false}, {"data": [[1.0, 283.0]], "isOverall": false, "label": "Ho-6", "isController": false}, {"data": [[1.0, 283.0]], "isOverall": false, "label": "Ho-6-Aggregated", "isController": false}, {"data": [[1.0, 237.0]], "isOverall": false, "label": "About Us-445", "isController": false}, {"data": [[1.0, 237.0]], "isOverall": false, "label": "About Us-445-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "About Us-444", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "About Us-444-Aggregated", "isController": false}, {"data": [[1.0, 36.0]], "isOverall": false, "label": "Courses-474", "isController": false}, {"data": [[1.0, 36.0]], "isOverall": false, "label": "Courses-474-Aggregated", "isController": false}, {"data": [[1.0, 75.0]], "isOverall": false, "label": "Courses-473", "isController": false}, {"data": [[1.0, 75.0]], "isOverall": false, "label": "Courses-473-Aggregated", "isController": false}, {"data": [[1.0, 256.0]], "isOverall": false, "label": "Courses-472", "isController": false}, {"data": [[1.0, 256.0]], "isOverall": false, "label": "Courses-472-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "About Us-449", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "About Us-449-Aggregated", "isController": false}, {"data": [[1.0, 1567.0]], "isOverall": false, "label": "Courses-471", "isController": false}, {"data": [[1.0, 1567.0]], "isOverall": false, "label": "Courses-471-Aggregated", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "About Us-448", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "About Us-448-Aggregated", "isController": false}, {"data": [[1.0, 72.0]], "isOverall": false, "label": "Courses-470", "isController": false}, {"data": [[1.0, 72.0]], "isOverall": false, "label": "Courses-470-Aggregated", "isController": false}, {"data": [[1.0, 427.0]], "isOverall": false, "label": "About Us-443", "isController": false}, {"data": [[1.0, 427.0]], "isOverall": false, "label": "About Us-443-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-menu-384", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-menu-384-Aggregated", "isController": false}, {"data": [[1.0, 331.0]], "isOverall": false, "label": "About Us-442", "isController": false}, {"data": [[1.0, 331.0]], "isOverall": false, "label": "About Us-442-Aggregated", "isController": false}, {"data": [[1.0, 402.0]], "isOverall": false, "label": "About Us-441", "isController": false}, {"data": [[1.0, 402.0]], "isOverall": false, "label": "About Us-441-Aggregated", "isController": false}, {"data": [[1.0, 396.0]], "isOverall": false, "label": "About Us-440", "isController": false}, {"data": [[1.0, 396.0]], "isOverall": false, "label": "About Us-440-Aggregated", "isController": false}, {"data": [[1.0, 33.0]], "isOverall": false, "label": "About Us-458", "isController": false}, {"data": [[1.0, 33.0]], "isOverall": false, "label": "About Us-458-Aggregated", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "Courses-466", "isController": false}, {"data": [[1.0, 161.0]], "isOverall": false, "label": "Courses-466-Aggregated", "isController": false}, {"data": [[1.0, 33.0]], "isOverall": false, "label": "About Us-457", "isController": false}, {"data": [[1.0, 33.0]], "isOverall": false, "label": "About Us-457-Aggregated", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "Courses-465", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "Courses-465-Aggregated", "isController": false}, {"data": [[1.0, 38.0]], "isOverall": false, "label": "About Us-456", "isController": false}, {"data": [[1.0, 38.0]], "isOverall": false, "label": "About Us-456-Aggregated", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "About Us-455", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "About Us-455-Aggregated", "isController": false}, {"data": [[1.0, 339.0]], "isOverall": false, "label": "About Us-459", "isController": false}, {"data": [[1.0, 339.0]], "isOverall": false, "label": "About Us-459-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "About Us-450", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "About Us-450-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "About Us-454", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "About Us-454-Aggregated", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "About Us-453", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "About Us-453-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "About Us-452", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "About Us-452-Aggregated", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "About Us-451", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "About Us-451-Aggregated", "isController": false}, {"data": [[1.0, 35.0]], "isOverall": false, "label": "About Us-461", "isController": false}, {"data": [[1.0, 35.0]], "isOverall": false, "label": "About Us-461-Aggregated", "isController": false}, {"data": [[1.0, 390.0]], "isOverall": false, "label": "About Us-460", "isController": false}, {"data": [[1.0, 390.0]], "isOverall": false, "label": "About Us-460-Aggregated", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "About Us-462", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "About Us-462-Aggregated", "isController": false}, {"data": [[1.0, 3109.5]], "isOverall": false, "label": "Home-menu", "isController": true}, {"data": [[1.0, 3109.5]], "isOverall": false, "label": "Home-menu-Aggregated", "isController": true}, {"data": [[1.0, 898.0]], "isOverall": false, "label": "-5", "isController": false}, {"data": [[1.0, 898.0]], "isOverall": false, "label": "-5-Aggregated", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "Home-38", "isController": false}, {"data": [[1.0, 39.0]], "isOverall": false, "label": "Home-38-Aggregated", "isController": false}, {"data": [[1.0, 258.0]], "isOverall": false, "label": "Home-7", "isController": false}, {"data": [[1.0, 258.0]], "isOverall": false, "label": "Home-7-Aggregated", "isController": false}, {"data": [[1.0, 34.0]], "isOverall": false, "label": "Home-menu-414", "isController": false}, {"data": [[1.0, 34.0]], "isOverall": false, "label": "Home-menu-414-Aggregated", "isController": false}, {"data": [[1.0, 312.0]], "isOverall": false, "label": "Home-8", "isController": false}, {"data": [[1.0, 312.0]], "isOverall": false, "label": "Home-8-Aggregated", "isController": false}, {"data": [[1.0, 289.0]], "isOverall": false, "label": "Home-9", "isController": false}, {"data": [[1.0, 289.0]], "isOverall": false, "label": "Home-9-Aggregated", "isController": false}, {"data": [[1.0, 40.0]], "isOverall": false, "label": "Home-179", "isController": false}, {"data": [[1.0, 40.0]], "isOverall": false, "label": "Home-179-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-178", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-178-Aggregated", "isController": false}, {"data": [[1.0, 1324.3333333333335]], "isOverall": false, "label": "Courses", "isController": true}, {"data": [[1.0, 1324.3333333333335]], "isOverall": false, "label": "Courses-Aggregated", "isController": true}, {"data": [[1.0, 135.0]], "isOverall": false, "label": "Home-295", "isController": false}, {"data": [[1.0, 135.0]], "isOverall": false, "label": "Home-295-Aggregated", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "Home-177", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "Home-177-Aggregated", "isController": false}, {"data": [[1.0, 296.0]], "isOverall": false, "label": "Home-298", "isController": false}, {"data": [[1.0, 296.0]], "isOverall": false, "label": "Home-298-Aggregated", "isController": false}, {"data": [[1.0, 156.0]], "isOverall": false, "label": "Home-menu-419", "isController": false}, {"data": [[1.0, 156.0]], "isOverall": false, "label": "Home-menu-419-Aggregated", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "Home-176", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "Home-176-Aggregated", "isController": false}, {"data": [[1.0, 40.0]], "isOverall": false, "label": "Home-181", "isController": false}, {"data": [[1.0, 40.0]], "isOverall": false, "label": "Home-181-Aggregated", "isController": false}, {"data": [[1.0, 40.0]], "isOverall": false, "label": "Home-184", "isController": false}, {"data": [[1.0, 40.0]], "isOverall": false, "label": "Home-184-Aggregated", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-183", "isController": false}, {"data": [[1.0, 41.0]], "isOverall": false, "label": "Home-183-Aggregated", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "Home-180", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "Home-180-Aggregated", "isController": false}, {"data": [[1.0, 137.0]], "isOverall": false, "label": "Home-menu-402", "isController": false}, {"data": [[1.0, 137.0]], "isOverall": false, "label": "Home-menu-402-Aggregated", "isController": false}, {"data": [[1.0, 120.0]], "isOverall": false, "label": "Home-menu-403", "isController": false}, {"data": [[1.0, 120.0]], "isOverall": false, "label": "Home-menu-403-Aggregated", "isController": false}, {"data": [[1.0, 115.0]], "isOverall": false, "label": "Home-menu-400", "isController": false}, {"data": [[1.0, 115.0]], "isOverall": false, "label": "Home-menu-400-Aggregated", "isController": false}, {"data": [[1.0, 147.0]], "isOverall": false, "label": "Home-menu-401", "isController": false}, {"data": [[1.0, 147.0]], "isOverall": false, "label": "Home-menu-401-Aggregated", "isController": false}, {"data": [[1.0, 293.0]], "isOverall": false, "label": "Home-14", "isController": false}, {"data": [[1.0, 293.0]], "isOverall": false, "label": "Home-14-Aggregated", "isController": false}, {"data": [[1.0, 278.0]], "isOverall": false, "label": "Home-13", "isController": false}, {"data": [[1.0, 278.0]], "isOverall": false, "label": "Home-13-Aggregated", "isController": false}, {"data": [[1.0, 290.0]], "isOverall": false, "label": "Home-16", "isController": false}, {"data": [[1.0, 290.0]], "isOverall": false, "label": "Home-16-Aggregated", "isController": false}, {"data": [[1.0, 119.0]], "isOverall": false, "label": "Home-menu-404", "isController": false}, {"data": [[1.0, 119.0]], "isOverall": false, "label": "Home-menu-404-Aggregated", "isController": false}, {"data": [[1.0, 302.0]], "isOverall": false, "label": "Home-15", "isController": false}, {"data": [[1.0, 302.0]], "isOverall": false, "label": "Home-15-Aggregated", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "Home-menu-405", "isController": false}, {"data": [[1.0, 153.0]], "isOverall": false, "label": "Home-menu-405-Aggregated", "isController": false}, {"data": [[1.0, 78.0]], "isOverall": false, "label": "Home-18", "isController": false}, {"data": [[1.0, 78.0]], "isOverall": false, "label": "Home-18-Aggregated", "isController": false}, {"data": [[1.0, 299.0]], "isOverall": false, "label": "Home-17", "isController": false}, {"data": [[1.0, 299.0]], "isOverall": false, "label": "Home-17-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-185", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "Home-185-Aggregated", "isController": false}, {"data": [[1.0, 298.0]], "isOverall": false, "label": "Home-19", "isController": false}, {"data": [[1.0, 298.0]], "isOverall": false, "label": "Home-19-Aggregated", "isController": false}, {"data": [[1.0, 257.0]], "isOverall": false, "label": "Home-10", "isController": false}, {"data": [[1.0, 257.0]], "isOverall": false, "label": "Home-10-Aggregated", "isController": false}, {"data": [[1.0, 34.0]], "isOverall": false, "label": "Courses-495", "isController": false}, {"data": [[1.0, 34.0]], "isOverall": false, "label": "Courses-495-Aggregated", "isController": false}, {"data": [[1.0, 288.0]], "isOverall": false, "label": "Home-12", "isController": false}, {"data": [[1.0, 288.0]], "isOverall": false, "label": "Home-12-Aggregated", "isController": false}, {"data": [[1.0, 273.0]], "isOverall": false, "label": "Home-11", "isController": false}, {"data": [[1.0, 273.0]], "isOverall": false, "label": "Home-11-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 204.3, "minX": 1.70749404E12, "maxY": 150322.63333333333, "series": [{"data": [[1.7074941E12, 2667.9], [1.70749404E12, 150322.63333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7074941E12, 204.3], [1.70749404E12, 1591.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7074941E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 31.0, "minX": 1.70749404E12, "maxY": 5639.0, "series": [{"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-69", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-68", "isController": false}, {"data": [[1.70749404E12, 4596.0]], "isOverall": false, "label": "About Us", "isController": true}, {"data": [[1.70749404E12, 53.0]], "isOverall": false, "label": "Home-61", "isController": false}, {"data": [[1.70749404E12, 58.0]], "isOverall": false, "label": "Home-60", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-63", "isController": false}, {"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-62", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-65", "isController": false}, {"data": [[1.70749404E12, 46.0]], "isOverall": false, "label": "Home-64", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-67", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-66", "isController": false}, {"data": [[1.70749404E12, 120.0]], "isOverall": false, "label": "Home-menu-420", "isController": false}, {"data": [[1.70749404E12, 108.0]], "isOverall": false, "label": "Home-menu-300", "isController": false}, {"data": [[1.70749404E12, 394.0]], "isOverall": false, "label": "Home-menu-421", "isController": false}, {"data": [[1.70749404E12, 387.0]], "isOverall": false, "label": "Home-menu-424", "isController": false}, {"data": [[1.70749404E12, 332.0]], "isOverall": false, "label": "Home-menu-425", "isController": false}, {"data": [[1.70749404E12, 393.0]], "isOverall": false, "label": "Home-menu-422", "isController": false}, {"data": [[1.70749404E12, 898.0]], "isOverall": false, "label": "Hom", "isController": true}, {"data": [[1.70749404E12, 328.0]], "isOverall": false, "label": "Home-menu-423", "isController": false}, {"data": [[1.70749404E12, 392.0]], "isOverall": false, "label": "Home-menu-428", "isController": false}, {"data": [[1.7074941E12, 62.0]], "isOverall": false, "label": "Courses-507", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-79", "isController": false}, {"data": [[1.70749404E12, 64.0]], "isOverall": false, "label": "Home-167", "isController": false}, {"data": [[1.7074941E12, 255.0]], "isOverall": false, "label": "Courses-506", "isController": false}, {"data": [[1.70749404E12, 532.0]], "isOverall": false, "label": "Home-menu-426", "isController": false}, {"data": [[1.7074941E12, 260.0]], "isOverall": false, "label": "Courses-505", "isController": false}, {"data": [[1.70749404E12, 392.0]], "isOverall": false, "label": "Home-menu-427", "isController": false}, {"data": [[1.7074941E12, 124.0]], "isOverall": false, "label": "Courses-504", "isController": false}, {"data": [[1.7074941E12, 239.0]], "isOverall": false, "label": "Courses-503", "isController": false}, {"data": [[1.7074941E12, 59.0]], "isOverall": false, "label": "Courses-502", "isController": false}, {"data": [[1.7074941E12, 69.0]], "isOverall": false, "label": "Courses-501", "isController": false}, {"data": [[1.70749404E12, 70.0]], "isOverall": false, "label": "Home-165", "isController": false}, {"data": [[1.7074941E12, 72.0]], "isOverall": false, "label": "Courses-500", "isController": false}, {"data": [[1.70749404E12, 62.0]], "isOverall": false, "label": "Home-72", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-71", "isController": false}, {"data": [[1.70749404E12, 70.0]], "isOverall": false, "label": "Home-170", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-74", "isController": false}, {"data": [[1.70749404E12, 412.0]], "isOverall": false, "label": "Home-294", "isController": false}, {"data": [[1.70749404E12, 51.0]], "isOverall": false, "label": "Home-73", "isController": false}, {"data": [[1.70749404E12, 56.0]], "isOverall": false, "label": "Home-293", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-76", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-75", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-78", "isController": false}, {"data": [[1.70749404E12, 58.0]], "isOverall": false, "label": "Home-77", "isController": false}, {"data": [[1.70749404E12, 51.0]], "isOverall": false, "label": "Home-70", "isController": false}, {"data": [[1.70749404E12, 81.0]], "isOverall": false, "label": "Home-138", "isController": false}, {"data": [[1.70749404E12, 170.0]], "isOverall": false, "label": "Home-47", "isController": false}, {"data": [[1.70749404E12, 107.0]], "isOverall": false, "label": "Home-49", "isController": false}, {"data": [[1.70749404E12, 280.0]], "isOverall": false, "label": "Home-48", "isController": false}, {"data": [[1.70749404E12, 179.0]], "isOverall": false, "label": "Home-menu-321", "isController": false}, {"data": [[1.70749404E12, 122.0]], "isOverall": false, "label": "Home-menu-322", "isController": false}, {"data": [[1.70749404E12, 59.0]], "isOverall": false, "label": "Home-menu-325", "isController": false}, {"data": [[1.70749404E12, 68.0]], "isOverall": false, "label": "Home-menu-323", "isController": false}, {"data": [[1.70749404E12, 59.0]], "isOverall": false, "label": "Home-menu-324", "isController": false}, {"data": [[1.70749404E12, 58.0]], "isOverall": false, "label": "Home-58", "isController": false}, {"data": [[1.70749404E12, 49.0]], "isOverall": false, "label": "Home-menu-329", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-57", "isController": false}, {"data": [[1.70749404E12, 63.0]], "isOverall": false, "label": "Home-menu-327", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-59", "isController": false}, {"data": [[1.70749404E12, 100.0]], "isOverall": false, "label": "Home-menu-328", "isController": false}, {"data": [[1.70749404E12, 135.0]], "isOverall": false, "label": "Home-50", "isController": false}, {"data": [[1.70749404E12, 161.0]], "isOverall": false, "label": "Home-52", "isController": false}, {"data": [[1.70749404E12, 106.0]], "isOverall": false, "label": "Home-51", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-54", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-56", "isController": false}, {"data": [[1.70749404E12, 1973.0]], "isOverall": false, "label": "Home-55", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-menu-352", "isController": false}, {"data": [[1.70749404E12, 48.0]], "isOverall": false, "label": "Home-menu-353", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-119", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "Home-menu-356", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-118", "isController": false}, {"data": [[1.70749404E12, 65.0]], "isOverall": false, "label": "Home-menu-357", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-113", "isController": false}, {"data": [[1.70749404E12, 51.0]], "isOverall": false, "label": "Home-112", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-115", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-114", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-110", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-menu-350", "isController": false}, {"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-menu-351", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "Home-menu-343", "isController": false}, {"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-menu-344", "isController": false}, {"data": [[1.70749404E12, 54.0]], "isOverall": false, "label": "Home-menu-341", "isController": false}, {"data": [[1.70749404E12, 54.0]], "isOverall": false, "label": "Home-menu-342", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-128", "isController": false}, {"data": [[1.70749404E12, 46.0]], "isOverall": false, "label": "Home-menu-347", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-menu-348", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-menu-345", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-menu-346", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-126", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-menu-349", "isController": false}, {"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-120", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-122", "isController": false}, {"data": [[1.70749404E12, 56.0]], "isOverall": false, "label": "Home-121", "isController": false}, {"data": [[1.70749404E12, 297.0]], "isOverall": false, "label": "Home-menu-340", "isController": false}, {"data": [[1.70749404E12, 31.0]], "isOverall": false, "label": "Home-menu-374", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-83", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-82", "isController": false}, {"data": [[1.70749404E12, 46.0]], "isOverall": false, "label": "Home-85", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-84", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-86", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-89", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-88", "isController": false}, {"data": [[1.70749404E12, 5639.0]], "isOverall": false, "label": "Home", "isController": true}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-81", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-80", "isController": false}, {"data": [[1.70749404E12, 48.0]], "isOverall": false, "label": "Home-109", "isController": false}, {"data": [[1.70749404E12, 50.0]], "isOverall": false, "label": "Home-106", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-105", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-108", "isController": false}, {"data": [[1.70749404E12, 47.0]], "isOverall": false, "label": "Home-107", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-102", "isController": false}, {"data": [[1.70749404E12, 53.0]], "isOverall": false, "label": "Home-101", "isController": false}, {"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-104", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-103", "isController": false}, {"data": [[1.70749404E12, 51.0]], "isOverall": false, "label": "Home-100", "isController": false}, {"data": [[1.7074941E12, 255.0]], "isOverall": false, "label": "Courses-471-1", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-93", "isController": false}, {"data": [[1.7074941E12, 481.0]], "isOverall": false, "label": "Courses-471-0", "isController": false}, {"data": [[1.70749404E12, 52.0]], "isOverall": false, "label": "Home-96", "isController": false}, {"data": [[1.7074941E12, 391.0]], "isOverall": false, "label": "Courses-471-3", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-95", "isController": false}, {"data": [[1.7074941E12, 398.0]], "isOverall": false, "label": "Courses-471-2", "isController": false}, {"data": [[1.70749404E12, 47.0]], "isOverall": false, "label": "Home-98", "isController": false}, {"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-99", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-90", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-92", "isController": false}, {"data": [[1.70749404E12, 52.0]], "isOverall": false, "label": "Home-91", "isController": false}, {"data": [[1.70749404E12, 117.0]], "isOverall": false, "label": "Home-menu-398", "isController": false}, {"data": [[1.70749404E12, 61.0]], "isOverall": false, "label": "About Us-436", "isController": false}, {"data": [[1.70749404E12, 54.0]], "isOverall": false, "label": "About Us-435", "isController": false}, {"data": [[1.70749404E12, 60.0]], "isOverall": false, "label": "About Us-434", "isController": false}, {"data": [[1.70749404E12, 59.0]], "isOverall": false, "label": "About Us-433", "isController": false}, {"data": [[1.70749404E12, 386.0]], "isOverall": false, "label": "About Us-439", "isController": false}, {"data": [[1.70749404E12, 344.0]], "isOverall": false, "label": "About Us-438", "isController": false}, {"data": [[1.70749404E12, 63.0]], "isOverall": false, "label": "About Us-437", "isController": false}, {"data": [[1.70749404E12, 193.0]], "isOverall": false, "label": "About Us-432", "isController": false}, {"data": [[1.70749404E12, 177.0]], "isOverall": false, "label": "About Us-431", "isController": false}, {"data": [[1.70749404E12, 290.0]], "isOverall": false, "label": "Courses-469", "isController": false}, {"data": [[1.70749404E12, 62.0]], "isOverall": false, "label": "Courses-468", "isController": false}, {"data": [[1.70749404E12, 224.0]], "isOverall": false, "label": "Courses-467", "isController": false}, {"data": [[1.70749404E12, 71.0]], "isOverall": false, "label": "About Us-447", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "About Us-446", "isController": false}, {"data": [[1.70749404E12, 283.0]], "isOverall": false, "label": "Ho-6", "isController": false}, {"data": [[1.70749404E12, 237.0]], "isOverall": false, "label": "About Us-445", "isController": false}, {"data": [[1.70749404E12, 46.0]], "isOverall": false, "label": "About Us-444", "isController": false}, {"data": [[1.7074941E12, 36.0]], "isOverall": false, "label": "Courses-474", "isController": false}, {"data": [[1.7074941E12, 75.0]], "isOverall": false, "label": "Courses-473", "isController": false}, {"data": [[1.7074941E12, 256.0]], "isOverall": false, "label": "Courses-472", "isController": false}, {"data": [[1.70749404E12, 46.0]], "isOverall": false, "label": "About Us-449", "isController": false}, {"data": [[1.7074941E12, 1567.0]], "isOverall": false, "label": "Courses-471", "isController": false}, {"data": [[1.70749404E12, 49.0]], "isOverall": false, "label": "About Us-448", "isController": false}, {"data": [[1.70749404E12, 72.0]], "isOverall": false, "label": "Courses-470", "isController": false}, {"data": [[1.70749404E12, 427.0]], "isOverall": false, "label": "About Us-443", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-menu-384", "isController": false}, {"data": [[1.70749404E12, 331.0]], "isOverall": false, "label": "About Us-442", "isController": false}, {"data": [[1.70749404E12, 402.0]], "isOverall": false, "label": "About Us-441", "isController": false}, {"data": [[1.70749404E12, 396.0]], "isOverall": false, "label": "About Us-440", "isController": false}, {"data": [[1.70749404E12, 33.0]], "isOverall": false, "label": "About Us-458", "isController": false}, {"data": [[1.70749404E12, 161.0]], "isOverall": false, "label": "Courses-466", "isController": false}, {"data": [[1.70749404E12, 33.0]], "isOverall": false, "label": "About Us-457", "isController": false}, {"data": [[1.70749404E12, 56.0]], "isOverall": false, "label": "Courses-465", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "About Us-456", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "About Us-455", "isController": false}, {"data": [[1.70749404E12, 339.0]], "isOverall": false, "label": "About Us-459", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "About Us-450", "isController": false}, {"data": [[1.70749404E12, 46.0]], "isOverall": false, "label": "About Us-454", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "About Us-453", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "About Us-452", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "About Us-451", "isController": false}, {"data": [[1.70749404E12, 35.0]], "isOverall": false, "label": "About Us-461", "isController": false}, {"data": [[1.70749404E12, 390.0]], "isOverall": false, "label": "About Us-460", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "About Us-462", "isController": false}, {"data": [[1.70749404E12, 3109.5]], "isOverall": false, "label": "Home-menu", "isController": true}, {"data": [[1.70749404E12, 898.0]], "isOverall": false, "label": "-5", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-38", "isController": false}, {"data": [[1.70749404E12, 258.0]], "isOverall": false, "label": "Home-7", "isController": false}, {"data": [[1.70749404E12, 34.0]], "isOverall": false, "label": "Home-menu-414", "isController": false}, {"data": [[1.70749404E12, 312.0]], "isOverall": false, "label": "Home-8", "isController": false}, {"data": [[1.70749404E12, 289.0]], "isOverall": false, "label": "Home-9", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-179", "isController": false}, {"data": [[1.70749404E12, 51.0]], "isOverall": false, "label": "Home-178", "isController": false}, {"data": [[1.7074941E12, 3108.0], [1.70749404E12, 432.5]], "isOverall": false, "label": "Courses", "isController": true}, {"data": [[1.70749404E12, 135.0]], "isOverall": false, "label": "Home-295", "isController": false}, {"data": [[1.70749404E12, 47.0]], "isOverall": false, "label": "Home-177", "isController": false}, {"data": [[1.70749404E12, 296.0]], "isOverall": false, "label": "Home-298", "isController": false}, {"data": [[1.70749404E12, 156.0]], "isOverall": false, "label": "Home-menu-419", "isController": false}, {"data": [[1.70749404E12, 53.0]], "isOverall": false, "label": "Home-176", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-181", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-184", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-183", "isController": false}, {"data": [[1.70749404E12, 47.0]], "isOverall": false, "label": "Home-180", "isController": false}, {"data": [[1.70749404E12, 137.0]], "isOverall": false, "label": "Home-menu-402", "isController": false}, {"data": [[1.70749404E12, 120.0]], "isOverall": false, "label": "Home-menu-403", "isController": false}, {"data": [[1.70749404E12, 115.0]], "isOverall": false, "label": "Home-menu-400", "isController": false}, {"data": [[1.70749404E12, 147.0]], "isOverall": false, "label": "Home-menu-401", "isController": false}, {"data": [[1.70749404E12, 293.0]], "isOverall": false, "label": "Home-14", "isController": false}, {"data": [[1.70749404E12, 278.0]], "isOverall": false, "label": "Home-13", "isController": false}, {"data": [[1.70749404E12, 290.0]], "isOverall": false, "label": "Home-16", "isController": false}, {"data": [[1.70749404E12, 119.0]], "isOverall": false, "label": "Home-menu-404", "isController": false}, {"data": [[1.70749404E12, 302.0]], "isOverall": false, "label": "Home-15", "isController": false}, {"data": [[1.70749404E12, 153.0]], "isOverall": false, "label": "Home-menu-405", "isController": false}, {"data": [[1.70749404E12, 78.0]], "isOverall": false, "label": "Home-18", "isController": false}, {"data": [[1.70749404E12, 299.0]], "isOverall": false, "label": "Home-17", "isController": false}, {"data": [[1.70749404E12, 51.0]], "isOverall": false, "label": "Home-185", "isController": false}, {"data": [[1.70749404E12, 298.0]], "isOverall": false, "label": "Home-19", "isController": false}, {"data": [[1.70749404E12, 257.0]], "isOverall": false, "label": "Home-10", "isController": false}, {"data": [[1.7074941E12, 34.0]], "isOverall": false, "label": "Courses-495", "isController": false}, {"data": [[1.70749404E12, 288.0]], "isOverall": false, "label": "Home-12", "isController": false}, {"data": [[1.70749404E12, 273.0]], "isOverall": false, "label": "Home-11", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7074941E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 31.0, "minX": 1.70749404E12, "maxY": 4251.0, "series": [{"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-69", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-68", "isController": false}, {"data": [[1.70749404E12, 4251.0]], "isOverall": false, "label": "About Us", "isController": true}, {"data": [[1.70749404E12, 53.0]], "isOverall": false, "label": "Home-61", "isController": false}, {"data": [[1.70749404E12, 57.0]], "isOverall": false, "label": "Home-60", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-63", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-62", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-65", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-64", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-67", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-66", "isController": false}, {"data": [[1.70749404E12, 96.0]], "isOverall": false, "label": "Home-menu-420", "isController": false}, {"data": [[1.70749404E12, 102.0]], "isOverall": false, "label": "Home-menu-300", "isController": false}, {"data": [[1.70749404E12, 394.0]], "isOverall": false, "label": "Home-menu-421", "isController": false}, {"data": [[1.70749404E12, 387.0]], "isOverall": false, "label": "Home-menu-424", "isController": false}, {"data": [[1.70749404E12, 332.0]], "isOverall": false, "label": "Home-menu-425", "isController": false}, {"data": [[1.70749404E12, 393.0]], "isOverall": false, "label": "Home-menu-422", "isController": false}, {"data": [[1.70749404E12, 897.0]], "isOverall": false, "label": "Hom", "isController": true}, {"data": [[1.70749404E12, 328.0]], "isOverall": false, "label": "Home-menu-423", "isController": false}, {"data": [[1.70749404E12, 392.0]], "isOverall": false, "label": "Home-menu-428", "isController": false}, {"data": [[1.7074941E12, 62.0]], "isOverall": false, "label": "Courses-507", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "Home-79", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-167", "isController": false}, {"data": [[1.7074941E12, 254.0]], "isOverall": false, "label": "Courses-506", "isController": false}, {"data": [[1.70749404E12, 531.0]], "isOverall": false, "label": "Home-menu-426", "isController": false}, {"data": [[1.7074941E12, 260.0]], "isOverall": false, "label": "Courses-505", "isController": false}, {"data": [[1.70749404E12, 392.0]], "isOverall": false, "label": "Home-menu-427", "isController": false}, {"data": [[1.7074941E12, 102.0]], "isOverall": false, "label": "Courses-504", "isController": false}, {"data": [[1.7074941E12, 159.0]], "isOverall": false, "label": "Courses-503", "isController": false}, {"data": [[1.7074941E12, 59.0]], "isOverall": false, "label": "Courses-502", "isController": false}, {"data": [[1.7074941E12, 69.0]], "isOverall": false, "label": "Courses-501", "isController": false}, {"data": [[1.70749404E12, 61.0]], "isOverall": false, "label": "Home-165", "isController": false}, {"data": [[1.7074941E12, 72.0]], "isOverall": false, "label": "Courses-500", "isController": false}, {"data": [[1.70749404E12, 62.0]], "isOverall": false, "label": "Home-72", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-71", "isController": false}, {"data": [[1.70749404E12, 50.0]], "isOverall": false, "label": "Home-170", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-74", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-294", "isController": false}, {"data": [[1.70749404E12, 49.0]], "isOverall": false, "label": "Home-73", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-293", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-76", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-75", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-78", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-77", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-70", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-138", "isController": false}, {"data": [[1.70749404E12, 106.0]], "isOverall": false, "label": "Home-47", "isController": false}, {"data": [[1.70749404E12, 99.0]], "isOverall": false, "label": "Home-49", "isController": false}, {"data": [[1.70749404E12, 177.0]], "isOverall": false, "label": "Home-48", "isController": false}, {"data": [[1.70749404E12, 156.0]], "isOverall": false, "label": "Home-menu-321", "isController": false}, {"data": [[1.70749404E12, 103.0]], "isOverall": false, "label": "Home-menu-322", "isController": false}, {"data": [[1.70749404E12, 59.0]], "isOverall": false, "label": "Home-menu-325", "isController": false}, {"data": [[1.70749404E12, 68.0]], "isOverall": false, "label": "Home-menu-323", "isController": false}, {"data": [[1.70749404E12, 59.0]], "isOverall": false, "label": "Home-menu-324", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-58", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-menu-329", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-57", "isController": false}, {"data": [[1.70749404E12, 63.0]], "isOverall": false, "label": "Home-menu-327", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-59", "isController": false}, {"data": [[1.70749404E12, 100.0]], "isOverall": false, "label": "Home-menu-328", "isController": false}, {"data": [[1.70749404E12, 105.0]], "isOverall": false, "label": "Home-50", "isController": false}, {"data": [[1.70749404E12, 113.0]], "isOverall": false, "label": "Home-52", "isController": false}, {"data": [[1.70749404E12, 102.0]], "isOverall": false, "label": "Home-51", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-54", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-56", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-55", "isController": false}, {"data": [[1.70749404E12, 37.0]], "isOverall": false, "label": "Home-menu-352", "isController": false}, {"data": [[1.70749404E12, 48.0]], "isOverall": false, "label": "Home-menu-353", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-119", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "Home-menu-356", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-118", "isController": false}, {"data": [[1.70749404E12, 65.0]], "isOverall": false, "label": "Home-menu-357", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-113", "isController": false}, {"data": [[1.70749404E12, 50.0]], "isOverall": false, "label": "Home-112", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-115", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-114", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-110", "isController": false}, {"data": [[1.70749404E12, 37.0]], "isOverall": false, "label": "Home-menu-350", "isController": false}, {"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-menu-351", "isController": false}, {"data": [[1.70749404E12, 36.0]], "isOverall": false, "label": "Home-menu-343", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-menu-344", "isController": false}, {"data": [[1.70749404E12, 37.0]], "isOverall": false, "label": "Home-menu-341", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "Home-menu-342", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-128", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-menu-347", "isController": false}, {"data": [[1.70749404E12, 36.0]], "isOverall": false, "label": "Home-menu-348", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-menu-345", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-menu-346", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-126", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "Home-menu-349", "isController": false}, {"data": [[1.70749404E12, 44.0]], "isOverall": false, "label": "Home-120", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-122", "isController": false}, {"data": [[1.70749404E12, 56.0]], "isOverall": false, "label": "Home-121", "isController": false}, {"data": [[1.70749404E12, 36.0]], "isOverall": false, "label": "Home-menu-340", "isController": false}, {"data": [[1.70749404E12, 31.0]], "isOverall": false, "label": "Home-menu-374", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-83", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-82", "isController": false}, {"data": [[1.70749404E12, 46.0]], "isOverall": false, "label": "Home-85", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-84", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-86", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-89", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-88", "isController": false}, {"data": [[1.70749404E12, 4230.0]], "isOverall": false, "label": "Home", "isController": true}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-81", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-80", "isController": false}, {"data": [[1.70749404E12, 48.0]], "isOverall": false, "label": "Home-109", "isController": false}, {"data": [[1.70749404E12, 50.0]], "isOverall": false, "label": "Home-106", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-105", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-108", "isController": false}, {"data": [[1.70749404E12, 47.0]], "isOverall": false, "label": "Home-107", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-102", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "Home-101", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-104", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-103", "isController": false}, {"data": [[1.70749404E12, 51.0]], "isOverall": false, "label": "Home-100", "isController": false}, {"data": [[1.7074941E12, 255.0]], "isOverall": false, "label": "Courses-471-1", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-93", "isController": false}, {"data": [[1.7074941E12, 481.0]], "isOverall": false, "label": "Courses-471-0", "isController": false}, {"data": [[1.70749404E12, 51.0]], "isOverall": false, "label": "Home-96", "isController": false}, {"data": [[1.7074941E12, 391.0]], "isOverall": false, "label": "Courses-471-3", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-95", "isController": false}, {"data": [[1.7074941E12, 398.0]], "isOverall": false, "label": "Courses-471-2", "isController": false}, {"data": [[1.70749404E12, 47.0]], "isOverall": false, "label": "Home-98", "isController": false}, {"data": [[1.70749404E12, 43.0]], "isOverall": false, "label": "Home-99", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "Home-90", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "Home-92", "isController": false}, {"data": [[1.70749404E12, 50.0]], "isOverall": false, "label": "Home-91", "isController": false}, {"data": [[1.70749404E12, 85.0]], "isOverall": false, "label": "Home-menu-398", "isController": false}, {"data": [[1.70749404E12, 60.0]], "isOverall": false, "label": "About Us-436", "isController": false}, {"data": [[1.70749404E12, 54.0]], "isOverall": false, "label": "About Us-435", "isController": false}, {"data": [[1.70749404E12, 60.0]], "isOverall": false, "label": "About Us-434", "isController": false}, {"data": [[1.70749404E12, 58.0]], "isOverall": false, "label": "About Us-433", "isController": false}, {"data": [[1.70749404E12, 386.0]], "isOverall": false, "label": "About Us-439", "isController": false}, {"data": [[1.70749404E12, 344.0]], "isOverall": false, "label": "About Us-438", "isController": false}, {"data": [[1.70749404E12, 61.0]], "isOverall": false, "label": "About Us-437", "isController": false}, {"data": [[1.70749404E12, 129.0]], "isOverall": false, "label": "About Us-432", "isController": false}, {"data": [[1.70749404E12, 157.0]], "isOverall": false, "label": "About Us-431", "isController": false}, {"data": [[1.70749404E12, 290.0]], "isOverall": false, "label": "Courses-469", "isController": false}, {"data": [[1.70749404E12, 62.0]], "isOverall": false, "label": "Courses-468", "isController": false}, {"data": [[1.70749404E12, 148.0]], "isOverall": false, "label": "Courses-467", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "About Us-447", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "About Us-446", "isController": false}, {"data": [[1.70749404E12, 282.0]], "isOverall": false, "label": "Ho-6", "isController": false}, {"data": [[1.70749404E12, 35.0]], "isOverall": false, "label": "About Us-445", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "About Us-444", "isController": false}, {"data": [[1.7074941E12, 36.0]], "isOverall": false, "label": "Courses-474", "isController": false}, {"data": [[1.7074941E12, 75.0]], "isOverall": false, "label": "Courses-473", "isController": false}, {"data": [[1.7074941E12, 256.0]], "isOverall": false, "label": "Courses-472", "isController": false}, {"data": [[1.70749404E12, 45.0]], "isOverall": false, "label": "About Us-449", "isController": false}, {"data": [[1.7074941E12, 481.0]], "isOverall": false, "label": "Courses-471", "isController": false}, {"data": [[1.70749404E12, 48.0]], "isOverall": false, "label": "About Us-448", "isController": false}, {"data": [[1.70749404E12, 72.0]], "isOverall": false, "label": "Courses-470", "isController": false}, {"data": [[1.70749404E12, 427.0]], "isOverall": false, "label": "About Us-443", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "Home-menu-384", "isController": false}, {"data": [[1.70749404E12, 331.0]], "isOverall": false, "label": "About Us-442", "isController": false}, {"data": [[1.70749404E12, 402.0]], "isOverall": false, "label": "About Us-441", "isController": false}, {"data": [[1.70749404E12, 396.0]], "isOverall": false, "label": "About Us-440", "isController": false}, {"data": [[1.70749404E12, 33.0]], "isOverall": false, "label": "About Us-458", "isController": false}, {"data": [[1.70749404E12, 136.0]], "isOverall": false, "label": "Courses-466", "isController": false}, {"data": [[1.70749404E12, 33.0]], "isOverall": false, "label": "About Us-457", "isController": false}, {"data": [[1.70749404E12, 56.0]], "isOverall": false, "label": "Courses-465", "isController": false}, {"data": [[1.70749404E12, 36.0]], "isOverall": false, "label": "About Us-456", "isController": false}, {"data": [[1.70749404E12, 37.0]], "isOverall": false, "label": "About Us-455", "isController": false}, {"data": [[1.70749404E12, 339.0]], "isOverall": false, "label": "About Us-459", "isController": false}, {"data": [[1.70749404E12, 42.0]], "isOverall": false, "label": "About Us-450", "isController": false}, {"data": [[1.70749404E12, 38.0]], "isOverall": false, "label": "About Us-454", "isController": false}, {"data": [[1.70749404E12, 36.0]], "isOverall": false, "label": "About Us-453", "isController": false}, {"data": [[1.70749404E12, 41.0]], "isOverall": false, "label": "About Us-452", "isController": false}, {"data": [[1.70749404E12, 37.0]], "isOverall": false, "label": "About Us-451", "isController": false}, {"data": [[1.70749404E12, 35.0]], "isOverall": false, "label": "About Us-461", "isController": false}, {"data": [[1.70749404E12, 390.0]], "isOverall": false, "label": "About Us-460", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "About Us-462", "isController": false}, {"data": [[1.70749404E12, 2811.0]], "isOverall": false, "label": "Home-menu", "isController": true}, {"data": [[1.70749404E12, 897.0]], "isOverall": false, "label": "-5", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-38", "isController": false}, {"data": [[1.70749404E12, 258.0]], "isOverall": false, "label": "Home-7", "isController": false}, {"data": [[1.70749404E12, 34.0]], "isOverall": false, "label": "Home-menu-414", "isController": false}, {"data": [[1.70749404E12, 312.0]], "isOverall": false, "label": "Home-8", "isController": false}, {"data": [[1.70749404E12, 289.0]], "isOverall": false, "label": "Home-9", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-179", "isController": false}, {"data": [[1.70749404E12, 49.0]], "isOverall": false, "label": "Home-178", "isController": false}, {"data": [[1.7074941E12, 1919.0], [1.70749404E12, 382.0]], "isOverall": false, "label": "Courses", "isController": true}, {"data": [[1.70749404E12, 133.0]], "isOverall": false, "label": "Home-295", "isController": false}, {"data": [[1.70749404E12, 46.0]], "isOverall": false, "label": "Home-177", "isController": false}, {"data": [[1.70749404E12, 296.0]], "isOverall": false, "label": "Home-298", "isController": false}, {"data": [[1.70749404E12, 133.0]], "isOverall": false, "label": "Home-menu-419", "isController": false}, {"data": [[1.70749404E12, 53.0]], "isOverall": false, "label": "Home-176", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-181", "isController": false}, {"data": [[1.70749404E12, 39.0]], "isOverall": false, "label": "Home-184", "isController": false}, {"data": [[1.70749404E12, 40.0]], "isOverall": false, "label": "Home-183", "isController": false}, {"data": [[1.70749404E12, 47.0]], "isOverall": false, "label": "Home-180", "isController": false}, {"data": [[1.70749404E12, 113.0]], "isOverall": false, "label": "Home-menu-402", "isController": false}, {"data": [[1.70749404E12, 101.0]], "isOverall": false, "label": "Home-menu-403", "isController": false}, {"data": [[1.70749404E12, 106.0]], "isOverall": false, "label": "Home-menu-400", "isController": false}, {"data": [[1.70749404E12, 101.0]], "isOverall": false, "label": "Home-menu-401", "isController": false}, {"data": [[1.70749404E12, 293.0]], "isOverall": false, "label": "Home-14", "isController": false}, {"data": [[1.70749404E12, 277.0]], "isOverall": false, "label": "Home-13", "isController": false}, {"data": [[1.70749404E12, 290.0]], "isOverall": false, "label": "Home-16", "isController": false}, {"data": [[1.70749404E12, 110.0]], "isOverall": false, "label": "Home-menu-404", "isController": false}, {"data": [[1.70749404E12, 302.0]], "isOverall": false, "label": "Home-15", "isController": false}, {"data": [[1.70749404E12, 114.0]], "isOverall": false, "label": "Home-menu-405", "isController": false}, {"data": [[1.70749404E12, 76.0]], "isOverall": false, "label": "Home-18", "isController": false}, {"data": [[1.70749404E12, 299.0]], "isOverall": false, "label": "Home-17", "isController": false}, {"data": [[1.70749404E12, 49.0]], "isOverall": false, "label": "Home-185", "isController": false}, {"data": [[1.70749404E12, 297.0]], "isOverall": false, "label": "Home-19", "isController": false}, {"data": [[1.70749404E12, 257.0]], "isOverall": false, "label": "Home-10", "isController": false}, {"data": [[1.7074941E12, 34.0]], "isOverall": false, "label": "Courses-495", "isController": false}, {"data": [[1.70749404E12, 288.0]], "isOverall": false, "label": "Home-12", "isController": false}, {"data": [[1.70749404E12, 273.0]], "isOverall": false, "label": "Home-11", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7074941E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 31.0, "minX": 1.70749404E12, "maxY": 1973.0, "series": [{"data": [[1.7074941E12, 1567.0], [1.70749404E12, 1973.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7074941E12, 698.1999999999992], [1.70749404E12, 277.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7074941E12, 1567.0], [1.70749404E12, 1209.7499999999914]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7074941E12, 1567.0], [1.70749404E12, 296.45]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7074941E12, 34.0], [1.70749404E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7074941E12, 239.0], [1.70749404E12, 48.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7074941E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 43.0, "minX": 2.0, "maxY": 396.0, "series": [{"data": [[4.0, 289.0], [8.0, 119.5], [9.0, 43.0], [19.0, 47.0], [5.0, 161.0], [21.0, 43.5], [3.0, 286.0], [6.0, 62.0], [13.0, 47.5], [14.0, 48.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 357.5], [5.0, 135.0], [3.0, 389.0], [6.0, 396.0], [13.0, 392.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 41.0, "minX": 2.0, "maxY": 396.0, "series": [{"data": [[4.0, 289.0], [8.0, 103.5], [9.0, 41.5], [19.0, 45.0], [5.0, 72.0], [21.0, 41.0], [3.0, 285.5], [6.0, 59.0], [13.0, 46.5], [14.0, 43.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 357.5], [5.0, 133.0], [3.0, 389.0], [6.0, 396.0], [13.0, 392.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 21.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.25, "minX": 1.70749404E12, "maxY": 3.15, "series": [{"data": [[1.7074941E12, 0.25], [1.70749404E12, 3.15]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7074941E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
        }