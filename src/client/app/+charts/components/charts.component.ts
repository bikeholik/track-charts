import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Ng2Highcharts, Ng2Highmaps, Ng2Highstocks} from 'ng2-highcharts/ng2-highcharts';
// import * as gpxParse from 'gpx-parse/index';

declare var gpxParse : any;

@Component({
  selector: 'charts',
  templateUrl: 'app/+charts/components/charts.component.html',
  directives: [Ng2Highcharts, Ng2Highmaps, Ng2Highstocks]
})
export class ChartsCmp implements OnInit {
	chartOptions = { };
	chartBar = {
		chart: {
			type: 'column'
		},
		xAxis: {
			categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		},
		series: [
			{
				name: 'NC',
				data: [7057, 6858, 6643, 6570, 6115, 107, 31, 635, 203, 2, 2]
			}, {
				name: 'OK',
				data: [54047, 52484, 50591, 49479, 46677, 33, 156, 947, 408, 6, 2]
			}, {
				name: 'KO',
				data: [11388, 11115, 10742, 10757, 10290, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'VALID',
				data: [8836, 8509, 8255, 7760, 7621, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'CHECK',
				data: [115, 162, 150, 187, 172, 973, 914, 4054, 732, 34, 2]
			}, {
				name: 'COR',
				data: [12566, 12116, 11446, 10749, 10439, 973, 914, 4054, 732, 34, 2]
			}
		]
	};
	chartMap = {};
	mapData = [
		{
			'code': 'DE.SH',
			'value': 728
		},
		{
			'code': 'DE.BE',
			'value': 710
		},
		{
			'code': 'DE.MV',
			'value': 963
		},
		{
			'code': 'DE.HB',
			'value': 541
		},
		{
			'code': 'DE.HH',
			'value': 622
		},
		{
			'code': 'DE.RP',
			'value': 866
		},
		{
			'code': 'DE.SL',
			'value': 398
		},
		{
			'code': 'DE.BY',
			'value': 785
		},
		{
			'code': 'DE.SN',
			'value': 223
		},
		{
			'code': 'DE.ST',
			'value': 605
		},
		{
			'code': 'DE.',
			'value': 361
		},
		{
			'code': 'DE.NW',
			'value': 237
		},
		{
			'code': 'DE.BW',
			'value': 157
		},
		{
			'code': 'DE.HE',
			'value': 134
		},
		{
			'code': 'DE.NI',
			'value': 136
		},
		{
			'code': 'DE.TH',
			'value': 704
		}
	];
	chartStock = {};

  content = '';

  gpxXml = '<?xml version="1.0" encoding="UTF-8"?> <gpx creator="Wikiloc - http://www.wikiloc.com" version="1.1" xmlns="http://www.topografix.com/GPX/1/1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.topografix.com/GPX/1/1 http://www.topografix.com/GPX/1/1/gpx.xsd"> <trk> <name>Campeonato de Andalucia en Ruta 2015 - Cartama</name> <cmt></cmt> <desc></desc> <trkseg> <trkpt lat="36.709718" lon="-4.634758"> <ele>93.0</ele> <time>2015-03-17T10:40:02Z</time> </trkpt> <trkpt lat="36.710057" lon="-4.634243"> <ele>91.0</ele> <time>2015-03-17T10:40:22Z</time> </trkpt> <trkpt lat="36.709838" lon="-4.633918"> <ele>94.0</ele> <time>2015-03-17T10:40:42Z</time> </trkpt> <trkpt lat="36.709632" lon="-4.633806"> <ele>94.0</ele> <time>2015-03-17T10:41:02Z</time> </trkpt> <trkpt lat="36.709498" lon="-4.633811"> <ele>95.0</ele> <time>2015-03-17T10:41:22Z</time> </trkpt> <trkpt lat="36.709348" lon="-4.633956"> <ele>95.0</ele> <time>2015-03-17T10:41:42Z</time> </trkpt> <trkpt lat="36.709206" lon="-4.634310"> <ele>96.0</ele> <time>2015-03-17T10:42:02Z</time> </trkpt> <trkpt lat="36.709094" lon="-4.634820"> <ele>97.0</ele> <time>2015-03-17T10:42:22Z</time> </trkpt> <trkpt lat="36.708582" lon="-4.635946"> <ele>99.0</ele> <time>2015-03-17T10:42:42Z</time> </trkpt> <trkpt lat="36.708139" lon="-4.636622"> <ele>98.0</ele> <time>2015-03-17T10:43:02Z</time> </trkpt> <trkpt lat="36.707881" lon="-4.637679"> <ele>98.0</ele> <time>2015-03-17T10:43:22Z</time> </trkpt> <trkpt lat="36.707580" lon="-4.638349"> <ele>102.0</ele> <time>2015-03-17T10:43:42Z</time> </trkpt> <trkpt lat="36.707451" lon="-4.638596"> <ele>101.0</ele> <time>2015-03-17T10:44:02Z</time> </trkpt> <trkpt lat="36.706703" lon="-4.639530"> <ele>106.0</ele> <time>2015-03-17T10:44:22Z</time> </trkpt> <trkpt lat="36.706165" lon="-4.640479"> <ele>109.0</ele> <time>2015-03-17T10:44:42Z</time> </trkpt> <trkpt lat="36.705752" lon="-4.641107"> <ele>109.0</ele> <time>2015-03-17T10:45:02Z</time> </trkpt> <trkpt lat="36.705339" lon="-4.641638"> <ele>108.0</ele> <time>2015-03-17T10:45:22Z</time> </trkpt> <trkpt lat="36.704544" lon="-4.642083"> <ele>112.0</ele> <time>2015-03-17T10:45:42Z</time> </trkpt> <trkpt lat="36.703808" lon="-4.642695"> <ele>111.0</ele> <time>2015-03-17T10:46:02Z</time> </trkpt> <trkpt lat="36.702845" lon="-4.643853"> <ele>115.0</ele> <time>2015-03-17T10:46:22Z</time> </trkpt> <trkpt lat="36.702282" lon="-4.644856"> <ele>119.0</ele> <time>2015-03-17T10:46:42Z</time> </trkpt> <trkpt lat="36.701856" lon="-4.645677"> <ele>117.0</ele> <time>2015-03-17T10:47:02Z</time> </trkpt> <trkpt lat="36.701469" lon="-4.646342"> <ele>121.0</ele> <time>2015-03-17T10:47:22Z</time> </trkpt> <trkpt lat="36.701314" lon="-4.647018"> <ele>120.0</ele> <time>2015-03-17T10:47:42Z</time> </trkpt> <trkpt lat="36.701064" lon="-4.647464"> <ele>121.0</ele> <time>2015-03-17T10:48:02Z</time> </trkpt> <trkpt lat="36.700325" lon="-4.647893"> <ele>126.0</ele> <time>2015-03-17T10:48:22Z</time> </trkpt> <trkpt lat="36.699464" lon="-4.648499"> <ele>130.0</ele> <time>2015-03-17T10:48:42Z</time> </trkpt> <trkpt lat="36.698841" lon="-4.649159"> <ele>131.0</ele> <time>2015-03-17T10:49:02Z</time> </trkpt> <trkpt lat="36.698054" lon="-4.650049"> <ele>139.0</ele> <time>2015-03-17T10:49:22Z</time> </trkpt> <trkpt lat="36.696788" lon="-4.650736"> <ele>142.0</ele> <time>2015-03-17T10:49:42Z</time> </trkpt> <trkpt lat="36.695515" lon="-4.651186"> <ele>151.0</ele> <time>2015-03-17T10:50:02Z</time> </trkpt> <trkpt lat="36.694207" lon="-4.651229"> <ele>153.0</ele> <time>2015-03-17T10:50:22Z</time> </trkpt> <trkpt lat="36.693106" lon="-4.651122"> <ele>147.0</ele> <time>2015-03-17T10:50:42Z</time> </trkpt> <trkpt lat="36.690955" lon="-4.650908"> <ele>137.0</ele> <time>2015-03-17T10:51:02Z</time> </trkpt> <trkpt lat="36.689717" lon="-4.651015"> <ele>130.0</ele> <time>2015-03-17T10:51:22Z</time> </trkpt> <trkpt lat="36.688650" lon="-4.651551"> <ele>122.0</ele> <time>2015-03-17T10:51:42Z</time> </trkpt> <trkpt lat="36.687015" lon="-4.652667"> <ele>123.0</ele> <time>2015-03-17T10:52:02Z</time> </trkpt> <trkpt lat="36.686206" lon="-4.653332"> <ele>125.0</ele> <time>2015-03-17T10:52:22Z</time> </trkpt> <trkpt lat="36.685656" lon="-4.654384"> <ele>119.0</ele> <time>2015-03-17T10:52:42Z</time> </trkpt> <trkpt lat="36.685243" lon="-4.655049"> <ele>115.0</ele> <time>2015-03-17T10:53:02Z</time> </trkpt> <trkpt lat="36.684365" lon="-4.655478"> <ele>112.0</ele> <time>2015-03-17T10:53:22Z</time> </trkpt> <trkpt lat="36.682352" lon="-4.656143"> <ele>109.0</ele> <time>2015-03-17T10:53:42Z</time> </trkpt> <trkpt lat="36.680855" lon="-4.656808"> <ele>115.0</ele> <time>2015-03-17T10:54:02Z</time> </trkpt> <trkpt lat="36.679185" lon="-4.657838"> <ele>114.0</ele> <time>2015-03-17T10:54:22Z</time> </trkpt> <trkpt lat="36.678136" lon="-4.658632"> <ele>115.0</ele> <time>2015-03-17T10:54:42Z</time> </trkpt> <trkpt lat="36.676496" lon="-4.660349"> <ele>112.0</ele> <time>2015-03-17T10:55:02Z</time> </trkpt> <trkpt lat="36.674912" lon="-4.661980"> <ele>106.0</ele> <time>2015-03-17T10:55:22Z</time> </trkpt> <trkpt lat="36.673088" lon="-4.663578"> <ele>100.0</ele> <time>2015-03-17T10:55:42Z</time> </trkpt> <trkpt lat="36.671286" lon="-4.665250"> <ele>89.0</ele> <time>2015-03-17T10:56:02Z</time> </trkpt> <trkpt lat="36.669594" lon="-4.666250"> <ele>98.0</ele> <time>2015-03-17T10:56:22Z</time> </trkpt> <trkpt lat="36.669190" lon="-4.666829"> <ele>100.0</ele> <time>2015-03-17T10:56:42Z</time> </trkpt> <trkpt lat="36.668708" lon="-4.667312"> <ele>100.0</ele> <time>2015-03-17T10:57:02Z</time> </trkpt> <trkpt lat="36.667090" lon="-4.667988"> <ele>94.0</ele> <time>2015-03-17T10:57:22Z</time> </trkpt> <trkpt lat="36.666238" lon="-4.668374"> <ele>94.0</ele> <time>2015-03-17T10:57:42Z</time> </trkpt> <trkpt lat="36.664431" lon="-4.669565"> <ele>103.0</ele> <time>2015-03-17T10:58:02Z</time> </trkpt> <trkpt lat="36.663192" lon="-4.670466"> <ele>109.0</ele> <time>2015-03-17T10:58:22Z</time> </trkpt> <trkpt lat="36.662348" lon="-4.671475"> <ele>115.0</ele> <time>2015-03-17T10:58:42Z</time> </trkpt> <trkpt lat="36.661815" lon="-4.671807"> <ele>118.0</ele> <time>2015-03-17T10:59:02Z</time> </trkpt> <trkpt lat="36.660851" lon="-4.672161"> <ele>123.0</ele> <time>2015-03-17T10:59:22Z</time> </trkpt> <trkpt lat="36.659491" lon="-4.673116"> <ele>131.0</ele> <time>2015-03-17T10:59:42Z</time> </trkpt> <trkpt lat="36.657752" lon="-4.674307"> <ele>139.0</ele> <time>2015-03-17T11:00:02Z</time> </trkpt> <trkpt lat="36.656401" lon="-4.675444"> <ele>145.0</ele> <time>2015-03-17T11:00:22Z</time> </trkpt> <trkpt lat="36.656083" lon="-4.675766"> <ele>146.0</ele> <time>2015-03-17T11:00:42Z</time> </trkpt> <trkpt lat="36.655334" lon="-4.677247"> <ele>154.0</ele> <time>2015-03-17T11:01:02Z</time> </trkpt> <trkpt lat="36.654318" lon="-4.678363"> <ele>159.0</ele> <time>2015-03-17T11:01:22Z</time> </trkpt> <trkpt lat="36.653423" lon="-4.679103"> <ele>170.0</ele> <time>2015-03-17T11:01:42Z</time> </trkpt> <trkpt lat="36.653225" lon="-4.679253"> <ele>170.0</ele> <time>2015-03-17T11:02:02Z</time> </trkpt> <trkpt lat="36.653156" lon="-4.679339"> <ele>172.0</ele> <time>2015-03-17T11:02:22Z</time> </trkpt> <trkpt lat="36.653079" lon="-4.679232"> <ele>172.0</ele> <time>2015-03-17T11:02:42Z</time> </trkpt> <trkpt lat="36.653173" lon="-4.679028"> <ele>172.0</ele> <time>2015-03-17T11:03:02Z</time> </trkpt> <trkpt lat="36.653242" lon="-4.678373"> <ele>170.0</ele> <time>2015-03-17T11:03:22Z</time> </trkpt> <trkpt lat="36.653285" lon="-4.677622"> <ele>171.0</ele> <time>2015-03-17T11:03:42Z</time> </trkpt> <trkpt lat="36.654456" lon="-4.675380"> <ele>158.0</ele> <time>2015-03-17T11:04:02Z</time> </trkpt> <trkpt lat="36.655394" lon="-4.673685"> <ele>168.0</ele> <time>2015-03-17T11:04:22Z</time> </trkpt> <trkpt lat="36.655635" lon="-4.672923"> <ele>169.0</ele> <time>2015-03-17T11:04:42Z</time> </trkpt> <trkpt lat="36.655721" lon="-4.670477"> <ele>167.0</ele> <time>2015-03-17T11:05:02Z</time> </trkpt> <trkpt lat="36.656203" lon="-4.668964"> <ele>171.0</ele> <time>2015-03-17T11:05:22Z</time> </trkpt> <trkpt lat="36.657029" lon="-4.667248"> <ele>162.0</ele> <time>2015-03-17T11:05:42Z</time> </trkpt> <trkpt lat="36.657795" lon="-4.665681"> <ele>168.0</ele> <time>2015-03-17T11:06:02Z</time> </trkpt> <trkpt lat="36.658906" lon="-4.663385"> <ele>175.0</ele> <time>2015-03-17T11:06:22Z</time> </trkpt> <trkpt lat="36.660016" lon="-4.661111"> <ele>169.0</ele> <time>2015-03-17T11:06:42Z</time> </trkpt> <trkpt lat="36.660679" lon="-4.659104"> <ele>172.0</ele> <time>2015-03-17T11:07:02Z</time> </trkpt> <trkpt lat="36.661247" lon="-4.657184"> <ele>177.0</ele> <time>2015-03-17T11:07:22Z</time> </trkpt> <trkpt lat="36.661513" lon="-4.656283"> <ele>176.0</ele> <time>2015-03-17T11:07:42Z</time> </trkpt> <trkpt lat="36.661393" lon="-4.655124"> <ele>166.0</ele> <time>2015-03-17T11:08:02Z</time> </trkpt> <trkpt lat="36.661074" lon="-4.654126"> <ele>160.0</ele> <time>2015-03-17T11:08:22Z</time> </trkpt> <trkpt lat="36.660997" lon="-4.653171"> <ele>161.0</ele> <time>2015-03-17T11:08:42Z</time> </trkpt> <trkpt lat="36.661135" lon="-4.652656"> <ele>162.0</ele> <time>2015-03-17T11:09:02Z</time> </trkpt> <trkpt lat="36.661384" lon="-4.652174"> <ele>166.0</ele> <time>2015-03-17T11:09:22Z</time> </trkpt> <trkpt lat="36.662787" lon="-4.650940"> <ele>172.0</ele> <time>2015-03-17T11:09:42Z</time> </trkpt> <trkpt lat="36.663450" lon="-4.650478"> <ele>172.0</ele> <time>2015-03-17T11:10:02Z</time> </trkpt> <trkpt lat="36.664173" lon="-4.650264"> <ele>170.0</ele> <time>2015-03-17T11:10:22Z</time> </trkpt> <trkpt lat="36.665240" lon="-4.650038"> <ele>165.0</ele> <time>2015-03-17T11:10:42Z</time> </trkpt> <trkpt lat="36.665791" lon="-4.649727"> <ele>162.0</ele> <time>2015-03-17T11:11:02Z</time> </trkpt> <trkpt lat="36.666798" lon="-4.648880"> <ele>158.0</ele> <time>2015-03-17T11:11:22Z</time> </trkpt> <trkpt lat="36.667624" lon="-4.648708"> <ele>161.0</ele> <time>2015-03-17T11:11:42Z</time> </trkpt> <trkpt lat="36.668433" lon="-4.649051"> <ele>162.0</ele> <time>2015-03-17T11:12:02Z</time> </trkpt> <trkpt lat="36.669792" lon="-4.649663"> <ele>156.0</ele> <time>2015-03-17T11:12:22Z</time> </trkpt> <trkpt lat="36.670386" lon="-4.649556"> <ele>154.0</ele> <time>2015-03-17T11:12:42Z</time> </trkpt> <trkpt lat="36.671505" lon="-4.648987"> <ele>150.0</ele> <time>2015-03-17T11:13:02Z</time> </trkpt> <trkpt lat="36.672383" lon="-4.648644"> <ele>141.0</ele> <time>2015-03-17T11:13:22Z</time> </trkpt> <trkpt lat="36.672804" lon="-4.648376"> <ele>138.0</ele> <time>2015-03-17T11:13:42Z</time> </trkpt> <trkpt lat="36.673200" lon="-4.647582"> <ele>140.0</ele> <time>2015-03-17T11:14:02Z</time> </trkpt> <trkpt lat="36.673407" lon="-4.646380"> <ele>142.0</ele> <time>2015-03-17T11:14:22Z</time> </trkpt> <trkpt lat="36.673863" lon="-4.645253"> <ele>143.0</ele> <time>2015-03-17T11:14:42Z</time> </trkpt> <trkpt lat="36.674422" lon="-4.644030"> <ele>142.0</ele> <time>2015-03-17T11:15:02Z</time> </trkpt> <trkpt lat="36.674852" lon="-4.642829"> <ele>138.0</ele> <time>2015-03-17T11:15:22Z</time> </trkpt> <trkpt lat="36.674878" lon="-4.642335"> <ele>140.0</ele> <time>2015-03-17T11:15:42Z</time> </trkpt> <trkpt lat="36.674732" lon="-4.641477"> <ele>138.0</ele> <time>2015-03-17T11:16:02Z</time> </trkpt> <trkpt lat="36.674818" lon="-4.640415"> <ele>138.0</ele> <time>2015-03-17T11:16:22Z</time> </trkpt> <trkpt lat="36.675050" lon="-4.639417"> <ele>138.0</ele> <time>2015-03-17T11:16:42Z</time> </trkpt> <trkpt lat="36.675859" lon="-4.638644"> <ele>133.0</ele> <time>2015-03-17T11:17:02Z</time> </trkpt> <trkpt lat="36.676762" lon="-4.638087"> <ele>123.0</ele> <time>2015-03-17T11:17:22Z</time> </trkpt> <trkpt lat="36.677580" lon="-4.637668"> <ele>128.0</ele> <time>2015-03-17T11:17:42Z</time> </trkpt> <trkpt lat="36.678260" lon="-4.637582"> <ele>135.0</ele> <time>2015-03-17T11:18:02Z</time> </trkpt> <trkpt lat="36.678922" lon="-4.637808"> <ele>134.0</ele> <time>2015-03-17T11:18:22Z</time> </trkpt> <trkpt lat="36.679843" lon="-4.638087"> <ele>128.0</ele> <time>2015-03-17T11:18:42Z</time> </trkpt> <trkpt lat="36.680617" lon="-4.637947"> <ele>125.0</ele> <time>2015-03-17T11:19:02Z</time> </trkpt> <trkpt lat="36.681400" lon="-4.637271"> <ele>125.0</ele> <time>2015-03-17T11:19:22Z</time> </trkpt> <trkpt lat="36.681873" lon="-4.635952"> <ele>124.0</ele> <time>2015-03-17T11:19:42Z</time> </trkpt> <trkpt lat="36.682157" lon="-4.634771"> <ele>121.0</ele> <time>2015-03-17T11:20:02Z</time> </trkpt> <trkpt lat="36.682080" lon="-4.633377"> <ele>119.0</ele> <time>2015-03-17T11:20:22Z</time> </trkpt> <trkpt lat="36.681805" lon="-4.632701"> <ele>120.0</ele> <time>2015-03-17T11:20:42Z</time> </trkpt> <trkpt lat="36.681417" lon="-4.632218"> <ele>123.0</ele> <time>2015-03-17T11:21:02Z</time> </trkpt> <trkpt lat="36.680402" lon="-4.631220"> <ele>122.0</ele> <time>2015-03-17T11:21:22Z</time> </trkpt> <trkpt lat="36.680110" lon="-4.630684"> <ele>120.0</ele> <time>2015-03-17T11:21:42Z</time> </trkpt> <trkpt lat="36.679533" lon="-4.629579"> <ele>116.0</ele> <time>2015-03-17T11:22:02Z</time> </trkpt> <trkpt lat="36.678690" lon="-4.628313"> <ele>109.0</ele> <time>2015-03-17T11:22:22Z</time> </trkpt> <trkpt lat="36.678492" lon="-4.627615"> <ele>111.0</ele> <time>2015-03-17T11:22:42Z</time> </trkpt> <trkpt lat="36.678389" lon="-4.626575"> <ele>110.0</ele> <time>2015-03-17T11:23:02Z</time> </trkpt> <trkpt lat="36.678733" lon="-4.625630"> <ele>109.0</ele> <time>2015-03-17T11:23:22Z</time> </trkpt> <trkpt lat="36.679034" lon="-4.624879"> <ele>110.0</ele> <time>2015-03-17T11:23:42Z</time> </trkpt> <trkpt lat="36.679034" lon="-4.623538"> <ele>111.0</ele> <time>2015-03-17T11:24:02Z</time> </trkpt> <trkpt lat="36.678905" lon="-4.622079"> <ele>109.0</ele> <time>2015-03-17T11:24:22Z</time> </trkpt> <trkpt lat="36.679000" lon="-4.620792"> <ele>106.0</ele> <time>2015-03-17T11:24:42Z</time> </trkpt> <trkpt lat="36.679464" lon="-4.619515"> <ele>107.0</ele> <time>2015-03-17T11:25:02Z</time> </trkpt> <trkpt lat="36.679969" lon="-4.618716"> <ele>103.0</ele> <time>2015-03-17T11:25:22Z</time> </trkpt> <trkpt lat="36.681092" lon="-4.617836"> <ele>99.0</ele> <time>2015-03-17T11:25:42Z</time> </trkpt> <trkpt lat="36.681862" lon="-4.617375"> <ele>97.0</ele> <time>2015-03-17T11:26:02Z</time> </trkpt> <trkpt lat="36.682232" lon="-4.616774"> <ele>94.0</ele> <time>2015-03-17T11:26:22Z</time> </trkpt> <trkpt lat="36.682374" lon="-4.616114"> <ele>92.0</ele> <time>2015-03-17T11:26:42Z</time> </trkpt> <trkpt lat="36.682288" lon="-4.615250"> <ele>85.0</ele> <time>2015-03-17T11:27:02Z</time> </trkpt> <trkpt lat="36.682103" lon="-4.614370"> <ele>93.0</ele> <time>2015-03-17T11:27:22Z</time> </trkpt> <trkpt lat="36.681858" lon="-4.613839"> <ele>99.0</ele> <time>2015-03-17T11:27:42Z</time> </trkpt> <trkpt lat="36.680873" lon="-4.612761"> <ele>98.0</ele> <time>2015-03-17T11:28:02Z</time> </trkpt> <trkpt lat="36.680305" lon="-4.611897"> <ele>93.0</ele> <time>2015-03-17T11:28:22Z</time> </trkpt> <trkpt lat="36.679681" lon="-4.610728"> <ele>92.0</ele> <time>2015-03-17T11:28:42Z</time> </trkpt> <trkpt lat="36.679079" lon="-4.609682"> <ele>91.0</ele> <time>2015-03-17T11:29:02Z</time> </trkpt> <trkpt lat="36.678821" lon="-4.608711"> <ele>87.0</ele> <time>2015-03-17T11:29:22Z</time> </trkpt> <trkpt lat="36.678696" lon="-4.607890"> <ele>83.0</ele> <time>2015-03-17T11:29:42Z</time> </trkpt> <trkpt lat="36.678709" lon="-4.607080"> <ele>82.0</ele> <time>2015-03-17T11:30:02Z</time> </trkpt> <trkpt lat="36.678911" lon="-4.606522"> <ele>80.0</ele> <time>2015-03-17T11:30:22Z</time> </trkpt> <trkpt lat="36.679535" lon="-4.605739"> <ele>76.0</ele> <time>2015-03-17T11:30:42Z</time> </trkpt> <trkpt lat="36.680098" lon="-4.605208"> <ele>74.0</ele> <time>2015-03-17T11:31:02Z</time> </trkpt> <trkpt lat="36.680615" lon="-4.604468"> <ele>72.0</ele> <time>2015-03-17T11:31:22Z</time> </trkpt> <trkpt lat="36.680860" lon="-4.603722"> <ele>75.0</ele> <time>2015-03-17T11:31:42Z</time> </trkpt> <trkpt lat="36.680851" lon="-4.603068"> <ele>75.0</ele> <time>2015-03-17T11:32:02Z</time> </trkpt> <trkpt lat="36.680701" lon="-4.602596"> <ele>75.0</ele> <time>2015-03-17T11:32:22Z</time> </trkpt> <trkpt lat="36.680215" lon="-4.601764"> <ele>75.0</ele> <time>2015-03-17T11:32:42Z</time> </trkpt> <trkpt lat="36.679948" lon="-4.601485"> <ele>74.0</ele> <time>2015-03-17T11:33:02Z</time> </trkpt> <trkpt lat="36.679740" lon="-4.601319"> <ele>72.0</ele> <time>2015-03-17T11:33:22Z</time> </trkpt> <trkpt lat="36.679895" lon="-4.601179"> <ele>75.0</ele> <time>2015-03-17T11:33:42Z</time> </trkpt> <trkpt lat="36.681400" lon="-4.600997"> <ele>81.0</ele> <time>2015-03-17T11:34:02Z</time> </trkpt> <trkpt lat="36.681994" lon="-4.600922"> <ele>79.0</ele> <time>2015-03-17T11:34:22Z</time> </trkpt> <trkpt lat="36.683612" lon="-4.602027"> <ele>90.0</ele> <time>2015-03-17T11:34:42Z</time> </trkpt> <trkpt lat="36.684085" lon="-4.602177"> <ele>93.0</ele> <time>2015-03-17T11:35:02Z</time> </trkpt> <trkpt lat="36.684498" lon="-4.602156"> <ele>93.0</ele> <time>2015-03-17T11:35:22Z</time> </trkpt> <trkpt lat="36.684764" lon="-4.602349"> <ele>92.0</ele> <time>2015-03-17T11:35:42Z</time> </trkpt> <trkpt lat="36.685487" lon="-4.603046"> <ele>97.0</ele> <time>2015-03-17T11:36:02Z</time> </trkpt> <trkpt lat="36.685857" lon="-4.603186"> <ele>96.0</ele> <time>2015-03-17T11:36:22Z</time> </trkpt> <trkpt lat="36.686055" lon="-4.603014"> <ele>95.0</ele> <time>2015-03-17T11:36:42Z</time> </trkpt> <trkpt lat="36.686029" lon="-4.602724"> <ele>95.0</ele> <time>2015-03-17T11:37:02Z</time> </trkpt> <trkpt lat="36.685892" lon="-4.602038"> <ele>96.0</ele> <time>2015-03-17T11:37:22Z</time> </trkpt> <trkpt lat="36.685900" lon="-4.601394"> <ele>98.0</ele> <time>2015-03-17T11:37:42Z</time> </trkpt> <trkpt lat="36.685771" lon="-4.600718"> <ele>99.0</ele> <time>2015-03-17T11:38:02Z</time> </trkpt> <trkpt lat="36.685719" lon="-4.598304"> <ele>101.0</ele> <time>2015-03-17T11:38:22Z</time> </trkpt> <trkpt lat="36.685633" lon="-4.596266"> <ele>102.0</ele> <time>2015-03-17T11:38:42Z</time> </trkpt> <trkpt lat="36.685177" lon="-4.594334"> <ele>92.0</ele> <time>2015-03-17T11:39:02Z</time> </trkpt> <trkpt lat="36.684911" lon="-4.593283"> <ele>86.0</ele> <time>2015-03-17T11:39:22Z</time> </trkpt> <trkpt lat="36.684601" lon="-4.592768"> <ele>83.0</ele> <time>2015-03-17T11:39:42Z</time> </trkpt> <trkpt lat="36.683328" lon="-4.591491"> <ele>76.0</ele> <time>2015-03-17T11:40:02Z</time> </trkpt> <trkpt lat="36.681865" lon="-4.589989"> <ele>64.0</ele> <time>2015-03-17T11:40:22Z</time> </trkpt> <trkpt lat="36.681039" lon="-4.589077"> <ele>58.0</ele> <time>2015-03-17T11:40:42Z</time> </trkpt> <trkpt lat="36.680867" lon="-4.588466"> <ele>57.0</ele> <time>2015-03-17T11:41:02Z</time> </trkpt> <trkpt lat="36.680686" lon="-4.586406"> <ele>51.0</ele> <time>2015-03-17T11:41:22Z</time> </trkpt> <trkpt lat="36.680729" lon="-4.583927"> <ele>48.0</ele> <time>2015-03-17T11:41:42Z</time> </trkpt> <trkpt lat="36.680764" lon="-4.581964"> <ele>50.0</ele> <time>2015-03-17T11:42:02Z</time> </trkpt> <trkpt lat="36.681366" lon="-4.581084"> <ele>59.0</ele> <time>2015-03-17T11:42:22Z</time> </trkpt> <trkpt lat="36.681684" lon="-4.580612"> <ele>65.0</ele> <time>2015-03-17T11:42:42Z</time> </trkpt> <trkpt lat="36.682880" lon="-4.579668"> <ele>74.0</ele> <time>2015-03-17T11:43:02Z</time> </trkpt> <trkpt lat="36.683801" lon="-4.578863"> <ele>77.0</ele> <time>2015-03-17T11:43:22Z</time> </trkpt> <trkpt lat="36.684033" lon="-4.578359"> <ele>78.0</ele> <time>2015-03-17T11:43:42Z</time> </trkpt> <trkpt lat="36.684291" lon="-4.577372"> <ele>78.0</ele> <time>2015-03-17T11:44:02Z</time> </trkpt> <trkpt lat="36.684653" lon="-4.574797"> <ele>89.0</ele> <time>2015-03-17T11:44:22Z</time> </trkpt> <trkpt lat="36.684687" lon="-4.572748"> <ele>91.0</ele> <time>2015-03-17T11:44:42Z</time> </trkpt> <trkpt lat="36.684704" lon="-4.572276"> <ele>90.0</ele> <time>2015-03-17T11:45:02Z</time> </trkpt> <trkpt lat="36.684945" lon="-4.571933"> <ele>91.0</ele> <time>2015-03-17T11:45:22Z</time> </trkpt> <trkpt lat="36.685246" lon="-4.571407"> <ele>89.0</ele> <time>2015-03-17T11:45:42Z</time> </trkpt> <trkpt lat="36.685659" lon="-4.570538"> <ele>84.0</ele> <time>2015-03-17T11:46:02Z</time> </trkpt> <trkpt lat="36.685943" lon="-4.570162"> <ele>82.0</ele> <time>2015-03-17T11:46:22Z</time> </trkpt> <trkpt lat="36.686976" lon="-4.569433"> <ele>73.0</ele> <time>2015-03-17T11:46:42Z</time> </trkpt> <trkpt lat="36.687776" lon="-4.568928"> <ele>69.0</ele> <time>2015-03-17T11:47:02Z</time> </trkpt> <trkpt lat="36.688103" lon="-4.568725"> <ele>67.0</ele> <time>2015-03-17T11:47:22Z</time> </trkpt> <trkpt lat="36.688584" lon="-4.568703"> <ele>68.0</ele> <time>2015-03-17T11:47:42Z</time> </trkpt> <trkpt lat="36.689428" lon="-4.568928"> <ele>70.0</ele> <time>2015-03-17T11:48:02Z</time> </trkpt> <trkpt lat="36.689729" lon="-4.568800"> <ele>69.0</ele> <time>2015-03-17T11:48:22Z</time> </trkpt> <trkpt lat="36.690176" lon="-4.568145"> <ele>65.0</ele> <time>2015-03-17T11:48:42Z</time> </trkpt> <trkpt lat="36.690709" lon="-4.567480"> <ele>63.0</ele> <time>2015-03-17T11:49:02Z</time> </trkpt> <trkpt lat="36.691036" lon="-4.567233"> <ele>62.0</ele> <time>2015-03-17T11:49:22Z</time> </trkpt> <trkpt lat="36.691682" lon="-4.567180"> <ele>60.0</ele> <time>2015-03-17T11:49:42Z</time> </trkpt> <trkpt lat="36.692370" lon="-4.567276"> <ele>53.0</ele> <time>2015-03-17T11:50:02Z</time> </trkpt> <trkpt lat="36.693239" lon="-4.566815"> <ele>44.0</ele> <time>2015-03-17T11:50:22Z</time> </trkpt> <trkpt lat="36.694804" lon="-4.566246"> <ele>41.0</ele> <time>2015-03-17T11:50:42Z</time> </trkpt> <trkpt lat="36.695647" lon="-4.566032"> <ele>41.0</ele> <time>2015-03-17T11:51:02Z</time> </trkpt> <trkpt lat="36.696697" lon="-4.566246"> <ele>36.0</ele> <time>2015-03-17T11:51:22Z</time> </trkpt> <trkpt lat="36.697497" lon="-4.566418"> <ele>35.0</ele> <time>2015-03-17T11:51:42Z</time> </trkpt> <trkpt lat="36.697953" lon="-4.566246"> <ele>38.0</ele> <time>2015-03-17T11:52:02Z</time> </trkpt> <trkpt lat="36.699157" lon="-4.568006"> <ele>24.0</ele> <time>2015-03-17T11:52:22Z</time> </trkpt> <trkpt lat="36.700491" lon="-4.569122"> <ele>27.0</ele> <time>2015-03-17T11:52:42Z</time> </trkpt> <trkpt lat="36.702211" lon="-4.570699"> <ele>27.0</ele> <time>2015-03-17T11:53:02Z</time> </trkpt> <trkpt lat="36.703923" lon="-4.572319"> <ele>29.0</ele> <time>2015-03-17T11:53:22Z</time> </trkpt> <trkpt lat="36.705161" lon="-4.573574"> <ele>23.0</ele> <time>2015-03-17T11:53:42Z</time> </trkpt> <trkpt lat="36.705763" lon="-4.574153"> <ele>25.0</ele> <time>2015-03-17T11:54:02Z</time> </trkpt> <trkpt lat="36.706753" lon="-4.574915"> <ele>30.0</ele> <time>2015-03-17T11:54:22Z</time> </trkpt> <trkpt lat="36.708180" lon="-4.575677"> <ele>34.0</ele> <time>2015-03-17T11:54:42Z</time> </trkpt> <trkpt lat="36.708937" lon="-4.576181"> <ele>41.0</ele> <time>2015-03-17T11:55:02Z</time> </trkpt> <trkpt lat="36.709213" lon="-4.576546"> <ele>40.0</ele> <time>2015-03-17T11:55:22Z</time> </trkpt> <trkpt lat="36.710133" lon="-4.578048"> <ele>28.0</ele> <time>2015-03-17T11:55:42Z</time> </trkpt> <trkpt lat="36.710838" lon="-4.578617"> <ele>37.0</ele> <time>2015-03-17T11:56:02Z</time> </trkpt> <trkpt lat="36.711801" lon="-4.579078"> <ele>45.0</ele> <time>2015-03-17T11:56:22Z</time> </trkpt> <trkpt lat="36.712378" lon="-4.579464"> <ele>45.0</ele> <time>2015-03-17T11:56:42Z</time> </trkpt> <trkpt lat="36.712748" lon="-4.579936"> <ele>42.0</ele> <time>2015-03-17T11:57:02Z</time> </trkpt> <trkpt lat="36.713152" lon="-4.580837"> <ele>34.0</ele> <time>2015-03-17T11:57:22Z</time> </trkpt> <trkpt lat="36.713625" lon="-4.582222"> <ele>25.0</ele> <time>2015-03-17T11:57:42Z</time> </trkpt> <trkpt lat="36.714364" lon="-4.584196"> <ele>26.0</ele> <time>2015-03-17T11:58:02Z</time> </trkpt> <trkpt lat="36.715096" lon="-4.585826"> <ele>26.0</ele> <time>2015-03-17T11:58:22Z</time> </trkpt> <trkpt lat="36.715689" lon="-4.586674"> <ele>24.0</ele> <time>2015-03-17T11:58:42Z</time> </trkpt> <trkpt lat="36.716790" lon="-4.588401"> <ele>23.0</ele> <time>2015-03-17T11:59:02Z</time> </trkpt> <trkpt lat="36.717529" lon="-4.589367"> <ele>25.0</ele> <time>2015-03-17T11:59:22Z</time> </trkpt> <trkpt lat="36.717899" lon="-4.589399"> <ele>23.0</ele> <time>2015-03-17T11:59:42Z</time> </trkpt> <trkpt lat="36.718106" lon="-4.589614"> <ele>21.0</ele> <time>2015-03-17T12:00:02Z</time> </trkpt> <trkpt lat="36.718131" lon="-4.589742"> <ele>21.0</ele> <time>2015-03-17T12:00:22Z</time> </trkpt> <trkpt lat="36.718966" lon="-4.590300"> <ele>17.0</ele> <time>2015-03-17T12:00:42Z</time> </trkpt> <trkpt lat="36.719215" lon="-4.590729"> <ele>19.0</ele> <time>2015-03-17T12:01:02Z</time> </trkpt> <trkpt lat="36.719516" lon="-4.592113"> <ele>24.0</ele> <time>2015-03-17T12:01:22Z</time> </trkpt> <trkpt lat="36.719740" lon="-4.592307"> <ele>23.0</ele> <time>2015-03-17T12:01:42Z</time> </trkpt> <trkpt lat="36.719662" lon="-4.592596"> <ele>24.0</ele> <time>2015-03-17T12:02:02Z</time> </trkpt> <trkpt lat="36.719903" lon="-4.594034"> <ele>26.0</ele> <time>2015-03-17T12:02:22Z</time> </trkpt> <trkpt lat="36.719937" lon="-4.594570"> <ele>26.0</ele> <time>2015-03-17T12:02:42Z</time> </trkpt> <trkpt lat="36.719740" lon="-4.597092"> <ele>26.0</ele> <time>2015-03-17T12:03:02Z</time> </trkpt> <trkpt lat="36.719714" lon="-4.598519"> <ele>25.0</ele> <time>2015-03-17T12:03:22Z</time> </trkpt> <trkpt lat="36.719740" lon="-4.600772"> <ele>36.0</ele> <time>2015-03-17T12:03:42Z</time> </trkpt> <trkpt lat="36.720221" lon="-4.603368"> <ele>48.0</ele> <time>2015-03-17T12:04:02Z</time> </trkpt> <trkpt lat="36.720677" lon="-4.605664"> <ele>55.0</ele> <time>2015-03-17T12:04:22Z</time> </trkpt> <trkpt lat="36.720780" lon="-4.608335"> <ele>61.0</ele> <time>2015-03-17T12:04:42Z</time> </trkpt> <trkpt lat="36.720806" lon="-4.608850"> <ele>59.0</ele> <time>2015-03-17T12:05:02Z</time> </trkpt> <trkpt lat="36.720957" lon="-4.609108"> <ele>58.0</ele> <time>2015-03-17T12:05:22Z</time> </trkpt> <trkpt lat="36.720837" lon="-4.609323"> <ele>58.0</ele> <time>2015-03-17T12:05:42Z</time> </trkpt> <trkpt lat="36.721236" lon="-4.609784"> <ele>58.0</ele> <time>2015-03-17T12:06:02Z</time> </trkpt> <trkpt lat="36.722715" lon="-4.610041"> <ele>52.0</ele> <time>2015-03-17T12:06:22Z</time> </trkpt> <trkpt lat="36.723291" lon="-4.610449"> <ele>46.0</ele> <time>2015-03-17T12:06:42Z</time> </trkpt> <trkpt lat="36.723480" lon="-4.611243"> <ele>37.0</ele> <time>2015-03-17T12:07:02Z</time> </trkpt> <trkpt lat="36.723283" lon="-4.612316"> <ele>34.0</ele> <time>2015-03-17T12:07:22Z</time> </trkpt> <trkpt lat="36.722887" lon="-4.614558"> <ele>28.0</ele> <time>2015-03-17T12:07:42Z</time> </trkpt> <trkpt lat="36.722982" lon="-4.614944"> <ele>25.0</ele> <time>2015-03-17T12:08:02Z</time> </trkpt> <trkpt lat="36.723051" lon="-4.615213"> <ele>24.0</ele> <time>2015-03-17T12:08:22Z</time> </trkpt> <trkpt lat="36.722982" lon="-4.615363"> <ele>24.0</ele> <time>2015-03-17T12:08:42Z</time> </trkpt> <trkpt lat="36.722853" lon="-4.615427"> <ele>24.0</ele> <time>2015-03-17T12:09:02Z</time> </trkpt> <trkpt lat="36.722715" lon="-4.615341"> <ele>24.0</ele> <time>2015-03-17T12:09:22Z</time> </trkpt> <trkpt lat="36.722603" lon="-4.615320"> <ele>25.0</ele> <time>2015-03-17T12:09:42Z</time> </trkpt> <trkpt lat="36.721382" lon="-4.616779"> <ele>27.0</ele> <time>2015-03-17T12:10:02Z</time> </trkpt> <trkpt lat="36.721382" lon="-4.617069"> <ele>27.0</ele> <time>2015-03-17T12:10:22Z</time> </trkpt> <trkpt lat="36.721184" lon="-4.617144"> <ele>28.0</ele> <time>2015-03-17T12:10:42Z</time> </trkpt> <trkpt lat="36.721038" lon="-4.617133"> <ele>28.0</ele> <time>2015-03-17T12:11:02Z</time> </trkpt> <trkpt lat="36.719757" lon="-4.618721"> <ele>32.0</ele> <time>2015-03-17T12:11:22Z</time> </trkpt> <trkpt lat="36.718794" lon="-4.619998"> <ele>36.0</ele> <time>2015-03-17T12:11:42Z</time> </trkpt> <trkpt lat="36.718596" lon="-4.620427"> <ele>41.0</ele> <time>2015-03-17T12:12:02Z</time> </trkpt> <trkpt lat="36.718628" lon="-4.620609"> <ele>41.0</ele> <time>2015-03-17T12:12:22Z</time> </trkpt> <trkpt lat="36.718542" lon="-4.620743"> <ele>43.0</ele> <time>2015-03-17T12:12:42Z</time> </trkpt> <trkpt lat="36.718395" lon="-4.620786"> <ele>43.0</ele> <time>2015-03-17T12:13:02Z</time> </trkpt> <trkpt lat="36.718262" lon="-4.620851"> <ele>43.0</ele> <time>2015-03-17T12:13:22Z</time> </trkpt> <trkpt lat="36.717406" lon="-4.622095"> <ele>51.0</ele> <time>2015-03-17T12:13:42Z</time> </trkpt> <trkpt lat="36.717419" lon="-4.622304"> <ele>51.0</ele> <time>2015-03-17T12:14:02Z</time> </trkpt> <trkpt lat="36.717372" lon="-4.622433"> <ele>52.0</ele> <time>2015-03-17T12:14:22Z</time> </trkpt> <trkpt lat="36.717226" lon="-4.622455"> <ele>52.0</ele> <time>2015-03-17T12:14:42Z</time> </trkpt> <trkpt lat="36.717157" lon="-4.622476"> <ele>52.0</ele> <time>2015-03-17T12:15:02Z</time> </trkpt> <trkpt lat="36.716194" lon="-4.624069"> <ele>56.0</ele> <time>2015-03-17T12:15:22Z</time> </trkpt> <trkpt lat="36.715996" lon="-4.624370"> <ele>57.0</ele> <time>2015-03-17T12:15:42Z</time> </trkpt> <trkpt lat="36.715196" lon="-4.625561"> <ele>68.0</ele> <time>2015-03-17T12:16:02Z</time> </trkpt> <trkpt lat="36.714667" lon="-4.626435"> <ele>74.0</ele> <time>2015-03-17T12:16:22Z</time> </trkpt> <trkpt lat="36.714702" lon="-4.626714"> <ele>73.0</ele> <time>2015-03-17T12:16:42Z</time> </trkpt> <trkpt lat="36.714508" lon="-4.626752"> <ele>76.0</ele> <time>2015-03-17T12:17:02Z</time> </trkpt> <trkpt lat="36.714426" lon="-4.626789"> <ele>76.0</ele> <time>2015-03-17T12:17:22Z</time> </trkpt> <trkpt lat="36.713756" lon="-4.627422"> <ele>77.0</ele> <time>2015-03-17T12:17:42Z</time> </trkpt> <trkpt lat="36.713403" lon="-4.627717"> <ele>83.0</ele> <time>2015-03-17T12:18:02Z</time> </trkpt> <trkpt lat="36.713235" lon="-4.628189"> <ele>81.0</ele> <time>2015-03-17T12:18:22Z</time> </trkpt> <trkpt lat="36.713291" lon="-4.628747"> <ele>80.0</ele> <time>2015-03-17T12:18:42Z</time> </trkpt> <trkpt lat="36.713416" lon="-4.629326"> <ele>80.0</ele> <time>2015-03-17T12:19:02Z</time> </trkpt> <trkpt lat="36.713381" lon="-4.629697"> <ele>79.0</ele> <time>2015-03-17T12:19:22Z</time> </trkpt> <trkpt lat="36.713033" lon="-4.630136"> <ele>81.0</ele> <time>2015-03-17T12:19:42Z</time> </trkpt> <trkpt lat="36.712913" lon="-4.630727"> <ele>78.0</ele> <time>2015-03-17T12:20:02Z</time> </trkpt> <trkpt lat="36.712771" lon="-4.631199"> <ele>76.0</ele> <time>2015-03-17T12:20:22Z</time> </trkpt> <trkpt lat="36.712560" lon="-4.631440"> <ele>80.0</ele> <time>2015-03-17T12:20:42Z</time> </trkpt> <trkpt lat="36.712246" lon="-4.631762"> <ele>84.0</ele> <time>2015-03-17T12:21:02Z</time> </trkpt> <trkpt lat="36.712134" lon="-4.631982"> <ele>82.0</ele> <time>2015-03-17T12:21:22Z</time> </trkpt> <trkpt lat="36.712061" lon="-4.632556"> <ele>81.0</ele> <time>2015-03-17T12:21:42Z</time> </trkpt> <trkpt lat="36.711980" lon="-4.632851"> <ele>77.0</ele> <time>2015-03-17T12:22:02Z</time> </trkpt> <trkpt lat="36.711713" lon="-4.633312"> <ele>74.0</ele> <time>2015-03-17T12:22:22Z</time> </trkpt> <trkpt lat="36.711562" lon="-4.633833"> <ele>70.0</ele> <time>2015-03-17T12:22:42Z</time> </trkpt> <trkpt lat="36.711455" lon="-4.634809"> <ele>73.0</ele> <time>2015-03-17T12:23:02Z</time> </trkpt> <trkpt lat="36.711519" lon="-4.635624"> <ele>76.0</ele> <time>2015-03-17T12:23:22Z</time> </trkpt> <trkpt lat="36.711747" lon="-4.636091"> <ele>74.0</ele> <time>2015-03-17T12:23:42Z</time> </trkpt> <trkpt lat="36.711988" lon="-4.636665"> <ele>70.0</ele> <time>2015-03-17T12:24:02Z</time> </trkpt> <trkpt lat="36.711773" lon="-4.636799"> <ele>74.0</ele> <time>2015-03-17T12:24:22Z</time> </trkpt> <trkpt lat="36.711382" lon="-4.636225"> <ele>78.0</ele> <time>2015-03-17T12:24:42Z</time> </trkpt> <trkpt lat="36.710698" lon="-4.635249"> <ele>83.0</ele> <time>2015-03-17T12:25:02Z</time> </trkpt> <trkpt lat="36.710453" lon="-4.635699"> <ele>86.0</ele> <time>2015-03-17T12:25:22Z</time> </trkpt> </trkseg> </trk></gpx>'

	constructor(private http: Http) { }

	ngOnInit(): any {
		setInterval(() => {
      try{
        var it = this;
        gpxParse.parseGpx(this.gpxXml, function(error, track) {
          console.log('ERROR: ' + error);
          console.log('DATA: ' + track);
          console.log('str: ' + JSON.stringify(track));
          var t = track.tracks[0];
          it.content = JSON.stringify(track);
          var dist = 0;
          var last = t.segments[0][0];
          var elevation = new Array();
          var speed = new Array();
          for(let seg of t.segments){
            for(let p of seg){
              var segDist = gpxParse.utils.calculateDistance(p.lat, p.lon, last.lat, last.lon);
              dist += segDist;

              elevation.push([dist, p.elevation]);

              var timeDiff = p.time.valueOf() - last.time.valueOf();
              var sp = timeDiff == 0 ? 0 : segDist / timeDiff * 3600000;
              speed.push([dist, sp]);

              last = p;
            }
          }

          console.log('str: ' + JSON.stringify(speed));

          it.chartOptions = {
    				chart: {
    					type: 'line'
    				},
    				title: {
    					text: 'Track'
    				},
            yAxis: [
              {
          			title: {
          				text: 'Elevation'
          			}
        		  },
              {
          			title: {
          				text: 'Speed'
          			},
                max : 50
        		  }
            ],
    				series: [
              {
                yAxis: 0,
      					name: 'elevation',
      					data: elevation
              },
              {
                yAxis: 1,
                name: 'speed',
                data: speed
              }
            ]
    			};
        });
      }catch(e){
        console.log(e);
      }
		}, 3000);

		//Stock
		this.http.get('./assets/aapl-c.json').subscribe(
			(aaplc : any) => {
				this.chartStock = {
					rangeSelector: {
						selected: 1
					},
					title: {
						text: 'AAPL Stock Price'
					},
					series: [{
						name: 'AAPL',
						data: aaplc.json(),
						tooltip: {
							valueDecimals: 2
						}
					}]
				};
			},
			(err : any) => {
				console.error('Somethin went wrong', err);
			}
		);

		//Map
		this.http.get('./assets/geojson.json').subscribe(
			(geojson : any) => {
				this.chartMap = {
					title: {
						text: 'GeoJSON in Highmaps'
					},
					mapNavigation: {
						enabled: true,
						buttonOptions: {
							verticalAlign: 'bottom'
						}
					},
					colorAxis: {
					},
					series: [{
						data: this.mapData,
						mapData: geojson.json(),
						joinBy: ['code_hasc', 'code'],
						name: 'Random data',
						states: {
							hover: {
								color: '#BADA55'
							}
						},
						dataLabels: {
							enabled: true,
							format: '{point.properties.postal}'
						}
					}]
				};
			},
			(err : any) => {
				console.error('Somethin went wrong', err);
			}
		);
	}
}