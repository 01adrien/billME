<?php

namespace Src\App\Entities;

use DateTime;
use Src\Core\Traits\EntityDateTrait;
use Src\Core\Abstracted\Entity;
use Src\Core\Attributes\Validation\{
  Length,
  Required
};

class ExempleEntity extends Entity
{

  use EntityDateTrait;
  public ?int $id = null;

  #[Length(2, 50), Required()]
  public ?string $title = null;

  #[Length(2, 1000), Required()]
  public ?string $content = null;

  public string|DateTime|null $created_at = null;

  public function setTitle(string $title): self
  {
    $this->title = trim($title);
    return $this;
  }

  public function setContent(string $content): self
  {
    $this->content = trim($content);
    return $this;
  }
}
