/**
* (C) Copyright IBM Corp. 2017. All Rights Reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
* in compliance with the License. You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software distributed under the License
* is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
* or implied. See the License for the specific language governing permissions and limitations under
* the License.
*/

var responses = {
  getCCLayout: {
  	"bot_id": "20b35cea-062e-45ef-92be-4fe351d64834",
  	"dialog_id": "8ffa5bb3-65c1-471b-963a-3d28c338067a",
  	"message": {
  		"text": ["Please pay with Visa, MasterCard, Discover, or American Express"],
  		"context": {
  			"conversation_id": "7773dd6e-56c1-4b69-9b0a-252ad08af582",
  			"system": {
  				"dialog_request_counter": 5.0,
  				"dialog_turn_counter": 5.0,
  				"dialog_stack": ["node_52_1470888040343"]
  			},
  			"payment_method": "creditcard"
  		},
  		"layout": {
  			"data": {
  				"types": ["visa", "mastercard", "discover", "amex"]
  			},
  			"name": "cc-validator"
  		},
  		"store": [{
  			"name": "cc_full_name",
  			"label": "Name on Card"
  		}, {
  			"name": "cc_number",
  			"label": "Credit Card Number"
  		}, {
  			"name": "cc_exp_date",
  			"label": "Expiry Date"
  		}, {
  			"name": "cc_code",
  			"label": "Security Code"
  		}],
  		"intents": [],
  		"entities": [],
  		"nodePosition": "UNDEFINED",
  		"log_data": {}
  	}
  }
};

module.exports = {
  responses: responses
};
