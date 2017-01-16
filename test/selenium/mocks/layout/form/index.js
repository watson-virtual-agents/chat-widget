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
  getFormLayout: {
  	"bot_id": "20b35cea-062e-45ef-92be-4fe351d64834",
  	"dialog_id": "ed47b282-ff73-4c77-bbc8-7e66c36dec4f",
  	"message": {
  		"text": ["Please enter your new address"],
  		"context": {
  			"address_input_counter": 0.0,
  			"system": {
  				"dialog_request_counter": 3.0,
  				"dialog_turn_counter": 3.0,
  				"dialog_stack": ["node_1_1471443473959"]
  			},
  			"conversation_id": "3d680fd1-c36e-4897-9503-9a96d891f1c9",
  			"address_type": "Billing"
  		},
  		"layout": {
  			"name": "form"
  		},
  		"store": [{
  			"name": "address",
  			"label": "Address",
  			"required": "true"
  		}, {
  			"name": "city",
  			"label": "Locality/City",
  			"required": "true"
  		}, {
  			"name": "state",
  			"label": "State",
  			"required": "true"
  		}, {
  			"name": "zipcode",
  			"label": "Zipcode",
  			"required": "true",
  			"validations": [{
  				"regex": "\\d{5}([ \\-]\\d{4})?|[A-Z]\\d[A-Z] ?\\d[A-Z]\\d",
  				"message": "Please enter a valid zipcode"
  			}]
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
