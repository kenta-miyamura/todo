<?php

use Illuminate\Database\Seeder;
use Carbon\Carbon;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $records = [
            ['adminuser', 'admin@test.com', null, 12345678],
            ['testuser', 'test@test.com', null, 12345678],
        ];

        foreach ($records as $record)
        {
            DB::table('users')->insert([
                'name' => $record[0],
                'email' => $record[1],
                'email_verified_at' => $record[2],
                'password' => bcrypt($record[3]),
                'created_at' => Carbon::now()->format('Y-m-d H:i:s'),
            ]);
        }
    }
}
