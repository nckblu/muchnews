<?php

namespace App\Exceptions;

use Exception;

class APIException extends Exception {
	public function getStatusCode() {
		switch ($this->getMessage()) {
			case 'value':
				break;
			
			default:
				return 500;
				break;
		}
	}
}
