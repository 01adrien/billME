<?php

namespace Src\Core\Traits;

use DateTime;
use Exception;

trait EntityDateTrait
{

  public function getDateObject(string $date): DateTime
  {
    if (is_string($date)) {
      return $date = DateTime::createFromFormat(
        'Y-m-d H:i:s',
        $date
      );
    } else throw new Exception('the date must be a string');
  }

  public function setCreatedAt(DateTime $date): self
  {
    $this->created_at = $date->format('Y-m-d H:i:s');
    return $this;
  }
}
