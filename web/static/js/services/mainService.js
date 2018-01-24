/**
 * Created by arnab on 22/11/17.
 */
class MainService{
    constructor($http){
        this.$http= $http
        this.errorResult = ''
        this.emptyResult = false
        this.addResult = []
    }

    getAdd(frmDate,todate){
        if (!Date.prototype.toISODate) {
            Date.prototype.toISODate = function() {
                return this.getFullYear() + '-' +
                    ('0'+ (this.getMonth()+1)).slice(-2) + '-' +
                    ('0'+ this.getDate()).slice(-2);
            }
        }
        var d = new Date(frmDate)
        var t = new Date(todate)
        var isofrmDate = d.toISODate();
        var isotoDate = t.toISODate();
        console.log("frmDate,todate:",isofrmDate,isotoDate)
        this.$http({
            url:`http://104.197.128.152/data/adrequests?from=${isofrmDate}&to=${isotoDate}`,
            method: 'GET'
        }).then((response)=>{
                console.log("response.data:",response)
                var status = response.status.toString()
                if(status.charAt(0) === '2'){
                    console.log(response.data)
                    this.addResult = response.data.data
                }
                if(this.addResult.length === 0){
                    this.emptyResult =true
                }
        },(error)=>{
            var status = error.status.toString()
            if(status.charAt(0) === '4'){
                console.log("Error:",error.statusText)
                this.errorResult = error.statusText
            }
            if(status.charAt(0) === '5'){
                console.log("Error:",error.statusText)
                this.errorResult = error.statusText
            }
        })
    }




}
MainService.$inject =['$http']
angular.module('GreedyGame').service('MainService', MainService)